import BrowserOnly from "@docusaurus/BrowserOnly";
import { Button } from "@ngrok/mantle/button";
import { useContext } from "react";
import { CodeBlockWithInfo } from "../CodeBlockWithInfo";
import { CodeBlockFallback } from "../code-block";
import LangSwitcherContext, {
	type LangSwitcherContextType,
} from "./LangSwitcherContext";
import { getCodeBlocks, languagesAreSynonyms } from "./utils";
import clsx from "clsx";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function LangSwitcher({ children, className, ...props }: any) {
	const { defaultLanguage, selectedLanguage, updateSelectedLanguage } =
		useContext<LangSwitcherContextType>(LangSwitcherContext);

	const codeBlocks = getCodeBlocks(children);

	if (!updateSelectedLanguage) return "Error loading code block";

	// if no language tab is set yet
	if (selectedLanguage === null) {
		// Check if the user has specified a default language
		const startingLanguage =
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			codeBlocks.find((child: any) => child.language === defaultLanguage) ||
			codeBlocks[0];
		updateSelectedLanguage(startingLanguage?.language);
		// if no default language is set, set the first tab as the selected tab
	}

	const matchingBlock =
		codeBlocks.find(
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			(child: any) =>
				child.language === selectedLanguage ||
				languagesAreSynonyms(child.language, selectedLanguage),
		) || codeBlocks[0];

	return (
		<BrowserOnly
			fallback={
				<CodeBlockFallback className="mb-4">Loading…</CodeBlockFallback>
			}
		>
			{() => (
				<CodeBlockWithInfo
					content={matchingBlock?.content.toString()}
					language={matchingBlock?.language || matchingBlock?.meta.language}
					collapseLineNumber={10}
					meta={matchingBlock?.meta}
					className={className}
					headerContent={
						<div className="flex w-[100%] gap-1.5">
							{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
							{codeBlocks.map((child: any) => (
								<Button
									key={child.language + child.content}
									onClick={() => updateSelectedLanguage(child.language)}
									type="button"
									priority="neutral"
									appearance="ghost"
									className={clsx(
										"text-xs h-6 px-1.5",
										matchingBlock?.language === child.language
											? "bg-neutral-500/10 text-neutral-800"
											: "text-neutral-500",
									)}
								>
									{child.meta.tabName || child.language.toUpperCase()}
								</Button>
							))}
						</div>
					}
					info={matchingBlock?.info}
					codeBlockProps={props}
				/>
			)}
		</BrowserOnly>
	);
}
