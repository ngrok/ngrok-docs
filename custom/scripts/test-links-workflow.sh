#!/bin/bash

set -e

echo "🔍 Testing link checking workflow locally..."
echo "📝 Note: Check links-output.txt and redirects-output.txt for detailed output"
echo ""

# Run test-links
echo "Running pnpm test-links..."
set +e
pnpm test-links > links-output.txt 2>&1
LINKS_EXIT=$?
set -e

# Check if output contains "found broken links" or similar
if grep -q "broken links" links-output.txt; then
  echo "⚠️  Found broken links:"
  cat links-output.txt
  echo ""
  LINKS_EXIT=1
else
  echo "✅ No broken links found"
  echo ""
  LINKS_EXIT=0
fi

# Run check-redirect-conflicts
echo "Running pnpm check-redirect-conflicts..."
set +e
pnpm check-redirect-conflicts > redirects-output.txt 2>&1
REDIRECTS_EXIT=$?
set -e

if [ $REDIRECTS_EXIT -ne 0 ]; then
  echo "⚠️  Found redirect conflicts:"
  cat redirects-output.txt
  echo ""
else
  echo "✅ No redirect conflicts found"
  echo ""
fi

# Filter exceptions if there were errors
if [ $LINKS_EXIT -ne 0 ] || [ $REDIRECTS_EXIT -ne 0 ]; then
  echo "Filtering against exceptions..."
  node << 'EOF'
  const fs = require('fs');
  
  // Load exceptions
  const exceptions = JSON.parse(fs.readFileSync('custom/link-exceptions.json', 'utf8'));
  
  // Read outputs
  const linksOutput = fs.existsSync('links-output.txt') 
    ? fs.readFileSync('links-output.txt', 'utf8') 
    : '';
  const redirectsOutput = fs.existsSync('redirects-output.txt') 
    ? fs.readFileSync('redirects-output.txt', 'utf8') 
    : '';
  
  // Extract broken links from output
  const brokenLinks = [];
  const redirectConflicts = [];
  
  // Parse links output - mint broken-links outputs like "  ⎿  /bad-path/thing"
  linksOutput.split('\n').forEach(line => {
    const trimmed = line.trim();
    // Look for patterns like "⎿  /path" or direct "/path" or "https://url"
    if (trimmed && (trimmed.startsWith('/') || trimmed.startsWith('http') || trimmed.includes('⎿'))) {
      // Extract the actual path after the ⎿ symbol if present
      const match = trimmed.match(/⎿\s+(.+)/) || [null, trimmed];
      const link = match[1];
      if (link && (link.startsWith('/') || link.startsWith('http'))) {
        brokenLinks.push(link);
      }
    }
  });
  
  // Parse redirects output - format is "source -> destination"
  redirectsOutput.split('\n').forEach(line => {
    const trimmed = line.trim();
    // Skip pnpm metadata lines (starting with > or empty)
    if (trimmed && !trimmed.startsWith('>') && trimmed.includes('->')) {
      redirectConflicts.push(trimmed);
    }
  });
  
  // Check if a link matches an exception pattern
  function matchesException(link, pattern) {
    // No wildcards - exact match
    if (!pattern.includes('*')) {
      return link === pattern;
    }
    
    // Convert pattern to regex
    const regexPattern = pattern
      .replace(/[.+?^${}()|[\]\\]/g, '\\$&') // Escape special regex chars except *
      .replace(/\*/g, '.*'); // Replace * with .*
    
    const regex = new RegExp('^' + regexPattern + '$');
    return regex.test(link);
  }
  
  // Filter exceptions only for links (not redirects)
  const actualLinkErrors = brokenLinks.filter(link => {
    return !exceptions.some(exception => matchesException(link, exception));
  });
  
  const hasErrors = actualLinkErrors.length > 0 || redirectConflicts.length > 0;
  
  if (hasErrors) {
    console.log('❌ Found issues:');
    if (actualLinkErrors.length > 0) {
      console.log('\nBroken links not in exceptions:');
      actualLinkErrors.forEach(link => console.log(`  - ${link}`));
    }
    if (redirectConflicts.length > 0) {
      console.log('\nRedirect conflicts:');
      redirectConflicts.forEach(conflict => console.log(`  - ${conflict}`));
    }
    process.exit(1);
  } else if (brokenLinks.length > 0) {
    console.log('✅ All broken links are in exceptions list');
    process.exit(0);
  } else {
    console.log('✅ No broken links or redirect conflicts found');
    process.exit(0);
  }
EOF
else
  echo "✅ All checks passed!"
fi

# Cleanup
rm -f links-output.txt redirects-output.txt
