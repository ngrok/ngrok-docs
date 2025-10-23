#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

// Helper function to convert file names to paths (similar to Docusaurus fileToPath)
function fileToPath(fileName) {
    // Remove extension and handle index files
    const withoutExt = fileName.replace(/\.(md|mdx)$/, '');
    if (withoutExt === 'index') {
        return '';
    }
    return withoutExt;
}

async function parseIntegrations() {
    const integrationsDir = "integrations";
    const integrations = [];

    try {
        const dir = await fs.promises.opendir(integrationsDir);
        
        for await (const dirent of dir) {
            const integrationDir = path.join(integrationsDir, dirent.name);

            const isFile = fs.lstatSync(integrationDir).isFile();
            if (isFile) {
                continue;
            }

            const integration = {
                name: dirent.name,
                path: path.join("/integrations", dirent.name),
                docs: [],
            };

            // Process all files in the integration directory
            const files = fs.readdirSync(integrationDir);
            
            for (const fileName of files) {
                const filePath = path.join(integrationDir, fileName);

                // Ignore index files, folders, files that start with _, and non-markdown files
                const isFile = fs.lstatSync(filePath).isFile();
                if (!isFile || !fileName.match(/\.(md|mdx)$/) || fileName.startsWith("_")) {
                    continue;
                }

                // Parse markdown
                const fileContent = fs.readFileSync(filePath, 'utf8');
                const parsed = matter(fileContent);

                // Add file details as metadata information on integration
                if (fileName === "index.mdx") {
                    integration.metadata = parsed.data;
                    continue;
                }

                // Add file details as doc on integration
                integration.docs.push({
                    path: path.join(integration.path, fileToPath(fileName)),
                    frontMatter: parsed.data,
                    contentTitle: parsed.data.title || undefined,
                    excerpt: parsed.excerpt || undefined
                });
            }
            
            integrations.push(integration);
        }

        // Flatten and sort integrations by name
        const sortedIntegrations = integrations.map(i=>i.docs).flat().sort((a, b) => a.contentTitle && b.contentTitle ? a.contentTitle.localeCompare(b.contentTitle): -1 );
        
        // Load categories to assign category information to each integration
        const categoriesPath = "custom/scripts/data/integrations/integrationCategories.json";
        let categories = [];
        try {
            const categoriesContent = fs.readFileSync(categoriesPath, 'utf8');
            categories = JSON.parse(categoriesContent);
        } catch (error) {
            console.warn(`Could not load categories from ${categoriesPath}:`, error.message);
        }
        
        // Add category information to each integration
        if (categories.length > 0) {
            sortedIntegrations.forEach(integration => {
                // Find which category contains this integration's path
                for (const category of categories) {
                    if (category.items.includes(integration.path)) {
                        integration.category = category.name;
                        break;
                    }
                }
                
                // If no category found, it might be uncategorized
                if (!integration.category) {
                    integration.category = 'uncategorized';
                }
            });
            
            console.log(`Added category information to ${sortedIntegrations.length} integrations`);
        }
        
        // Ensure snippets directory exists
        const snippetsDir = path.dirname("snippets/data/integrations/integrations.json");
        if (!fs.existsSync(snippetsDir)) {
            fs.mkdirSync(snippetsDir, { recursive: true });
        }

        const filePath = "custom/scripts/data/integrations/integrations.json";

        // Write to file
        fs.writeFileSync(filePath, JSON.stringify(sortedIntegrations, null, 2));
        console.log(`Successfully parsed ${sortedIntegrations.length} integrations and wrote to ${filePath}`);
        
    } catch (error) {
        console.error("Error parsing integrations:", error);
        process.exit(1);
    }
}

// Run the script
parseIntegrations();
