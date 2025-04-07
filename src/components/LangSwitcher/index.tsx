import BrowserOnly from "@docusaurus/BrowserOnly";
import { Button } from "@ngrok/mantle/button";
import { useContext } from "react";
import { CodeBlockFallback } from "../code-block";
import { CodeBlockWithInfo } from "../CodeBlockWithInfo";
import LangSwitcherContext, {
	type LangSwitcherContextType,
} from "./LangSwitcherContext";
import { getCodeBlocks } from "./utils";

export function LangSwitcher({ children, className, ...props }: any) {
	const { defaultLanguage, selectedLanguage, updateSelectedLanguage } =
		useContext<LangSwitcherContextType>(LangSwitcherContext);

	const codeBlocks = getCodeBlocks(children);

	if (!updateSelectedLanguage) return "Error loading code block";

	// if no language tab is set yet
	if (selectedLanguage === null) {
		// Check if the user has specified a default language
		const startingLanguage =
			codeBlocks.find((child: any) => child.language === defaultLanguage) ||
			codeBlocks[0];
		updateSelectedLanguage(startingLanguage.language);
		// if no default language is set, set the first tab as the selected tab
	}

	const matchingBlock =
		codeBlocks.find((child: any) => child.language === selectedLanguage) ||
		codeBlocks[0];

	return (
		<BrowserOnly
			fallback={
				<CodeBlockFallback className="mb-4">Loading…</CodeBlockFallback>
			}
		>
			{() => (
				<CodeBlockWithInfo
					content={matchingBlock.content.toString()}
					language={matchingBlock.language || matchingBlock.meta.language}
					collapseLineNumber={10}
					meta={matchingBlock.meta}
					className={className}
					headerContent={
						<div className="flex w-[100%] gap-1.5">
							{codeBlocks.map((child: any) => (
								<Button
									key={child.language + child.content}
									onClick={() => updateSelectedLanguage(child.language)}
									type="button"
									priority="neutral"
									appearance={
										matchingBlock.language === child.language
											? "filled"
											: "outlined"
									}
								>
									{child.meta.tabName || child.language.toUpperCase()}
								</Button>
							))}
						</div>
					}
					info={matchingBlock.info}
					codeBlockProps={props}
				/>
				// <div>
				// 	<CodeBlock className={clsx(className, "mb-4")} {...props}>
				// 		<CodeBlockHeader className="flex-col overflow-x-auto p-1">
				// 			<div className="flex w-[100%] gap-1.5">
				// 				{codeBlocks.map((child: any) => (
				// 					<Button
				// 						key={child.language + child.content}
				// 						onClick={() => updateSelectedLanguage(child.language)}
				// 						type="button"
				// 						priority="neutral"
				// 						appearance={
				// 							matchingBlock.language === child.language
				// 								? "filled"
				// 								: "outlined"
				// 						}
				// 					>
				// 						{child.meta.tabName || child.language.toUpperCase()}
				// 					</Button>
				// 				))}
				// 			</div>
				// 		</CodeBlockHeader>
				// 		<CodeBlockBody>
				// 			{meta.title && (
				// 				<div className="mx-2 mt-3.5 flex w-[100%] items-end justify-start gap-1.5">
				// 					<>
				// 						{meta.mode ? (
				// 							<CodeBlockIcon preset={meta.mode} />
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
				// 			<CodeBlockCode
				// 				language={matchingBlock.language || meta.language}
				// 				value={codeblockContent}
				// 			/>
				// 			{collapsible && <CodeBlockExpanderButton />}
				// 		</CodeBlockBody>
				// 	</CodeBlock>
				// 	{info && <LanguageData data={info} />}
				// </div>
			)}
		</BrowserOnly>
	);
}
