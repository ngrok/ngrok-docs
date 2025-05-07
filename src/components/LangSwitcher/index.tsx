import BrowserOnly from "@docusaurus/BrowserOnly";
import { Button } from "@ngrok/mantle/button";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	CodeBlockHeader,
	CodeBlockTitle,
	fmtCode,
} from "@ngrok/mantle/code-block";
import clsx from "clsx";
import { useContext } from "react";
import { CodeBlockFallback } from "../code-block";
import LangSwitcherContext, {
	type LangSwitcherContextType,
} from "./LangSwitcherContext";
import { getCodeBlocks } from "./utils";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function LangSwitcher({ children, className, ...props }: any) {
	const { defaultLanguage, tabLanguage, updateTab } =
		useContext<LangSwitcherContextType>(LangSwitcherContext);
	const codeBlocks = getCodeBlocks(children) ?? [];

	if (!updateTab) return "Error loading code block";

	// if no language tab is set yet
	if (tabLanguage === null) {
		// Check if the user has specified a default language
		const startingLanguage =
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			codeBlocks.find((child: any) => child.language === defaultLanguage) ||
			codeBlocks[0];
		updateTab(startingLanguage?.language);
		// if no default language is set, set the first tab as the selected tab
	}

	const matchingBlock =
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		codeBlocks.find((child: any) => child.language === tabLanguage) ||
		codeBlocks[0];
	// This also needs to be updated to use the right codeblock data, not [0]
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const meta: { collapsible?: boolean; [key: string]: any } =
		matchingBlock?.meta || {};

	return (
		<BrowserOnly
			fallback={
				<CodeBlockFallback className="mb-4">Loading…</CodeBlockFallback>
			}
		>
			{() => (
				<CodeBlock className={clsx(className, "mb-4")} {...props}>
					<CodeBlockHeader className="flex-col overflow-x-auto p-2">
						<div className="flex w-[100%] gap-1">
							{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
							{codeBlocks.map((child: any) => (
								<Button
									key={child.language + child.content}
									onClick={() => updateTab(child.language)}
									type="button"
									priority="neutral"
									className={clsx(
										"text-xs h-6 px-1.5",
										matchingBlock?.language === child.language
											? "bg-neutral-500/10 text-neutral-800"
											: "text-neutral-500",
									)}
									appearance="ghost"
								>
									{child.language.toUpperCase()}
								</Button>
							))}
						</div>
					</CodeBlockHeader>
					<CodeBlockBody>
						{meta.title && (
							<CodeBlockTitle className="mx-2 my-1">
								{meta.title}
							</CodeBlockTitle>
						)}
						{!meta.disableCopy && <CodeBlockCopyButton />}
						<CodeBlockCode
							language={matchingBlock?.language || meta.language}
							value={fmtCode`${matchingBlock?.content.toString()}`}
						/>
					</CodeBlockBody>
				</CodeBlock>
			)}
		</BrowserOnly>
	);
}
