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
import DocsCodeBlock from "@components/code-block";

export function CodeSwitcher({
	children,
}: {
	children: (typeof DocsCodeBlock)[];
}) {
	console.log("Rendering children", children);
	return children;
}
