#!/usr/bin/env node

/**
 * Script to check for conflicting redirect sources in docs.json
 * 
 * This script identifies redirect sources that might conflict with each other,
 * particularly when using :slug* wildcards that act as catch-all patterns.
 */

const fs = require('fs');
const path = require('path');

// Read docs.json
const docsJsonPath = path.join(__dirname, '../../docs.json');
if (!fs.existsSync(docsJsonPath)) {
    console.error('Error: docs.json not found at', docsJsonPath);
    process.exit(1);
}

const docs = JSON.parse(fs.readFileSync(docsJsonPath, 'utf8'));

if (!docs.redirects || !Array.isArray(docs.redirects)) {
    console.log('No redirects array found in docs.json');
    process.exit(0);
}

const redirects = docs.redirects;

/**
 * Normalize a path by removing trailing slashes and converting :slug* to a pattern
 */
function normalizePath(source) {
    return source.replace(/\/$/, ''); // Remove trailing slash
}

/**
 * Check if a source path matches another path, considering :slug* wildcards
 * :slug* acts as a wildcard that matches any path segments
 */
function pathMatches(sourcePath, targetPath) {
    // Exact match (case sensitive)
    if (sourcePath === targetPath) {
        return true;
    }
    
    // If source has :slug*, check if target could match
    if (sourcePath.includes(':slug*')) {
        // Replace :slug* with a regex pattern that matches anything
        const regexPattern = sourcePath
            .replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') // Escape special regex chars
            .replace(/:slug\\\*/g, '.*'); // Replace escaped :slug* with .*
        
        const regex = new RegExp('^' + regexPattern + '$');
        return regex.test(targetPath);
    }
    
    // If target has :slug*, check if source could match
    if (targetPath.includes(':slug*')) {
        const regexPattern = targetPath
            .replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
            .replace(/:slug\\\*/g, '.*');
        
        const regex = new RegExp('^' + regexPattern + '$');
        return regex.test(sourcePath);
    }
    
    return false;
}

/**
 * Find all conflicting redirects
 */
function findConflicts() {
    const conflicts = [];
    
    for (let i = 0; i < redirects.length; i++) {
        for (let j = i + 1; j < redirects.length; j++) {
            const redirect1 = redirects[i];
            const redirect2 = redirects[j];
            
            const source1 = normalizePath(redirect1.source);
            const source2 = normalizePath(redirect2.source);
            
            if (pathMatches(source1, source2)) {
                conflicts.push({
                    conflict: {
                        redirect1: {
                            index: i + 1, // 1-based for human readability
                            source: redirect1.source,
                            destination: redirect1.destination
                        },
                        redirect2: {
                            index: j + 1,
                            source: redirect2.source,
                            destination: redirect2.destination
                        }
                    },
                    reason: source1 === source2 ? 'Exact duplicate' : 'Wildcard pattern conflict'
                });
            }
        }
    }
    
    return conflicts;
}

/**
 * Group conflicts by source pattern for better reporting
 */
function groupConflictsBySource(conflicts) {
    const grouped = new Map();
    
    conflicts.forEach(conflict => {
        const source = conflict.conflict.redirect1.source;
        if (!grouped.has(source)) {
            grouped.set(source, []);
        }
        grouped.get(source).push(conflict);
    });
    
    return grouped;
}

/**
 * Generate markdown report
 */
function generateMarkdownReport(conflicts, redirects) {
    const wildcardRedirects = redirects.filter(r => r.source.includes(':slug*'));
    const timestamp = new Date().toISOString();
    
    let markdown = `# Redirect Conflicts Report\n\n`;
    markdown += `**Generated:** ${timestamp}\n`;
    markdown += `**Total redirects:** ${redirects.length}\n`;
    markdown += `**Redirects with :slug* wildcards:** ${wildcardRedirects.length}\n`;
    markdown += `**Conflicts found:** ${conflicts.length}\n\n`;
    
    if (conflicts.length === 0) {
        markdown += `## ✅ No Conflicts Found\n\n`;
        markdown += `All redirect sources are unique!\n\n`;
    } else {
        markdown += `## ❌ Conflicts Found\n\n`;
        
        conflicts.forEach((conflict, index) => {
            markdown += `### Conflict #${index + 1}: ${conflict.reason}\n\n`;
            markdown += `**Source pattern:** \`${conflict.conflict.redirect1.source}\`\n\n`;
            markdown += `- **Redirect ${conflict.conflict.redirect1.index}:** \`${conflict.conflict.redirect1.source}\` → \`${conflict.conflict.redirect1.destination}\`\n`;
            markdown += `- **Redirect ${conflict.conflict.redirect2.index}:** \`${conflict.conflict.redirect2.source}\` → \`${conflict.conflict.redirect2.destination}\`\n\n`;
        });
    }
    
    if (wildcardRedirects.length > 0) {
        markdown += `## 🌟 Wildcard Redirects\n\n`;
        markdown += `These redirects use \`:slug*\` wildcards that match multiple paths:\n\n`;
        
        wildcardRedirects.forEach((redirect) => {
            const redirectIndex = redirects.indexOf(redirect) + 1;
            markdown += `${redirectIndex}. \`${redirect.source}\` → \`${redirect.destination}\`\n`;
        });
        markdown += `\n`;
    }
    
    markdown += `## How :slug* Works\n\n`;
    markdown += `The \`:slug*\` wildcard in Mintlify acts as a catch-all that matches any path segments. `;
    markdown += `For example, \`/x/:slug*\` will match \`/x/y/z\`, \`/x/anything\`, etc.\n\n`;
    markdown += `When multiple redirects have overlapping patterns, Mintlify may not be able to determine `;
    markdown += `which redirect to apply, causing the "sources must be unique" error.\n\n`;
    
    if (conflicts.length > 0) {
        markdown += `## Recommended Actions\n\n`;
        markdown += `1. **Remove duplicate redirects** - Delete redundant entries with the same source\n`;
        markdown += `2. **Make patterns more specific** - Replace broad wildcards with specific paths when possible\n`;
        markdown += `3. **Reorder redirects** - Place more specific patterns before broader ones\n`;
        markdown += `4. **Consolidate destinations** - If multiple sources should go to the same place, use one redirect\n\n`;
    }
    
    return markdown;
}

// Main execution
const conflicts = findConflicts();

if (conflicts.length === 0) {
    process.exit(0);
} else {
    // Output each conflicting redirect with source and destination
    conflicts.forEach((conflict) => {
        console.log(`${conflict.conflict.redirect1.source} -> ${conflict.conflict.redirect1.destination}`);
        console.log(`${conflict.conflict.redirect2.source} -> ${conflict.conflict.redirect2.destination}`);
    });
    process.exit(1);
}
