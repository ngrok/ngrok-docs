# Contributing to the ngrok Documentation

Thank you for your interest in contributing to the ngrok documentation! We welcome contributions from the community and are grateful for your help in making our documentation better.

# Getting Started

To get started, fork the ngrok documentation repository on GitHub and clone your fork locally. ngrok docs is built using mintlify. Use the instructions in [README.md](README.md) to set up your local environment. The documentation is written in Markdown and organized into directories by topic.

# Making Changes

To make changes to the documentation, edit the relevant Markdown files in your local clone of the repository. If you're unsure which files to edit, you can use the GitHub search functionality to find the relevant files.

When making changes, please follow the Markdown style guide and try to keep your changes concise and to the point. If you're making significant changes or adding new content, please consider including examples or other resources to help readers understand the topic better.

Once you have finished making your changes, we recommend you run a local build with mintilify (command pnpm run dev) to ensure your contribution will not present errors with links or build. After a successful build, push them to your fork on GitHub and create a pull request to submit your changes for review.

# Code of Conduct

We ask that all contributors follow our [code of conduct](CODE_OF_CONDUCT.md) when contributing to the documentation. This code of conduct outlines our expectations for behavior and helps ensure that the ngrok community is a welcoming and inclusive place for everyone.

# Configuration Files:

Several configuration files control various aspects of the documentation build process and behavior. These include:

- .gitignore: Specifies files or patterns to be excluded from version control.
- CODE_OF_CONDUCT.md: Outlines the expected behavior when contributing.
- CONTRIBUTING.md : Guidelines for the contributors who are willing to contribute.
- LICENSE.md: Defines the license under which the documentation is distributed.
- README.md: Provides general information about the project.
- package.json: Defines project dependencies and build scripts.
- pnpm-lock.yaml: Lock file for the pnpm package manager, ensuring consistent dependencies.
- docs.json: Defines the navigation structure, redirects, metadat, and more for the documentation website.

# Adding New Content

- To add new content (such as a guide or an example), create a new MDX file in the appropriate directory.
  Update the docs.json file to add the new content to the navigation sidebar if applicable.

# Modifying Error Pages

- Error pages for the website are typically managed within the errors directory using React components. Modifying these directly for documentation changes is not recommended. If you encounter an error page issue, report it as a separate issue.

# Review process

Once you have submitted your pull request, the ngrok documentation team will review your changes and provide feedback or suggestions for improvement. We may also make additional changes to your pull request to ensure that it meets the standards of the ngrok documentation.

Once your pull request has been reviewed and any necessary changes have been made, it will be merged into the main ngrok documentation repository.

# Thank you!

Thank you for contributing to the ngrok documentation! Your help is greatly appreciated and will make our documentation better for everyone.
