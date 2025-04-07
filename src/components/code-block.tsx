import { Button } from "@ngrok/mantle/button";
import type { Mode, SupportedLanguage } from "@ngrok/mantle/code-block";
import { CodeBlock, parseLanguage } from "@ngrok/mantle/code-block";
import type { WithStyleProps } from "@ngrok/mantle/types";
import type { ComponentProps, ReactNode } from "react";
import { CodeBlockWithInfo } from "./CodeBlockWithInfo";
import { getLanguageInfo, getMetaData } from "./LangSwitcher/utils";

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
			meta={getMetaData(metastring)}
			className={className}
			headerContent={
				<Button
					disabled
					type="button"
					priority="neutral"
					appearance={"outlined"}
				>
					{language.toUpperCase()}
				</Button>
			}
			info={getLanguageInfo(language)}
			codeBlockProps={props}
		/>
		// <div>
		// 	<CodeBlock className={className} {...props}>
		// 		<CodeBlockHeader className="flex w-[100%] justify-start p-1">
		// 			<Button
		// 				disabled
		// 				type="button"
		// 				priority="neutral"
		// 				appearance={"outlined"}
		// 			>
		// 				{language.toUpperCase()}
		// 			</Button>
		// 		</CodeBlockHeader>
		// 		<CodeBlockBody>
		// 			{meta.title && (
		// 				<div className="mx-2 mt-3.5 flex w-[100%] items-end justify-start gap-1.5">
		// 					<>
		// 						{meta.mode ? (
		// 							<CodeBlockIcon preset={meta.mode as any} />
		// 						) : (
		// 							<CodeBlockIcon preset="file" />
		// 						)}
		// 						<CodeBlockTitle>
		// 							<strong>{meta.title}</strong>
		// 						</CodeBlockTitle>
		// 					</>
		// 				</div>
		// 			)}
		// 			{!meta.disableCopy && <CodeBlockCopyButton />}
		// 			<CodeBlockCode language={language} value={codeblockContent} />
		// 			{collapsible && <CodeBlockExpanderButton />}
		// 		</CodeBlockBody>
		// 	</CodeBlock>
		// 	{info && <LanguageData data={info} />}
		// </div>
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
