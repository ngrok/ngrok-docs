# Contributing to the ngrok Documentation

Thank you for your interest in contributing to the ngrok documentation! We welcome contributions from the community and are grateful for your help in making our documentation better.

# Getting Started

To get started, fork the ngrok documentation repository on GitHub and clone your fork locally. ngrok docs is built using Docusaurus. Use the instructions on [README.md](https://github.com/ngrok/ngrok-docs/blob/main/README.md) to set up your local environment. The documentation is written in Markdown and organized into directories by topic.

# Making Changes

To make changes to the documentation, edit the relevant Markdown files in your local clone of the repository. If you're unsure which files to edit, you can use the GitHub search functionality to find the relevant files.

When making changes, please follow the Markdown style guide and try to keep your changes concise and to the point. If you're making significant changes or adding new content, please consider including examples or other resources to help readers understand the topic better.

Once you have finished making your changes, we recommend you run a local build with docusaurus (command pnpm run build) to ensure your contribution will not present errors with links or build. After a successful build, push them to your fork on GitHub and create a pull request to submit your changes for review.

# Code of Conduct

We ask that all contributors follow our [code of conduct](https://github.com/ngrok/ngrok-docs/blob/main/CODE_OF_CONDUCT.md) when contributing to the documentation. This code of conduct outlines our expectations for behavior and helps ensure that the ngrok community is a welcoming and inclusive place for everyone.

# Understanding the Repository Structure

This section provides a brief overview of the key directories and files within the ngrok documentation repository:

- .github/workflows: This directory contains workflow configuration files for automated tasks like running tests during builds.
- docs: This directory houses the core documentation content written in Markdown. It contains subdirectories further organizing content by topic (e.g., examples, guides, references).
- examples: This directory holds code examples used throughout the documentation to illustrate concepts and usage.
- openapi: This directory contains OpenAPI specification files related to ngrok's APIs.
  src: This directory contains the source code for the Docusaurus site that renders the documentation. Modifying files here is generally not recommended for documentation changes.
- static: This directory contains static assets used by the documentation website, such as images or custom fonts.

# Configuration Files:

Several configuration files control various aspects of the documentation build process and behavior. These include:

- .envrc: Configuration for environment variables (usually not modified for documentation changes).
- .gitignore: Specifies files or patterns to be excluded from version control.
- .nvmrc: Specifies the desired Node.js version for the project.
- .prettierignore, .prettierrc.json: Configuration files related to code formatting.
- CODE_OF_CONDUCT.md: Outlines the expected behavior when contributing.
- CONTRIBUTING.md : Guidelines for the contributors who are willing to contribute.
- LICENSE.md: Defines the license under which the documentation is distributed.
- README.md: Provides general information about the project.
- algolia\_\*.config.json : Configuration files related to search functionality.
- babel.config.js: Configuration for Babel, a JavaScript compiler.
- docusaurus.config.js: Main configuration file for Docusaurus, controlling website build behavior.
- flake.lock, flake.nix : Configuration files related to Nix package management.
- package.json: Defines project dependencies and build scripts.
- pnpm-lock.yaml: Lock file for the pnpm package manager, ensuring consistent dependencies.
- postcss.config.js: Configuration for PostCSS, a CSS preprocessor.
- sidebars.js: Defines the navigation structure (sidebar) for the documentation website.
- tailwind.config.js: Configuration for Tailwind CSS, a utility-first CSS framework.
- vercel.json : Configuration file for deployment to Vercel.

# Adding New Content

- If you're adding new content (e.g. , a guide, example), consider creating a new Markdown file within the appropriate subdirectory of the docs directory.
  Update the sidebars.js file to add the new content to the navigation sidebar if applicable.

# Modifying Error Pages

- Error pages for the website are typically managed within the src directory using React components. Modifying these directly for documentation changes is not recommended. If you encounter an error page issue, report it as a separate issue.

# Review process

Once you have submitted your pull request, the ngrok documentation team will review your changes and provide feedback or suggestions for improvement. We may also make additional changes to your pull request to ensure that it meets the standards of the ngrok documentation.

Once your pull request has been reviewed and any necessary changes have been made, it will be merged into the main ngrok documentation repository.

# Thank you!

Thank you for contributing to the ngrok documentation! Your help is greatly appreciated and will make our documentation better for everyone.
