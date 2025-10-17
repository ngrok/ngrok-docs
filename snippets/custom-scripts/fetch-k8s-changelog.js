#!/usr/bin/env node

const fs = require('fs');
const https = require('https');
const path = require('path');

const CHANGELOG_URL = 'https://raw.githubusercontent.com/ngrok/ngrok-operator/refs/heads/main/CHANGELOG.md';
const OUTPUT_PATH = path.join(__dirname, '..', 'snippets', 'k8s', '_changelog.mdx');

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
    const processedChangelog = changelog.replace(/^# Changelog\n*/m, '');
    
    // Write the changelog to the output file
    fs.writeFileSync(OUTPUT_PATH, processedChangelog, 'utf8');
    console.log(`Successfully wrote changelog to ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('Error fetching changelog:', error.message);
    process.exit(1);
  }
}

main();
