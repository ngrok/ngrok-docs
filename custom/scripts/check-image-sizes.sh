#!/usr/bin/env bash

# Checks image files against size limits so large, unoptimized assets don't
# slow down docs pages.
#
# Usage: check-image-sizes.sh [file ...]
# With no arguments, checks every image tracked in the repo.
#
# Limits (override with environment variables):
#   IMAGE_MAX_KB   fail above this size (default 500)
#   IMAGE_WARN_KB  warn above this size (default 200)

set -euo pipefail

max_kb=${IMAGE_MAX_KB:-500}
warn_kb=${IMAGE_WARN_KB:-200}
image_pattern='\.(png|jpe?g|gif|webp|avif|svg)$'

# Emit GitHub annotations in Actions, plain text locally.
report() {
	local level=$1 file=$2 msg=$3
	if [ -n "${GITHUB_ACTIONS:-}" ]; then
		echo "::${level} file=${file}::${msg}"
	else
		echo "${level}: ${file}: ${msg}"
	fi
}

if [ $# -eq 0 ]; then
	files=()
	while IFS= read -r f; do files+=("$f"); done < <(git ls-files | grep -iE "$image_pattern" || true)
else
	files=("$@")
fi

errors=0
checked=0
for file in "${files[@]}"; do
	[ -f "$file" ] || continue
	echo "$file" | grep -qiE "$image_pattern" || continue
	checked=$((checked + 1))

	kb=$(( ($(wc -c < "$file") + 1023) / 1024 ))
	if [ "$kb" -gt "$max_kb" ]; then
		report error "$file" "Image is ${kb} KB, over the ${max_kb} KB limit. Compress or resize it before merging."
		errors=$((errors + 1))
	elif [ "$kb" -gt "$warn_kb" ]; then
		report warning "$file" "Image is ${kb} KB. Consider compressing it to under ${warn_kb} KB."
	fi
done

echo "Checked ${checked} image(s); ${errors} over the ${max_kb} KB limit."
[ "$errors" -eq 0 ]
