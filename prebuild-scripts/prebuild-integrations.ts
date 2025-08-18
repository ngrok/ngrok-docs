import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { logWarning } from "~/utils/errorLogging";
import { getLabelFromDirectoryName } from "~/utils/sidebarGeneration";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INTEGRATIONS_DIR = path.join(__dirname, "../pages/docs/integrations");
const OUTPUT_FILE = path.join(
	__dirname,
	"../generated/integrations/integrations-data.json",
);

interface IntegrationFrontmatter {
	name?: string;
	title?: string;
	sidebar_label?: string;
	description?: string;
	excerpt?: string;
	logo?: string;
}

interface IntegrationDoc {
	content: string;
	contentTitle?: string;
	excerpt?: string;
	frontmatter: IntegrationFrontmatter;
	path: string;
}

interface Integration {
	name: string;
	path: string;
	metadata: {
		name: string;
		title: string;
		sidebar_label: string;
		description: string;
		excerpt?: string;
		logo?: string;
	};
	docs: IntegrationDoc[];
}

function findMdxFiles(
	dir: string,
	relativePath: string = "",
): IntegrationDoc[] {
	const docs: IntegrationDoc[] = [];

	try {
		const entries = fs.readdirSync(dir, { withFileTypes: true });

		for (const entry of entries) {
			if (entry.isDirectory()) {
				// Recursively search subdirectories
				const subDocs = findMdxFiles(
					path.join(dir, entry.name),
					path.join(relativePath, entry.name),
				);
				docs.push(...subDocs);
			} else if (entry.name === "+Page.mdx") {
				// Process MDX files
				const filePath = path.join(dir, entry.name);

				try {
					const fileContent = fs.readFileSync(filePath, "utf-8");
					const { data: frontmatter, content } = matter(fileContent) as {
						data: IntegrationFrontmatter;
						content: string;
					};

					const urlPath = relativePath
						? `/docs/integrations/${relativePath}`
						: `/docs/integrations`;

					docs.push({
						content: content.trim(),
						contentTitle:
							frontmatter.title || getLabelFromDirectoryName(relativePath),
						excerpt: frontmatter.excerpt,
						frontmatter: frontmatter,
						path: urlPath,
					});
				} catch (error) {
					logWarning({
						title: "Integration MDX file error",
						message: `⚠ Failed to process ${filePath}`,
						error,
					});
				}
			}
		}
	} catch (error) {
		logWarning({
			title: "Integration directory read error",
			message: `⚠ Failed to read directory ${dir}`,
			error,
		});
	}

	return docs;
}

function extractIntegrationData(): Integration[] {
	const integrations: Integration[] = [];

	// Read all directories in the integrations folder
	const entries = fs.readdirSync(INTEGRATIONS_DIR, { withFileTypes: true });

	for (const entry of entries) {
		if (entry.isDirectory()) {
			const integrationPath = path.join(INTEGRATIONS_DIR, entry.name);
			const mdxPath = path.join(integrationPath, "+Page.mdx");

			// Check if +Page.mdx exists in this directory
			if (fs.existsSync(mdxPath)) {
				try {
					const fileContent = fs.readFileSync(mdxPath, "utf-8");
					const { data: frontmatter } = matter(fileContent) as {
						data: IntegrationFrontmatter;
					};

					// Only include directories that have the required frontmatter fields
					if (frontmatter.name && frontmatter.title) {
						// Find all MDX files in this integration directory
						const docs = findMdxFiles(integrationPath, entry.name);

						const integration: Integration = {
							name: frontmatter.name,
							path: `/docs/integrations/${entry.name}`,
							metadata: {
								name: frontmatter.name,
								title:
									frontmatter.title || getLabelFromDirectoryName(entry.name),
								sidebar_label: frontmatter.sidebar_label || frontmatter.title,
								description: frontmatter.description || "",
								excerpt: frontmatter.excerpt,
								logo: frontmatter.logo,
							},
							docs: docs,
						};

						integrations.push(integration);
					}
				} catch (error) {
					logWarning({
						title: "Integration MDX file error",
						message: `⚠ Failed to process ${mdxPath}`,
						error,
					});
				}
			}
		}
	}

	// Sort by name for consistency
	integrations.sort((a, b) => a.name.localeCompare(b.name));

	return integrations;
}

export default function main() {
	const integrations = extractIntegrationData();

	// Ensure the output directory exists
	const outputDir = path.dirname(OUTPUT_FILE);
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}

	// Write the data to a JSON file
	fs.writeFileSync(OUTPUT_FILE, JSON.stringify(integrations, null, 2));

	console.log(
		`✅ Generated integrations data with ${integrations.length} integrations`,
	);
	console.log(`📄 Output written to: ${OUTPUT_FILE}`);
}

// Always run main when this file is executed directly
main();
