import { parseLanguage, parseMetastring } from "@ngrok/mantle/code-block";
import { languageData } from "./data";

export const getCodeBlocks = (children: any) => {
	return children.map((child: any, index: number) => {
		const { className, metastring, children, language } =
			child.props.children.props ?? child.props;
		const parsedLanguage = language || parseLanguage(className);
		const meta = parseMetastring(metastring);
		const title = meta.title ?? child.props.title;
		return {
			language: parsedLanguage,
			content: children,
			meta: {
				...meta,
				// Make it collapsible by default
				collapsible: true,
			},
			title,
			childIndex: index,
			info: getLanguageInfo(parsedLanguage),
		};
	});
};

export const getLanguageInfo = (language: string) => {
	return languageData.find(
		(item) =>
			item.name === language || item?.altNames?.some((alt) => alt === language),
	);
};

// The name of the query param or localstorage item to search for
// to get the default tab value
export const langParamName = "defaultTabLang";
export const tabParamName = "defaultTabItem";

export const getStorageLanguageAndTab = (): {
	defaultLanguage: string | null;
	defaultTabItem: string | null;
} => {
	function getStorageItem(key: string) {
		if (localStorage) {
			return localStorage.getItem(key);
		}
		return null;
	}
	const searchParams = new URLSearchParams(window?.location?.search);
	let tempLang =
		searchParams.get(langParamName) || getStorageItem(langParamName);
	let tempTab = searchParams.get(tabParamName) || getStorageItem(tabParamName);

	return { defaultLanguage: tempLang ?? null, defaultTabItem: tempTab ?? null };
};
