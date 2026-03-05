#!/usr/bin/env python3
"""
Convert K8s operator CHANGELOG.md to Mintlify Update component format.

Usage:
    curl -sSL https://raw.githubusercontent.com/ngrok/ngrok-operator/refs/heads/main/CHANGELOG.md \
        | python3 scripts/convert-k8s-changelog.py > snippets/k8s/_changelog.mdx

    # Skip GitHub API date fetching (faster, offline):
    ... | python3 scripts/convert-k8s-changelog.py --no-dates

Set GITHUB_TOKEN env var to avoid rate limiting when fetching release dates.
"""

import sys
import re
import os
import json
import urllib.request
import urllib.error
from datetime import datetime

GITHUB_API_BASE = "https://api.github.com"
REPO = "ngrok/ngrok-operator"


def fetch_all_release_dates(token=None):
    """Fetch all release dates from GitHub API in paginated calls.

    Returns a dict mapping tag name -> "Month YYYY" string.
    """
    headers = {"Accept": "application/vnd.github.v3+json", "User-Agent": "ngrok-docs-bot"}
    if token:
        headers["Authorization"] = f"token {token}"

    dates = {}
    page = 1

    while True:
        url = f"{GITHUB_API_BASE}/repos/{REPO}/releases?per_page=100&page={page}"
        req = urllib.request.Request(url, headers=headers)
        try:
            with urllib.request.urlopen(req, timeout=15) as response:
                releases = json.loads(response.read())
                if not releases:
                    break
                for release in releases:
                    tag = release.get("tag_name", "")
                    published_at = release.get("published_at", "")
                    if tag and published_at:
                        dt = datetime.strptime(published_at, "%Y-%m-%dT%H:%M:%SZ")
                        dates[tag] = dt.strftime("%B %Y")
                page += 1
        except urllib.error.HTTPError as e:
            print(f"Warning: GitHub API error {e.code} fetching releases page {page}", file=sys.stderr)
            break
        except Exception as e:
            print(f"Warning: Failed to fetch releases: {e}", file=sys.stderr)
            break

    return dates


def get_date_for_version(version, all_dates):
    """Return "Month YYYY" for a version, trying known tag formats."""
    for tag in (f"ngrok-operator-{version}", f"kubernetes-ingress-controller-{version}"):
        if tag in all_dates:
            return all_dates[tag]
    return None


def parse_changelog(content):
    """Parse CHANGELOG.md into a list of (version, body) tuples.

    Each body is the raw markdown text between this version header and the next.
    """
    # Strip the top-level "# Changelog" title if present
    content = re.sub(r"^# Changelog\s*\n", "", content, flags=re.MULTILINE)

    # Split on level-2 headers (## version)
    parts = re.split(r"^(## .+)$", content, flags=re.MULTILINE)

    entries = []
    # parts = [preamble, "## v1", body1, "## v2", body2, ...]
    i = 1
    while i + 1 < len(parts):
        version = parts[i].lstrip("#").strip()
        body = parts[i + 1].strip()
        entries.append((version, body))
        i += 2

    return entries


def format_body(body):
    """Clean up a version body for use inside an <Update> component.

    - Converts the bare "**Full Changelog**: URL" line to a proper markdown link.
    - Promotes ### sub-headers by one level (### -> ##) so they render correctly
      inside the Update component without competing with page headings.
    """
    lines = []
    for line in body.split("\n"):
        # Convert bare Full Changelog URL line to a markdown link
        m = re.match(
            r"\*\*Full Changelog\*\*:\s*(https://github\.com/\S+/compare/(\S+))",
            line,
        )
        if m:
            url, label = m.group(1), m.group(2)
            lines.append(f"**Full Changelog**: [{label}]({url})")
            continue

        lines.append(line)

    return "\n".join(lines).strip()


def convert_to_mintlify(content, fetch_dates=True, token=None):
    """Return the full MDX output with Mintlify Update components."""
    entries = parse_changelog(content)

    all_dates = {}
    if fetch_dates and entries:
        print(f"Fetching release dates from GitHub API for {REPO}...", file=sys.stderr)
        all_dates = fetch_all_release_dates(token)
        print(f"  Found dates for {len(all_dates)} releases.", file=sys.stderr)

    output_parts = []

    for version, body in entries:
        date_label = get_date_for_version(version, all_dates) if fetch_dates else None

        if date_label:
            label = date_label
            description = f"v{version}"
        else:
            label = f"v{version}"
            description = None

        body_cleaned = format_body(body)

        attrs = f'label="{label}"'
        if description:
            attrs += f' description="{description}"'

        output_parts.append(f"<Update {attrs}>\n\n{body_cleaned}\n\n</Update>")

    return "\n\n".join(output_parts) + "\n"


def main():
    import argparse

    parser = argparse.ArgumentParser(
        description="Convert K8s operator CHANGELOG.md to Mintlify Update component format."
    )
    parser.add_argument(
        "--no-dates",
        action="store_true",
        help="Skip fetching release dates from the GitHub API (faster, works offline).",
    )
    args = parser.parse_args()

    token = os.environ.get("GITHUB_TOKEN")
    content = sys.stdin.read()
    output = convert_to_mintlify(content, fetch_dates=not args.no_dates, token=token)
    sys.stdout.write(output)


if __name__ == "__main__":
    main()
