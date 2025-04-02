import BrowserOnly from "@docusaurus/BrowserOnly";
import { Button } from "@ngrok/mantle/button";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	CodeBlockExpanderButton,
	CodeBlockHeader,
	CodeBlockTitle,
	fmtCode,
} from "@ngrok/mantle/code-block";
import clsx from "clsx";
import convertToSpaces from "convert-to-spaces";
import { useContext } from "react";
import { CodeBlockFallback } from "../code-block";
import LangSwitcherContext, {
	type LangSwitcherContextType,
} from "./LangSwitcherContext";
import { LanguageData } from "./LanguageData";
import { getCodeBlocks } from "./utils";

export function LangSwitcher({ children, className, ...props }: any) {
	const { defaultLanguage, tabLanguage, updateTab } =
		useContext<LangSwitcherContextType>(LangSwitcherContext);

	const codeBlocks = getCodeBlocks(children);

	if (!updateTab) return "Error loading code block";

	// if no language tab is set yet
	if (tabLanguage === null) {
		// Check if the user has specified a default language
		const startingLanguage =
			codeBlocks.find((child: any) => child.language === defaultLanguage) ||
			codeBlocks[0];
		updateTab(startingLanguage.language);
		// if no default language is set, set the first tab as the selected tab
	}

	const matchingBlock =
		codeBlocks.find((child: any) => child.language === tabLanguage) ||
		codeBlocks[0];
	// This also needs to be updated to use the right codeblock data, not [0]
	const { meta, info } = matchingBlock;
	const collapsible =
		meta.collapsible && matchingBlock.content.split("\n").length > 10;

	const codeblockContent = convertToSpaces(
		fmtCode`${matchingBlock.content.toString()}`,
	);

	return (
		<BrowserOnly
			fallback={
				<CodeBlockFallback className="mb-4">Loading…</CodeBlockFallback>
			}
		>
			{() => (
				<div>
					<CodeBlock className={clsx(className, "mb-4")} {...props}>
						<CodeBlockHeader className="flex-col overflow-x-auto p-1">
							<div className="flex w-[100%] gap-1.5">
								{codeBlocks.map((child: any) => (
									<Button
										key={child.language + child.content}
										onClick={() => updateTab(child.language)}
										type="button"
										priority="neutral"
										appearance={
											matchingBlock.language === child.language
												? "filled"
												: "outlined"
										}
									>
										{child.language.toUpperCase()}
									</Button>
								))}
							</div>
						</CodeBlockHeader>
						<CodeBlockBody>
							{meta.title && (
								<CodeBlockTitle className="mx-2 mt-3.5">
									<strong>{meta.title}</strong>
								</CodeBlockTitle>
							)}
							{!meta.disableCopy && <CodeBlockCopyButton />}
							<CodeBlockCode
								language={matchingBlock.language || meta.language}
								value={codeblockContent}
							/>
							{collapsible && <CodeBlockExpanderButton />}
						</CodeBlockBody>
					</CodeBlock>
					{info && <LanguageData data={info} />}
				</div>
			)}
		</BrowserOnly>
	);
}
