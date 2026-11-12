#!/usr/bin/env node

/**
 * Generates the ngrok CLI reference from data/generated/cli.json.
 *
 * The ngrok monorepo dumps the CLI's commands and flags as JSON
 * (`ngrok internal dump-cli-schema`). This repository owns how they are
 * presented.
 *
 * Writes:
 *   gateway/agent/cli.mdx       every command except `ngrok api`
 *   gateway/agent/cli-api.mdx   `ngrok api` and its subcommands
 *
 * Reads hand-written prose from:
 *   custom/cli/commands/<command>.mdx   added after the command's description,
 *                                       such as ngrok-config-add-authtoken.mdx
 *
 * Usage:
 *   node custom/scripts/generate-cli-pages.js           write the files
 *   node custom/scripts/generate-cli-pages.js --check   fail if any file is stale
 */

const path = require("path");
const { root, readOptional, loadData, writeOrCheck, orphanedProse } = require("./lib/generated-docs");

const proseDir = path.join(root, "custom/cli/commands");

const GENERATED_NOTE =
  "{/* This file is generated from data/generated/cli.json by custom/scripts/generate-cli-pages.js. Don't edit it directly. */}";

const CLI_PAGE_HEAD = `---
title: ngrok Agent Command Line Interface (CLI)
sidebarTitle: CLI
description: Look up the usage, examples, and flags for every ngrok CLI command, including ngrok http, ngrok config, and ngrok service.
---

${GENERATED_NOTE}

# ngrok Command Line Interface (CLI)

The ngrok CLI offers built-in commands for interfacing with the ngrok API. These API commands have been separated into
the [ngrok CLI API page](/gateway/agent/cli-api) for convenience. For more information about the ngrok API and interfacing with it directly, see [the ngrok api page](/gateway/agent/api).

`;

const API_PAGE_HEAD = `---
title: ngrok CLI API Commands
sidebarTitle: CLI API Commands
description: Look up the usage and flags for every ngrok api command, which manages the resources in your ngrok account from the command line.
---

${GENERATED_NOTE}


With the ngrok CLI, you can use built-in commands to interact with the ngrok API.
For more information about the ngrok API and interfacing with it directly, see [the ngrok api page](/api).

<Tip>

If you want to programmatically control the ngrok agent, the [Agent
SDKs](/agent-sdks/) are usually a more flexible and powerful choice.

</Tip>

`;

// The prose file for a command: its full name with hyphens for spaces.
const proseKey = (cmd) => cmd.full_name.replaceAll(" ", "-");

// A field the CLI omits is absent or null. An empty string still counts as set.
const has = (value) => value !== undefined && value !== null;

function commandSection(cmd) {
  let out = `## ${cmd.full_name}\n`;
  if (has(cmd.deprecated)) out += `\n**This command is deprecated**  \n${cmd.deprecated}\n`;
  out += "\n" + (has(cmd.long_description) ? cmd.long_description : cmd.short_description);

  const prose = readOptional(path.join(proseDir, `${proseKey(cmd)}.mdx`));
  if (prose !== null) out += "\n\n" + prose.trim();

  if (has(cmd.usage)) out += `\n\n### Usage\n\n\`\`\`sh\n${cmd.usage}\n\`\`\``;
  if (has(cmd.example)) out += `\n\n### Example\n\n\`\`\`sh\n${cmd.example}\n\`\`\``;

  if (cmd.sub_commands?.length) {
    out +=
      "\n\n### SubCommands\n\n" +
      "| Command                         | Description                                                   |\n" +
      "| ------------------------------- | ------------------------------------------------------------- |";
    for (const sub of cmd.sub_commands) {
      const label = sub.short_name + (has(sub.deprecated) ? " (deprecated)" : "");
      const desc = has(sub.deprecated) ? sub.deprecated : sub.short_description;
      out += `\n| [${label}](${sub.docs_link})    | ${desc}                                          |`;
    }
  }

  if (cmd.flags?.length) {
    out +=
      "\n\n### Flags\n\n" +
      "| Flag              | Description                             |\n" +
      "| ----------------- | --------------------------------------- |";
    for (const flag of cmd.flags) {
      const short = flag.short_name ? ` \`-${flag.short_name}\`, ` : "";
      const label = `${short} \`--${flag.full_name}\`` + (has(flag.deprecated) ? " (deprecated)" : "");
      const desc = has(flag.deprecated) ? flag.deprecated : flag.description;
      out += `\n| ${label} | ${desc} |`;
    }
  }

  return out + "\n";
}

// Commands sorted by full name, so each parent comes before its subcommands.
const pageBody = (commands) =>
  [...commands]
    .sort((a, b) => (a.full_name < b.full_name ? -1 : a.full_name > b.full_name ? 1 : 0))
    .map((cmd) => commandSection(cmd) + "\n\n")
    .join("");

function main() {
  const commands = [];
  const walk = (cmd) => {
    commands.push(cmd);
    for (const sub of cmd.sub_commands ?? []) walk(sub);
  };
  for (const cmd of loadData("cli", 1)) walk(cmd);

  const orphans = orphanedProse(proseDir, "", new Set(commands.map(proseKey)));

  const isApi = (cmd) => cmd.full_name.startsWith("ngrok api");
  const want = new Map([
    [path.join(root, "gateway/agent/cli.mdx"), CLI_PAGE_HEAD + pageBody(commands.filter((c) => !isApi(c))) + "\n"],
    [path.join(root, "gateway/agent/cli-api.mdx"), API_PAGE_HEAD + pageBody(commands.filter(isApi)) + "\n"],
  ]);

  writeOrCheck({ name: "CLI page", script: "generate-cli-pages", want, orphans });
}

main();
