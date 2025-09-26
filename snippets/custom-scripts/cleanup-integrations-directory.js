const fs = require('fs');
const path = require('path');

// Load the categorized data
const iCategories = JSON.parse(fs.readFileSync('../../iCategories.json', 'utf8'));

const integrationsDir = '../../integrations';
const imgDir = path.join(integrationsDir, 'img');
const dryRun = false; // Set to true to preview changes without making them

console.log('🧹 Starting integrations directory cleanup...');
console.log(`Dry run mode: ${dryRun ? 'ON' : 'OFF'}`);

// Get valid category names
const validCategoryNames = new Set(iCategories.map(cat => cat.name));
validCategoryNames.add('img'); // img directory should stay
console.log(`Valid category directories: ${Array.from(validCategoryNames).join(', ')}`);

// Create img directory if it doesn't exist
if (!fs.existsSync(imgDir)) {
  console.log(`\n📁 Creating img directory: ${imgDir}`);
  if (!dryRun) {
    fs.mkdirSync(imgDir, { recursive: true });
  }
} else {
  console.log(`\n📁 img directory already exists: ${imgDir}`);
}

// Get all items in integrations directory
const allItems = fs.readdirSync(integrationsDir);

console.log(`\n📋 Found ${allItems.length} items in integrations directory`);

let movedCount = 0;
let skippedCount = 0;
let errors = 0;

for (const item of allItems) {
  const itemPath = path.join(integrationsDir, item);
  const stat = fs.statSync(itemPath);
  
  // Skip files (like index)
  if (!stat.isDirectory()) {
    console.log(`  ⏭️  Skipping file: ${item}`);
    skippedCount++;
    continue;
  }
  
  // Skip valid category directories and img directory
  if (validCategoryNames.has(item)) {
    console.log(`  ✅ Keeping category directory: ${item}/`);
    skippedCount++;
    continue;
  }
  
  // This is a vendor directory that needs to be moved
  const targetPath = path.join(imgDir, item);
  
  if (fs.existsSync(targetPath)) {
    console.error(`  ❌ Target already exists: ${targetPath}`);
    errors++;
    continue;
  }
  
  console.log(`  📦 Moving: ${item}/ → img/${item}/`);
  
  if (!dryRun) {
    try {
      fs.renameSync(itemPath, targetPath);
      movedCount++;
    } catch (error) {
      console.error(`  ❌ Error moving ${item}: ${error.message}`);
      errors++;
    }
  } else {
    movedCount++;
  }
}

// Summary
console.log('\n📊 CLEANUP SUMMARY:');
console.log(`Items processed: ${allItems.length}`);
console.log(`Directories moved: ${movedCount}`);
console.log(`Items skipped: ${skippedCount}`);
console.log(`Errors: ${errors}`);

// Verify final structure
if (!dryRun) {
  console.log('\n📁 Final integrations directory structure:');
  const finalItems = fs.readdirSync(integrationsDir);
  
  for (const item of finalItems) {
    const itemPath = path.join(integrationsDir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      if (validCategoryNames.has(item)) {
        const subItems = fs.readdirSync(itemPath);
        const fileCount = subItems.filter(subItem => 
          fs.statSync(path.join(itemPath, subItem)).isFile() && subItem.endsWith('.mdx')
        ).length;
        console.log(`  ✅ ${item}/ (${fileCount} .mdx files)`);
      } else {
        console.log(`  ⚠️  Unexpected directory: ${item}/`);
      }
    } else {
      console.log(`  📄 ${item}`);
    }
  }
  
  // Show img directory contents
  if (fs.existsSync(imgDir)) {
    const imgContents = fs.readdirSync(imgDir);
    console.log(`\n📁 img/ directory contains ${imgContents.length} vendor directories`);
    imgContents.slice(0, 5).forEach(dir => console.log(`    ${dir}/`));
    if (imgContents.length > 5) {
      console.log(`    ... and ${imgContents.length - 5} more`);
    }
  }
}

if (errors > 0) {
  console.error('\n❌ Cleanup completed with errors. Please check the errors above.');
  process.exit(1);
} else {
  console.log(`\n✅ Directory cleanup ${dryRun ? 'preview' : 'completed'} successfully!`);
}
