#!/bin/bash

# Extracts traffic policy YAML/JSON from code blocks in .mdx/.md under policy-related paths.
# Writes one file per block to OUT_DIR (default .tmp/extracted-policies).
# Usage: ./extract-policy-snippets.sh [OUT_DIR]

set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="${1:-$ROOT/.tmp/extracted-policies}"

# Paths that contain traffic policy code blocks (not agent config or other YAML)
SEARCH_DIRS=(
  "$ROOT/traffic-policy"
  "$ROOT/snippets/traffic-policy"
  "$ROOT/universal-gateway"
)

mkdir -p "$OUT_DIR"
rm -f "$OUT_DIR"/*.yaml "$OUT_DIR"/*.yml "$OUT_DIR"/*.json 2>/dev/null || true

for dir in "${SEARCH_DIRS[@]}"; do
  [ ! -d "$dir" ] && continue
  while IFS= read -r -d '' src; do
    base=$(echo "$src" | sed "s|^$ROOT/||" | tr '/' '-' | sed 's/\.mdx$//;s/\.md$//')
    awk -v base="$base" -v outdir="$OUT_DIR" '
      BEGIN { n = 0 }
      /^```(yaml|json)/ {
        if (capturing) next
        if (match($0, /^```(yaml|json)/)) {
          ext = (substr($0, RSTART+3, 4) == "json") ? "json" : "yaml"
          capturing = 1
          block = ""
        }
        next
      }
      /^```$/ && capturing {
        capturing = 0
        if (block ~ /on_http_request|on_http_response|on_tcp_connect/) {
          n++
          fname = outdir "/" base "-" n "." ext
          print block > fname
          close(fname)
        }
        block = ""
        next
      }
      capturing { block = block $0 "\n" }
    ' "$src"
  done < <(find "$dir" -type f \( -name "*.mdx" -o -name "*.md" \) -print0 2>/dev/null)
done

n=$(find "$OUT_DIR" -maxdepth 1 -type f \( -name "*.yaml" -o -name "*.yml" -o -name "*.json" \) 2>/dev/null | wc -l)
echo "Extracted $n policy snippet(s) to $OUT_DIR"
