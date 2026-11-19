# [ngrok docs](https://ngrok.com/docs)

Source code for [ngrok docs](https://ngrok.com/docs); feel free to suggest changes and improvements to the documentation.

## Contributing

See the [Contribution Guidelines](CONTRIBUTING.md) for detailed instructions on how to help improve ngrok documentation.

- The site is built with [Mintlify](https://mintlify.com/docs/).
- The docs content is written with [Markdown](https://www.markdownguide.org/getting-started/#what-is-markdown) and [MDX](https://mdxjs.com/docs/what-is-mdx/).

## Prerequisites

- [Node 24 or higher](https://nodejs.org/en/download)
- [pnpm 10](https://pnpm.io/installation#using-npm)
- [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
- `corepack` is included with Node by default, so you don't need to install it

## Setup

1. Ensure that `node 24` is installed.
   With `nvm`, run `nvm install`.
1. Enable `pnpm` with `corepack`: `corepack enable pnpm`
1. Install `pnpm` with `corepack`: `corepack install`
1. Install project dependencies with `pnpm`: `pnpm install`
1. Install Vale, the linter: `brew install vale` ([or use their install instructions](https://vale.sh/docs/install))

If you use [direnv](https://direnv.net/), run `direnv allow` instead.
The `.envrc` file loads the Nix devshell in `flake.nix` when Nix is installed, which CI also uses.
Without Nix, it installs Node with fnm and pnpm with corepack, then runs `pnpm install`.

## Running the site locally

When using `pnpm run dev`, this site runs locally at `http://localhost:3333/`.

- `pnpm run dev`: Runs build scripts and starts the dev server
- `pnpm run test-links`: Runs Mintlify's built-in broken link checker

### Docs search locally

Search doesn't work in local builds of the docs site.
Test search in a preview deployment when you create your pull request.

## Running Vale

This project uses [Vale](https://vale.sh/) for documentation linting and style checking.
Vale helps maintain consistent writing style and catches common writing issues.

`pnpm run vale` runs Vale linting on all documentation files (excluding generated files and the errors directory).

Vale reads MDX through `scripts/vale/mdx2vast`, which also lints text inside components such as `<Note>` and `<Tabs>`.
To run `vale` directly, put that directory first on your `PATH`: `PATH="$PWD/scripts/vale:$PATH" vale <file>`.

Vale checks your docs contributions for style issues based on the rules the docs team has defined.
Every rule is an error, and CI fails any PR in which a changed file has a Vale finding, so fix every finding before you open your PR.

## Style guide

See the [Style Guide](https://ngrok.com/docs/style-guide) for detailed writing guidelines and best practices for ngrok documentation.
The style guide covers language preferences, formatting rules, and Vale-specific style rules to help you write consistent, clear documentation.

## Creating content

When creating content, directories must exist at the root level of the project.
To create a page that exists at the URL path `/example/page1/`, you can create your `.mdx` file at either of the following file paths:

- `/example/page1.mdx`
- `/example/page1/index.mdx`

### All pages must be MDX

`.md` files won't be turned into pages.

### Adding items to the sidebar

Pages aren't added to the sidebar automatically.
To add a file to the sidebar, edit the `"navigation"` object in `docs.json`.

In general, find the `"pages"` array of the nav section you want to add your page to, and put the path to your page there.

To add `/example/page1.mdx` to the Gateway sidebar:

1. Search for `"item": "Gateway"`
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

## Links

A linter checks for broken links and redirect conflicts.
A redirect conflict is when you have two redirects with the same source path.

You can add a path pattern to `link-exceptions.json` to make the link checker ignore certain links.
If the pattern matches a link, even if the link is broken, it passes linting.

> This is trailing-slash agnostic.
> A link to `/example` is ignored if `"/example/"` is in the exception list.
> The same applies the other way around.
> `/example/` = `"/example"`.

- You can add a whole path to an exception with `*`, as in `/path*`.
- You can match any phrase or path segment with `*` on either side. `*/path*`

> This is useful for things like generated files, which may not be present when the link checker runs, which would cause a false positive.

### Redirects

To create redirects, add them to the `"redirects"` array in `docs.json`.

See the Mintlify docs for the nuances.

## Looking for support?

For bug reports, feature requests, questions, and community support, open an issue or discussion in the [ngrok Community](https://github.com/ngrok/ngrok).
To report a problem with the documentation, open a new [GitHub issue](https://github.com/ngrok/ngrok-docs-v2/issues).
