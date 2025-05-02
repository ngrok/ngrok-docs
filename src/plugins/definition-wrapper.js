const { visit } = require("unist-util-visit");
const { terms } = require("../components/Definition/data");

module.exports = function remarkWordWrapper(stuff) {
	const remainingTerms = terms;
	return (tree) => {
		const foundTerms = [];
		visit(tree, "text", (node, index, parent) => {
			let matchingTitle = "";
			const matchingTerm = terms.find((term) => {
				matchingTitle = term.titles.find((title) => node.value.includes(title));
				return Boolean(matchingTitle);
			});

			if (!matchingTerm) {
				return;
			}

			// We only want to match the first instance of this term on the page
			if (
				foundTerms.some((term) =>
					// Case-insensitive check
					term.titles
						.toLowerCase()
						.includes(matchingTitle.toLowerCase()),
				)
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
