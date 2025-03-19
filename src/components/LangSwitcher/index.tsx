import { parseLanguage, parseMetastring } from "@ngrok/mantle/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ngrok/mantle/tabs";
import DocsCodeBlock from "../code-block";

// The name of the query param or localstorage item to search for
// to get the default tab value
const paramName = "codeLang";

const getDefaultTab = (structuredChildren: any) => {
	let defaultValue = localStorage.getItem(paramName);
	if (!defaultValue) {
		const searchParams = new URLSearchParams(window.location.search);
		defaultValue = searchParams.get(paramName);
	}
	// Make sure the default value is a valid language for the
	// code tabs being displayed
	if (structuredChildren.some((child: any) => child.language === defaultValue))
		return defaultValue;

	return "";
};

const getStructuredChildren = (children: any) => {
	return children.map((child: any) => {
		const { className, metastring, children, language } =
			child.props.children.props ?? child.props;
		const parsedLanguage = language || parseLanguage(className);
		const meta = parseMetastring(metastring);
		const title = meta.title ?? child.props.title;
		return {
			language: parsedLanguage,
			content: children,
			meta,
			title,
		};
	});
};

export function LangSwitcher({ children }: { children: any[] }) {
	const structuredChildren = getStructuredChildren(children);

	return (
		<Tabs
			orientation="horizontal"
			defaultValue={
				getDefaultTab(structuredChildren) || structuredChildren[0]?.language
			}
		>
			<TabsList>
				{structuredChildren.map((child: any) => (
					<TabsTrigger
						onClick={() => localStorage.setItem(paramName, child.language)}
						key={child.content}
						value={child.language}
					>
						{child.language.toUpperCase()}
					</TabsTrigger>
				))}
			</TabsList>
			{structuredChildren.map((child: any) => (
				<TabsContent
					key={child.content + child.language}
					value={child.language}
				>
					<DocsCodeBlock
						className={child.language}
						metastring={`title=${child.title}`}
					>
						{child.content}
					</DocsCodeBlock>
				</TabsContent>
			))}
		</Tabs>
	);
}
