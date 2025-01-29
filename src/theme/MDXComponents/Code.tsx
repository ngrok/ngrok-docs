import { InlineCode } from "@ngrok/mantle/inline-code";
import CodeBlock from "@theme/CodeBlock";
import type { Props } from "@theme/MDXComponents/Code";
import { Children } from "react";
import type { ComponentProps, ReactNode } from "react";

function shouldBeInline(props: Props) {
	return (
		// empty code blocks have no props.children,
		// see https://github.com/facebook/docusaurus/pull/9704
		typeof props.children !== "undefined" &&
		Children.toArray(props.children).every(
			(child) => typeof child === "string" && !child.includes("\n"),
		)
	);
}

export default function MDXCode(props: Props): ReactNode {
	return shouldBeInline(props) ? (
		<InlineCode {...props} />
	) : (
		<CodeBlock {...(props as ComponentProps<typeof CodeBlock>)} />
	);
}
