#!/usr/bin/env node

/**
 * Checks the hand-written root llms.txt against the docs.
 *
 * Fails when:
 * - A page in one of the tabs listed in HAND_LISTED_TABS isn't covered.
 *   Mintlify gives these tabs no /_llms/ index, so a page counts as covered
 *   only when it's linked from llms.txt, from an index in this repo that
 *   llms.txt links to (such as share-localhost/llms.txt), or from the
 *   navigation of a tab that Mintlify does index (such as the identity and
 *   access pages, which are also in the Gateway tab).
 * - llms.txt, or a repo index it links to, links to a docs page that doesn't
 *   exist or is marked noindex or hidden, or to a file that doesn't exist.
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

// The frontmatter of a page, or null when the page has no file.
const readPage = (page) => {
  const file = [".mdx", ".md"].map((ext) => path.join(root, page + ext)).find(fs.existsSync);
  return file ? matter(fs.readFileSync(file, "utf8")).data : null;
};
const isIndexable = (data) => data && !data.noindex && !data.hidden;

const covered = new Set();
const problems = [];

// Checks the docs links in one llms.txt file, adds its pages to `covered`, and
// returns the repo index files it links to. Matches Markdown links and bare
// URLs, such as the ones in the corrections. A URL with a placeholder, such as
// err_ngrok_<code>.md, stops at the "<" and is skipped.
const checkFile = (file) => {
  const indexes = [];
  for (const [match] of fs.readFileSync(path.join(root, file), "utf8").matchAll(/https:\/\/ngrok\.com\/docs\/[^\s)<>`]+/g)) {
    const url = match.replace(/[.,;:]+$/, "");
    const rel = url.slice(DOCS_URL.length);
    // Mintlify generates /_llms/ indexes and llms-full.txt at build time, so
    // they aren't in the repo.
    if (rel.startsWith("_llms/") || rel === "llms-full.txt") continue;
    if (rel.endsWith(".md")) {
      const page = rel.slice(0, -".md".length);
      covered.add(page);
      if (!isIndexable(readPage(page))) {
        problems.push(`${file} links to ${url}, but that page doesn't exist or is marked noindex or hidden.`);
      }
    } else if (/\.\w+$/.test(rel)) {
      if (!fs.existsSync(path.join(root, rel))) problems.push(`${file} links to ${url}, which doesn't exist.`);
      else if (rel.endsWith("llms.txt")) indexes.push(rel);
    }
  }
  return indexes;
};

for (const index of checkFile("llms.txt")) checkFile(index);

// Collects the indexable pages of a navigation node, skipping hidden groups.
const navPages = (node, pages = []) => {
  if (typeof node === "string") {
    const page = node.replace(/^\//, "");
    if (isIndexable(readPage(page))) pages.push(page);
  } else if (!node.hidden) {
    for (const child of [...(node.menu || []), ...(node.anchors || []), ...(node.groups || []), ...(node.pages || [])]) {
      navPages(child, pages);
    }
  }
  return pages;
};

for (const tab of docsJson.navigation.tabs) {
  if (!HAND_LISTED_TABS.includes(tab.tab)) navPages(tab).forEach((page) => covered.add(page));
}

for (const tabName of HAND_LISTED_TABS) {
  const tab = docsJson.navigation.tabs.find((t) => t.tab === tabName);
  if (!tab) {
    problems.push(`docs.json has no "${tabName}" tab. Update HAND_LISTED_TABS in custom/scripts/check-llms-txt.js.`);
    continue;
  }
  for (const page of navPages(tab)) {
    if (!covered.has(page)) {
      const target = tabName === "Share Localhost" ? "share-localhost/llms.txt" : "llms.txt";
      problems.push(
        `${page} (${tabName} tab) isn't in llms.txt or an index it links to. ` +
          `Add a line for it to ${target}: - [Title](${DOCS_URL}${page}.md): Description`
      );
    }
  }
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log(`llms.txt and its repo indexes cover every page in the ${HAND_LISTED_TABS.join(", ")} tabs.`);
