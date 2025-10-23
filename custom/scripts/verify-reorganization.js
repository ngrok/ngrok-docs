const fs = require('fs');
const path = require('path');

// Load the categorized data
const iCategories = JSON.parse(fs.readFileSync('../../iCategories.json', 'utf8'));

const integrationsDir = '../../integrations';

console.log('🔍 Verifying file reorganization...\n');

let totalExpected = 0;
let totalFound = 0;
let missing = [];
let found = [];

for (const category of iCategories) {
  const categoryDir = path.join(integrationsDir, category.name);
  
  console.log(`📂 Checking ${category.name}:`);
  
  if (!fs.existsSync(categoryDir)) {
    console.error(`  ❌ Category directory does not exist: ${categoryDir}`);
    continue;
  }
  
  for (const itemPath of category.items) {
    totalExpected++;
    
    // Parse the path to determine expected filename
    const pathParts = itemPath.split('/').filter(part => part);
    const vendorDir = pathParts[1];
    const fileName = pathParts[2];
    
    // Try both naming conventions
    const uniqueFileName = `${vendorDir}-${fileName}.mdx`;
    const originalFileName = `${fileName}.mdx`;
    
    const uniqueFilePath = path.join(categoryDir, uniqueFileName);
    const originalFilePath = path.join(categoryDir, originalFileName);
    
    if (fs.existsSync(uniqueFilePath)) {
      console.log(`  ✓ Found: ${uniqueFileName}`);
      totalFound++;
      found.push(`${category.name}/${uniqueFileName}`);
    } else if (fs.existsSync(originalFilePath)) {
      console.log(`  ✓ Found: ${originalFileName}`);
      totalFound++;
      found.push(`${category.name}/${originalFileName}`);
    } else {
      console.error(`  ❌ Missing: Expected ${uniqueFileName} or ${originalFileName}`);
      missing.push(itemPath);
    }
  }
  
  // Count actual files in the category directory
  const actualFiles = fs.readdirSync(categoryDir).filter(file => 
    file.endsWith('.mdx') && fs.statSync(path.join(categoryDir, file)).isFile()
  );
  
  console.log(`  Expected: ${category.items.length}, Found: ${actualFiles.length}\n`);
}

// Summary
console.log('📊 REORGANIZATION VERIFICATION SUMMARY:');
console.log(`Total expected files: ${totalExpected}`);
console.log(`Total found files: ${totalFound}`);
console.log(`Missing files: ${missing.length}`);
console.log(`Success rate: ${((totalFound / totalExpected) * 100).toFixed(1)}%`);

if (missing.length > 0) {
  console.log('\n❌ Missing files:');
  missing.forEach(filePath => console.log(`  ${filePath}`));
}

// Check for orphaned vendor directories
console.log('\n🧹 Checking for empty vendor directories...');
const allItems = fs.readdirSync(integrationsDir);
const categoryNames = new Set(['cli-credentials', 'dashboard-sso', 'event-destinations', 'kubernetes-ingress', 'oauth', 'webhooks', 'guides']);

const vendorDirs = allItems.filter(item => {
  const itemPath = path.join(integrationsDir, item);
  return fs.statSync(itemPath).isDirectory() && 
         !categoryNames.has(item) && 
         item !== 'index.mdx';
});

let emptyDirs = [];
let nonEmptyDirs = [];

for (const vendorDir of vendorDirs) {
  const vendorPath = path.join(integrationsDir, vendorDir);
  const contents = fs.readdirSync(vendorPath);
  const mdxFiles = contents.filter(file => file.endsWith('.mdx'));
  
  if (mdxFiles.length === 0) {
    emptyDirs.push(vendorDir);
  } else {
    nonEmptyDirs.push({ dir: vendorDir, files: mdxFiles });
  }
}

console.log(`Empty vendor directories: ${emptyDirs.length}`);
if (emptyDirs.length > 0) {
  emptyDirs.forEach(dir => console.log(`  ${dir}/`));
}

console.log(`\nVendor directories with remaining files: ${nonEmptyDirs.length}`);
if (nonEmptyDirs.length > 0) {
  nonEmptyDirs.forEach(({dir, files}) => {
    console.log(`  ${dir}/ (${files.length} files): ${files.join(', ')}`);
  });
}

// Overall result
if (totalFound === totalExpected && missing.length === 0) {
  console.log('\n✅ REORGANIZATION SUCCESSFUL - All files moved correctly!');
} else {
  console.log('\n⚠️  REORGANIZATION PARTIALLY COMPLETE - Some files may need manual intervention.');
}
