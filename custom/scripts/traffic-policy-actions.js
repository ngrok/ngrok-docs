#!/usr/bin/env node

/**
 * Generates the Traffic Policy action list from gateway/traffic-policy/actions.json.
 *
 * actions.json is the source of truth. It is published at
 * https://ngrok.com/docs/gateway/traffic-policy/actions.json for agents and tools.
 * This script checks it against each action page and writes:
 *   - snippets/traffic-policy/actions-data.jsx (data for the interactive ActionHub)
 *   - snippets/traffic-policy/actions-list.mdx (the Markdown table agents read)
 *
 * Usage:
 *   node custom/scripts/traffic-policy-actions.js          # write the generated files
 *   node custom/scripts/traffic-policy-actions.js --check  # fail if anything is out of date
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '../..');
const SOURCE = 'gateway/traffic-policy/actions.json';
const PAGES_DIR = 'gateway/traffic-policy/actions';
const URL_PREFIX = 'https://ngrok.com/docs/gateway/traffic-policy/actions/';
const PHASES = ['on_tcp_connect', 'on_http_request', 'on_http_response', 'on_event_stream_message'];
const OUTPUTS = {
    data: 'snippets/traffic-policy/actions-data.jsx',
    list: 'snippets/traffic-policy/actions-list.mdx',
};
const HEADER = `Generated from ${SOURCE} by custom/scripts/traffic-policy-actions.js. Do not edit.`;

const read = (file) => fs.readFileSync(path.join(ROOT, file), 'utf8');

// Returns the body of a "### <title>" section, up to the next heading.
function section(page, title) {
    const match = page.match(new RegExp(`^### ${title}\\n([\\s\\S]*?)(?=^#)`, 'm'));
    return match ? match[1] : null;
}

function validate(actions) {
    const errors = [];
    actions.forEach((action, i) => {
        const where = action.type || `entry ${i}`;
        for (const field of ['type', 'name', 'description', 'url']) {
            if (typeof action[field] !== 'string' || !action[field]) errors.push(`${where}: missing "${field}"`);
        }
        if (typeof action.terminating !== 'boolean') errors.push(`${where}: "terminating" must be true or false`);
        if (!Array.isArray(action.phases) || !action.phases.length) {
            errors.push(`${where}: "phases" must be a non-empty array`);
            return;
        }
        const unknown = action.phases.filter((phase) => !PHASES.includes(phase));
        if (unknown.length) errors.push(`${where}: unknown phases ${unknown.join(', ')}`);
        if (i > 0 && actions[i - 1].type >= action.type) errors.push(`${where}: entries must be sorted by unique "type"`);
        if (typeof action.url !== 'string' || !action.url.startsWith(URL_PREFIX)) {
            errors.push(`${where}: "url" must start with ${URL_PREFIX}`);
            return;
        }

        const pageFile = `${PAGES_DIR}/${action.url.slice(URL_PREFIX.length)}.mdx`;
        if (!fs.existsSync(path.join(ROOT, pageFile))) {
            errors.push(`${where}: ${pageFile} does not exist`);
            return;
        }
        const page = read(pageFile);
        const pageType = (section(page, 'Type') || '').match(/`([^`]+)`/);
        if (!pageType) errors.push(`${where}: ${pageFile} has no "### Type" section`);
        else if (pageType[1] !== action.type) errors.push(`${where}: ${pageFile} says the type is "${pageType[1]}"`);

        const pagePhases = (section(page, 'Supported phases') || '').match(/on_[a-z_]+/g) || [];
        const sorted = (list) => [...list].sort().join(', ');
        if (!pagePhases.length) errors.push(`${where}: ${pageFile} has no "### Supported phases" section`);
        else if (sorted(pagePhases) !== sorted(action.phases)) {
            errors.push(`${where}: ${pageFile} lists phases ${sorted(pagePhases)}, not ${sorted(action.phases)}`);
        }
    });
    return errors;
}

function generate(actions) {
    const data = actions.map(({ url, ...action }) => ({
        ...action,
        path: `/gateway/traffic-policy/actions/${url.slice(URL_PREFIX.length)}`,
    }));
    const rows = data.map((action) => [
        `[\`${action.type}\`](${action.path})`,
        action.name,
        action.phases.map((phase) => `\`${phase}\``).join(', '),
        action.terminating ? 'Yes' : 'No',
        action.description,
    ]);
    return {
        data: `// ${HEADER}\n\nexport const actions = ${JSON.stringify(data, null, 2)};\n`,
        list: [
            `{/* ${HEADER} */}`,
            '',
            '| Type | Name | Phases | Terminating | Description |',
            '| --- | --- | --- | --- | --- |',
            ...rows.map((cells) => `| ${cells.join(' | ')} |`),
            '',
        ].join('\n'),
    };
}

const { actions } = JSON.parse(read(SOURCE));
const errors = validate(actions);
if (errors.length) {
    console.error(`${SOURCE} does not match the action pages:\n- ${errors.join('\n- ')}`);
    process.exit(1);
}

const outputs = generate(actions);
if (process.argv.includes('--check')) {
    const stale = Object.keys(OUTPUTS).filter((key) => {
        const file = path.join(ROOT, OUTPUTS[key]);
        return !fs.existsSync(file) || fs.readFileSync(file, 'utf8') !== outputs[key];
    });
    if (stale.length) {
        console.error(`Out of date: ${stale.map((key) => OUTPUTS[key]).join(', ')}. Run: pnpm traffic-policy-actions`);
        process.exit(1);
    }
    console.log(`${actions.length} Traffic Policy actions match their pages and generated files.`);
} else {
    for (const key of Object.keys(OUTPUTS)) fs.writeFileSync(path.join(ROOT, OUTPUTS[key]), outputs[key]);
    console.log(`Wrote ${Object.values(OUTPUTS).join(' and ')} from ${actions.length} actions.`);
}
