import { Button } from "@ngrok/mantle/button";
import type {
	CodeBlockCode,
	Mode,
	SupportedLanguage,
} from "@ngrok/mantle/code-block";
import { CodeBlock, parseLanguage } from "@ngrok/mantle/code-block";
import type { WithStyleProps } from "@ngrok/mantle/types";
import type { ComponentProps, ReactNode } from "react";
import { CodeBlockWithInfo } from "./CodeBlockWithInfo";
import { getLanguageInfo, getMetaData } from "./LangSwitcher/utils";
import clsx from "clsx";
import { LangTab } from "./LangSwitcher/LangTab";

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
}: Props) {
	const langMatchesInClassName = className?.match(/language-(\w+)/);
	const langInClassName = langMatchesInClassName
		? langMatchesInClassName[0]?.split("-")[1]
		: "";
	const language = _language || parseLanguage(langInClassName);

	return (
		<CodeBlockWithInfo
			content={children}
			language={language}
			collapseLineNumber={20}
			meta={getMetaData(className)}
			className={className}
			headerContent={
				<LangTab
					disabled
					className="text-xs h-6 px-1.5 bg-neutral-500/10 text-neutral-800"
					tabText={language.toUpperCase()}
				/>
			}
			info={getLanguageInfo(language)}
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
	<CodeBlock {...props}>
		<pre className="min-h-[3.25rem] p-4 pr-[3.375rem] font-mono text-mono">
			{children}
		</pre>
	</CodeBlock>
);

export default DocsCodeBlock;

export {
	//,
	CodeBlockFallback,
};
