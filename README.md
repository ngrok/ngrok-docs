# [ngrok docs](https://ngrok.com/docs)

Source code for [ngrok docs](https://ngrok.com/docs); feel free to suggest changes and improvements to our documentation!

## Contributing

See our [Contribution Guidelines](CONTRIBUTING.md) for detailed instructions on how to help improve ngrok documentation.

Our docs use [markdown](https://www.markdownguide.org/getting-started/#what-is-markdown) and [MDX](https://mdxjs.com/docs/what-is-mdx/) for content. The site is build with [Vite](https://vite.dev/) using [Vike](https://vike.dev/).

## Prerequisites

- [Node 22](https://nodejs.org/en/download)
- [pnpm 10](https://pnpm.io/installation#using-npm)
- [nvm](https://github.com/nvm-sh/nvm)
- `corepack` is included with node by default, no need to install

## Setup

1. Install [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) or your node version manager of choice.
2. Ensure that `node 22` is installed. With `nvm`, run `nvm install`.
3. Enable `pnpm` with `corepack`: `corepack enable pnpm`
4. Install `pnpm` with `corepack`: `corepack install`
5. Install project dependencies with `pnpm`: `pnpm install`

## Running the site locally

This site runs locally at `http://localhost:5173/`

- `vercel env pull`: Pull all the env vars. Might have to run `vercel link` to link the project first.

- `pnpm run dev`: Runs build scripts and starts the dev server
- `pnpm run quick-dev`: Just starts the dev server, re-using the existing generated output from the build scripts
- `pnpm run build`: Runs build scripts and builds the site
- `pnpm run quick-build`: Just builds the site, re-using the existing generated output from the build scripts

## Creating content

Every page must have its own directory, and the content must live in a `+Page` file, with a `.mdx` or `.md` extension. TS/TSX and JS/JSX extensions are also allowed.

To create a page at the path `/docs/example-path/example-file/`, you must create a file at:

```bash
/pages/docs/example-path/example-file/+Page.mdx
```

## Metadata and frontmatter

When you add a title and description to a page's frontmatter, it's automatically added to the metadata.

```md
---
title: Example
description: Example description
---
```

### Accessing frontmatter within a page

You can access a page's frontmatter from within that page, such as the following example:

```md
---
title: Example Title
description: Example description
---

<h1>{frontmatter.title}</h1>

<p>{frontmatter.description</p>
```

## Redirects

To create a redirect quickly, add it to `pages/utils/redirects/data/general.ts`.

For more structured redirects, you can:

1. Create a new `.ts` file in `pages/utils/redirects/data` that exports an object containing your redirects, for example `universalGatewayRedirects.ts`:

 ```js
 export const universalGatewayRedirects = {
  "/docs/source" : "/docs/destination"
 };
 ```

2. Then, import that object in `pages/utils/redirects/redirectAggregator.ts`, and add it to the object exported there.

  ```js
  import { generalRedirects } from "./data/general";
  import { universalGatewayRedirects } from "./data/universalGatewayRedirects";
  
  export const allRedirects = { 
   ...generalRedirects,
   ...universalGatewayRedirects
  };
  ```

### Server vs Client-side redirects

- Hash redirects, i.e. redirects from `/docs/starting-path/#hash` to `/docs/destination-path`, are executed on the client.
- All route-level redirects are executed server-side.

Why? Because the server doesn't have access to the hash (`#this-part`) of a URL, so only the client can execute these redirects.

## Technical questions

### Why is everything in the `pages` directory?

Some stuff that might normally be in a `src` directory is in `pages`, such as `components`, `utils`, etc. Because of how vike works, if you want to access the [`pageContext`](https://vike.dev/pageContext#) object, your code needs to live within the `pages` directory. We could pass this data around, use some sort of context, or do other things, but for now everything lives in `pages`.

## Testing

We use [Vitest](https://vitest.dev/) for testing. To run the tests, use:

```sh
pnpm run test
```

To run tests in watch mode during development:

```sh
pnpm run test:watch
```

## Looking for support?

For bug reports, feature request, questions and community support please open an issue or discussion in our [ngrok Community](https://github.com/ngrok/ngrok).
To report a problem with our documentation, please open a new [Github issue](https://github.com/ngrok/ngrok-docs-v2/issues).
