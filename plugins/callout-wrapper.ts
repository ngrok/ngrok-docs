import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

// Plugin to transform remark-directive container directives to Callout components
export const calloutWrapper: Plugin = () => {
	return (tree) => {
		visit(tree, (node: any) => {
			if (
				node.type === "containerDirective" &&
				["note", "tip", "info", "warning", "danger", "success"].includes(
					node.name,
				)
			) {
				const admonitionType = node.name;
				const label = node.attributes?.title || "";

				// Transform to MDX JSX element
				node.type = "mdxJsxFlowElement";
				node.name = "Callout";

				node.attributes = [
					{
						type: "mdxJsxAttribute",
						name: "type",
						value: admonitionType,
					},
				];

				// Add label attribute if it exists
				if (label) {
					node.attributes.push({
						type: "mdxJsxAttribute",
						name: "label",
						value: label,
					});
				}
			}
		});
	};
};
