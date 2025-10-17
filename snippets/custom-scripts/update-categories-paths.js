#!/usr/bin/env node

import fs from "node:fs";

// Load the current categories and the integrations data
const categoriesPath = "snippets/custom-scripts/data/integrations/integrationCategories.json";
const integrationsPath = "snippets/custom-scripts/data/integrations/integrations.json";

console.log('🔄 Updating category paths to match new directory structure...');

try {
    // Load both files
    const categories = JSON.parse(fs.readFileSync(categoriesPath, 'utf8'));
    const integrations = JSON.parse(fs.readFileSync(integrationsPath, 'utf8'));
    
    console.log(`Loaded ${categories.length} categories and ${integrations.length} integrations`);
    
    // Create a mapping from old paths to new paths
    const pathMapping = new Map();
    
    // Extract the vendor and file from old paths and map to new category-based paths
    for (const category of categories) {
        for (const oldPath of category.items) {
            // Extract vendor and filename from old path: /integrations/1password/cli-client
            const pathParts = oldPath.split('/');
            if (pathParts.length >= 4) {
                const vendor = pathParts[2]; // "1password"
                const filename = pathParts[3]; // "cli-client"
                
                // Look for this integration in the new structure
                const newPath = `/integrations/${category.name}/${vendor}-${filename}`;
                pathMapping.set(oldPath, newPath);
            }
        }
    }
    
    console.log(`Created ${pathMapping.size} path mappings`);
    
    // Update the categories with new paths
    for (const category of categories) {
        const updatedItems = [];
        
        for (const oldPath of category.items) {
            const newPath = pathMapping.get(oldPath);
            if (newPath) {
                // Verify this path actually exists in the integrations
                const found = integrations.some(integration => integration.path === newPath);
                if (found) {
                    updatedItems.push(newPath);
                    console.log(`  ${oldPath} → ${newPath}`);
                } else {
                    console.warn(`  ⚠️  Path not found in integrations: ${newPath}`);
                    updatedItems.push(oldPath); // Keep original if new not found
                }
            } else {
                console.warn(`  ⚠️  No mapping found for: ${oldPath}`);
                updatedItems.push(oldPath); // Keep original
            }
        }
        
        category.items = updatedItems;
    }
    
    // Write updated categories back to file
    fs.writeFileSync(categoriesPath, JSON.stringify(categories, null, 2));
    console.log(`\n✅ Updated categories saved to ${categoriesPath}`);
    
} catch (error) {
    console.error('❌ Error updating categories:', error);
    process.exit(1);
}
