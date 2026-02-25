#!/bin/bash

# Validates traffic policy files: syntax (YAML/JSON) and structure (has policy top-level keys).
# No ngrok API or API key required.
# Usage: ./test-policies.sh

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "🚀 Validating ngrok traffic policies (syntax + structure)..."
echo ""

ROOT="$(pwd)"
EXTRACTED="${EXTRACTED_POLICIES_DIR:-$ROOT/.tmp/extracted-policies}"
POLICY_FILES=$(
  {
    find "$ROOT/traffic-policy" "$ROOT/snippets/traffic-policy" -type f \( -name "*.yaml" -o -name "*.yml" -o -name "*.json" \) 2>/dev/null || true
    [ -d "$EXTRACTED" ] && find "$EXTRACTED" -maxdepth 1 -type f \( -name "*.yaml" -o -name "*.yml" -o -name "*.json" \) 2>/dev/null || true
  } \
  | grep -v '_category_\.yml$' \
  | grep -v '/examples\.yml$' \
  | sort -u
)

if [ -z "$POLICY_FILES" ]; then
  echo "No traffic policy files found (checked traffic-policy/, snippets/traffic-policy/, and $EXTRACTED). Nothing to test."
  exit 0
fi

echo "Found $(echo "$POLICY_FILES" | wc -l) policy files"
echo ""

TOTAL_FILES=0
PASSED_FILES=0
FAILED_FILES=0

validate_one() {
  local f="$1"
  local err
  if [[ "$f" == *.json ]]; then
    err=$(python3 -c '
import json, sys
path = sys.argv[1]
try:
    d = json.load(open(path))
except Exception as e:
    sys.exit(str(e))
if not isinstance(d, dict):
    sys.exit("root must be an object")
allowed = ("on_http_request", "on_http_response", "on_tcp_connect")
if not any(k in d for k in allowed):
    sys.exit("missing policy key (need one of: " + ", ".join(allowed))
' "$f" 2>&1)
  else
    err=$(python3 -c '
import yaml, sys
path = sys.argv[1]
try:
    d = yaml.safe_load(open(path))
except Exception as e:
    sys.exit(str(e))
if d is None:
    sys.exit("empty document")
if not isinstance(d, dict):
    sys.exit("root must be an object")
allowed = ("on_http_request", "on_http_response", "on_tcp_connect")
if not any(k in d for k in allowed):
    sys.exit("missing policy key (need one of: " + ", ".join(allowed))
' "$f" 2>&1)
  fi
  if [ -n "$err" ]; then
    echo -e "${RED}❌ FAILED${NC} - $f"
    echo "  $err"
    return 1
  fi
  echo -e "${GREEN}✅ PASSED${NC} - $f"
  return 0
}

for policy_file in $POLICY_FILES; do
  TOTAL_FILES=$((TOTAL_FILES + 1))
  if validate_one "$policy_file"; then
    PASSED_FILES=$((PASSED_FILES + 1))
  else
    FAILED_FILES=$((FAILED_FILES + 1))
  fi
done

echo ""
echo "=========================================="
echo "SUMMARY"
echo "=========================================="
echo "Total: $TOTAL_FILES | Passed: $PASSED_FILES | Failed: $FAILED_FILES"

if [ $FAILED_FILES -eq 0 ]; then
  echo -e "${GREEN}🎉 All valid.${NC}"
  exit 0
else
  echo -e "${RED}❌ $FAILED_FILES file(s) invalid.${NC}"
  exit 1
fi
