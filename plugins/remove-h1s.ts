/**
 * This plugin is used to remove H1 headings from the Markdown content
 * to prevent conflicts with the page title in the layout.
 */
import { visit } from "unist-util-visit";

export default function remarkRemoveH1s() {
	return (tree: any) => {
		visit(tree, "heading", (node, index, parent) => {
			if (node.depth === 1 && parent) {
				parent.children.splice(index, 1);
			}
		});
	};
}
