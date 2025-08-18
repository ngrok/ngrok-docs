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
import type { LanguageInfo } from "../LangSwitcher/data";
import { SdkButton } from "../LangSwitcher/SdkButton";

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

	// Helper function to construct asset URLs for title links
	const getAssetUrl = (path: string) => {
		// For Remix, we handle assets differently - this would need to be adapted
		// based on your specific asset handling setup
		return path.startsWith("/") ? path : `/${path}`;
	};

	return (
		<div className={clsx("not-prose mb-4", className)}>
			<CodeBlock className={""}>
				<CodeBlockHeader className={clsx("flex w-[100%]  justify-start p-2")}>
					{meta?.title && (
						<div className="flex w-[100%] items-end justify-start gap-1">
							{meta?.mode ? (
								<CodeBlockIcon preset={meta.mode} />
							) : (
								<CodeBlockIcon preset="file" />
							)}
							<CodeBlockTitle data-ignore-toc={true} className="font-sans">
								{meta?.titleLink ? (
									<a href={getAssetUrl(meta.titleLink)}>
										<strong>{meta.title}</strong>
									</a>
								) : (
									<strong>{meta.title}</strong>
								)}
							</CodeBlockTitle>
						</div>
					)}
					<span className="justify-end mr-0.5 ml-auto">{headerContent}</span>
					{info && <SdkButton className="ml-4 mr-0.5" data={info} />}
				</CodeBlockHeader>
				<CodeBlockBody>
					{!meta?.disableCopy && <CodeBlockCopyButton />}
					<CodeBlockCode
						indentation={meta?.indentation}
						language={language}
						value={fmtCode`${content}`}
					/>
					{collapsible && <CodeBlockExpanderButton />}
				</CodeBlockBody>
			</CodeBlock>
		</div>
	);
}
