import { promises as fs } from "node:fs";
import path from "node:path";
import type { PageContextServer } from "vike/types";
import { logWarning } from "~/utils/errorLogging";
import { generateHeadingId } from "~/utils/getHeadings";
import {
	MAX_HEADING_LEVEL,
	MIN_HEADING_LEVEL,
} from "~/utils/globals/mdxSettings";
import { data as parentData } from "../+data";

interface Heading {
	id: string;
	text: string;
	level: number;
	synthetic?: boolean;
}

interface Frontmatter {
	[key: string]: any;
}

function normalizeHeadingText(text: string): string {
	return text
		.replace(/\s*\{#.*$/, "") // Remove any custom {#id} syntax
		.replace(/^\*\*\*(.*)\*\*\*$/, "$1") // Remove bold italic markdown formatting (***)
		.replace(/^\*\*(.*)\*\*$/, "$1") // Remove bold markdown formatting (**)
		.replace(/^\*([^*].*[^*])\*$/, "$1") // Remove italic markdown formatting (*)
		.replace(/^_(.*)_$/, "$1") // Remove italic markdown formatting (_)
		.replace(/^`(.*)`$/, "$1") // Remove inline code markdown formatting (`)
		.replaceAll("**", "")
		.trim();
}

// Extract headings from MDX content, excluding those inside code blocks
// This function mirrors the client-side useTableOfContents logic
function extractHeadings(content: string): {
	headings: Heading[];
	firstH1: Heading | undefined;
} {
	const headings: Heading[] = [];
	let firstH1: Heading | undefined;
	const existingIds: string[] = [];

	// Split content into sections, tracking code blocks
	const lines = content.split("\n");
	let insideCodeBlock = false;
	let _codeBlockDelimiter = "";

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];

		// Check for code block start/end
		if (line.trim().startsWith("```")) {
			if (!insideCodeBlock) {
				// Starting a code block
				insideCodeBlock = true;
				_codeBlockDelimiter = line.trim();
			} else if (line.trim() === "```" || line.trim().startsWith("```")) {
				// Ending a code block
				insideCodeBlock = false;
				_codeBlockDelimiter = "";
			}
			continue;
		}

		// Skip heading extraction if we're inside a code block
		if (insideCodeBlock) {
			continue;
		}

		// Extract headings using regex
		const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
		if (headingMatch) {
			const level = headingMatch[1].length;
			if (level === 1 && !firstH1) {
				firstH1 = {
					id: generateHeadingId(headingMatch[2], existingIds),
					text: normalizeHeadingText(headingMatch[2]),
					level,
					synthetic: true, // Mark as synthetic for special handling
				};
				continue;
			}
			if (level > MAX_HEADING_LEVEL || level < MIN_HEADING_LEVEL) continue; // Skip h1s and all headings deeper than h3

			const text = normalizeHeadingText(headingMatch[2]);

			// Skip headings that are likely CodeBlockTitle or other components with data-ignore-toc
			// Check if the line before or after contains CodeBlockTitle or similar components
			const contextLines = lines.slice(
				Math.max(0, i - 2),
				Math.min(lines.length, i + 3),
			);
			const hasIgnoreTocComponent = contextLines.some(
				(contextLine) =>
					contextLine.includes("CodeBlockTitle") ||
					contextLine.includes("data-ignore-toc"),
			);

			if (hasIgnoreTocComponent) {
				continue; // Skip this heading as it's likely a component heading that should be ignored
			}

			const newID = generateHeadingId(text, existingIds);
			headings.push({ id: newID, text, level });
		}
	}

	return { headings, firstH1 };
}

// Extract frontmatter from markdown content
function extractFrontmatter(content: string): {
	frontmatter: Frontmatter;
	contentWithoutFrontmatter: string;
} {
	const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
	const match = content.match(frontmatterRegex);

	if (!match) {
		return { frontmatter: {}, contentWithoutFrontmatter: content };
	}

	const yamlContent = match[1];
	const contentWithoutFrontmatter = content.slice(match[0].length);

	try {
		// Simple YAML parser for basic key-value pairs
		const frontmatter: Frontmatter = {};
		const lines = yamlContent.split("\n");

		for (const line of lines) {
			const trimmedLine = line.trim();
			if (!trimmedLine || trimmedLine.startsWith("#")) continue;

			const colonIndex = trimmedLine.indexOf(":");
			if (colonIndex > 0) {
				const key = trimmedLine.slice(0, colonIndex).trim();
				let value: any = trimmedLine.slice(colonIndex + 1).trim();

				// Remove quotes if present
				if (
					(value.startsWith('"') && value.endsWith('"')) ||
					(value.startsWith("'") && value.endsWith("'"))
				) {
					value = value.slice(1, -1);
				}

				// Try to parse as number or boolean
				if (value === "true") value = true;
				else if (value === "false") value = false;
				else if (!Number.isNaN(Number(value)) && value !== "")
					value = Number(value);

				frontmatter[key] = value;
			}
		}

		return { frontmatter, contentWithoutFrontmatter };
	} catch (error) {
		logWarning({
			title: "Frontmatter Parsing Error",
			message: `Failed to parse frontmatter for content on the server.`,
			error,
		});
		return { frontmatter: {}, contentWithoutFrontmatter: content };
	}
}

export async function data(pageContext: PageContextServer) {
	try {
		// Get parent data (including sidebarData)
		const parentDataResult = await parentData(pageContext);

		// Get the file path from the URL
		const urlPath = pageContext.urlPathname;
		const possibleFilePaths = [
			path.join(process.cwd(), "pages", `${urlPath}/+Page.mdx`),
			path.join(process.cwd(), "pages", `${urlPath}/+Page.md`),
		];

		// Try to read the file with either .mdx or .md extension
		let content: string = "";
		let foundFilePath: string | null = null;

		for (const filePath of possibleFilePaths) {
			try {
				content = await fs.readFile(filePath, "utf-8");
				foundFilePath = filePath;
				break;
			} catch (_error) {}
		}

		if (!foundFilePath) {
			throw new Error(`No +Page.mdx or +Page.md file found for ${urlPath}`);
		}

		// Extract frontmatter and content
		const { frontmatter, contentWithoutFrontmatter } =
			extractFrontmatter(content);

		// Extract headings from content without frontmatter
		const { headings, firstH1 } = extractHeadings(contentWithoutFrontmatter);

		// If frontmatter.title doesn't exist, add the value of the first h1 heading
		if (!frontmatter?.title && firstH1) {
			frontmatter.title = firstH1.text;
		}

		// If frontmatter.description doesn't exist, use the first chunk of content
		if (!frontmatter?.description) {
			frontmatter.description = `Learn about ${frontmatter.title}.`;
		}
		return {
			...parentDataResult,
			headings,
			frontmatter,
		};
	} catch (error) {
		if (pageContext.urlPathname !== "/docs") {
			logWarning({
				title: "Server-side Heading Extraction",
				message: `Failed to extract headings for ${pageContext.urlPathname}`,
				error,
			});
		}
		// Still get parent data even if heading extraction fails
		const parentDataResult = await parentData(pageContext);
		return {
			...parentDataResult,
			headings: [],
			frontmatter: {},
		};
	}
}
