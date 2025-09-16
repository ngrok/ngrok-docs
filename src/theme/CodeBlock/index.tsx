import BrowserOnly from "@docusaurus/BrowserOnly";
import type { ComponentProps } from "react";
import DocsCodeBlock, { CodeBlockFallback } from "../../components/code-block";

type Props = ComponentProps<typeof DocsCodeBlock>;

export default function CodeBlock({ className, ...props }: Props) {
	// If className is not provided, check if props.language exists. If it does,
	// use that to construct a className, prefixed with "language-".
	if (!className && props.language) {
		className = `language-${props.language}`;
	}

	return (
		<BrowserOnly
			fallback={
				<CodeBlockFallback className="mb-4">Loading…</CodeBlockFallback>
			}
		>
			{() => <DocsCodeBlock className={className} {...props} />}
		</BrowserOnly>
	);
}
