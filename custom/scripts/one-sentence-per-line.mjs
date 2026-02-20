#!/usr/bin/env node
/**
 * Puts each sentence on its own line (soft line breaks) in MDX prose.
 * Run after Prettier so prose stays one-sentence-per-line.
 *
 * Only transforms plain prose paragraphs, not code blocks, frontmatter,
 * JSX, or list items. Sentence split: . ! ? followed by space and then
 * an uppercase letter (avoids splitting most abbreviations like "e.g.").
 */

import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

// Match . ! ? followed by space and then uppercase (sentence end). Capture the punctuation.
const SENTENCE_BOUNDARY = /([.!?])\s+(?=[A-Z])/;

// Single-line JSX component with multiple sentences: expand to one sentence per line so Prettier doesn't break it.
const SINGLE_LINE_COMPONENT = /^(<(Warning|Note|Tip|Info|ConfigField)(?:\s[^>]*)?>)([\s\S]*?)(<\/\2>)\s*$/;

function expandComponentContent(block) {
  const trimmed = block.trim();
  const match = trimmed.match(SINGLE_LINE_COMPONENT);
  if (!match) return block;
  const [, openTag, , inner, closeTag] = match;
  const innerTrimmed = inner.trim();
  const parts = innerTrimmed.split(SENTENCE_BOUNDARY);
  if (parts.length <= 1) return block;
  const sentences = [];
  for (let i = 0; i < parts.length; i += 2) {
    const text = parts[i].trim();
    const punct = parts[i + 1] ?? "";
    if (text || punct) sentences.push(text + punct);
  }
  if (sentences.length <= 1) return block;
  const indent = block.match(/^(\s*)/)?.[1] ?? "";
  return indent + openTag + "\n  " + sentences.join("\n  ") + "\n" + closeTag;
}

function isBlockProse(block) {
  const first = block.trimStart();
  if (!first) return false;
  const firstChar = first[0];
  // Not prose: headers, lists, blockquote, code fence, HTML/JSX, link ref, tables
  if (
    firstChar === "#" ||
    firstChar === "-" ||
    firstChar === ">" ||
    firstChar === "`" ||
    firstChar === "<" ||
    firstChar === "[" ||
    firstChar === "|"
  )
    return false;
  // List item: * or - at start of line (but not ** for bold)
  if (firstChar === "*" && /^\*\s/.test(first)) return false;
  if (/^\d+[.)]\s/.test(first)) return false; // ordered list
  if (first.startsWith("```") || first.startsWith("---")) return false;
  return true;
}

function processBlock(block) {
  const indent = block.match(/^(\s*)/)?.[1] ?? "";
  const lines = block.split("\n");
  const joined = lines.map((l) => l.trim()).join(" ");
  const parts = joined.split(SENTENCE_BOUNDARY);
  // parts = [text0, punct0, text1, punct1, ...] or [text0] if no split
  if (parts.length <= 1) return block;
  const sentences = [];
  for (let i = 0; i < parts.length; i += 2) {
    const text = parts[i].trim();
    const punct = parts[i + 1] ?? "";
    if (text || punct) sentences.push(text + punct);
  }
  if (sentences.length <= 1) return block;
  return sentences.map((s) => indent + s).join("\n");
}

/**
 * Repair content inside any JSX component: re-indent list items (  - ), trim closing tag,
 * and ensure 2-space indent for other content. Prettier often strips these; run on full content.
 * Leaves content inside fenced code blocks (```...```) unchanged so YAML/code isn't broken.
 * Matches PascalCase components only (e.g. Warning, Note, ConfigField) to avoid touching HTML.
 */
function repairComponentContentInFile(content) {
  return content.replace(
    /(\s*)(<([A-Z][A-Za-z0-9]*)(?:\s[^>]*)?>)([\s\S]*?)(<\/\3>)/g,
    (_, leading, openTag, _tagName, inner, closeTag) => {
      const lines = inner.split("\n");
      const out = [];
      let inFence = false;
      for (const line of lines) {
        const trimmed = line.trimStart();
        if (trimmed.startsWith("```")) {
          inFence = !inFence;
          out.push(line);
          continue;
        }
        if (inFence) {
          out.push(line);
          continue;
        }
        if (trimmed.startsWith("- ")) out.push("  - " + trimmed.slice(2));
        else if (trimmed.startsWith("</")) out.push(line.startsWith("  ") ? line : "  " + trimmed);
        else if (trimmed.length > 0) out.push(line.startsWith("  ") ? line : "  " + trimmed);
        else out.push(line);
      }
      while (out.length && out[out.length - 1] === "") out.pop();
      const closingIndent = leading.includes("\n") ? leading.slice(leading.lastIndexOf("\n") + 1) : leading;
      return leading + openTag + out.join("\n") + "\n" + closingIndent + closeTag.trim();
    },
  );
}

function processFile(filePath) {
  const raw = readFileSync(filePath, "utf8");

  // Skip frontmatter
  let content = raw;
  let frontmatter = "";
  if (raw.startsWith("---")) {
    const end = raw.indexOf("---", 3);
    if (end !== -1) {
      frontmatter = raw.slice(0, end + 3);
      content = raw.slice(end + 3);
    }
  }

  const blocks = content.split(/\n\n+/);
  let out = blocks
    .map((block) => {
      let b = expandComponentContent(block);
      if (b === block && isBlockProse(block)) b = processBlock(block);
      return b;
    })
    .join("\n\n");

  out = repairComponentContentInFile(out);

  writeFileSync(filePath, frontmatter + (frontmatter ? "\n" : "") + out, "utf8");
}

const root = process.cwd();
const ignoreDirs = new Set([
  "node_modules",
  ".git",
  "build",
  "dist",
  ".direnv",
  "openapi",
  "public",
  "src",
  "static",
  "errors",
  ".skills",
]);

// Same files/dirs as .prettierignore (don’t touch these)
const ignorePaths = new Set(["agent/cli-api.mdx", "agent/cli.mdx", "style-guide.mdx"]);
const ignorePathPrefixes = [
  "errors/",
  ".skills/",
  "docs/k8s/installation/",
  "docs/k8s/guides/",
  "docs/k8s/guides/how-to/",
];

function isIgnored(absolutePath) {
  const rel = absolutePath.slice(root.length + 1).replace(/\\/g, "/");
  if (ignorePaths.has(rel)) return true;
  return ignorePathPrefixes.some((p) => rel.startsWith(p));
}

function* walkDir(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      if (ignoreDirs.has(e.name)) continue;
      yield* walkDir(full);
    } else if (e.name.endsWith(".mdx")) {
      if (!isIgnored(full)) yield full;
    }
  }
}

const mdxFiles = [...walkDir(root)];
for (const f of mdxFiles) {
  try {
    processFile(f);
  } catch (err) {
    console.error(`one-sentence-per-line: ${f}:`, err.message);
    process.exitCode = 1;
  }
}
