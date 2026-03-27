#!/bin/bash
# Validates traffic policy YAML/JSON in .mdx/.md code blocks. No temp files.
# Reports failures as source path (block N). Usage: ./test-policies.sh
set -e
cd "$(dirname "$0")/.."
exec python3 scripts/validate_policy_snippets.py
