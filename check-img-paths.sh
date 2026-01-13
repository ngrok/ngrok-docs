#!/bin/bash

# Script to check if image paths in .mdx files actually exist

set -e

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
SOURCE_DIR="$ROOT_DIR/integrations"
OUTPUT_FILE="$ROOT_DIR/broken-img-paths.txt"

# Clear output file
> "$OUTPUT_FILE"

# Find all .mdx files (excluding img directories)
find "$SOURCE_DIR" -type f -name "*.mdx" ! -path "*/img/*" | while read -r file; do
    # Get the directory of the current file
    file_dir=$(dirname "$file")
    
    # Extract all image paths matching (../img/...)
    grep -oE '\(\.\./img/[^)]+\)' "$file" 2>/dev/null | while read -r match; do
        # Remove parentheses using sed
        rel_path=$(echo "$match" | sed 's/^(\(.*\))$/\1/')
        
        # Resolve the path relative to the file's directory
        abs_path=$(cd "$file_dir" && realpath -m "$rel_path" 2>/dev/null || echo "$file_dir/$rel_path")
        
        # Check if file exists
        if [ ! -f "$abs_path" ]; then
            echo "$file: $rel_path" >> "$OUTPUT_FILE"
        fi
    done
done

# Count and report
if [ -s "$OUTPUT_FILE" ]; then
    count=$(wc -l < "$OUTPUT_FILE")
    echo "Found $count broken image paths. See: $OUTPUT_FILE"
else
    echo "All image paths are valid!"
    rm -f "$OUTPUT_FILE"
fi
