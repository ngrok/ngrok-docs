#!/usr/bin/env node

/**
 * Generates the ngrok error pages from data/generated/errors.json.
 *
 * The ngrok monorepo ships facts about each error as JSON. This repository
 * owns how they are presented: page titles, headings, JSON-LD, the error list
 * table, and the prose that explains each error.
 *
 * Writes:
 *   errors/err_ngrok_<slug>.mdx      one page per error
 *   snippets/errors/_err_ngrok_list.mdx   the table of every error
 *
 * Reads hand-written prose from:
 *   custom/errors/details/err_ngrok_<slug>.mdx   added after the error message
 *   custom/errors/pages/err_ngrok_<slug>.mdx     replaces the generated page head
 *
 * Usage:
 *   node custom/scripts/generate-error-pages.js           write the files
 *   node custom/scripts/generate-error-pages.js --check   fail if any file is stale
 *   node custom/scripts/generate-error-pages.js --missing list codes with no prose
 */

const fs = require("fs");
const path = require("path");
const { root, readOptional, loadData, writeOrCheck, orphanedProse } = require("./lib/generated-docs");

const pagesDir = path.join(root, "errors");
const listFile = path.join(root, "snippets/errors/_err_ngrok_list.mdx");
const detailsDir = path.join(root, "custom/errors/details");
const pageHeadsDir = path.join(root, "custom/errors/pages");

// Go's encoding/json escapes these characters. Matching it keeps the output
// identical to what the monorepo generated before this script existed.
const goJson = (value) =>
  JSON.stringify(value)
    .replace(/[<>&\u2028\u2029]/g, (c) => `\\u${c.charCodeAt(0).toString(16).padStart(4, "0")}`);

const GATEWAY_LABELS = ["ngrok gateway error", "ngrok gateway timeout"];
const API_DOCS_ANCHOR = "{apiDocsAnchor:string}";
const placeholderRun = /(?:'?\{[a-zA-Z_]+:[a-zA-Z]+\}'?)+/g;
const placeholder = /'?\{([a-zA-Z_]+):[a-zA-Z]+\}'?/g;

// "ngrok gateway error\n<description>" reads as "ngrok gateway error: <description>".
function addGatewayLabelColon(tmpl) {
  const i = tmpl.indexOf("\n");
  if (i < 0) return tmpl;
  const firstLine = tmpl.slice(0, i).trim();
  return GATEWAY_LABELS.includes(firstLine) ? `${firstLine}: ${tmpl.slice(i + 1)}` : tmpl;
}

// Each argument becomes an upper-case code span. Adjacent arguments get a
// space between them, because two touching code spans render as one.
const mdPlaceholders = (tmpl) =>
  tmpl.replace(placeholderRun, (run) =>
    [...run.matchAll(placeholder)].map((m) => "`" + m[1].toUpperCase() + "`").join(" "));

// The first line of the message, or the second line for gateway errors,
// whose first line is only a category label.
function shortMessage(err) {
  const msg = mdPlaceholders(err.message_template.replaceAll(API_DOCS_ANCHOR, ""));
  const i = msg.indexOf("\n");
  if (i < 0) return msg.trim();
  const firstLine = msg.slice(0, i).trim();
  const rest = msg.slice(i + 1);
  return (GATEWAY_LABELS.includes(firstLine) && rest.trim() !== "" ? rest : msg.slice(0, i)).trim();
}

const firstSentence = (msg) => {
  const i = msg.indexOf(". ");
  return i >= 0 ? msg.slice(0, i) : msg;
};

// The first sentence of the short message, with no code spans and no final period.
const summary = (err) =>
  firstSentence(shortMessage(err).replaceAll("`", "")).trim().replace(/\.$/, "");

// A summary made only of placeholders, such as REASON, tells the reader
// nothing, so the title is the code alone.
function title(err) {
  const placeholdersOnly =
    firstSentence(shortMessage(err)).replace(/`[^`]*`/g, "").replace(/^[ .]+|[ .]+$/g, "") === "";
  return placeholdersOnly ? err.id : `${err.id}: ${summary(err)}`;
}

const description = (err) =>
  `${err.id}: ${summary(err)}. Learn why ngrok returns this error and how to fix it.`;

// Keys are in sorted order, as Go marshals a map.
const jsonLd = (err) =>
  goJson({
    "@context": "https://schema.org",
    "@type": "TechArticle",
    about: { "@type": "Thing", description: summary(err), name: err.id },
    description: description(err),
    headline: title(err),
    publisher: { "@type": "Organization", name: "ngrok", url: "https://ngrok.com" },
    url: `https://ngrok.com/docs/errors/err_ngrok_${err.slug}`,
  });

const isNamed = (err) => !/^\d+$/.test(err.code);

function pageHead(err) {
  const custom = readOptional(path.join(pageHeadsDir, `err_ngrok_${err.slug}.mdx`));
  if (custom !== null) return custom.trim();

  const keywords = [`"${err.id}"`];
  if (!isNamed(err)) keywords.push(`"error ${err.code}"`);
  return `---
mode: wide
title: ${goJson(title(err))}
description: ${goJson(description(err))}
keywords: [${keywords.join(", ")}]
---

<script type="application/ld+json">{${goJson(jsonLd(err))}}</script>

## What does ${err.id} mean?

ngrok returns ${err.id} with this message:

\`\`\`text
${err.message_plain}
\`\`\`

`;
}

function page(err) {
  const details = readOptional(path.join(detailsDir, `err_ngrok_${err.slug}.mdx`));
  let out = pageHead(err) + "\n";
  if (details !== null) out += "\n" + details;
  out += "\n";
  if (err.show_support_link) {
    out += `
## Where can I get more help with ${err.id}?

Email [support@ngrok.com](mailto:support@ngrok.com?subject=Help%20with%20${err.id}) and include the error code.
`;
  }
  return out + "\n";
}

const breakableCode = (err) => err.id.replaceAll("_", "_<wbr />");

const list = (errors) =>
  `
| Code | Message |
|------|---------|
${errors.map((err) => `| [${breakableCode(err)}](/errors/err_ngrok_${err.slug}) | ${shortMessage(err)} |`).join("\n")}
`;

function main() {
  const errors = loadData("errors", 1);

  if (process.argv.includes("--missing")) {
    for (const err of errors) {
      if (!fs.existsSync(path.join(detailsDir, `err_ngrok_${err.slug}.mdx`))) console.log(err.id);
    }
    return;
  }

  const slugs = new Set(errors.map((err) => err.slug));
  const orphans = [...orphanedProse(detailsDir, "err_ngrok_", slugs), ...orphanedProse(pageHeadsDir, "err_ngrok_", slugs)];

  const want = new Map([[listFile, list(errors)]]);
  for (const err of errors) want.set(path.join(pagesDir, `err_ngrok_${err.slug}.mdx`), page(err));

  // Pages for removed errors.
  const stale = fs
    .readdirSync(pagesDir)
    .filter((f) => /^err_ngrok_.+\.mdx$/.test(f))
    .map((f) => path.join(pagesDir, f))
    .filter((f) => !want.has(f));

  writeOrCheck({ name: "error page", script: "generate-error-pages", want, stale, orphans });
}

main();
