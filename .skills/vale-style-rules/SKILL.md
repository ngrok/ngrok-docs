---
name: vale-style-rules
description: Resolves Vale prose linter warnings and errors in documentation. Use when fixing Vale issues in PRs, when the user reports Vale errors or warnings, when editing docs and Vale is mentioned, or when prose/grammar style compliance is requested.
---

# Vale Style Rules

Apply this skill when resolving Vale linter output or when editing docs where Vale style applies.

## Verification required

**You MUST run `pnpm run vale <filename>` on the edited document and confirm 0 errors, 0 warnings, and 0 suggestions before finishing.** Do not consider the task complete until Vale reports a clean result.

## When to use

- Fixing Vale errors or warnings in a PR or file
- User asks to fix Vale issues or follow Vale style
- Editing documentation and prose/grammar style is in scope

## Quick reference

**Must fix (errors)**

- **Headings**: Sentence-style capitalization (first word + proper nouns only). Add product-name exceptions in `.vale/styles/StyleRules/Headings.yml` if needed.
- **Spacing**: One space after sentence-ending punctuation; no spaces around em/en dashes. Use a colon (not em dash) after a label/bold phrase that introduces an explanation.
- **Oxford comma**: Use comma before "and"/"or" in lists of three or more.
- **Frontmatter**: Every doc needs a `description` field (~150 chars, ends with a period).

**Should fix (warnings)**

- **Person**: Address the reader as "you"; avoid first-person (we, our, let's). Exceptions: "Let's Encrypt", "US".
- **Time**: "3:00 PM" / "9:30 AM" (space, uppercase, no periods).
- **Dates**: "Month Day, Year" (e.g. July 31, 2016).
- **Ellipses**: Use `…` not `...`.
- **Tone**: No exclamation points; use they/them/their (gender-neutral).
- **Headings**: No period at end of heading.
- **Latin**: Use "for example", "that is" instead of e.g., i.e.
- **Hyphens**: No hyphen after -ly words (e.g. "recently updated" not "recently-updated").
- **Plurals**: Avoid optional plural in parentheses (e.g. "user(s)"); choose singular or plural.
- **Acronyms**: No periods (API, HTTP, not A.P.I.).
- **Spelling**: American (e.g. organized, color, center).
- **ngrok terms**: Capitalize Traffic Policy, Kubernetes Operator, Traffic Inspector, Cloud Endpoint, Agent Endpoint.

## Full reference

For error/warning text, examples, and exceptions, see [reference.md](reference.md).
