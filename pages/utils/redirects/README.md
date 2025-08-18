To make redirects:

1. Find an existing appropriate redirect file or create a new one.

- The appropriate file will be called `fromA.ts`, where `A` is the name of the section of the docs it's under. Here, "section" means the path segment in the URL that comes after "/docs/".
  - "/docs/universal-gateway/" redirects -> `fromUniversalGateway.ts`

1. If you made a new one, make sure it exports an array. Use `data/general.ts` as an example
1. If you made a new one, make sure you import it into `redirectAggregator.ts` and add it to the `allRedirects` array exported from that file.

That's all.

## Why create a new redirect file?

Keeping redirects as separate as possible helps with debugging them and maintaining them in general. When you have the redirects in one big file, scrolling through them can be incredibly troublesome.

## When should I create a new redirect file?

If you're doing redirects _from_ a doc in section A to anywhere else, it'd be ideal if there was a redirect file for all redirects _from_ section A. If one doesn't exist, you should make it.

Name it `fromA.ts`, where A is the name of the section.

Grouping redirects based on the starting point rather than the destination makes it easy to test a bunch of redirects at once, especially when you're redirecting from a section because you want to remove it from the nav entirely.
