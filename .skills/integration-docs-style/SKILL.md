---
name: integration-docs-style
description: Applies ngrok integration docs style rules when writing or editing "using ngrok with" guides, integration docs, or MDX in using-ngrok-with. Use when creating or revising integration documentation, when the user asks for style compliance, or when editing files in using-ngrok-with.
---

# Integration Docs Style

Apply this skill when writing or editing ngrok integration documentation (e.g. guides under `using-ngrok-with/`).

## When to use

- Creating or revising integration docs (e.g. `using-ngrok-with/*.mdx`)
- User asks for style compliance or to follow the integration docs style guide
- Auditing or cleaning up existing integration pages

## Quick checklist

Before submitting edits, verify:

**Structure**
- Intro paragraph below Tip/frontmatter; present tense; varied phrasing (not always "This guide covers...")
- No redundant title heading: do not add an h2 that restates the page title (e.g. "Configure X for ngrok" when the title is "X OAuth"). Start with intro content, then "What you'll need" or the first real section.
- Descriptive section headers (e.g. "Configure ngrok to expose X" not "Add ngrok"); sequential steps use same heading level (all ## or all ### under a parent)
- "What you'll need" for prerequisites (not "Prerequisites:"); list items end with periods when complete sentences; link to install pages; use "Your" for user items
- No "Configuration steps" section; no TL;DR Tips; no consecutive blank lines

**Formatting**
- One sentence per line; single blank line between frontmatter/components/code/paragraphs/headings
- Note/Tip headings in sentence case with colon (e.g. **Security best practice:**); file names and URLs in backticks in body only; UI text in **bold**; `[**UI Element**](url)` for UI in links

**Lists**
- Ordered lists sequential (1., 2., 3.); no nested numbered lists inside procedural steps—use bullets or paragraphs; "Option 1"/"Option 2" for alternatives; periods only on complete-sentence list items

**Language**
- Concise, direct; contractions preferred; no "leverage", "whenever you want to", or casual phrases; "authtoken" one word; "GitHub" capitalization; acronyms (e.g. SSO) spelled out on first mention in body

**Links & media**
- Internal links: relative paths (e.g. `../traffic-policy/`); descriptive anchor text
- No UI screenshots; keep architectural diagrams; remove image markup for deleted assets; no broken image refs

**Metadata**
- Frontmatter description descriptive for SEO, 150 characters or less

## Full reference

For the complete rule set and examples, see [reference.md](reference.md).
