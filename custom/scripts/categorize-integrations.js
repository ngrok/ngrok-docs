const fs = require('fs');
const path = require('path');

// Load the data files
const iCategories = JSON.parse(fs.readFileSync('../../iCategories.json', 'utf8'));
const integrations = JSON.parse(fs.readFileSync('./data/integrations.json', 'utf8'));

console.log(`Loaded ${integrations.length} integrations and ${iCategories.length} categories`);

// Function to check if any keywords match the integration content
function matchesKeywords(integration, keywords) {
  const searchableContent = [
    integration.frontMatter.title || '',
    integration.frontMatter.description || '',
    ...(integration.frontMatter.tags || [])
  ].join(' ').toLowerCase();
  
  // Also check the path for category indicators
  const pathContent = integration.path.toLowerCase();
  const allContent = searchableContent + ' ' + pathContent;
  
  return keywords.some(keyword => 
    allContent.includes(keyword.toLowerCase())
  );
}

// Function to find the best category match for an integration
function findBestCategory(integration) {
  // Check for exact path matches first (highest priority)
  const pathSegments = integration.path.toLowerCase().split('/');
  
  // Check for direct category matches in path
  for (const category of iCategories) {
    if (category.name === 'guides') continue; // Skip guides for direct matching
    
    // Check if the category name or its parts appear in the path
    const categoryParts = category.name.split('-');
    if (categoryParts.every(part => pathSegments.some(segment => segment.includes(part)))) {
      return category;
    }
  }
  
  // Then check keyword matches with priority order
  const priorityOrder = ['cli-credentials', 'dashboard-sso', 'event-destinations', 'kubernetes-ingress', 'oauth', 'webhooks'];
  
  for (const categoryName of priorityOrder) {
    const category = iCategories.find(cat => cat.name === categoryName);
    if (matchesKeywords(integration, category.keywords)) {
      return category;
    }
  }
  
  // Default to guides
  return iCategories.find(cat => cat.name === 'guides');
}

// Categorize all integrations
let categorizedCount = 0;
const categoryStats = {};

for (const integration of integrations) {
  const bestCategory = findBestCategory(integration);
  bestCategory.items.push(integration.path);
  categorizedCount++;
  
  // Track stats
  if (!categoryStats[bestCategory.name]) {
    categoryStats[bestCategory.name] = 0;
  }
  categoryStats[bestCategory.name]++;
  
  console.log(`${integration.path} → ${bestCategory.name}`);
}

// Display statistics
console.log('\n=== CATEGORIZATION RESULTS ===');
console.log(`Total integrations processed: ${categorizedCount}`);
console.log(`Expected integrations: ${integrations.length}`);
console.log('\nCategory breakdown:');
for (const category of iCategories) {
  const count = category.items.length;
  console.log(`  ${category.name}: ${count} items`);
}

// Save the updated categories
fs.writeFileSync('../../iCategories.json', JSON.stringify(iCategories, null, 2));
console.log('\nUpdated iCategories.json saved successfully!');

// Verify totals
const totalCategorized = iCategories.reduce((sum, cat) => sum + cat.items.length, 0);
console.log(`\nVerification: ${totalCategorized} total items categorized`);
if (totalCategorized !== integrations.length) {
  console.error('ERROR: Total categorized items does not match source integration count!');
  process.exit(1);
} else {
  console.log('✓ All integrations successfully categorized!');
}
