# Integration Docs Style Guide (Full Reference)

**All rules in this document are mandatory.** Apply every applicable rule fully. Do not partially apply rules (e.g. for images: you must both remove markup and delete the files).

## Document Structure

- **Intro paragraph**: Add an intro paragraph below the Tip (or after frontmatter if no Tip) but above the first h2 that briefly explains the guide's purpose
- **Tip placement**: Keep Tips in the body when they relate to a specific step or prerequisite (e.g. a tip right before step 1). Do not move body-context Tips to the top.
- **No future tense in intros**: Use present tense in intro paragraphs (e.g., "It covers setting up..." not "You'll set up...")
- **Vary intro phrasing**: Vary the phrasing in intro paragraphs across different docs - avoid using the exact same phrasing like "This guide covers configuring" repeatedly. Use alternatives like "This guide shows you how to configure...", "This guide explains how to configure...", "This guide walks you through configuring...", or other variations
- **Descriptive headers**: Section headers should be descriptive, not generic (e.g., "Configure ngrok to expose Home Assistant" not "Add ngrok")
- **Descriptive headers for content**: Use at least two descriptive headers to break up longer content and organize the guide
- **Header hierarchy for sequential steps**: Sequential steps (e.g., "1. Configure IdP", "2. Configure ngrok", "3. Test") must use the same heading level. Do not use ## for step 1 and ### for steps 2–N—that wrongly implies later steps are subsections of step 1. Use ## for all top-level steps, or group under a parent ## and use ### only for true subsections of that step
- **Header balance**: Headers should be descriptive but not too wordy - avoid redundant phrases like "log in to your account" when the context is clear
- **Product names in headers**: Product names like "Python SDK" in headers may need to be added to heading exceptions in linter configs (e.g., Headings.yml)
- **Prerequisites section**: Use "## What you'll need" as a heading, not plain text "Prerequisites:"
- **Prerequisites in body**: Never include signup text or prerequisite information in body content - move it to "What you'll need" section
- **Prerequisites placement**: "What you'll need" section can appear after Note components if the Note provides important context first
- **List item periods in prerequisites**: All list items in "What you'll need" sections must end with periods (these are typically complete sentences)
- **List item capitalization**: All list items must start with a capital letter
- **Link prerequisites**: When possible, link prerequisites to their install/download pages (e.g., "[Docker Desktop](https://www.docker.com/products/docker-desktop/) installed" not just "Docker Desktop installed")
- **Combine related technologies**: When listing multiple related technologies, combine them in one list item (e.g., "[Python](url) and [Flask](url) installed" not separate items)
- **Personal pronouns in prerequisites**: Use "Your" not "The" when referring to user's personal items (e.g., "Your [ngrok authtoken]" not "The [ngrok authtoken]")
- **Resource sections**: Sections linking to additional resources (e.g., "What's next?", "Further resources") should use unordered lists for linking out to content, but can also include paragraphs
- **No "Configuration steps" section**: Remove the "Configuration steps" section where present; it is redundant with the intro and numbered body sections
- **Choose appropriate section name**: Use "What's next?" for next steps, "Further resources" for reference links, or other appropriate names based on context
- **Don't duplicate prerequisites**: If prerequisites are listed in "What you'll need", don't repeat them in Tip components
- **No TL;DR callouts**: Remove TL;DR callouts entirely. Delete the entire Tip block that contains **TL;DR** and its numbered list of steps.
- **No consecutive blank lines**: More than one blank line in a row is not allowed anywhere in the doc.

## Text Formatting

