import type { Paragraph, Root, Text } from "mdast";
import type { MdxJsxFlowElement } from "mdast-util-mdx-jsx";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

const remarkAdmonitions: Plugin<[], Root> = () => {
	return (tree: Root) => {
		visit(tree, "paragraph", (node, index, parent) => {
			if (!parent || index === undefined) return;

			const firstChild = node.children[0];
			if (!firstChild || firstChild.type !== "text") return;

			const text = firstChild.value;
			const startMatch = text.match(/^:{3,}\s*(\w+)(?:\s+(.+))?$/);

			if (!startMatch) return;

			const [, type, label] = startMatch;
			// Only use label if there was content after a space following the type
			const finalLabel = label?.trim() || undefined;
			const children: any[] = [];
			let nextIndex = index + 1;

			// Collect content until we find the closing
			while (nextIndex < parent.children.length) {
				const currentNode = parent.children[nextIndex];

				// Check if this node contains the closing pattern
				let hasClosing = false;
				if (currentNode.type === "paragraph") {
					visit(currentNode, "text", (textNode: Text) => {
						if (textNode.value.includes(":::")) {
							hasClosing = true;
						}
					});
				}

				if (hasClosing) {
					// Handle the closing node - it might have content before the closing
					if (currentNode.type === "paragraph") {
						const paragraphCopy = {
							...currentNode,
							children: [...currentNode.children],
						};

						// Process each text node to split at closing
						for (let i = 0; i < paragraphCopy.children.length; i++) {
							const child = paragraphCopy.children[i];
							if (child.type === "text") {
								const closingIndex = child.value.indexOf(":::");
								if (closingIndex !== -1) {
									const beforeClosing = child.value
										.slice(0, closingIndex)
										.trim();
									if (beforeClosing) {
										paragraphCopy.children[i] = {
											...child,
											value: beforeClosing,
										};
										children.push(paragraphCopy);
									}

									// Handle any content after the closing
									const afterClosing = child.value
										.slice(closingIndex + 3)
										.trim();
									if (afterClosing) {
										const remainingNode: Paragraph = {
											type: "paragraph",
											children: [
												{
													type: "text",
													value: afterClosing,
												},
											],
										};
										parent.children.splice(nextIndex + 1, 0, remainingNode);
									}
									break;
								}
							}
						}
					}
					break;
				}

				children.push(currentNode);
				nextIndex++;
			}

			// Create the Callout JSX element
			const attributes = [
				{
					type: "mdxJsxAttribute" as const,
					name: "type",
					value: type,
				},
			];

			if (finalLabel) {
				attributes.push({
					type: "mdxJsxAttribute" as const,
					name: "label",
					value: finalLabel,
				});
			}

			const calloutNode: MdxJsxFlowElement = {
				type: "mdxJsxFlowElement",
				name: "Callout",
				attributes,
				children,
			};

			// Replace the original paragraph and all collected content with the Callout
			const nodesToReplace = nextIndex - index;
			parent.children.splice(index, nodesToReplace, calloutNode as any);
		});
	};
};

export default remarkAdmonitions;
