const fs = require('fs');
const path = require('path');

const integrationsDir = '../../integrations';
const imgDir = path.join(integrationsDir, 'img');
const dryRun = false; // Set to true to preview changes without making them

console.log('🖼️  Starting image path fixes...');
console.log(`Dry run mode: ${dryRun ? 'ON' : 'OFF'}`);

// Build index of all image files in img directory
console.log('\n📁 Building image file index...');
const imageIndex = new Map(); // filename -> full path

function indexImages(dir, relativeDir = '') {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      indexImages(fullPath, path.join(relativeDir, item));
    } else if (stat.isFile()) {
      // Check if it's an image file
      const ext = path.extname(item).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'].includes(ext)) {
        const relativePath = path.join('img', relativeDir, item);
        imageIndex.set(item, relativePath);
        
        // Also index with directory prefix in case of conflicts
        const dirName = path.basename(path.dirname(fullPath));
        const prefixedName = `${dirName}/${item}`;
        imageIndex.set(prefixedName, relativePath);
      }
    }
  }
}

if (fs.existsSync(imgDir)) {
  indexImages(imgDir);
  console.log(`  Found ${imageIndex.size} image files`);
} else {
  console.error('❌ img directory not found!');
  process.exit(1);
}

// Get all category directories
const categoryDirs = fs.readdirSync(integrationsDir).filter(item => {
  const itemPath = path.join(integrationsDir, item);
  return fs.statSync(itemPath).isDirectory() && item !== 'img';
});

console.log(`\n📂 Processing ${categoryDirs.length} category directories...`);

let totalFiles = 0;
let filesWithImages = 0;
let totalReplacements = 0;
let errors = [];

// Regular expressions to find image references
const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
const htmlImgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;

function findAndReplaceImages(content, filePath) {
  let updatedContent = content;
  let replacements = 0;
  
  // Find markdown image references: ![alt](./img/something.png), ![alt](img/something.png), or ![alt](/img/something.png)
  updatedContent = updatedContent.replace(imageRegex, (match, alt, imgPath) => {
    if (imgPath.startsWith('./img/') || imgPath.startsWith('img/') || imgPath.startsWith('/img/')) {
      const filename = path.basename(imgPath);
      const actualPath = imageIndex.get(filename);
      
      if (actualPath) {
        const newPath = `../${actualPath}`;
        console.log(`    📸 ${imgPath} → ${newPath}`);
        replacements++;
        return `![${alt}](${newPath})`;
      } else {
        errors.push(`${filePath}: Could not find image ${filename} (from ${imgPath})`);
        console.warn(`    ⚠️  Could not find: ${filename}`);
      }
    }
    return match;
  });
  
  // Find HTML img tags: <img src="./img/something.png" />, <img src="img/something.png" />, or <img src="/img/something.png" />
  updatedContent = updatedContent.replace(htmlImgRegex, (match, imgPath) => {
    if (imgPath.startsWith('./img/') || imgPath.startsWith('img/') || imgPath.startsWith('/img/')) {
      const filename = path.basename(imgPath);
      const actualPath = imageIndex.get(filename);
      
      if (actualPath) {
        const newPath = `../${actualPath}`;
        console.log(`    📸 ${imgPath} → ${newPath} (HTML)`);
        replacements++;
        return match.replace(imgPath, newPath);
      } else {
        errors.push(`${filePath}: Could not find image ${filename} (from ${imgPath})`);
        console.warn(`    ⚠️  Could not find: ${filename}`);
      }
    }
    return match;
  });
  
  return { content: updatedContent, replacements };
}

// Process all MDX files in category directories
for (const categoryDir of categoryDirs) {
  console.log(`\n📁 Processing ${categoryDir}/...`);
  const categoryPath = path.join(integrationsDir, categoryDir);
  
  const mdxFiles = fs.readdirSync(categoryPath).filter(file => 
    file.endsWith('.mdx') && fs.statSync(path.join(categoryPath, file)).isFile()
  );
  
  for (const mdxFile of mdxFiles) {
    const filePath = path.join(categoryPath, mdxFile);
    const relativePath = `${categoryDir}/${mdxFile}`;
    
    totalFiles++;
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has image references
      if (content.includes('./img/') || content.includes('](img/') || content.includes('](/img/') || content.includes('<img')) {
        console.log(`  📄 ${relativePath}`);
        
        const { content: updatedContent, replacements } = findAndReplaceImages(content, relativePath);
        
        if (replacements > 0) {
          filesWithImages++;
          totalReplacements += replacements;
          
          if (!dryRun) {
            fs.writeFileSync(filePath, updatedContent);
          }
        }
      }
    } catch (error) {
      errors.push(`${relativePath}: Error reading file - ${error.message}`);
      console.error(`  ❌ Error processing ${relativePath}: ${error.message}`);
    }
  }
}

// Summary
console.log('\n📊 IMAGE PATH FIX SUMMARY:');
console.log(`Total MDX files processed: ${totalFiles}`);
console.log(`Files with image references: ${filesWithImages}`);
console.log(`Total image path replacements: ${totalReplacements}`);
console.log(`Errors: ${errors.length}`);

if (errors.length > 0) {
  console.log('\n❌ Errors encountered:');
  errors.forEach(error => console.log(`  ${error}`));
}

// Create progress file
const progressData = {
  timestamp: new Date().toISOString(),
  summary: {
    totalFiles,
    filesWithImages,
    totalReplacements,
    errors: errors.length
  },
  errors,
  imageIndex: Object.fromEntries(imageIndex),
  dryRun
};

fs.writeFileSync('../../image-path-fix-progress.json', JSON.stringify(progressData, null, 2));
console.log('\n📝 Progress saved to image-path-fix-progress.json');

if (errors.length === 0) {
  console.log(`\n✅ Image path fixes ${dryRun ? 'preview' : 'completed'} successfully!`);
} else {
  console.log(`\n⚠️  Image path fixes ${dryRun ? 'preview' : 'completed'} with ${errors.length} errors.`);
}
