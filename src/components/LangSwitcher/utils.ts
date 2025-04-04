import { parseLanguage } from "@ngrok/mantle/code-block";
import { languageData } from "./data";

function getTabNameData(metastring: string) {
	if (!metastring.includes("tabName=")) return "";
	// Get the substring starting with tabName= and ending with
	// a closing quote and a space
	const tabNameSubstring = metastring.split("tabName=")[1] ?? "";
	const lastQuoteIndex = tabNameSubstring.indexOf(`" `);
	const tabNameValueEnd =
		lastQuoteIndex > 0 ? lastQuoteIndex : tabNameSubstring.length - 1;
	return tabNameSubstring.substring(1, tabNameValueEnd);
}

function getMetaData(metastring: string | undefined) {
	if (!metastring) {
		return {};
	}
	const meta = metastring.split(/\s+/);
	const metaData: Record<string, string> = {};
	meta.forEach((item) => {
		const [key, value] = item.split("=");
		if (key && value) {
			metaData[key] = value.replace(/['"]/g, ""); // Remove " characters
		}
	});
	// Add the tabName to the metaData object
	metaData["tabName"] = getTabNameData(metastring); // Remove " characters
	return metaData;
}

export const getCodeBlocks = (children: any) => {
	return children.map((child: any) => {
		const { className, metastring, children, language } =
			child.props.children.props ?? child.props;

		const parsedLanguage = language || parseLanguage(className);
		const meta = getMetaData(metastring);
		const title = meta.title || child.props.title;
		return {
			language: parsedLanguage,
			content: children,
			meta: {
				...meta,
				// Make it collapsible by default
				collapsible: true,
				// If no title found yet, check for a tabName.
				// If a tabName exists, use the parsedLanguage as the title
				title: title ? title : meta.tabName ? parsedLanguage : null,
			},
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
