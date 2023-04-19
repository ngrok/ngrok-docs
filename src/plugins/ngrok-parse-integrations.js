const fs = require("fs");
const path = require("path");
const utils = require("@docusaurus/utils");

module.exports = function (context, options) {
	return {
		name: "ngrok-parse-integrations",
		async contentLoaded({ actions }) {
			const { setGlobalData } = actions;
			const integrationsDir = path.join(
				context.siteDir,
				"docs",
				"integrations"
			);
			const integrations = [];

			const dir = await fs.promises.opendir(integrationsDir);
			for await (const dirent of dir) {
				const integrationDir = path.join(integrationsDir, dirent.name);

				const isFile = fs.lstatSync(integrationDir).isFile();
				if (isFile) {
					continue;
				}

				const integration = {
					name: dirent.name,
					path: path.join(
						context.siteConfig.baseUrl,
						"integrations",
						dirent.name
					),
					docs: [],
				};

				fs.readdirSync(integrationDir).flatMap((x) => {
					const filePath = path.join(integrationDir, x);

					// Ignore index files, folders and non-markdown files
					const isFile = fs.lstatSync(filePath).isFile();
					if (!isFile || x.indexOf(".md") < 0) {
						return;
					}

					// Parse markdown
					const fileContents = fs.readFileSync(filePath).toString();
					const fileMarkdown = utils.parseMarkdownString(fileContents);

					// Add file details as metadata information on integration
					if (x === "index.mdx") {
						integration.metadata = fileMarkdown.frontMatter;
						return;
					}

					// Add file details as doc on integration
					integration.docs.push({
						// clean up things like .md
						path: path.join(integration.path, utils.fileToPath(x)),
						...fileMarkdown,
					});
				});

				integrations.push(integration);
			}

			setGlobalData(integrations.sort((a, b) => a.name.localeCompare(b.name)));
		},
	};
};
