import useBaseUrl from "@docusaurus/useBaseUrl";
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
} from "@ngrok/mantle/code-block";
import clsx from "clsx";
import convertToSpaces from "convert-to-spaces";
import type { ReactNode } from "react";
import type { LanguageInfo } from "../LangSwitcher/data";
import { LanguageData } from "../LangSwitcher/LanguageData";

type CodeBlockWithInfoProps = {
	content: string;
	language: any;
	collapseLineNumber: number;
	meta: Record<string, string> | undefined;
	className: string | undefined;
	headerContent: ReactNode;
	codeBlockProps?: any;
	info?: LanguageInfo | undefined;
};

export function CodeBlockWithInfo({
	content,
	language,
	collapseLineNumber,
	meta,
	className,
	headerContent,
	info,
	codeBlockProps,
}: CodeBlockWithInfoProps) {
	const collapsible = !meta
		? false
		: meta.collapsible && content.split("\n").length > collapseLineNumber;

	const codeblockContent = !meta?.tabsToSpaces
		? content
		: convertToSpaces(content);

	return (
		<div className="flex flex-col">
			<CodeBlock className={clsx(className, "mb-0")} {...codeBlockProps}>
				<CodeBlockHeader className="flex w-[100%] justify-start p-1">
					{headerContent}
				</CodeBlockHeader>
				<CodeBlockBody>
					{meta?.title && (
						<div className="mx-2 mt-3.5 flex w-[100%] items-end justify-start gap-1.5">
							<>
								{meta.mode ? (
									<CodeBlockIcon preset={meta.mode as any} />
								) : (
									<CodeBlockIcon preset="file" />
								)}
								<CodeBlockTitle>
									{meta.titleLink ? (
										<a href={useBaseUrl(meta.titleLink)}>
											<strong>{meta.title}</strong>
										</a>
									) : (
										<strong>{meta.title}</strong>
									)}
								</CodeBlockTitle>
							</>
						</div>
					)}
					{!meta?.disableCopy && <CodeBlockCopyButton />}
					<CodeBlockCode
						language={language}
						value={fmtCode`${codeblockContent}`}
					/>
					{collapsible && <CodeBlockExpanderButton />}
				</CodeBlockBody>
			</CodeBlock>
			{info && <LanguageData data={info} />}
		</div>
	);
}
