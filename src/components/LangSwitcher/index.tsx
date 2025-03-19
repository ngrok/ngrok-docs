/**
 * Some important notes:
 * 	- Because we swizzled the codeblock component to return a
 *   DocCodeBlock, we can actually wrap any codeblocks in the docs
 *   with this component and it should work fine. For example:
 *   <CodeSwitcher>
 * 	  ```ts filename="example.ts"
 *     ... code here
 *    ```
 *    ```js filename="example.js"
 * 	   ... code here
 * 	  ```
 *   </CodeSwitcher>
 *   This should work. So at this point it's a matter of adding the tabs
 *   to above the codeblock and only showing the content that makes the tab
 */
import { parseLanguage, parseMetastring } from "@ngrok/mantle/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ngrok/mantle/tabs";
import DocsCodeBlock from "../code-block.jsx";

export function LangSwitcher({
	children,
}: {
	children: (typeof DocsCodeBlock)[];
}) {
	console.log("Rendering children", children);
	// map the children
	// check the language of the codeblock
	// generate a tab for each language
	const structuredChildren = children.map((child: any) => {
		const { className, metastring, children } = child.props.children.props;
		const language = parseLanguage(className);
		const meta = parseMetastring(metastring);
		const title = meta.title;
		return {
			language,
			title,
			content: children,
			meta,
		};
	});
	console.log("Structured children", structuredChildren);
	return (
		<Tabs
			orientation="horizontal"
			defaultValue={structuredChildren[0]?.language}
			className="w-[400px]"
		>
			<TabsList>
				{structuredChildren.map((child) => (
					<TabsTrigger key={child.content} value={child.language}>
						{child.language}
					</TabsTrigger>
				))}
			</TabsList>
			{structuredChildren.map((child) => (
				<TabsContent
					key={child.content + child.language}
					value={child.language}
				>
					<DocsCodeBlock
						className={child.language}
						metastring={`title=${child.title}`}
					>
						{child.content}
					</DocsCodeBlock>
				</TabsContent>
			))}
		</Tabs>
	);
}
