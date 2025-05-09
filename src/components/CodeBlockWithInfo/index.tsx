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
import type { ReactNode } from "react";
import { SdkButton } from "../LangSwitcher/SdkButton";
import type { LanguageInfo } from "../LangSwitcher/data";

type CodeBlockWithInfoProps = {
	content: string | undefined;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	language: any;
	collapseLineNumber: number;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	meta: any;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	className?: any;
	headerContent: ReactNode;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
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
	console.log("Meta", meta);
	const collapsible = !meta
		? false
		: meta.collapsible &&
			content &&
			content.split("\n").length > collapseLineNumber;
	const indentation = meta?.indentation === "tabs" ? "tabs" : "spaces";

	return (
		<div className="flex flex-col">
			<CodeBlock className={className} {...codeBlockProps}>
				<CodeBlockHeader className={clsx("flex w-[100%]  justify-start p-2")}>
					{headerContent}
					{info && <SdkButton className="ml-auto mr-0.5" data={info} />}
				</CodeBlockHeader>
				<CodeBlockBody>
					{meta?.title && (
						<div className="mx-2 mt-3.5 flex w-[100%] items-end justify-start gap-1">
							<>
								{meta?.mode ? (
									<CodeBlockIcon preset={meta.mode} />
								) : (
									<CodeBlockIcon preset="file" />
								)}
								<CodeBlockTitle>
									{meta?.titleLink ? (
										<a href={useBaseUrl(meta.titleLink)}>
											<strong>{meta.title}</strong>
										</a>
									) : (
										<strong>{meta?.title}</strong>
									)}
								</CodeBlockTitle>
							</>
						</div>
					)}
					{!meta?.disableCopy && <CodeBlockCopyButton />}
					<CodeBlockCode
						indentation={indentation}
						language={language}
						value={fmtCode`${content}`}
					/>
					{collapsible && <CodeBlockExpanderButton />}
				</CodeBlockBody>
			</CodeBlock>
		</div>
	);
}
