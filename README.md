# [ngrok docs](https://ngrok.com/docs)

Source code for [ngrok docs](https://ngrok.com/docs); feel free to suggest changes and improvements to our documentation!

## Contributing

See our [Contribution Guidelines](CONTRIBUTING.md) for detailed instructions on how to help improve ngrok documentation.

## Setup

ngrok is built using [Docusaurus 2](https://docusaurus.io/).

Prerequisites required:

- [Node 18+](https://nodejs.org/en/download)
- [pnpm 8+](https://pnpm.io/installation#using-npm)

Once you have the pre-requisites installed run the following commands:

```bash
git clone https://github.com/ngrok/ngrok-docs.git
cd ngrok-docs
pnpm i && pnpm run start
```

Our docs mostly use markdown and MDX, you can make yourself familiar with docusaurus [documentation](https://docusaurus.io/docs/en/installation) for more significant features / changes.

## Building ngrok-docs

To ensure your changes work before submitting a pr, please run the following before submission:

```
cd ngrok-docs
pnpm run build
```

## Looking for support?

For questions and support on contributing please join our [Slack community](https://ngrok.com/slack), channel `#support`.
To file an issue within our doc, use our [github issues](https://github.com/ngrok/ngrok-docs/issues)

