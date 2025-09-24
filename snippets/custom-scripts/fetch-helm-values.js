#!/usr/bin/env node

const fs = require('fs');
const https = require('https');
const path = require('path');

const HELM_VALUES_URL = 'https://raw.githubusercontent.com/ngrok/ngrok-operator/main/helm/ngrok-operator/values.yaml';
const OUTPUT_PATH = path.join(__dirname, '..', 'k8s', '_helm-config.mdx');

function fetchHelmValues() {
  return new Promise((resolve, reject) => {
    https.get(HELM_VALUES_URL, (res) => {
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
    console.log('Fetching K8s Helm values...');
    const helmValues = await fetchHelmValues();
    
    // Ensure the output directory exists
    const outputDir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Wrap in Mintlify codeblock with title
    const processedContent = `\`\`\`yaml title="helm values"\n${helmValues}\`\`\``;
    
    // Write the helm values to the output file
    fs.writeFileSync(OUTPUT_PATH, processedContent, 'utf8');
    console.log(`Successfully wrote helm values to ${OUTPUT_PATH}`);
  } catch (error) {
    console.error('Error fetching helm values:', error.message);
    process.exit(1);
  }
}

main();