- **Sentence breaks**: Every sentence must start on a new line in markdown files
- **Long sentences**: Break up sentences that are too long into multiple sentences
- **Line breaks**: Use a single blank line between: frontmatter (`---`) and imports, frontmatter and components (e.g., `<Tip>`), code blocks (```) and components, and paragraphs and headings. More than one blank line in a row is not allowed.
- **Convert "Tip:" to component**: If you see "Tip:" in plain text, convert it to a `<Tip>` component
- **Note and Tip indentation**: Indent the body text inside `<Note>` and `<Tip>` by 2 spaces. Do not indent the opening or closing tags; only the lines of content between the tags.
- **Note and Tip headings**: When a `<Note>` or `<Tip>` already has a heading (bold first line), use sentence case with a colon (e.g., **Security best practice:** or **Troubleshooting:**, not **SECURITY BEST PRACTICE** or **TROUBLESHOOTING**). Do not add a blank line between that heading and the body text that follows. Do not add a heading (e.g., **Alternative:**, **Note:**) to a Note or Tip that does not already have one.
- **File names**: Always in backticks in body content (e.g., `compose.yaml`), never in headers
- **Addresses/URLs**: Always in backticks in body content (e.g., `localhost:8123`), never in headers
- **No HTML entities**: Don't use `&mdash;` - use periods and split into separate sentences instead
- **UI text formatting**: UI text (button labels, menu items, etc.) should be in **bold**, not in quotes or other styling
- **UI text in links**: When UI text is in a link, format as `[**UI Element**](url)` not `**[UI Element](url)**` - bold inside the link brackets
- **UI text navigation**: Format navigation instructions as "go to **Endpoints** and click **New**" not "go to the endpoints section and click New"

## Lists and Numbering

- **Ordered lists must be sequential**: Use 1., 2., 3., not all 1.
- **No nested numbered lists**: Do not use numbered lists (1., 2., 3.) inside a section when that section is already part of a sequence (e.g., under a numbered ## step or a procedural guide). Replace nested numbered lists with **unordered lists** (bullet points)
- **Exception for explicit numbering**: If the text explicitly calls out numbering (e.g., "You have two options:"), use numbered lists instead of bullet points
- **Convert nested lists to unordered**: Instructions within numbered or sequential sections should be written as paragraphs or unordered (bullet) lists, not numbered lists
- **Options vs sequential steps**: Use "Option 1", "Option 2" for alternative approaches, and numbered steps (## 1., ## 2.) only for sequential instructions
- **List item periods**: List items that are incomplete sentences or fragments should NOT have periods. Only complete sentences in list items should have periods
- **List item formatting**: Don't use bold formatting in list items unless it's UI text or something that actually needs emphasis. Regular bullet points don't need bold
- **Single-item lists**: If a list has only one item, convert it to plain text instead of using a list format

## Language and Style

- **Simplify wordy phrases**: Use concise language (e.g., "To learn more about X, check out:" not "If you're eager to learn more about X, give the following a read:")
- **Use direct language**: Prefer "First," over "Your first task is to"
- **Remove redundant text**: Remove unnecessary descriptive phrases (e.g., "link in the top table" is redundant if you've already specified where to click)
- **Avoid casual phrases**: Don't use casual language like "you are good to go" - use professional language like "your domain is configured"
- **Contractions preferred**: Use contractions in body text (e.g., "there's", "don't", "you're", "it's") rather than expanding them
- **Avoid repetition**: Don't repeat the same phrase in consecutive sentences
- **Company names**: Don't include .com in company names (e.g., "GoDaddy" not "GoDaddy.com")
- **Avoid "whenever"**: Use more direct language instead of "whenever you want to"
- **Avoid "leverage"**: Don't use "leverage" or "leveraging" - use simpler words like "using" or "with"
- **Prefer "In" over "Within"**: Use "In" instead of "Within" when referring to files or locations (e.g., "In your configuration file" not "Within your configuration file")
- **authtoken is one word**: Always use "authtoken" not "auth token"
- **No ampersands**: Don't use `&` unless it's specifically part of bold UI text - use "and" instead
- **Remove unnecessary "also"**: Remove "also" when it doesn't add value (e.g., "You may need" not "You may also need")
- **GitHub capitalization**: Always use "GitHub" not "Github" or "Github"
- **Acronym usage**: When a term with an acronym (e.g., "single sign-on (SSO)") is used multiple times, provide the acronym in parentheses on first mention in the body text (intro paragraph), then use the acronym throughout the rest of the document
- **Description field doesn't count**: The frontmatter `description` field does not count as the first mention for acronym purposes - the first mention must be in the body text
- **Acronym exception for UI text**: When describing UI text that includes the full term, use the full term as it appears in the UI (e.g., "**Single sign on URL**" not "**SSO URL**" if that's what the UI displays)
- **Term capitalization**: Use lowercase for terms like "single sign-on" in body text and descriptions unless it's part of a proper noun or title case is required (e.g., "single sign-on" not "Single Sign-On" in descriptions)

## Links

- **Use relative paths**: Internal documentation links should use relative paths (e.g., `../traffic-policy/`) not full URLs (e.g., `https://ngrok.com/docs/traffic-policy`)
- **Descriptive anchor text**: Link anchor text should be descriptive (e.g., "ngrok Python SDK docs" not "Reference Documentation")

## Images

**When you remove a UI screenshot, you must do all of the following. Skipping any step is a failure.**

- **No UI screenshots**: Remove all UI screenshots from integration docs (e.g., dashboard screenshots).
- **Remove image markup**: Remove the image markup entirely from the doc—do not leave `![...](path)` refs whose files you then delete. Fix or remove any orphaned image references.
- **Delete image files (mandatory)**: You MUST delete the actual image files from the repository for every screenshot you remove. Removing only the markup from the doc is not enough. Delete the file(s) from the repo (e.g. `integrations/img/github/example.png`). If the image is still referenced by other docs, do not delete it; only delete files that are now orphaned.
- **Delete empty image directories**: After removing screenshot image files, delete the subdirectory that housed them if that directory is now empty (e.g., delete `integrations/img/datadog` if it is empty).
- **Normalize text**: Fix surrounding text to flow naturally without image references.
- **Keep architectural diagrams**: Architectural diagrams and reference diagrams should be kept (do not remove these).

## SEO and Metadata

- **SEO-friendly descriptions**: Frontmatter descriptions should be descriptive for SEO purposes and 150 characters or less

---

## Before you're done (verification)

Before you consider the edit complete:

1. Re-read this reference. For each section (Structure, Formatting, Lists, Language, Links, Images, Metadata), confirm the doc satisfies every applicable rule.
2. For any screenshot you removed: confirm you deleted the image file(s) from the repo, not only the markup in the doc.
3. Confirm no half-measures: every rule you touched was applied fully.
