/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */

import type { Node } from "mdast";
import { type Action, type VisitorResult, visit } from "unist-util-visit";
import { terms } from "../pages/components/Definition/data";

function findSpecialIndex(str: string, text: string) {
	// Get the index of the first occurrence of the text in str,
	// so long as text doesn't start with a letter or number
	const escapedText = text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Escape special regex characters
	const regex = new RegExp(`(?:^|\\n|\\s|-)(${escapedText})`, "g");
	const match = regex.exec(str);
	return match ? match.index + match[0].indexOf(match[1]) : -1;
}

function parentIsForbiddenTag(tagName: string) {
	// Check if the tag name is in the list of forbidden tags
	const forbiddenTags = [
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"a",
		"Link",
		"Definition",
		"code",
		"pre",
		"button",
		"span",
	];
	return forbiddenTags.includes(tagName);
}

function getStyles(parent: {
	properties?: { className?: any };
	tagName: string;
}) {
	let styles = "";
	if (parent?.properties?.className) {
		styles += `${parent.properties.className} `;
	}
	if (parent.tagName === "strong") {
		styles += "font-bold ";
	}

	if (parent.tagName === "em") {
		styles += "italic ";
	}
	return styles;
}

export default function rehypeWordWrapper() {
	return (tree: Node) => {
		const foundTerms: any[] = [];
		visit(
			tree,
			"text",
			(
				node: { value: string },
				index: any,
				parent: {
					children: [
						(undefined | Action | null | undefined)?,
						(number | null | undefined)?,
					];
					tagName: any;
				},
			): VisitorResult => {
				if (!node?.value) {
					return parent.children;
				}

				if (parentIsForbiddenTag(parent.tagName)) {
					// Skip terms in certain tags
					return parent.children;
				}
				let matchingTitle = "";
				const matchingTerm = terms.find(
					(term: { titles?: any; caseSensitive?: any; pluralEnding?: any }) => {
						// We only want to match the first instance of this term on the page
						if (
							foundTerms.some((fTerm) => fTerm.titles[0] === term.titles[0])
						) {
							return false;
						}
						/**
						 * Find the first term that matches the node value
						 * and is not already found in the foundTerms array.
						 * We use indexOf so we can pull the exact term out
						 * of the node value.
						 */
						let termStartIndex = -1;
						const { caseSensitive, pluralEnding } = term;
						const nodeValue = caseSensitive
							? node.value
							: node.value.toLowerCase();
						const foundTitle = term.titles.find((title: string) => {
							const titleValue = caseSensitive ? title : title.toLowerCase();
							termStartIndex = findSpecialIndex(nodeValue, titleValue);
							return Boolean(termStartIndex !== -1);
						});
						if (!foundTitle) return false;
						let termEndIndex = termStartIndex + foundTitle.length;

						// Check if the term has a plural ending, and if the
						// word we found in the node value has that plural ending
						if (
							pluralEnding &&
							node.value.slice(
								termEndIndex,
								termEndIndex + pluralEnding.length,
							) === pluralEnding
						) {
							termEndIndex += pluralEnding.length;
						}

						matchingTitle = node.value.slice(termStartIndex, termEndIndex);
						return Boolean(matchingTitle);
					},
				);

				if (!matchingTerm) {
					return parent.children;
				}

				const parts = node.value.split(matchingTitle);
				if (parts.length < 2) {
					// If the term is not found in the text, return
					return parent.children;
				}
				const firstPart = parts[0];
				let secondPart = parts[1];
				if (parts.length > 2) {
					// If there are more than two parts, join them back together
					secondPart = parts.slice(1).join(matchingTitle);
				}
				foundTerms.push(matchingTerm);

				const styles = getStyles(parent);

				parent.children.splice(
					index,
					1,
					{
						type: "text",
						value: firstPart,
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
					} as any,
					{
						type: "element",
						tagName: "Definition",
						properties: {
							meaning: matchingTerm.meaning,
							hideIfRedundant: true,
							link: matchingTerm.link,
							className: styles,
							wrapperTermString: JSON.stringify(matchingTerm),
						},
						children: [
							{
								type: "text",
								value: matchingTitle,
							},
						],
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
					} as any,
					{
						type: "text",
						value: secondPart,
						// biome-ignore lint/suspicious/noExplicitAny: <explanation>
					} as any,
				);

				return parent.children;
			},
		);
	};
}
