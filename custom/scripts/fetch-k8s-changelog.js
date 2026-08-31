#!/usr/bin/env node

const fs = require('fs');
const https = require('https');
const path = require('path');

const CHANGELOG_URL = 'https://raw.githubusercontent.com/ngrok/ngrok-operator/refs/heads/main/CHANGELOG.md';
const OUTPUT_PATH = path.join(__dirname, '..', '..', 'snippets', 'k8s', '_changelog.mdx');

// The upstream changelog sits at the root of the ngrok-operator repo, so its
// relative links (docs/upgrading-to-0.24.md) resolve on GitHub but 404 once
// copied into this repo. Rewrite them to absolute URLs.
const BLOB_BASE = 'https://github.com/ngrok/ngrok-operator/blob/main';
const RAW_BASE = 'https://raw.githubusercontent.com/ngrok/ngrok-operator/refs/heads/main';

function absolutizeLinks(markdown) {
  return markdown.replace(
    /(!?)\[([^\]]*)\]\(\s*([^)\s]+)([^)]*)\)/g,
    (match, image, text, target, trailer) => {
      // Leave anything already absolute, protocol-relative, or an anchor alone.
      if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(target)) {
        return match;
      }
      const base = image ? RAW_BASE : BLOB_BASE;
      const repoPath = target.replace(/^\.\//, '').replace(/^\//, '');
      return `${image}[${text}](${base}/${repoPath}${trailer})`;
    }
  );
}

function fetchChangelog() {
  return new Promise((resolve, reject) => {
    https.get(CHANGELOG_URL, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
        return;
      }

      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve(data);
      });
    }).on('error', reject);
  });
}

async function main() {
  try {
    console.log('Fetching K8s operator changelog...');
    const changelog = await fetchChangelog();

    // Ensure the output directory exists
    const outputDir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Remove the "# Changelog" heading before writing
    const processedChangelog = absolutizeLinks(
      changelog.replace(/^# Changelog\n*/m, '')
    );

    // Write the changelog to the output file
    fs.writeFileSync(OUTPUT_PATH, processedChangelog, 'utf8');
    console.log(`Successfully wrote changelog to ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('Error fetching changelog:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { absolutizeLinks };
