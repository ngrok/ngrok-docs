#!/bin/bash

# Script to copy img directories from docs/integrations to integration-images
# with parent directory name prefix

set -e

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
SOURCE_DIR="$ROOT_DIR/docs/integrations"
DEST_DIR="$ROOT_DIR/integration-images"

# Ensure destination directory exists
mkdir -p "$DEST_DIR"

# Find all directories named "img" under docs/integrations
find "$SOURCE_DIR" -type d -name "img" | while read -r img_dir; do
    # Get the parent directory name
    parent_dir=$(dirname "$img_dir")
    parent_name=$(basename "$parent_dir")
    
    # Create the new name with parent prefix
    new_name="${parent_name}"
    dest_path="$DEST_DIR/$new_name"
    
    echo "Copying: $img_dir -> $dest_path"
    
    # Copy contents, merging if destination exists
    if [ -d "$dest_path" ]; then
        echo "  Destination exists, merging contents..."
        cp -R "$img_dir"/* "$dest_path"/
    else
        cp -R "$img_dir" "$dest_path"
    fi
done

echo "Done!"
