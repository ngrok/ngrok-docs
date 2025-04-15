import {
	type Meta,
	type SupportedLanguage,
	parseLanguage,
} from "@ngrok/mantle/code-block";
import type { ReactElement, ReactNode } from "react";
import { type LanguageInfo, languageInfo } from "./data";

export function getMetaDataWithQuotes(
	propertyName: string,
	metastring: string
) {
	const property = `${propertyName}=`;
	if (!metastring.includes(property)) return null;
	// Get the substring starting with tabName= and ending with
	// a closing quote and a space
	const tabNameSubstring = metastring.split(property)[1] ?? "";
	// If the first character is not a quote, we shouldn't parse this property
	if (tabNameSubstring[0] !== '"') return null;
	const lastQuoteIndex = tabNameSubstring.indexOf(`" `);
	const tabNameValueEnd =
		lastQuoteIndex > 0 ? lastQuoteIndex : tabNameSubstring.length - 1;
	return tabNameSubstring.substring(1, tabNameValueEnd);
}

export function getMetaData(metastring: string | undefined) {
	if (!metastring) {
		return {};
	}
	const meta = metastring.split(/\s+/);
	const metaData: Record<string, string> = {};
	// biome-ignore lint/complexity/noForEach: <explanation>
	meta.forEach((item) => {
		const [key, value] = item.split("=");
		if (key && value) {
			metaData[key] = value.replace(/['"]/g, ""); // Remove " characters
		}
	});
	// Add the properties that use quotes to the metaData object
	// biome-ignore lint/complexity/noForEach: <explanation>
	["tabName", "title"].forEach((property) => {
		const quotedData = getMetaDataWithQuotes(property, metastring);
		if (quotedData) {
			metaData[property] = quotedData;
		}
	});
	return metaData;
}

export type CodeBlockData = {
	language: SupportedLanguage | string | undefined;
	content: ReactNode[];
	meta: Meta & {
		collapsible: boolean;
		titleLink?: string;
		tabName?: string;
		title?: string;
		language?: string;
	};
	info?: LanguageInfo;
};

export const getCodeBlocks = (children: ReactElement[]): CodeBlockData[] => {
	return children.map((child: ReactElement) => {
		const { className, metastring, children, language } =
			child?.props.children.props ?? child.props;

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
				titleLink: meta.titleLink,
				tabName: meta.tabName,
				title,
				disableCopy: false,
			},
			info: getLanguageInfo(parsedLanguage),
		};
	});
};

export const getLanguageInfo = (language: string) => {
	return languageInfo.find(
		(item) =>
			item.name === language || item?.allNames?.some((alt) => alt === language)
	);
};

export function languagesAreSynonyms(
	languageToCheck: string,
	selectedLanguage: string | null
) {
	if (!selectedLanguage) return false;
	const synonymousLanguage = languageInfo.find((lang: LanguageInfo) =>
		lang.allNames?.includes(selectedLanguage)
	);
	return (
		synonymousLanguage?.name === languageToCheck ||
		synonymousLanguage?.allNames?.includes(languageToCheck)
	);
}

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
	const tempLang =
		searchParams.get(langParamName) || getStorageItem(langParamName);
	const tempTab =
		searchParams.get(tabParamName) || getStorageItem(tabParamName);

	return { defaultLanguage: tempLang ?? null, defaultTabItem: tempTab ?? null };
};
