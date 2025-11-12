# Agent Release Update Plan

This document describes how to update the ngrok documentation when a new agent version is released.

## Files to Update

1. `agent/changelog.mdx` - Complete changelog of all agent changes
2. `whats-new.mdx` - User-facing announcement of notable features
3. `agent/version-support-policy.mdx` - Support lifecycle table (automated via script)

## Step 1: Gather Changes from GitHub

The source of truth for what changed in a release are **closed/merged pull requests** in the `ngrok-private/ngrok` repository labeled with `@meta/agent-needs-changelog`.

### Query GitHub for Labeled PRs

Use the GitHub API or CLI to find all merged PRs with the label since the last agent release:

```bash
# Using GitHub CLI (gh)
gh pr list \
  --repo ngrok-private/ngrok \
  --label "@meta/agent-needs-changelog" \
  --state merged \
  --limit 100 \
  --json number,title,mergedAt,url

# Using the librarian tool (from within an agent session)
# Query: "Find all merged pull requests in ngrok-private/ngrok with the label @meta/agent-needs-changelog 
# merged after [LAST_RELEASE_DATE]. List the PR title, number, and description."
```

### What to Extract from Each PR

For each PR, note:
- **PR title** - Usually summarizes the change
- **PR description** - May contain more details about user-facing impacts
- **Merge date** - To verify it's after the last release
- **PR number and URL** - For reference

## Step 2: Update agent/changelog.mdx

### Location in File

All v3 changes go under the `## v3` section at the top of the file.

New releases are added **at the very top** of the v3 section, right after the `## v3` heading.

### Format

```markdown
### ngrok agent [VERSION] \[YYYY-MM-DD\]

- [Change description from PR 1]
- [Change description from PR 2]
- [Change description from PR 3]
```

**Important formatting notes:**
- Version format: `X.Y.Z` (e.g., `3.33.0`)
- Date format: `\[YYYY-MM-DD\]` with escaped brackets (e.g., `\[2025-11-12\]`)
- Each change is a bullet point starting with `- `
- Changes should be concise but complete
- Include ALL changes from labeled PRs, even minor bug fixes

### Example Entry

```markdown
### ngrok agent 3.33.0 \[2025-11-12\]

- Fix a bug that could result in pooling being disabled via the API or Dashboard
```

### Editorial Guidelines

- Use sentence case for change descriptions
- Start with an action verb (Fix, Add, Update, Remove, etc.)
- Be specific about what changed
- If a change includes a link to docs, use the format: `[link text](/path/to/doc/)`
- For security fixes, clearly mark them as such
- Group related changes if it makes sense, but generally keep each PR as a separate bullet

## Step 3: Update whats-new.mdx

### When to Update

Only update `whats-new.mdx` if the release contains **user-visible changes** such as:
- New features
- Major bug fixes
- Breaking changes
- Security fixes
- Significant improvements

Do NOT update `whats-new.mdx` for:
- Internal refactoring
- Minor bug fixes that don't affect user experience
- Dependency updates
- Code cleanup

### Location in File

Entries are organized by **month** (e.g., `## October 2025`).

Add the entry under the appropriate month section, at the top of that section.

### Format

```markdown
- YYYY-MM-DD - [Description] Released [ngrok Agent vX.Y.Z](/agent/changelog/#ngrok-agent-xyz---yyyy-mm-dd).
```

**Important formatting notes:**
- Date format: `YYYY-MM-DD` (no brackets, unlike changelog.mdx)
- Link format: `/agent/changelog/#ngrok-agent-xyz---yyyy-mm-dd` (lowercase, dashes, full date)
- The anchor link format is: version number with dots removed + three dashes + full date

### Example Entries

```markdown
## October 2025

- 2025-10-23 - Released [ngrok Agent v3.32.0](/agent/changelog/#ngrok-agent-3320---2025-10-23).
- 2025-10-20 - Released [ngrok Agent v3.31.0](/agent/changelog/#ngrok-agent-3310---2025-10-20).
```

If there are notable features to highlight:

```markdown
- 2025-08-07 - Added support for supplying a traffic policy to endpoints created with `ngrok http` and `ngrok api` using the `--traffic-policy-url` flag.
```

### Editorial Guidelines

- Focus on user impact, not internal implementation
- Link to relevant documentation pages when introducing new features
- If referencing a blog post announcement, include the link: `([announcement](https://ngrok.com/blog-post/slug))`
- Keep descriptions brief - users can click through to the changelog for details

## Step 4: Update agent/version-support-policy.mdx

This is **automated via script**. See `update-agent-version-support.js`.

Run the script and provide:
- New version number (e.g., `3.33.0`)
- Release date (defaults to today)

The script will:
- Add a new row for the version
- Update the "Latest" column for the version family (e.g., 3.33.x)
- Calculate Active Support end date (12 months after release)
- Calculate End of Life date (14 months after release)
- Update Support Status for all versions based on current date

## Complete Example Workflow

Let's say we're releasing agent v3.34.0 on 2025-12-15:

### 1. Gather changes

```bash
gh pr list --repo ngrok-private/ngrok --label "@meta/agent-needs-changelog" --state merged --search "merged:>2025-11-12"
```

Found PRs:
- #1234: "Add support for HTTP/3"
- #1235: "Fix crash when using --log-format=json with TCP endpoints"

### 2. Update changelog.mdx

Add at the top of the `## v3` section:

```markdown
### ngrok agent 3.34.0 \[2025-12-15\]

- Add support for HTTP/3 protocol for HTTP endpoints
- Fix crash when using `--log-format=json` with TCP endpoints
```

### 3. Update whats-new.mdx

HTTP/3 support is a new feature, so add under `## December 2025`:

```markdown
## December 2025

- 2025-12-15 - Added support for HTTP/3 protocol for HTTP endpoints in [ngrok Agent v3.34.0](/agent/changelog/#ngrok-agent-3340---2025-12-15).
```

### 4. Update version-support-policy.mdx

```bash
node update-agent-version-support.js
# Enter version: 3.34.0
# Enter release date (YYYY-MM-DD) [2025-12-15]: <enter>
```

## Final Checklist

Before committing:

- [ ] Verified all labeled PRs are included in changelog.mdx
- [ ] Checked date formats are correct in both files
- [ ] Ensured whats-new.mdx only includes user-visible changes
- [ ] Ran the version support script
- [ ] Links in whats-new.mdx point to the correct changelog anchor
- [ ] Month section exists in whats-new.mdx (add if needed)
- [ ] Changes are at the TOP of their respective sections
- [ ] Reviewed for typos and clarity
