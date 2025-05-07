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
				parent?.tagName === "Link"
			) {
				// Don't wrap terms in headings or links
				return;
			}
			let matchingTitle = "";
			const matchingTerm = terms.find((term) => {
				let termIndex;
				const nodeValue = term.caseSensitive
					? node.value
					: node.value.toLowerCase();
				const foundTitle = term.titles.find((title) => {
					const titleValue = term.caseSensitive ? title : title.toLowerCase();
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

			if (!matchingTerm) {
				return;
			}

			// We only want to match the first instance of this term on the page
			if (
				foundTerms.some((term) => term.titles[0] === matchingTerm.titles[0])
			) {
				return;
			}

			const parts = node.value.split(matchingTitle);
			foundTerms.push(matchingTerm);

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
