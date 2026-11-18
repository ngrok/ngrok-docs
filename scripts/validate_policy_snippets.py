#!/usr/bin/env python3
"""
Validate Traffic Policy YAML/JSON in code blocks across the docs.
Reads source files only; no temp files. Reports failures as source path (block N).
To skip a block, put {/* validate=false */} on the line before its opening fence.
"""
import json
import sys
import textwrap
from pathlib import Path

try:
    import yaml
except ImportError:
    print("PyYAML required: pip install PyYAML", file=sys.stderr)
    sys.exit(2)

ROOT = Path(__file__).resolve().parent.parent
# Generated content that this repo doesn't own.
EXCLUDE_DIRS = ("errors", "snippets/errors", "snippets/obs", "node_modules")
SKIP_MARKERS = ("validate=false", "skip-validation", "skip_validation")  # comment or fence meta
POLICY_KEYS = ("on_http_request", "on_http_response", "on_tcp_connect")


def find_source_files():
    out = []
    for p in ROOT.rglob("*"):
        if p.suffix not in (".mdx", ".md") or not p.is_file():
            continue
        rel = p.relative_to(ROOT)
        if any(part.startswith(".") for part in rel.parts[:-1]):
            continue
        rel_posix = rel.as_posix()
        if any(rel_posix.startswith(d + "/") for d in EXCLUDE_DIRS):
            continue
        out.append(p)
    return sorted(out)


def extract_blocks(path):
    """Yield (is_json, content) for each policy-like code block. Line-by-line to avoid regex cross-block bugs."""
    lines = path.read_text().splitlines()
    i = 0
    prev = ""  # last non-blank line before the current one
    while i < len(lines):
        line = lines[i]
        if line.strip().startswith("```"):
            skip = any(m in prev for m in SKIP_MARKERS)
            prev = ""
            rest = line.strip()[3:].strip().lower()
            if rest.startswith("yaml"):
                kind = "yaml"
            elif rest.startswith("json"):
                kind = "json"
            else:
                i += 1
                continue
            if skip or any(m in rest for m in SKIP_MARKERS):
                i += 1
                while i < len(lines) and lines[i].strip() != "```":
                    i += 1
                if i < len(lines):
                    i += 1
                continue
            i += 1
            block = []
            while i < len(lines) and lines[i].strip() != "```":
                block.append(lines[i])
                i += 1
            if i < len(lines):
                i += 1  # consume closing ```
            # Blocks nested in components are indented; Mintlify renders them dedented.
            content = textwrap.dedent("\n".join(block))
            if any(k in content for k in POLICY_KEYS):
                yield ("json" if kind == "json" else "yaml", content)
            continue
        if line.strip():
            prev = line
        i += 1


def validate_block(content, is_json):
    # is_json is the string "json" or "yaml" from extractor
    # Infer format from content so we never parse YAML as JSON
    raw = content.strip()
    if raw.startswith("{"):
        is_json = True
    elif raw.startswith("on_") or "\non_" in "\n" + raw:
        is_json = False
    else:
        is_json = is_json == "json"
    if is_json:
        try:
            docs = [json.loads(content)]
        except json.JSONDecodeError as e:
            return str(e)
    else:
        try:
            # Kubernetes examples often hold several manifests in one block.
            docs = [d for d in yaml.safe_load_all(content) if d is not None]
        except yaml.YAMLError as e:
            return str(e).split("\n")[0]
    if not docs:
        return "empty document"
    if not any(has_policy(d) for d in docs):
        return "no Traffic Policy found (need one of: " + ", ".join(POLICY_KEYS) + ")"
    return None


def has_policy(value, depth=0):
    """True if value holds a policy at any depth: a bare policy, an agent config
    traffic_policy, a Kubernetes spec, or a policy encoded as a JSON/YAML string
    (API request bodies, annotations)."""
    if depth > 12 or value is None:
        return False
    if isinstance(value, str):
        if not any(k in value for k in POLICY_KEYS):
            return False
        try:
            return has_policy(json.loads(value), depth + 1)
        except (json.JSONDecodeError, TypeError):
            pass
        try:
            return has_policy(yaml.safe_load(value), depth + 1)
        except yaml.YAMLError:
            return False
    if isinstance(value, list):
        return any(has_policy(v, depth + 1) for v in value)
    if isinstance(value, dict):
        if any(k in value for k in POLICY_KEYS):
            return True
        return any(has_policy(v, depth + 1) for v in value.values())
    return False


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
