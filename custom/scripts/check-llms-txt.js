#!/usr/bin/env node

/**
 * Checks the hand-written root llms.txt against the docs.
 *
 * Fails when:
 * - A page in one of the tabs listed in HAND_LISTED_TABS isn't linked from
 *   llms.txt. Mintlify lists these tabs' pages directly in its generated root
 *   llms.txt instead of in a /_llms/ index, so our root file must list them.
 * - A link to a docs page in llms.txt points to a page that doesn't exist or
 *   is marked noindex or hidden.
 *
 * Like Mintlify, the check skips hidden navigation groups and pages marked
 * noindex or hidden. It can't check the /_llms/ links, which Mintlify only
 * builds in production.
 *
 * Usage: node custom/scripts/check-llms-txt.js
 */

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const root = path.join(__dirname, "../..");
const DOCS_URL = "https://ngrok.com/docs/";
const HAND_LISTED_TABS = ["Start", "Share Localhost", "For AI Agents", "Pricing"];

const docsJson = JSON.parse(fs.readFileSync(path.join(root, "docs.json"), "utf8"));
const llmsTxt = fs.readFileSync(path.join(root, "llms.txt"), "utf8");

// The frontmatter of a page, or null when the page has no file.
const readPage = (page) => {
  const file = [".mdx", ".md"].map((ext) => path.join(root, page + ext)).find(fs.existsSync);
  return file ? matter(fs.readFileSync(file, "utf8")).data : null;
};
const isIndexable = (data) => data && !data.noindex && !data.hidden;

const linked = new Set();
const problems = [];
// Markdown links and bare URLs, such as the ones in the corrections. A URL
// with a placeholder, such as err_ngrok_<code>.md, stops at the "<" and is skipped.
for (const [match] of llmsTxt.matchAll(/https:\/\/ngrok\.com\/docs\/[^\s)<>`]+/g)) {
  const url = match.replace(/[.,;:]+$/, "");
  const rel = url.slice(DOCS_URL.length);
  // Mintlify generates /_llms/ indexes and llms-full.txt at build time, so
  // they aren't in the repo.
  if (rel.startsWith("_llms/") || rel === "llms-full.txt") continue;
  if (!rel.endsWith(".md")) {
    if (/\.\w+$/.test(rel) && !fs.existsSync(path.join(root, rel))) {
      problems.push(`llms.txt links to ${url}, which doesn't exist.`);
    }
    continue;
  }
  const page = rel.slice(0, -".md".length);
  linked.add(page);
  if (!isIndexable(readPage(page))) {
    problems.push(`llms.txt links to ${url}, but that page doesn't exist or is marked noindex or hidden.`);
  }
}

for (const tabName of HAND_LISTED_TABS) {
  const tab = docsJson.navigation.tabs.find((t) => t.tab === tabName);
  if (!tab) {
    problems.push(`docs.json has no "${tabName}" tab. Update HAND_LISTED_TABS in custom/scripts/check-llms-txt.js.`);
    continue;
  }
  const walk = (node) => {
    if (typeof node === "string") {
      const page = node.replace(/^\//, "");
      if (isIndexable(readPage(page)) && !linked.has(page)) {
        problems.push(`${page} (${tabName} tab) isn't in llms.txt. Add a line for it: - [Title](${DOCS_URL}${page}.md): Description`);
      }
      return;
    }
    if (node.hidden) return;
    for (const child of [...(node.anchors || []), ...(node.groups || []), ...(node.pages || [])]) walk(child);
  };
  walk(tab);
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log(`llms.txt links ${linked.size} docs pages and covers every page in the ${HAND_LISTED_TABS.join(", ")} tabs.`);
