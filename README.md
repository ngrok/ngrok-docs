# [ngrok docs](https://ngrok.com/docs)

Source code for [ngrok docs](https://ngrok.com/docs); feel free to suggest changes and improvements to our documentation!

## Contributing

See our [Contribution Guidelines](CONTRIBUTING.md) for detailed instructions on how to help improve ngrok documentation.

- Our site is built with [mintlify](https://mintlify.com/docs/).
- Our docs content is written with [markdown](https://www.markdownguide.org/getting-started/#what-is-markdown) and [MDX](https://mdxjs.com/docs/what-is-mdx/).

## Prerequisites

- [Node 22](https://nodejs.org/en/download)
- [pnpm 10](https://pnpm.io/installation#using-npm)
- [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
- `corepack` is included with node by default, no need to install

## Setup

1. Ensure that `node 22` is installed. With `nvm`, run `nvm install`.
1. Enable `pnpm` with `corepack`: `corepack enable pnpm`
1. Install `pnpm` with `corepack`: `corepack install`
1. Install project dependencies with `pnpm`: `pnpm install`

## Running the site locally

When using `pnpm run dev`, this site runs locally at `http://localhost:3333/`

- `pnpm run dev`: Runs build scripts and starts the dev server
- `pnpm run test-links`: Runs mintlify's built-in broken link checker

### Other commands

- `pnpm run build`: Runs build scripts and builds the site, but isn't generally necessary.

### Docs search locally

Search does not work in local builds of the docs site. You'll have to test search in a preview deployment when you create your pull request.

## Creating content

When creating content, directories must exist at the root level of the project. To create a page that will exist at the URL path `/example/page1/`, you can create your `.mdx` file at either of the following file paths:

- `/example/page1.mdx`
- `/example/page1/index.mdx`

### All pages must be MDX

`.md` files won't be turned into pages.

### Adding items to the sidebar

Pages will not be automatically added to the sidebar. You'll need to edit the `"navigation"` object in `docs.json` to add a file to the sidebar.

In general, find the `"pages"` array of the nav section you want to add your page to, and put the path to your page there.

To add `/example/page1.mdx` to the Universal Gateway sidebar:

1. Search for `"item": "Universal Gateway"`
2. Add the path to the `"pages"` array there, excluding the file extension and leading slash: `"example/page1"`.

## Metadata and frontmatter

When you add a title and description to a page's frontmatter, it's automatically added to the metadata.

```md
---
title: Example
sidebarTitle: Example in sidebar
description: Example description
---
```

## Redirects

To create redirects, add them to the `"redirects"` array in `docs.json`.

See mintlify docs for the nuances.

## Looking for support?

For bug reports, feature request, questions and community support please open an issue or discussion in our [ngrok Community](https://github.com/ngrok/ngrok).
To report a problem with our documentation, please open a new [Github issue](https://github.com/ngrok/ngrok-docs-v2/issues).
