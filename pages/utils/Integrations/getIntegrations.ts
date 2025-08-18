import fs from "node:fs";
import path from "node:path";
import remarkHeadings from "@vcarl/remark-headings";
import { remark } from "remark";
import remarkFrontmatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import { fileToPath } from "~/utils/docusaurusUtils";
import { getPathWithNormalizedSlashes } from "../pathSanitization";

export type Integration = {
	name: string;
	path: string;
	docs: any[];
	metadata: any;
};

export const getIntegrations = async (): Promise<Integration[] | undefined> => {
	const remixPathString = "./content/docs";
	const plainPathString = "/docs";
	const integrationsDir = path.join(remixPathString, "integrations");
	const integrationList = [];

	const dir = await fs.promises.opendir(integrationsDir);
	for await (const dirent of dir) {
		const integrationDir = path.join(integrationsDir, dirent.name);
		const isFile = fs.lstatSync(integrationDir).isFile();
		if (isFile) {
			continue;
		}
		const integration: Integration = {
			name: dirent.name,
			path: dirent.name,
			docs: [],
			metadata: null,
		};

		fs.readdirSync(integrationDir).flatMap(async (x) => {
			const filePath = path.join(integrationDir, x);

			// Ignore index files, folders and non-markdown files
			const isFile = fs.lstatSync(filePath).isFile();
			if (!isFile || x.indexOf(".md") < 0) {
				return;
			}

			// Parse markdown
			const fileContent = fs.readFileSync(filePath).toString();

			// With Remark, which is built on top of Unified, basically by adding remarkParse and remarkStringify.

			const fileOfRemark = remark()
				.use(remarkFrontmatter, ["yaml", "toml"])
				.use(remarkParseFrontmatter)
				.processSync(fileContent);

			// Add file details as metadata information on integration
			if (x === "index.mdx" || x === "index.md") {
				integration.metadata = fileOfRemark.data.frontmatter;
				return;
			}

			const pathOfX = fileToPath(x);

			// Add file details as doc on integration
			integration.docs.push({
				// clean up things like .md
				path: path.join(plainPathString, "integrations", pathOfX),
				...fileOfRemark.data,
			});
		});

		integrationList.push(integration);
	}

	return integrationList.sort((a, b) => a.name.localeCompare(b.name));
};

export const getIntegration = async (
	pathname: string,
): Promise<Integration[] | undefined | null> => {
	const pathParts = getPathWithNormalizedSlashes(pathname).split("/");
	// If this is not a path under /docs/integrations,
	// we don't need to fetch the list. This can be improved
	// in future by totally refactoring how the integrations directory
	// is currently structured.
	if (pathParts[pathParts.length - 2] !== "integrations") {
		return null;
	}
	// Get the parent directory name of the current path
	// e.g. /docs/integrations/box/webhooks -> box
	const name = pathParts[pathParts.length - 1];

	const remixPathString = "./content/docs";
	const plainPathString = "/docs";
	const integrationDir = path.join(remixPathString, `integrations/${name}/`);
	const integrationList = [];

	const dir = await fs.promises.opendir(integrationDir);
	for await (const dirent of dir) {
		const integration: Integration = {
			name: dirent.name,
			path: dirent.parentPath,
			docs: [],
			metadata: null,
		};
		// console.log("\n* Integration", integration);
		const filePath = path.join(dirent.parentPath, dirent.name);
		const entIsFile = fs.lstatSync(filePath).isFile();
		// console.log("\n* entIsFile", entIsFile);
		if (!entIsFile || filePath.includes("index")) {
			continue;
		}

		// Parse markdown
		const fileContent = fs.readFileSync(filePath).toString();
		// console.log("\n* fileContent", fileContent.substring(0, 20));
		// With Remark, which is built on top of Unified
		// basically by adding remarkParse and remarkStringify.

		const fileOfRemark = remark()
			.use(remarkFrontmatter, ["yaml", "toml"])
			.use(remarkParseFrontmatter)
			.use(remarkHeadings)
			.processSync(fileContent);

		const pathOfX = fileToPath(dirent.name);

		// Add file details as doc on integration
		integration.docs.push({
			// clean up things like .md
			path: path.join(plainPathString, "integrations", pathOfX),
			...fileOfRemark.data,
		});
		// console.log("\n* fileOfRemark", fileOfRemark.data?.headings);
		// fs.readdirSync(integrationDir).flatMap(async (x) => {
		// });

		integrationList.push(integration);
		// console.log("\n* integrationList", integrationList);
	}

	// console.log("\n* integrationList", integrationList);

	return integrationList.sort((a, b) => a.name.localeCompare(b.name));
};
