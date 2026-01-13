#!/bin/bash

# Script to remove extra /img occurrences in image paths within .mdx files

set -e

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
SOURCE_DIR="$ROOT_DIR/integrations"

# Find all .mdx files and process them
find "$SOURCE_DIR" -type f -name "*.mdx" | while read -r file; do
    # Check if file contains the pattern
    if grep -q '(\.\.\/img\/[^)]*\/img\/' "$file"; then
        echo "Processing: $file"
        
        # Use perl to handle the replacement:
        # Match (../img/...) and within it, remove all /img except the first
        perl -i -pe '
            s{(\(\.\.\/img\/)(.*?)(\))}{
                my ($prefix, $middle, $suffix) = ($1, $2, $3);
                $middle =~ s{/img/}{/}g;
                $prefix . $middle . $suffix;
            }ge
        ' "$file"
    fi
done

echo "Done!"
