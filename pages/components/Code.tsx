import { InlineCode } from "@ngrok/mantle/inline-code";
import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";
import { Children } from "react";
import CodeBlock from "./code-block";

type Props = ComponentProps<typeof CodeBlock>;

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
		<InlineCode {...props} className={clsx(props.className, "not-prose ")}>
			{props.children}
		</InlineCode>
	) : (
		<CodeBlock {...(props as ComponentProps<typeof CodeBlock>)} />
	);
}
