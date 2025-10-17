const fs = require('fs');
const path = require('path');

// Load the categorized data
const iCategories = JSON.parse(fs.readFileSync('../../iCategories.json', 'utf8'));

const integrationsDir = '../../integrations';
const dryRun = false; // Set to true to preview changes without making them

console.log('🚀 Starting file reorganization...');
console.log(`Dry run mode: ${dryRun ? 'ON' : 'OFF'}`);

// Function to move a file
function moveFile(sourcePath, targetPath) {
  if (!fs.existsSync(sourcePath)) {
    console.error(`❌ Source file not found: ${sourcePath}`);
    return false;
  }
  
  if (fs.existsSync(targetPath)) {
    console.error(`❌ Target file already exists: ${targetPath}`);
    return false;
  }
  
  console.log(`  ${sourcePath} → ${targetPath}`);
  
  if (!dryRun) {
    // Ensure target directory exists
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    
    // Move the file
    fs.renameSync(sourcePath, targetPath);
  }
  
  return true;
}

// Move files according to categories
console.log('\n🔄 Moving integration files...');

let totalMoved = 0;
let errors = 0;

for (const category of iCategories) {
  console.log(`\n📂 Processing ${category.name} (${category.items.length} items):`);
  
  for (const itemPath of category.items) {
    // Parse the path: "/integrations/1password/cli-client"
    const pathParts = itemPath.split('/').filter(part => part); // Remove empty parts
    
    if (pathParts[0] !== 'integrations' || pathParts.length < 3) {
      console.error(`❌ Invalid path format: ${itemPath}`);
      errors++;
      continue;
    }
    
    const vendorDir = pathParts[1]; // e.g., "1password"
    const fileName = pathParts[2] + '.mdx'; // e.g., "cli-client.mdx"
    
    const sourcePath = path.join(integrationsDir, vendorDir, fileName);
    const targetPath = path.join(integrationsDir, category.name, fileName);
    
    if (moveFile(sourcePath, targetPath)) {
      totalMoved++;
    } else {
      errors++;
    }
  }
}

// Summary
console.log('\n📊 SUMMARY:');
console.log(`Total files processed: ${totalMoved + errors}`);
console.log(`Successfully moved: ${totalMoved}`);
console.log(`Errors: ${errors}`);

if (errors > 0) {
  console.error('\n❌ Some files could not be moved. Please check the errors above.');
  process.exit(1);
} else {
  console.log(`\n✅ File reorganization ${dryRun ? 'preview' : 'completed'} successfully!`);
}

// Show new structure
if (!dryRun) {
  console.log('\n📁 New file structure:');
  for (const category of iCategories) {
    const categoryDir = path.join(integrationsDir, category.name);
    if (fs.existsSync(categoryDir)) {
      const files = fs.readdirSync(categoryDir).filter(item => 
        item.endsWith('.mdx') && fs.statSync(path.join(categoryDir, item)).isFile()
      );
      console.log(`  ${category.name}/ (${files.length} files)`);
      files.slice(0, 3).forEach(file => console.log(`    ${file}`));
      if (files.length > 3) {
        console.log(`    ... and ${files.length - 3} more`);
      }
    }
  }
}

// Check for empty vendor directories that can be cleaned up
if (!dryRun) {
  console.log('\n🧹 Checking for empty vendor directories...');
  const vendorDirs = fs.readdirSync(integrationsDir).filter(item => {
    const itemPath = path.join(integrationsDir, item);
    return fs.statSync(itemPath).isDirectory() && 
           !['cli-credentials', 'dashboard-sso', 'event-destinations', 'kubernetes-ingress', 'oauth', 'webhooks', 'guides'].includes(item);
  });
  
  for (const vendorDir of vendorDirs) {
    const vendorPath = path.join(integrationsDir, vendorDir);
    const contents = fs.readdirSync(vendorPath);
    const mdxFiles = contents.filter(file => file.endsWith('.mdx'));
    
    if (mdxFiles.length === 0) {
      console.log(`  Empty vendor directory (no MDX files): ${vendorDir}/`);
      // Note: Not automatically deleting in case there are other important files
    } else {
      console.log(`  ${vendorDir}/ still has ${mdxFiles.length} MDX files`);
    }
  }
}
