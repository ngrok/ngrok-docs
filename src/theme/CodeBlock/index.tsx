import BrowserOnly from "@docusaurus/BrowserOnly";
import { cx } from "@ngrok/mantle/cx";
import type { ComponentProps } from "react";
import DocsCodeBlock, { CodeBlockFallback } from "../../components/code-block";

type Props = ComponentProps<typeof DocsCodeBlock>;

export default function CodeBlock({ className, ...props }: Props) {
	console.log("CodeBlock", props, className);
	return (
		<BrowserOnly
			fallback={
				<CodeBlockFallback className="mb-4">Loading…</CodeBlockFallback>
			}
		>
			{() => <DocsCodeBlock className={cx("mb-4", className)} {...props} />}
		</BrowserOnly>
	);
}
