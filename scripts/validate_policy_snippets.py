#!/usr/bin/env python3
"""
Validate traffic policy YAML/JSON in code blocks under traffic-policy docs.
Reads source files only; no temp files. Reports failures as source path (block N).
"""
import json
import re
import sys
from pathlib import Path

try:
    import yaml
except ImportError:
    print("PyYAML required: pip install PyYAML", file=sys.stderr)
    sys.exit(2)

ROOT = Path(__file__).resolve().parent.parent
SEARCH_DIRS = [
    ROOT / "traffic-policy",
    ROOT / "snippets" / "traffic-policy",
    ROOT / "universal-gateway",
]
POLICY_KEYS = ("on_http_request", "on_http_response", "on_tcp_connect")


def find_source_files():
    out = []
    for d in SEARCH_DIRS:
        if not d.is_dir():
            continue
        for p in d.rglob("*"):
            if p.suffix in (".mdx", ".md"):
                out.append(p)
    return sorted(out)


def extract_blocks(path):
    """Yield (is_json, content) for each policy-like code block. Line-by-line to avoid regex cross-block bugs."""
    lines = path.read_text().splitlines()
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.strip().startswith("```"):
            rest = line.strip()[3:].strip().lower()
            if rest.startswith("yaml"):
                kind = "yaml"
            elif rest.startswith("json"):
                kind = "json"
            else:
                i += 1
                continue
            i += 1
            block = []
            while i < len(lines) and lines[i].strip() != "```":
                block.append(lines[i])
                i += 1
            if i < len(lines):
                i += 1  # consume closing ```
            content = "\n".join(block)
            if any(k in content for k in POLICY_KEYS):
                yield ("json" if kind == "json" else "yaml", content)
            continue
        i += 1


def validate_block(content, is_json):
    # Infer format from content so we never parse YAML as JSON
    raw = content.strip()
    if raw.startswith("{"):
        is_json = True
    elif raw.startswith("on_") or "\non_" in "\n" + raw:
        is_json = False
    if is_json:
        try:
            d = json.loads(content)
        except json.JSONDecodeError as e:
            return str(e)
    else:
        try:
            d = yaml.safe_load(content)
        except yaml.YAMLError as e:
            return str(e).split("\n")[0]
    if d is None:
        return "empty document"
    if not isinstance(d, dict):
        return "root must be an object"
    if not any(k in d for k in POLICY_KEYS):
        return "missing policy key (need one of: " + ", ".join(POLICY_KEYS) + ")"
    return None


def main():
    sources = find_source_files()
    if not sources:
        print("No source files found.")
        return 0

    total = 0
    passed = 0
    failed = 0
    for path in sources:
        rel = path.relative_to(ROOT)
        for block_idx, (is_json, content) in enumerate(extract_blocks(path), 1):
            total += 1
            err = validate_block(content, is_json)
            if err is None:
                passed += 1
                print(f"✅ {rel} (block {block_idx})")
            else:
                failed += 1
                print(f"❌ {rel} (block {block_idx}): {err}")

    print("")
    print("==========================================")
    print("SUMMARY")
    print("==========================================")
    print(f"Total: {total} | Passed: {passed} | Failed: {failed}")
    if failed:
        print("❌ Some blocks invalid.")
        return 1
    print("🎉 All valid.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
