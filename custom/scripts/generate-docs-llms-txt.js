#!/usr/bin/env node

/**
 * Generates the documentation indexes in llms.txt.
 *
 * The root llms.txt replaces the one Mintlify generates. Its top part, down to
 * the "## Documentation indexes" heading, is written by hand: what ngrok is,
 * key pages, and corrections for out-of-date training data. This script
 * rewrites everything from that heading on, and writes one index per
 * navigation tab at llms/<tab>/llms.txt that lists every page in the tab.
 * Every file is named llms.txt because Mintlify only serves other .txt files
 * on Enterprise plans.
 *
 * Like Mintlify's generated llms.txt, the indexes skip hidden navigation
 * groups and pages marked noindex or hidden. The hidden "Error codes" group
 * has its own index at errors/llms.txt (generate-errors-llms-txt.js).
 *
 * Run after the navigation or page titles and descriptions change:
 * node custom/scripts/generate-docs-llms-txt.js
 */

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const BASE_URL = "https://ngrok.com/docs";
const root = path.join(__dirname, "../..");
const llmsTxtPath = path.join(root, "llms.txt");
const indexDir = path.join(root, "llms");
const MARKER = "## Documentation indexes";

const docsJson = JSON.parse(fs.readFileSync(path.join(root, "docs.json"), "utf8"));
const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const linkText = (text) => String(text).replace(/([[\]])/g, "\\$1");
const oneLine = (text) => String(text).replace(/\s+/g, " ").trim();

const readPage = (page) => {
  const file = [".mdx", ".md"].map((ext) => path.join(root, page + ext)).find(fs.existsSync);
  return file ? matter(fs.readFileSync(file, "utf8")).data : null;
};

// API reference pages generated from an OpenAPI spec have no title, so name
// them after their group and operation, such as
// "Access Keys: List (GET /access-keys)".
const pageTitle = (page, data, section) => {
  if (data.title) return data.title;
  const action = path.basename(page).replace(/-/g, " ");
  const operation = data.openapi ? data.openapi.split(" ").slice(-2).join(" ") : "";
  const group = section[section.length - 1];
  return `${group ? `${group}: ` : ""}${action[0].toUpperCase()}${action.slice(1)}` +
    (operation ? ` (${operation.replace(/^[a-z]+/, (m) => m.toUpperCase())})` : "");
};

const tabs = docsJson.navigation.tabs.map((tab) => {
  const sections = new Map();
  const pages = new Set();
  const titles = [];

  const walk = (node, trail) => {
    if (typeof node === "string") {
      const page = node.replace(/^\//, "");
      const data = readPage(page);
      if (!data || data.noindex || data.hidden) return;
      const heading = trail.join(" / ") || tab.tab;
      const title = pageTitle(page, data, trail);
      if (!sections.has(heading)) sections.set(heading, []);
      sections.get(heading).push(
        `- [${linkText(title)}](${BASE_URL}/${page}.md)` +
          (data.description ? `: ${oneLine(data.description)}` : "")
      );
      pages.add(page);
      titles.push(title);
      return;
    }
    if (node.hidden) return;
    // Anchors and groups that repeat the tab name, such as the Gateway anchor
    // in the Gateway tab, add nothing to a heading.
    const name = node.anchor || node.group || node.item;
    const childTrail = name && name !== tab.tab ? [...trail, name] : trail;
    for (const child of [...(node.menu || []), ...(node.anchors || []), ...(node.groups || []), ...(node.pages || [])]) {
      walk(child, childTrail);
    }
  };
  walk(tab, []);

  const topSections = [...new Set([...sections.keys()].map((heading) => heading.split(" / ")[0]))]
    .filter((heading) => heading !== tab.tab);
  // A tab without sections, such as Pricing, is summarized by its page titles.
  const summary = (topSections.length ? topSections : titles).join(", ");
  return { title: tab.tab, slug: slugify(tab.tab), sections, pages, summary };
}).filter((tab) => tab.pages.size > 0);

fs.rmSync(indexDir, { recursive: true, force: true });
for (const tab of tabs) {
  const lines = [
    `# ngrok documentation: ${tab.title}`,
    "",
    `> Every page in the ${tab.title} section of the ngrok docs (${tab.pages.size} pages). Each link points to the page's Markdown version.`,
  ];
  for (const [heading, links] of tab.sections) lines.push("", `## ${heading}`, "", ...links);
  fs.mkdirSync(path.join(indexDir, tab.slug), { recursive: true });
  fs.writeFileSync(path.join(indexDir, tab.slug, "llms.txt"), lines.join("\n") + "\n");
}

const llmsTxt = fs.readFileSync(llmsTxtPath, "utf8");
const markerAt = llmsTxt.indexOf(`\n${MARKER}\n`);
if (markerAt === -1) throw new Error(`llms.txt has no "${MARKER}" heading to write the indexes under`);

const generated = [
  MARKER,
  "",
  "> Generated from the docs navigation. Together these indexes list every documentation page. Follow an index to reach its pages. Error codes have their own index at https://ngrok.com/docs/errors/llms.txt.",
  "",
  ...tabs.map(
    (tab) =>
      `- [${tab.title} (${tab.pages.size} pages)](${BASE_URL}/llms/${tab.slug}/llms.txt): ${tab.summary}.`
  ),
];
fs.writeFileSync(llmsTxtPath, llmsTxt.slice(0, markerAt + 1) + generated.join("\n") + "\n");

const total = new Set(tabs.flatMap((tab) => [...tab.pages])).size;
console.log(`Wrote llms.txt and ${tabs.length} indexes in llms/ covering ${total} pages.`);
