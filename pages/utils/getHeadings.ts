/**
 * TODO: We can use remarkHeadings to parse the headings rather than the code
 * we have now.
 */

import fs from "node:fs/promises";
import path from "node:path";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import type { TocHeading } from "~/hooks/useTableOfContents";
import { logError } from "./errorLogging";

export type Heading = {
	text: string;
	level: number;
	id: string;
};

export async function getHeadings(rawPath: string) {
	const potentialFileEndings = [".mdx", ".md", "/index.mdx", "/index.md"];
	const basePath = !rawPath.endsWith("/")
		? rawPath
		: rawPath.substring(0, rawPath.length - 1);
	let finalFilePath = "";
	let markdown = "";
	try {
		for (const ending of potentialFileEndings) {
			const filePath = path.join(process.cwd(), "/content", basePath + ending);
			try {
				finalFilePath = filePath;
				markdown = await fs.readFile(filePath, "utf8");
				if (markdown) break;
			} catch (_error) {}
		}

		if (!markdown) {
			throw new Error(`No markdown file found for path: ${finalFilePath}`);
		}

		const headings: Heading[] = [];

		const tree = unified().use(remarkParse).use(remarkMdx).parse(markdown);

		visit(tree, "heading", (node: any) => {
			const text = node.children
				.map((child: any) => {
					if (!child.children) {
						return child;
					}
					return {
						type: child.children[0].type,
						value: child.children[0].value,
					};
				})
				.filter(
					(child: any) => child.type === "text" || child.type === "inlineCode",
				)
				.map((child: any) => child.value)
				.join("");
			const id = getHeadingId(text, headings);

			const level =
				text.includes("title: ") || text.includes("description: ")
					? 0
					: node.depth;
			if (level > 1) {
				headings.push({ text, level, id });
			}
		});

		return headings;
	} catch (error) {
		logError({
			title: "TOC Generation Error",
			message: `Failed to generate headings for ${basePath}. If this is an acorn error, it's likely that the page content has issues rather than the headings.`,
			error,
		});
		return null;
	}
}

export function getHeadingId(
	headingText: string,
	headings: Heading[] = [],
): string {
	const baseId = headingText
		.toLowerCase()
		.replace(/_/g, "-")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
	// Prevent duplicate IDs by checking existing headings
	let idSuffixNumber = 0;
	for (const heading of headings) {
		if (heading.id === baseId) {
			idSuffixNumber++;
		}
	}
	return idSuffixNumber === 0 ? baseId : baseId + idSuffixNumber;
}

export function generateHeadingId(text: string, existingIds: string[]): string {
	const newID = text
		.toLowerCase()
		.replace(/_/g, "-")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");

	if (existingIds.includes(newID)) {
		const suffixedId = `${newID}-${existingIds.filter((id) => id.startsWith(newID)).length + 1}`;
		existingIds.push(suffixedId);
		return suffixedId;
	}

	existingIds.push(newID);
	return newID;
}

export function extractHeadingsFromDOM(existingIds: string[] = []) {
	// Only target headings within the markdown content area
	const markdownContainer = document.querySelector(
		"#ng-docs-guide-main-article",
	);
	if (!markdownContainer) return [];

	const headingElements = markdownContainer.querySelectorAll("h1, h2, h3");
	const headingData: TocHeading[] = [];

	headingElements.forEach((heading) => {
		const level = parseInt(heading.tagName.charAt(1));
		const text = heading.textContent || "";

		if (text.trim()) {
			let id = heading.id;

			// If heading doesn't have an ID, generate one
			if (!id) {
				id = generateHeadingId(text, existingIds);
				heading.id = id;
			}

			// Wrap heading in anchor if not already wrapped
			if (!heading.querySelector("a")) {
				const anchor = document.createElement("a");
				anchor.href = `#${id}`;
				anchor.className = "heading-anchor";

				// Move all heading content into the anchor
				while (heading.firstChild) {
					anchor.appendChild(heading.firstChild);
				}
				heading.appendChild(anchor);
			}

			headingData.push({ id, text, level });
		}
	});

	return headingData;
}
