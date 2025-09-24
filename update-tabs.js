#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function processFileContent(content) {
  // 1. Remove import statements
  content = content.replace(/^import TabItem from "@theme\/TabItem";\s*\n/gm, '');
  content = content.replace(/^import Tabs from "@theme\/Tabs";\s*\n/gm, '');
  
  // 2. Process <TabItem> components
  // Replace label prop with title and remove other props
  content = content.replace(/<TabItem\s+([^>]*?)>/g, (match, props) => {
    // Extract label value if it exists
    const labelMatch = props.match(/label="([^"]*)"/) || props.match(/label='([^']*)'/);
    const labelValue = labelMatch ? labelMatch[1] : '';
    
    // Return simplified TabItem with only title
    return labelValue ? `<TabItem title="${labelValue}">` : '<TabItem>';
  });
  
  // 3. Process <Tabs> components - remove all props
  content = content.replace(/<Tabs\s+[^>]*>/g, '<Tabs>');
  
  // 4. Replace TabItem with Tab
  content = content.replace(/<TabItem/g, '<Tab');
  content = content.replace(/<\/TabItem>/g, '</Tab>');
  
  return content;
}

async function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const processedContent = processFileContent(content);
    
    // Only write if content changed
    if (content !== processedContent) {
      fs.writeFileSync(filePath, processedContent, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}: ${error.message}`);
    return false;
  }
}

function findMarkdownFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && item !== 'node_modules' && !item.startsWith('.')) {
      findMarkdownFiles(fullPath, files);
    } else if (stat.isFile() && (item.endsWith('.md') || item.endsWith('.mdx'))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

async function main() {
  console.log('🔍 Finding all .md and .mdx files...');
  
  // Find all md and mdx files
  const files = findMarkdownFiles(__dirname);
  
  console.log(`📂 Found ${files.length} files to process`);
  
  let updatedCount = 0;
  
  for (const file of files) {
    const wasUpdated = await processFile(file);
    if (wasUpdated) {
      updatedCount++;
    }
  }
  
  console.log(`\n🎉 Completed! Updated ${updatedCount} files out of ${files.length} total files.`);
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { processFileContent, processFile };
