# Integration Docs Style Guide

## Document Structure

- **Intro paragraph**: Add an intro paragraph below the Tip (or after frontmatter if no Tip) but above the first h2 that briefly explains the guide's purpose
- **No future tense in intros**: Use present tense in intro paragraphs (e.g., "It covers setting up..." not "You'll set up...")
- **Descriptive headers**: Section headers should be descriptive, not generic (e.g., "Configure ngrok to expose Home Assistant" not "Add ngrok")
- **Descriptive headers for content**: Use at least two descriptive headers to break up longer content and organize the guide
- **Header balance**: Headers should be descriptive but not too wordy - avoid redundant phrases like "log in to your account" when the context is clear
- **Product names in headers**: Product names like "Python SDK" in headers may need to be added to heading exceptions in linter configs (e.g., Headings.yml)
- **Prerequisites section**: Use "## What you'll need" as a heading, not plain text "Prerequisites:"
- **Prerequisites in body**: Never include signup text or prerequisite information in body content - move it to "What you'll need" section
- **Prerequisites placement**: "What you'll need" section can appear after Note components if the Note provides important context first
- **List item periods**: All list items in "What you'll need" sections must end with periods
- **List item capitalization**: All list items must start with a capital letter
- **Link prerequisites**: When possible, link prerequisites to their install/download pages (e.g., "[Docker Desktop](https://www.docker.com/products/docker-desktop/) installed" not just "Docker Desktop installed")
- **Personal pronouns in prerequisites**: Use "Your" not "The" when referring to user's personal items (e.g., "Your [ngrok authtoken]" not "The [ngrok authtoken]")
- **Resource sections**: Sections linking to additional resources (e.g., "What's next?", "Further resources") should use unordered lists for linking out to content, but can also include paragraphs
- **Choose appropriate section name**: Use "What's next?" for next steps, "Further resources" for reference links, or other appropriate names based on context
- **Don't duplicate prerequisites**: If prerequisites are listed in "What you'll need", don't repeat them in Tip components

## Text Formatting

- **Sentence breaks**: Every sentence must start on a new line in markdown files
- **Long sentences**: Break up sentences that are too long into multiple sentences
- **Line breaks**: Use extra line breaks (two blank lines) between:
  - Frontmatter (`---`) and components (e.g., `<Tip>`)
  - Code blocks (```) and components
  - Paragraphs and headings
- **Convert "Tip:" to component**: If you see "Tip:" in plain text, convert it to a `<Tip>` component
- **File names**: Always in backticks in body content (e.g., `compose.yaml`), never in headers
- **Addresses/URLs**: Always in backticks in body content (e.g., `localhost:8123`), never in headers
- **No HTML entities**: Don't use `&mdash;` - use periods and split into separate sentences instead
- **UI text formatting**: UI text (button labels, menu items, etc.) should be in **bold**, not in quotes or other styling
- **UI text in links**: When UI text is in a link, format as `[**UI Element**](url)` not `**[UI Element](url)**` - bold inside the link brackets
- **UI text navigation**: Format navigation instructions as "go to **Endpoints** and click **New**" not "go to the endpoints section and click New"

## Lists and Numbering

- **Ordered lists must be sequential**: Use 1., 2., 3., not all 1.
- **No nested numbered lists**: If section headers are numbered (## 1., ## 2., etc.), use plain text or bullet points in body content, not numbered lists
- **Exception for explicit numbering**: If the text explicitly calls out numbering (e.g., "You have two options:"), use numbered lists instead of bullet points
- **Convert nested lists to plain text**: Instructions within numbered sections should be written as paragraphs or bullet points
- **Options vs sequential steps**: Use "Option 1", "Option 2" for alternative approaches, and numbered steps (## 1., ## 2.) only for sequential instructions

## Language and Style

- **Simplify wordy phrases**: Use concise language (e.g., "To learn more about X, check out:" not "If you're eager to learn more about X, give the following a read:")
- **Use direct language**: Prefer "First," over "Your first task is to"
- **Remove redundant text**: Remove unnecessary descriptive phrases (e.g., "link in the top table" is redundant if you've already specified where to click)
- **Avoid casual phrases**: Don't use casual language like "you are good to go" - use professional language like "your domain is configured"
- **Avoid repetition**: Don't repeat the same phrase in consecutive sentences
- **Company names**: Don't include .com in company names (e.g., "GoDaddy" not "GoDaddy.com")
- **Avoid "whenever"**: Use more direct language instead of "whenever you want to"
- **Avoid "leverage"**: Don't use "leverage" or "leveraging" - use simpler words like "using" or "with"
- **Prefer "In" over "Within"**: Use "In" instead of "Within" when referring to files or locations (e.g., "In your configuration file" not "Within your configuration file")
- **authtoken is one word**: Always use "authtoken" not "auth token"
- **No ampersands**: Don't use `&` unless it's specifically part of bold UI text - use "and" instead
- **Remove unnecessary "also"**: Remove "also" when it doesn't add value (e.g., "You may need" not "You may also need")
- **GitHub capitalization**: Always use "GitHub" not "Github" or "Github"

## Links

- **Use relative paths**: Internal documentation links should use relative paths (e.g., `../traffic-policy/`) not full URLs (e.g., `https://ngrok.com/docs/traffic-policy`)
- **Descriptive anchor text**: Link anchor text should be descriptive (e.g., "ngrok Python SDK docs" not "Reference Documentation")

## Images

- **No UI screenshots**: Remove all UI screenshots from integration docs (e.g., dashboard screenshots)
- **Keep architectural diagrams**: Architectural diagrams and reference diagrams should be kept
- **Delete image files**: Delete the actual image files from the repository for removed screenshots
- **Normalize text**: Fix surrounding text to flow naturally without image references

## SEO and Metadata

- **SEO-friendly descriptions**: Frontmatter descriptions should be descriptive for SEO purposes and 150 characters or less
