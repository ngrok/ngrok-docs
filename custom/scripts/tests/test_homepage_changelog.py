import importlib.util
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location('changelog', Path(__file__).parents[1] / 'fetch-homepage-changelog.py')
changelog = importlib.util.module_from_spec(spec)
spec.loader.exec_module(changelog)


def item(day, slug=None, title='Release', description='A new release.'):
    return f'''<item><title><![CDATA[{title}]]></title>
    <link>https://ngrok.com/changelog/{slug or str(day)}</link>
    <pubDate>{day:02d} Oct 2026 12:00:00 +0000</pubDate>
    <description><![CDATA[{description}]]></description></item>'''


def feed(*items):
    return ('<rss version="2.0"><channel>' + ''.join(items) + '</channel></rss>').encode()


class ChangelogTests(unittest.TestCase):
    def test_newest_three_sorted_and_deduplicated(self):
        result = changelog.render(feed(item(1), item(4), item(2), item(3), item(4)))
        self.assertEqual(result.count('<a href='), 3)
        self.assertLess(result.index('/4"'), result.index('/3"'))
        self.assertLess(result.index('/3"'), result.index('/2"'))
        self.assertNotIn('/1"', result)
        self.assertEqual(result, changelog.render(feed(item(4), item(3), item(2), item(1))))

    def test_html_entities_and_mdx_are_safe_text(self):
        result = changelog.render(feed(item(3, title='A &amp; B {danger()}',
            description='<p>Use <strong>OAuth</strong> &amp; `{code}`.</p>'), item(2), item(1)))
        self.assertIn('A &amp; B &#123;danger()&#125;', result)
        self.assertIn('Use OAuth &amp; &#96;&#123;code&#125;&#96;.', result)
        self.assertNotIn('<strong>', result)

    def test_rejects_invalid_feed_without_replacing_snapshot(self):
        for data in [b'<broken', b'<html/>', feed(item(1)),
                     feed(item(1), item(2), item(3)).replace(b'https://ngrok.com', b'https://evil.example'),
                     feed(item(1), item(2), item(3)).replace(b'Oct 2026', b'invalid'),
                     b'<!DOCTYPE rss>' + feed(item(1), item(2), item(3))]:
            with self.subTest(data=data[:50]), tempfile.TemporaryDirectory() as directory:
                output = Path(directory) / 'changelog.mdx'
                output.write_text('Previous snapshot')
                with patch.object(changelog, 'OUTPUT', output), patch.object(changelog, 'urlopen') as fetch:
                    fetch.return_value.__enter__.return_value.read.return_value = data
                    with self.assertRaises(Exception):
                        changelog.main()
                self.assertEqual(output.read_text(), 'Previous snapshot')

    def test_fetch_failure_preserves_snapshot(self):
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / 'changelog.mdx'
            output.write_text('Previous snapshot')
            with patch.object(changelog, 'OUTPUT', output), patch.object(changelog, 'urlopen', side_effect=TimeoutError):
                with self.assertRaises(TimeoutError):
                    changelog.main()
            self.assertEqual(output.read_text(), 'Previous snapshot')

    def test_write_is_idempotent(self):
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / 'changelog.mdx'
            with patch.object(changelog, 'OUTPUT', output), patch.object(changelog, 'urlopen') as fetch:
                fetch.return_value.__enter__.return_value.read.return_value = feed(item(1), item(2), item(3))
                changelog.main()
                before = output.stat().st_mtime_ns
                changelog.main()
                self.assertEqual(output.stat().st_mtime_ns, before)
                self.assertFalse(output.with_suffix('.mdx.tmp').exists())


if __name__ == '__main__':
    unittest.main()
