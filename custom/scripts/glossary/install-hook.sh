#!/bin/bash

# Install the pre-commit hook
HOOK_SOURCE="custom/scripts/glossary/pre-commit"
HOOK_TARGET=".git/hooks/pre-commit"

if [ ! -f "$HOOK_SOURCE" ]; then
  echo "❌ Hook source file not found: $HOOK_SOURCE"
  exit 1
fi

cp "$HOOK_SOURCE" "$HOOK_TARGET"
chmod +x "$HOOK_TARGET"

echo "✅ Pre-commit hook installed successfully"
echo "The hook will automatically regenerate glossary.mdx when definition-wrapper.js changes"
