const fs = require('fs');

// Load the data files
const iCategories = JSON.parse(fs.readFileSync('../../iCategories.json', 'utf8'));
const integrations = JSON.parse(fs.readFileSync('./data/integrations.json', 'utf8'));

console.log('=== VALIDATION REPORT ===\n');

// Get all integration paths from source
const sourcePaths = new Set(integrations.map(integration => integration.path));
console.log(`Source integrations: ${sourcePaths.size}`);

// Get all categorized paths
const categorizedPaths = new Set();
const duplicates = [];
const categoryBreakdown = {};

for (const category of iCategories) {
  console.log(`${category.name}: ${category.items.length} items`);
  categoryBreakdown[category.name] = category.items.length;
  
  for (const path of category.items) {
    if (categorizedPaths.has(path)) {
      duplicates.push(path);
      console.error(`  DUPLICATE: ${path}`);
    } else {
      categorizedPaths.add(path);
    }
  }
}

console.log(`\nCategorized integrations: ${categorizedPaths.size}`);

// Check for missing integrations
const missing = [];
for (const sourcePath of sourcePaths) {
  if (!categorizedPaths.has(sourcePath)) {
    missing.push(sourcePath);
  }
}

// Check for extra integrations (in categories but not in source)
const extra = [];
for (const categorizedPath of categorizedPaths) {
  if (!sourcePaths.has(categorizedPath)) {
    extra.push(categorizedPath);
  }
}

// Report validation results
console.log('\n=== VALIDATION RESULTS ===');

let hasErrors = false;

if (duplicates.length > 0) {
  console.error(`❌ DUPLICATES FOUND: ${duplicates.length}`);
  duplicates.forEach(path => console.error(`   ${path}`));
  hasErrors = true;
} else {
  console.log('✓ No duplicates found');
}

if (missing.length > 0) {
  console.error(`❌ MISSING INTEGRATIONS: ${missing.length}`);
  missing.forEach(path => console.error(`   ${path}`));
  hasErrors = true;
} else {
  console.log('✓ No missing integrations');
}

if (extra.length > 0) {
  console.error(`❌ EXTRA INTEGRATIONS: ${extra.length}`);
  extra.forEach(path => console.error(`   ${path}`));
  hasErrors = true;
} else {
  console.log('✓ No extra integrations');
}

const totalCategorized = Object.values(categoryBreakdown).reduce((sum, count) => sum + count, 0);
if (totalCategorized !== sourcePaths.size) {
  console.error(`❌ COUNT MISMATCH: Expected ${sourcePaths.size}, got ${totalCategorized}`);
  hasErrors = true;
} else {
  console.log(`✓ Count matches: ${totalCategorized} integrations`);
}

if (hasErrors) {
  console.error('\n❌ VALIDATION FAILED - Please fix the issues above');
  process.exit(1);
} else {
  console.log('\n✅ VALIDATION PASSED - All integrations properly categorized!');
}

// Display final summary
console.log('\n=== FINAL SUMMARY ===');
Object.entries(categoryBreakdown)
  .sort(([,a], [,b]) => b - a)
  .forEach(([category, count]) => {
    const percentage = ((count / totalCategorized) * 100).toFixed(1);
    console.log(`${category.padEnd(20)}: ${count.toString().padStart(3)} (${percentage}%)`);
  });
