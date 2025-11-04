#!/usr/bin/env node

import fs from "node:fs";

console.log('🔄 Fixing category paths to match actual integration paths...');

try {
    // Load the integration paths to see what actually exists
    const integrationsPath = "custom/scripts/data/integrations/integrations.json";
    const integrations = JSON.parse(fs.readFileSync(integrationsPath, 'utf8'));
    
    // Load current categories
    const categoriesPath = "custom/scripts/data/integrations/integrationCategories.json";
    const categories = JSON.parse(fs.readFileSync(categoriesPath, 'utf8'));
    
    console.log(`Loaded ${integrations.length} integrations and ${categories.length} categories`);
    
    // Create mapping based on actual file names and categories
    const pathsByCategory = {
        'cli-credentials': [],
        'dashboard-sso': [],
        'event-destinations': [],
        'kubernetes-ingress': [],
        'oauth': [],
        'webhooks': [],
        'guides': []
    };
    
    // Sort integrations into categories based on their actual paths
    for (const integration of integrations) {
        const pathParts = integration.path.split('/');
        if (pathParts.length >= 3 && pathParts[1] === 'integrations') {
            const categoryName = pathParts[2];
            if (pathsByCategory[categoryName] !== undefined) {
                pathsByCategory[categoryName].push(integration.path);
            }
        }
    }
    
    // Update categories with correct paths
    for (const category of categories) {
        if (pathsByCategory[category.name]) {
            const oldCount = category.items.length;
            category.items = pathsByCategory[category.name].sort();
            console.log(`${category.name}: ${oldCount} → ${category.items.length} items`);
        }
    }
    
    // Write updated categories
    fs.writeFileSync(categoriesPath, JSON.stringify(categories, null, 2));
    console.log(`\n✅ Categories updated and saved to ${categoriesPath}`);
    
    // Show summary
    const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);
    console.log(`📊 Summary: ${totalItems} total integration paths across ${categories.length} categories`);
    
} catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
}
