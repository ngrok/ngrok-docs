# Integration Docs Style Guide

## Lists and Numbering

- **Ordered lists must be sequential**: Use 1., 2., 3., not all 1.
- **No nested numbered lists**: If section headers are numbered (## 1., ## 2., etc.), use plain text or bullet points in body content, not numbered lists
- **Exception for explicit numbering**: If the text explicitly calls out numbering (e.g., "You have two options:"), use numbered lists instead of bullet points
- **Convert nested lists to plain text**: Instructions within numbered sections should be written as paragraphs or bullet points

## Formatting

- **File names**: Always in backticks in body content (e.g., `compose.yaml`), never in headers
- **Addresses/URLs**: Always in backticks in body content (e.g., `localhost:8123`), never in headers
- **Sentence breaks**: Every sentence must start on a new line in markdown files
- **Long sentences**: Break up sentences that are too long into multiple sentences
- **Line breaks**: Use extra line breaks (two blank lines) between:
  - Frontmatter (`---`) and components (e.g., `<Tip>`)
  - Code blocks (```) and components
  - Paragraphs and headings
- **No HTML entities**: Don't use `&mdash;` - use periods and split into separate sentences instead

## Language

- **Descriptive headers**: Section headers should be descriptive, not generic (e.g., "Configure ngrok to expose Home Assistant" not "Add ngrok")
- **Prerequisites section**: Use "## What you'll need" as a heading, not plain text "Prerequisites:"
- **Prerequisites in body**: Never include signup text or prerequisite information in body content - move it to "What you'll need" section
- **Simplify wordy phrases**: Use concise language (e.g., "To learn more about X, check out:" not "If you're eager to learn more about X, give the following a read:")
- **Use direct language**: Prefer "First," over "Your first task is to"
- **Intro paragraph**: Add an intro paragraph below the Tip but above the first h2 that briefly explains the guide's purpose
- **No future tense in intros**: Use present tense in intro paragraphs (e.g., "It covers setting up..." not "You'll set up...")
- **UI text formatting**: UI text (button labels, menu items, etc.) should be in **bold**, not in quotes or other styling

## Images

- **No screenshots**: Remove all `/img/integrations/*` images from integration docs
- **Delete image files**: Delete the actual image files from the repository
- **Normalize text**: Fix surrounding text to flow naturally without image references

## SEO and Metadata

- **Descriptive descriptions**: Frontmatter descriptions should be descriptive for SEO purposes and 150 characters or less

