#!/usr/bin/env node

/**
 * Generates an llms.txt-style index of every ngrok error page.
 *
 * Mintlify's generated llms.txt only lists pages in the navigation, so the
 * individual errors/err_ngrok_* pages never appear in it. This script writes
 * errors/llms.txt, which links to one sub-index per error code range at
 * errors/llms/<range>/llms.txt, mirroring the split indexes Mintlify serves
 * under /_llms/. Every file is named llms.txt because Mintlify only serves
 * other .txt files on Enterprise plans.
 *
 * Run after error pages change: node custom/scripts/generate-errors-llms-txt.js
 */

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const BASE_URL = "https://ngrok.com/docs";
const errorsDir = path.join(__dirname, "../../errors");
const subIndexDir = path.join(errorsDir, "llms");

const frontmatter = (file) =>
  matter(fs.readFileSync(path.join(errorsDir, file), "utf8")).data;
const linkText = (text) => text.replace(/([[\]])/g, "\\$1");
const pageLink = (slug, title, description) =>
  `- [${linkText(title)}](${BASE_URL}/errors/${slug}.md)` +
  (description ? `: ${description}` : "");

// Group numeric codes by thousand (10000 and above share one group) and put
// named codes, such as ERR_NGROK_SHIP_APP_NOT_FOUND, in their own group.
const groups = new Map();
for (const file of fs.readdirSync(errorsDir)) {
  const match = file.match(/^err_ngrok_(.+)\.mdx$/);
  if (!match) continue;

  const code = /^\d+$/.test(match[1]) ? Number(match[1]) : null;
  let group;
  if (code === null) {
    group = { slug: "named", order: Infinity, title: "Named error codes",
      description: "Error codes that use a name instead of a number, such as ERR_NGROK_SHIP_APP_NOT_FOUND." };
  } else if (code >= 10000) {
    group = { slug: "10000-and-above", order: 10000, title: "ERR_NGROK_10000 and above",
      description: "Error codes ERR_NGROK_10000 and higher." };
  } else {
    const start = Math.floor(code / 1000) * 1000;
    const end = start + 999;
    group = { slug: `${start}-${end}`, order: start, title: `ERR_NGROK_${start}-${end}`,
      description: `Error codes ERR_NGROK_${start} through ERR_NGROK_${end}.` };
  }

  if (!groups.has(group.slug)) groups.set(group.slug, { ...group, errors: [] });
  groups.get(group.slug).errors.push({
    slug: file.slice(0, -".mdx".length),
    code,
    title: frontmatter(file).title,
  });
}

const sortedGroups = [...groups.values()].sort((a, b) => a.order - b.order);

fs.rmSync(subIndexDir, { recursive: true, force: true });
fs.mkdirSync(subIndexDir);

for (const group of sortedGroups) {
  group.errors.sort((a, b) =>
    a.code !== null && b.code !== null ? a.code - b.code : a.slug.localeCompare(b.slug)
  );
  const lines = [
    `# ngrok documentation: Errors / ${group.title}`,
    "",
    `## ${group.title}`,
    "",
    ...group.errors.map((error) => pageLink(error.slug, error.title)),
  ];
  fs.mkdirSync(path.join(subIndexDir, group.slug));
  fs.writeFileSync(path.join(subIndexDir, group.slug, "llms.txt"), lines.join("\n") + "\n");
}

const overview = frontmatter("index.mdx");
const reference = frontmatter("reference.mdx");
const total = sortedGroups.reduce((sum, group) => sum + group.errors.length, 0);

const index = [
  "# ngrok documentation: Errors",
  "",
  `> Index of all ${total} ngrok error codes (ERR_NGROK_*). Each error page explains what the error means and how to fix it. To read one error directly, fetch ${BASE_URL}/errors/err_ngrok_<code>.md with the code in lowercase, such as ${BASE_URL}/errors/err_ngrok_8012.md.`,
  "",
  "## Errors",
  "",
  pageLink("index", overview.title, overview.description),
  pageLink("reference", reference.title, reference.description),
  "",
  "## Indexes",
  "",
  "> The links below point to error code indexes. Follow each index to reach the error pages.",
  "",
  ...sortedGroups.map(
    (group) =>
      `- [${group.title} (${group.errors.length} errors)](${BASE_URL}/errors/llms/${group.slug}/llms.txt): ${group.description}`
  ),
];
fs.writeFileSync(path.join(errorsDir, "llms.txt"), index.join("\n") + "\n");

// List every error page in a hidden, searchable group of the Errors navigation.
// Mintlify then includes the pages in its own llms.txt, the sitemap, and site
// search without showing them in the sidebar. Only the pages array that holds
// errors/index is rewritten, so the rest of docs.json keeps its formatting.
// The boost below 1 keeps error pages from crowding out guides in site search
// for general words, while a search for an error code still ranks its page first.
const NAV_GROUP = "Error codes";
const NAV_GROUP_SEARCH_BOOST = 0.5;
const docsJsonPath = path.join(__dirname, "../../docs.json");
const docsJson = fs.readFileSync(docsJsonPath, "utf8");

const pagesKey = docsJson.lastIndexOf('"pages": [', docsJson.indexOf('"errors/index"'));
if (pagesKey === -1) throw new Error('Could not find the navigation pages array with "errors/index" in docs.json');
const arrayStart = docsJson.indexOf("[", pagesKey);
let arrayEnd = arrayStart;
for (let depth = 0, inString = false; ; arrayEnd++) {
  const char = docsJson[arrayEnd];
  if (inString) {
    if (char === "\\") arrayEnd++;
    else if (char === '"') inString = false;
  } else if (char === '"') inString = true;
  else if (char === "[") depth++;
  else if (char === "]" && --depth === 0) break;
}

const pages = JSON.parse(docsJson.slice(arrayStart, arrayEnd + 1)).filter((page) => page.group !== NAV_GROUP);
pages.push({
  group: NAV_GROUP,
  hidden: true,
  searchable: true,
  boost: NAV_GROUP_SEARCH_BOOST,
  pages: sortedGroups.map((group) => ({
    group: group.title,
    pages: group.errors.map((error) => `errors/${error.slug}`),
  })),
});

const indent = docsJson.slice(docsJson.lastIndexOf("\n", pagesKey) + 1, pagesKey);
const pagesJson = JSON.stringify(pages, null, 2).replace(/\n/g, `\n${indent}`);
fs.writeFileSync(docsJsonPath, docsJson.slice(0, arrayStart) + pagesJson + docsJson.slice(arrayEnd + 1));

console.log(
  `Wrote errors/llms.txt, ${sortedGroups.length} sub-indexes, and the "${NAV_GROUP}" navigation group covering ${total} errors.`
);
