import BrowserOnly from "@docusaurus/BrowserOnly";
import { Button } from "@ngrok/mantle/button";
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
import { useContext } from "react";
import { CodeBlockFallback } from "../code-block";
import LangSwitcherContext from "./LangSwitcherContext";

export function Switcher({ structuredChildren, className, ...props }: any) {
	const { blockContent, language, updateLanguageBlock } =
		useContext(LangSwitcherContext);
	const { meta } = structuredChildren[0];
	const collapsible =
		meta.collapsible && structuredChildren[0].split("\n").length > 20;

	console.log("structuredChildren", structuredChildren);
	return (
		<BrowserOnly
			fallback={
				<CodeBlockFallback className="mb-4">Loading…</CodeBlockFallback>
			}
		>
			{() => (
				<CodeBlock className={className} {...props}>
					<CodeBlockHeader className="overflow-x-auto">
						{structuredChildren.map((child: any) => (
							<Button
								key={child.language + child.content}
								onClick={() =>
									updateLanguageBlock(child.language, child.content)
								}
								type="button"
								priority="neutral"
								appearance={language === child.language ? "filled" : "outlined"}
							>
								{child.language.toUpperCase()}
							</Button>
						))}
						{meta.title && <CodeBlockTitle>{meta.title}</CodeBlockTitle>}
					</CodeBlockHeader>
					<CodeBlockBody>
						{!meta.disableCopy && <CodeBlockCopyButton />}
						<CodeBlockCode
							language={language || meta.language}
							value={fmtCode`${blockContent}`}
						/>
						{collapsible && <CodeBlockExpanderButton />}
					</CodeBlockBody>
				</CodeBlock>
			)}
		</BrowserOnly>
	);
}
