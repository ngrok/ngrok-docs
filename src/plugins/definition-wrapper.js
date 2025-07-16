/**
 * Because of the nature of docusaurus, to test changes here you have to
 * stop the dev server, run `pnpm clear-cache` or `pnpm clear-cache-win` depending on your OS,
 * and then restart the dev server.
 */

// Hypothesis: If the term is already on the page, but a pluralized version of it
// is found later, it should not be wrapped again. This is causing errors.

const { visit } = require("unist-util-visit");
const { terms } = require("../components/Definition/data");

function findSpecialIndex(str, text) {
	// Get the index of the first occurrence of the text in str,
	// so long as text doesn't start with a letter or number
	const escapedText = text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Escape special regex characters
	const regex = new RegExp(`(?:^|\\n|\\s|-)(${escapedText})`, "g");
	const match = regex.exec(str);
	return match ? match.index + match[0].indexOf(match[1]) : -1;
}

function parentIsForbiddenTag(tagName) {
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

function getStyles(parent) {
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

module.exports = function remarkWordWrapper(stuff) {
	return (tree) => {
		const foundTerms = [];
		visit(tree, "text", (node, index, parent) => {
			if (!node?.value) {
				return parent.children;
			}

			if (parentIsForbiddenTag(parent.tagName)) {
				// Skip terms in certain tags
				return parent.children;
			}
			let matchingTitle = "";
			const matchingTerm = terms.find((term) => {
				// We only want to match the first instance of this term on the page
				if (foundTerms.some((fTerm) => fTerm.titles[0] === term.titles[0])) {
					return false;
				}
				/**
				 * Find the first term that matches the node value
				 * and is not already found in the foundTerms array.
				 * We use indexOf so we can pull the exact term out
				 * of the node value.
				 */
				let termStartIndex;
				const { caseSensitive, pluralEnding } = term;
				const nodeValue = caseSensitive ? node.value : node.value.toLowerCase();
				const foundTitle = term.titles.find((title) => {
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
					node.value.slice(termEndIndex, termEndIndex + pluralEnding.length) ===
						pluralEnding
				) {
					termEndIndex += pluralEnding.length;
				}

				matchingTitle = node.value.slice(termStartIndex, termEndIndex);
				return Boolean(matchingTitle);
			});

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

			return parent.children.splice(
				index,
				1,
				...[
					{
						type: "text",
						value: firstPart,
					},
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
					},
					{
						type: "text",
						value: secondPart,
					},
				],
			);
		});
	};
};
