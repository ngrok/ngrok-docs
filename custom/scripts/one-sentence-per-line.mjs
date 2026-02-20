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

function isBlockProse(block) {
  const first = block.trimStart();
  if (!first) return false;
  const firstChar = first[0];
  // Not prose: headers, lists, blockquote, code fence, HTML/JSX, link ref
  if (
    firstChar === "#" ||
    firstChar === "-" ||
    firstChar === "*" ||
    firstChar === ">" ||
    firstChar === "`" ||
    firstChar === "<" ||
    firstChar === "["
  )
    return false;
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
  const out = blocks
    .map((block) => {
      if (isBlockProse(block)) return processBlock(block);
      return block;
    })
    .join("\n\n");

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
