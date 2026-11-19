// Shared helpers for the scripts that build pages from data/generated/*.json,
// which the ngrok monorepo pushes to this repository.

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "../../..");

const readOptional = (file) => (fs.existsSync(file) ? fs.readFileSync(file, "utf8") : null);

// Reads data/generated/<name>.json and checks it has a schema this repository supports.
function loadData(name, supportedVersion) {
  const file = path.join(root, "data/generated", `${name}.json`);
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  if (data.schema_version !== supportedVersion) {
    throw new Error(
      `${path.relative(root, file)} has schema_version ${data.schema_version}; ` +
        `this script supports ${supportedVersion}`,
    );
  }
  return data.items;
}

// Writes each file in `want` (a Map of absolute path to contents) and deletes
// each path in `stale`. With --check, writes nothing and exits 1 if any file
// would change or any prose file in `orphans` matches nothing in the data.
//
// When writing, an orphan is only a warning. The monorepo removing an error or
// a command must not stop the auto-generated docs PR; CI fails on that PR
// instead, until someone deletes or renames the prose file.
function writeOrCheck({ name, script, want, stale = [], orphans = [] }) {
  const orphanMessage = () => {
    console.error(`These files in custom/ match nothing in data/generated/, so they aren't published:`);
    for (const f of orphans) console.error(`  ${path.relative(root, f)}`);
    console.error("Delete each one, or rename it if its error or command was renamed.");
  };

  if (process.argv.includes("--check")) {
    const wrong = [...want].filter(([file, body]) => readOptional(file) !== body).map(([file]) => file);
    const problems = [...wrong, ...stale].map((f) => path.relative(root, f));
    if (problems.length) {
      console.error(`These ${name} files don't match the data in data/generated/:`);
      for (const p of problems) console.error(`  ${p}`);
      console.error(`Don't edit generated files. Change the files in custom/, then run: pnpm run ${script}`);
    }
    if (orphans.length) orphanMessage();
    if (problems.length || orphans.length) process.exit(1);
    console.log(`All ${want.size} ${name} files are up to date.`);
    return;
  }

  if (orphans.length) orphanMessage();
  let written = 0;
  for (const [file, body] of want) {
    if (readOptional(file) !== body) {
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, body);
      written++;
    }
  }
  for (const file of stale) fs.unlinkSync(file);
  console.log(`Wrote ${written} and removed ${stale.length} ${name} files.`);
}

// The files in `dir` that aren't named <prefix><key>.mdx for a key in `keys`:
// prose for something that no longer exists, which would sit unpublished.
function orphanedProse(dir, prefix, keys) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => {
      const key = file.startsWith(prefix) && file.endsWith(".mdx") ? file.slice(prefix.length, -4) : null;
      return key === null || !keys.has(key);
    })
    .map((file) => path.join(dir, file));
}

module.exports = { root, readOptional, loadData, writeOrCheck, orphanedProse };
