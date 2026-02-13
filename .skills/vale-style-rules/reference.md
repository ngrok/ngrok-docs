# Vale Style Rules - Quick Reference

This guide helps you quickly resolve Vale warnings and errors in your PRs. Vale is a prose linter that runs automatically on all documentation changes.

## Important: Verification Required

**For LLMs applying Vale fixes**: You MUST run `pnpm run vale <filename>` against the document you're editing and confirm that there are **0 errors, 0 warnings, and 0 suggestions** before completing your work. Your work as a copyeditor is not done until the Vale command confirms the document is clean. Do not consider the task complete until you have verified this.

## Running Vale Locally

Run `pnpm run vale` to check your changes before submitting a PR.

## Common Vale Errors (Must Fix)

### Heading Capitalization

**Error**: "'X' should use sentence-style capitalization."

**Fix**: Use sentence case for headings (h2-h6). Capitalize only the first word and proper nouns.

- ✅ `## Getting started with ngrok`
- ✅ `## Configure your API key`
- ✅ `## Using Traffic Policies` (ngrok-specific terms are proper nouns)
- ❌ `## Getting Started With Ngrok`
- ❌ `## Configure Your API Key`

**Note**: If a product name like "Python SDK" needs to be capitalized in a heading, add it to `.vale/styles/StyleRules/Headings.yml` exceptions list.

### Sentence Spacing

**Error**: "'X' should have one space."

**Fix**: Use exactly one space after periods, question marks, or exclamation points.

- ✅ `This is a sentence. This is another.`
- ❌ `This is a sentence.  This is another.` (two spaces)
- ❌ `This is a sentence.This is another.` (no space)

### Dash Spacing

**Error**: "Don't put a space before or after a dash."

**Fix**: No spaces around em dashes (—) or en dashes (–).

- ✅ `The feature is available—check the settings.`
- ✅ `Use ngrok—it's fast and secure.`
- ❌ `The feature is available — check the settings.`
- ❌ `Use ngrok — it's fast and secure.`

**Label or heading introducing an explanation:** When an em dash is used to introduce an explanation right after a label or bold phrase (e.g., **Create IAM Role**—An IAM role is required…), replace the em dash with a colon instead. Use a colon and a space, then continue the sentence.

- ✅ `**Create IAM Role:** An IAM role is required so ngrok can stream logs.`
- ❌ `**Create IAM Role**—An IAM role is required so ngrok can stream logs.`

### Oxford Comma

**Error**: "Use the Oxford comma in 'X'."

**Fix**: Always use a comma before "and" or "or" in lists of three or more items.

- ✅ `You can use ngrok, Cloudflare, or AWS.`
- ✅ `The options include red, blue, and green.`
- ❌ `You can use ngrok, Cloudflare or AWS.`
- ❌ `The options include red, blue and green.`

### Description Required

**Error**: Missing description field.

**Fix**: Every document must have a `description` field in frontmatter (approximately 150 characters, ends with a period).

```yaml
---
title: Getting Started
description: Learn how to get started with ngrok and create your first tunnel.
---
```

## Common Vale Warnings (Should Fix)

### First-Person Pronouns

**Warning**: "Avoid first-person pronouns such as 'X'—speak to 'you' the reader instead."

**Fix**: Replace first-person pronouns (I, me, my, mine, we, our, us, let's) with "you" or imperative mood.

- ✅ `You can configure the settings.`
- ✅ `To get started, follow these steps.`
- ✅ `Configure the settings.`
- ❌ `We recommend using this approach.`
- ❌ `Let's configure the settings.`
- ❌ `Our application will receive the request.`

**Exceptions**: "Let's Encrypt" and "US" are allowed.

**Bold = UI text**: First-person pronouns inside bold (e.g. **My Local Webhook**, **My Account**) are treated as UI labels. Vale ignores them via `IgnoredScopes = strong`. Do not edit these—they are correct as-is.

### Time Format (AM/PM)

**Warning**: Incorrect AM/PM format.

**Fix**: Use "AM" or "PM" with a space before it, uppercase, no periods.

- ✅ `3:00 PM`
- ✅ `9:30 AM`
- ❌ `3:00PM`
- ❌ `9:30am`
- ❌ `3:00 P.M.`
- ❌ `9:30 a.m.`

### Date Format

**Warning**: Incorrect date format.

**Fix**: Use "Month Day, Year" format.

- ✅ `July 31, 2016`
- ✅ `December 25, 2023`
- ❌ `7/31/2016`
- ❌ `31/7/2016`
- ❌ `7.31.2016`
- ❌ `31 July 2016`

### Ellipses

**Warning**: Using three periods instead of ellipsis character.

**Fix**: Use the single-character ellipsis (`…`) instead of three periods (`...`).

- ✅ `The dialog shows **Continue…** when ready.`
- ❌ `The dialog shows **Continue...** when ready.`
- ❌ `Wait for the process to complete...`

### Exclamation Points

**Warning**: Exclamation point usage.

**Fix**: Don't use exclamation points in documentation. Keep tone professional.

- ✅ `This feature is now available.`
- ❌ `This feature is now available!`

### Gender-Neutral Pronouns

**Warning**: Gender-specific pronouns detected.

**Fix**: Use gender-neutral pronouns (they, them, their) instead of he/she or s/he.

- ✅ `The user can configure their settings.`
- ✅ `Each developer should update their code.`
- ❌ `The user can configure his/her settings.`

### Heading Punctuation

**Warning**: Period at end of heading.

**Fix**: Don't put periods at the end of headings.

- ✅ `## Getting started`
- ❌ `## Getting started.`

### Latin Abbreviations

**Warning**: Latin abbreviation detected.

**Fix**: Replace with plain English.

- ✅ `For example, you can use this method.`
- ✅ `That is, the configuration must be updated.`
- ❌ `e.g., you can use this method.`
- ❌ `i.e., the configuration must be updated.`

### Hyphens After -ly Words

**Warning**: Hyphen after -ly word.

**Fix**: Don't use hyphens after words ending in "-ly".

- ✅ `The recently updated feature`
- ✅ `A quickly running process`
- ❌ `The recently-updated feature`
- ❌ `A quickly-running process`

### Optional Plurals

**Warning**: Optional plural in parentheses.

**Fix**: Choose either singular or plural based on context.

- ✅ `The user can configure settings.`
- ✅ `Users can configure settings.`
- ❌ `The user(s) can configure settings.`

### Periods with Acronyms

**Warning**: Periods used with acronyms.

**Fix**: Don't use periods with acronyms or initialisms.

- ✅ `API`, `HTTP`, `HTTPS`, `DNS`, `CLI`
- ❌ `A.P.I.`, `H.T.T.P.`, `H.T.T.P.S.`, `D.N.S.`, `C.L.I.`

### American Spelling

**Warning**: British spelling detected.

**Fix**: Use American spelling.

- ✅ `organized`, `color`, `center`, `labor`
- ❌ `organised`, `colour`, `centre`, `labour`

### Capitalize ngrok-Specific Terms

**Warning**: ngrok-specific term not capitalized.

**Fix**: Always capitalize these terms:

- Traffic Policy
- Kubernetes Operator
- Traffic Inspector
- Cloud Endpoint
- Agent Endpoint

- ✅ `Traffic Policy`, `Kubernetes Operator`
- ❌ `traffic policy`, `kubernetes operator`
