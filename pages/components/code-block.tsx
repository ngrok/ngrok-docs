import type {
	CodeBlockCode,
	Mode,
	SupportedLanguage,
} from "@ngrok/mantle/code-block";
import { CodeBlock } from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import type { WithStyleProps } from "@ngrok/mantle/types";
import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";
import { useEffect, useState } from "react";
import { CodeBlockWithInfo } from "./CodeBlockWithInfo";
import { defaultLanguageInfo } from "./LangSwitcher/data";
import { LangTab } from "./LangSwitcher/LangTab";
import { getLanguageInfo, getMetaData } from "./LangSwitcher/utils";

type WithIndentation = Pick<
	ComponentProps<typeof CodeBlockCode>,
	"indentation"
>;

type Props = WithStyleProps & {
	/**
	 * The code content inside the block. This contains the raw code to display as a string.
	 */
	children: string;
	/**
	 * Specifies the language of the code block (e.g., language-js, language-python).
	 */
	className?: string;
	/**
	 * The icon to display in the header of the code block.
	 */
	icon?: ReactNode;
	/**
	 * The language of the code block. This is used to determine the syntax highlighting of the code block.
	 */
	language?: SupportedLanguage;
	/**
	 * Additional metadata for the code block. Contains custom information passed after the language in the Markdown code block. Useful for features like line highlighting or titles.
	 */
	metastring?: string;
	/**
	 * The mode of the code block. This is displayed as an icon in the header of the code block.
	 */
	mode?: Mode;
	/**
	 * The title of the code block. This is displayed in the header of the code block.
	 */
	title?: string;

	// any for now
	codeblock: any;
} & WithIndentation;

/**
 * A code block component that support
 */
function DocsCodeBlock({
	children,
	className,
	icon: _icon,
	indentation: _indentation,
	language: _language,
	metastring,
	mode: _mode,
	title: _title,
	...props
}: any) {
	const [isHydrated, setIsHydrated] = useState(false);

	// Only hydrate on the client to prevent mismatch
	useEffect(() => {
		setIsHydrated(true);
	}, []);

	const codeblock = props.codeblock;

	// Always show fallback until hydrated to prevent mismatch
	if (!isHydrated) {
		return (
			<CodeBlockFallback {...props}>Loading code block...</CodeBlockFallback>
		);
	}

	const { language, meta } = getCodeBlockData(codeblock);

	if (!codeblock) {
		return (
			<InlineCode
				{...(props as ComponentProps<typeof CodeBlock>)}
				className="inline"
			>
				{children}
			</InlineCode>
		);
	}

	return (
		<CodeBlockWithInfo
			content={codeblock.value}
			language={language?.name}
			collapseLineNumber={100}
			meta={meta}
			className={clsx("not-prose !block", className)}
			headerContent={
				<LangTab
					disabled
					className="text-xs h-6 px-1.5 bg-neutral-500/10 text-neutral-800"
					tabText={meta?.tabName || language?.name}
				/>
			}
			info={language}
			codeBlockProps={props}
		/>
	);
}

/**
 * Fallback (loading) component for the code block.
 */
const CodeBlockFallback = ({
	children,
	...props
}: ComponentProps<typeof CodeBlock>) => (
	<CodeBlock {...props} className={clsx("not-prose", props.className)}>
		<pre className="not-prose min-h-[3.25rem] p-4 pr-[3.375rem] font-mono text-mono">
			{children}
		</pre>
	</CodeBlock>
);

export default DocsCodeBlock;

export {
	//,
	CodeBlockFallback,
};

export function getCodeBlockData(codeblock: any) {
	if (!codeblock) {
		return {
			language: defaultLanguageInfo,
			meta: {},
		};
	}
	const language = getLanguageInfo(codeblock.lang) || defaultLanguageInfo;
	const meta =
		typeof codeblock.meta === "object"
			? codeblock.meta
			: getMetaData(codeblock.meta);

	return {
		language,
		meta: {
			...meta,
			// Ensure title is always a string
			title: codeblock.title || meta.title || "",
		},
	};
}
