import type { Mode, SupportedLanguage } from "@ngrok/mantle/code-block";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	CodeBlockExpanderButton,
	CodeBlockHeader,
	CodeBlockIcon,
	CodeBlockTitle,
	fmtCode,
	parseLanguage,
	parseMetastring,
} from "@ngrok/mantle/code-block";
import type { WithStyleProps } from "@ngrok/mantle/types";
import type { ReactNode } from "react";

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
};

/**
 * A code block component that support
 */
function DocsCodeBlock({
	children,
	className,
	icon: _icon,
	language: _language,
	metastring,
	mode: _mode,
	title: _title,
	...props
}: Props) {
	const language = _language ?? parseLanguage(className);
	const meta = parseMetastring(metastring);
	const title = _title || meta.title;
	const mode = _mode || meta.mode;
	const hasHeader = title || mode || _icon;

	const collapsible = children.split("\n").length > 20 || meta.collapsible;

	return (
		<CodeBlock className={className} {...props}>
			{hasHeader && (
				<CodeBlockHeader>
					{mode ? <CodeBlockIcon preset={mode} /> : _icon}
					{title && <CodeBlockTitle>{title}</CodeBlockTitle>}
				</CodeBlockHeader>
			)}
			<CodeBlockBody>
				{!meta.disableCopy && <CodeBlockCopyButton />}
				<CodeBlockCode
					className="m-0 rounded-none bg-inherit font-mono text-size-inherit text-inherit [&_code]:text-size-inherit"
					language={language}
					value={fmtCode`${children}`}
				/>
				{collapsible && <CodeBlockExpanderButton />}
			</CodeBlockBody>
		</CodeBlock>
	);
}

export default DocsCodeBlock;