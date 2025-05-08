const { visit } = require("unist-util-visit");
const { terms } = require("../components/Definition/data");

module.exports = function remarkWordWrapper(stuff) {
	const remainingTerms = terms;
	return (tree) => {
		const foundTerms = [];
		visit(tree, "text", (node, index, parent) => {
			if (!node?.value) {
				return;
			}

			if (
				parent?.tagName?.startsWith("h") ||
				parent?.tagName === "a" ||
				parent?.tagName === "Link" ||
				parent?.tagName === "Definition" ||
				parent?.tagName === "code" ||
				parent?.tagName === "pre"
			) {
				// Skip terms in certain tags
				return;
			}
			let matchingTitle = "";
			const matchingTerm = terms.find((term) => {
				// We only want to match the first instance of this term on the page
				if (foundTerms.some((fTerm) => fTerm.titles[0] === term.titles[0])) {
					return;
				}
				/**
				 * Find the first term that matches the node value
				 * and is not already found in the foundTerms array.
				 * We use indexOf so we can pull the exact term out
				 * of the node value.
				 */
				let termIndex;
				const { caseSensitive } = term;
				const nodeValue = caseSensitive ? node.value : node.value.toLowerCase();
				const foundTitle = term.titles.find((title) => {
					const titleValue = caseSensitive ? title : title.toLowerCase();
					termIndex = nodeValue.indexOf(titleValue);
					return Boolean(termIndex !== -1);
				});
				if (!foundTitle) return false;
				matchingTitle = node.value.slice(
					termIndex,
					termIndex + foundTitle.length,
				);
				return Boolean(matchingTitle);
			});

			if (node.value.includes("unified ingress platform")) {
				console.log("Found it", matchingTerm);
			}

			if (!matchingTerm) {
				return;
			}

			const parts = node.value.split(matchingTitle);
			if (parts.length < 2) {
				// If the term is not found in the text, return
				return;
			}
			foundTerms.push(matchingTerm);

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

			return parent.children.splice(
				index,
				1,
				...[
					{
						type: "text",
						value: parts[0],
					},
					{
						type: "element",
						tagName: "Definition",
						properties: {
							meaning: matchingTerm.meaning,
							link: matchingTerm.link,
							className: styles,
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
						value: parts[1],
					},
				],
			);
		});
	};
};
