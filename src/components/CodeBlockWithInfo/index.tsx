import useBaseUrl from "@docusaurus/useBaseUrl";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
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
	info?: LanguageInfo | null;
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
		: meta.collapsible &&
			content &&
			content.split("\n").length > collapseLineNumber;

	return (
		<div className="flex flex-col">
			<CodeBlock.Root className={className} {...codeBlockProps}>
				<CodeBlock.Header className={clsx("flex w-[100%]  justify-start p-2")}>
					{meta?.title && (
						<div className="flex w-[100%] items-end justify-start gap-1">
							<>
								{meta?.mode ? (
									<CodeBlock.Icon preset={meta.mode} />
								) : (
									<CodeBlock.Icon preset="file" />
								)}
								<CodeBlock.Title className="font-sans">
									{meta?.titleLink ? (
										<a href={useBaseUrl(meta.titleLink)}>
											<strong>{meta.title}</strong>
										</a>
									) : (
										<strong>{meta.title}</strong>
									)}
								</CodeBlock.Title>
							</>
						</div>
					)}
					<span className="justify-end mr-0.5 ml-auto">{headerContent}</span>
					{info && <SdkButton className="ml-4 mr-0.5" data={info} />}
				</CodeBlock.Header>
				<CodeBlock.Body>
					{!meta?.disableCopy && <CodeBlock.CopyButton />}
					<CodeBlock.Code
						indentation={meta?.indentation}
						language={language}
						value={fmtCode`${content}`}
					/>
					{collapsible && <CodeBlock.ExpanderButton />}
				</CodeBlock.Body>
			</CodeBlock.Root>
		</div>
	);
}
