#!/usr/bin/env node

/**
 * Generates the event type reference from data/generated/events.json.
 *
 * The ngrok monorepo ships each event type and its fields as JSON. This
 * repository owns how they are presented.
 *
 * Writes:
 *   snippets/obs/_event-types-tables.mdx   every event type, grouped by API
 *                                          object, which obs/events/reference.mdx
 *                                          imports
 *   snippets/obs/_<api-object>.mdx         the field table of each API object
 *                                          that an event type carries
 *
 * Usage:
 *   node custom/scripts/generate-event-pages.js           write the files
 *   node custom/scripts/generate-event-pages.js --check   fail if any file is stale
 */

const fs = require("fs");
const path = require("path");
const { root, loadData, writeOrCheck } = require("./lib/generated-docs");

const snippetsDir = path.join(root, "snippets/obs");
const tablesFile = path.join(snippetsDir, "_event-types-tables.mdx");

// The same escaping as Go's html/template HTMLEscapeString, which the
// monorepo used for field types such as map<string, string>.
const html = (s) =>
  s.replace(/[&'<>"\0]/g, (c) => ({ "&": "&amp;", "'": "&#39;", "<": "&lt;", ">": "&gt;", '"': "&#34;", "\0": "�" })[c]);

// APIKey -> api-key, IPPolicyRule -> ip-policy-rule.
const kebab = (name) =>
  name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();

const fieldsSnippet = (fields) =>
  "| Name | Type | Description |\n|---|---|---|" +
  fields.map((f) => `\n| ${f.name} | ${html(f.type)} | ${f.description} |`).join("");

function eventSection(event) {
  let out = `\n\n### \`${event.type}\`\n\n${event.description}\n\n`;
  out += event.filterable
    ? "This event type supports filters and selectable fields."
    : "This event type does not support filters or selectable fields.";
  out += "\n";

  if (event.api_object) return out + `\n<${event.api_object} />\n`;

  // An event type with no API object, such as an HTTP request, gets its own table.
  const filter = event.filterable;
  out += `\n| Name | Type | Description |${filter ? " Filterable? |" : ""}`;
  out += `\n| --- | --- | --- |${filter ? " --- |" : ""}\n`;
  for (const f of event.fields ?? []) {
    out += `| ${f.name} | ${html(f.type)} | ${f.description} |${filter && f.filterable ? " Yes |" : ""}\n`;
  }
  return out;
}

function main() {
  const events = loadData("events", 1);

  // Group by category, keeping the order of the data within each group.
  const categories = new Map();
  for (const event of events) {
    if (!categories.has(event.category)) categories.set(event.category, []);
    categories.get(event.category).push(event);
  }

  let tables = "";
  const want = new Map();
  for (const category of [...categories.keys()].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))) {
    const group = categories.get(category);
    const withObject = group.find((e) => e.api_object);
    if (withObject) {
      const obj = withObject.api_object;
      tables += `\nimport ${obj} from '/snippets/obs/_${kebab(obj)}.mdx'`;
      want.set(path.join(snippetsDir, `_${kebab(obj)}.mdx`), fieldsSnippet(withObject.fields ?? []));
    }
    tables += `\n\n## ${category}`;
    for (const event of group) tables += eventSection(event);
  }
  want.set(tablesFile, tables + "\n");

  // Field tables of API objects that no event type carries any more.
  const stale = fs
    .readdirSync(snippetsDir)
    .filter((f) => f.startsWith("_") && f.endsWith(".mdx"))
    .map((f) => path.join(snippetsDir, f))
    .filter((f) => !want.has(f));

  writeOrCheck({ name: "event reference", script: "generate-event-pages", want, stale });
}

main();
