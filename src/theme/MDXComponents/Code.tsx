import { InlineCode } from "@ngrok/mantle/inline-code";
import CodeBlock from "@theme/CodeBlock";
import type { Props } from "@theme/MDXComponents/Code";
import type { ComponentProps, ReactNode } from "react";
import React from "react";

function shouldBeInline(props: Props) {
	return (
		// empty code blocks have no props.children,
		// see https://github.com/facebook/docusaurus/pull/9704
		typeof props.children !== "undefined" &&
		React.Children.toArray(props.children).every(
			(el) => typeof el === "string" && !el.includes("\n"),
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
