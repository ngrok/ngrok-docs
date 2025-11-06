#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the definition-wrapper.js file
const definitionWrapperPath = path.join(__dirname, '../../../definition-wrapper.js');
const fileContent = fs.readFileSync(definitionWrapperPath, 'utf8');

// Extract the terms array using regex
const termsMatch = fileContent.match(/const terms = (\[[\s\S]*?\n\]);/);
if (!termsMatch) {
  console.error('Could not find terms array in definition-wrapper.js');
  process.exit(1);
}

// Evaluate the terms array
const terms = eval(termsMatch[1]);

// Build the MDX content
const frontmatter = `---
title: Glossary of Terms
sidebarTitle: Glossary
description: A glossary of technical terms used in the ngrok documentation.
---`;

const comment = `{/* This file is generated in the docs repo. Do not edit it directly. */}`;

const intro = `The following definitions are provided to help you better understand the technical concepts related to using ngrok.`;

let glossaryContent = `${frontmatter}\n\n${comment}\n\n${intro}\n\n`;

// Add each term as an H2 with meaning and Learn More link
terms.forEach(term => {
  const titleIndex = term.glossaryIndex !== undefined ? term.glossaryIndex : 0;
  const title = term.titles[titleIndex];
  const meaning = term.meaning || 'Definition not available';
  let link = term.link || '';
  
  // Trim /docs from internal links
  if (link.startsWith('/docs')) {
    link = link.substring(5);
  }
  
  glossaryContent += `## ${title}\n\n`;
  glossaryContent += `${meaning}\n\n`;
  
  if (link) {
    glossaryContent += `[Learn More](${link})\n\n`;
  }
});

// Write the glossary.mdx file to the root directory
const outputPath = path.join(__dirname, '../../../glossary.mdx');
fs.writeFileSync(outputPath, glossaryContent.trim() + '\n');

console.log('✅ Successfully generated glossary.mdx');
