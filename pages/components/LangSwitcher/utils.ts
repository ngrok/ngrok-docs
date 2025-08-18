import { getCodeBlockData } from "@components/code-block";
import {
	type Meta,
	parseLanguage,
	type SupportedLanguage,
} from "@ngrok/mantle/code-block";
import type { ReactElement, ReactNode } from "react";
import { type LanguageInfo, languageInfo } from "./data";
export function getMetaDataWithQuotes(
	propertyName: string,
	metastring: string,
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

// The properties that take string values, e.g. tabName="foo bar"
// rather than non-string values, e.g. tabName=foo
const stringMetaProperties = ["tabName", "title"];

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
	stringMetaProperties.forEach((property) => {
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
	info?: LanguageInfo | null;
};

export const getCodeBlocks = (children: ReactElement[]): CodeBlockData[] => {
	return children.map((child: ReactElement) => {
		const {
			meta: metastring,
			value: children,
			lang: language,
		} = child?.props?.codeblock ?? {};

		const { meta, language: langInfo } = getCodeBlockData(children);

		const title = meta.title || child?.props?.title;
		return {
			language: parseLanguage(language),
			content: children,
			meta: {
				...meta,
				collapsible: false,
				titleLink: meta.titleLink,
				tabName: meta.tabName,
				title,
				disableCopy: false,
			},
			info: langInfo,
		};
	});
};

export const getLanguageInfo = (language: string | undefined) => {
	if (!language) return null;
	const foundLang = languageInfo.find(
		(item) => item.name === language || item?.allNames?.includes(language),
	);

	if (!foundLang) {
		console.error("Language not valid for codeblocks:", language);
		// If can't find it, return `bash`
		return languageInfo[0];
	}
	return foundLang;
};

export function languagesAreSynonyms(
	languageToCheck: string,
	selectedLanguage: string | null,
) {
	if (!selectedLanguage) return false;
	const synonymousLanguage = languageInfo.find((lang: LanguageInfo) =>
		lang.allNames?.includes(selectedLanguage),
	);
	return (
		synonymousLanguage?.name === languageToCheck ||
		synonymousLanguage?.allNames?.includes(languageToCheck)
	);
}

// The name of the query param or localstorage item to search for
// to get the default language switcher value
export const langParamName = "defaultTabLang";

export const getStorageLanguage = () => {
	return localStorage.getItem(langParamName);
};

export const tabParamName = "defaultTabItem";
export const getStorageTab = (tabGroupId?: string) => {
	if (localStorage) {
		try {
			return {
				item: localStorage.getItem(tabGroupId || tabParamName) || "",
				groupId: tabGroupId || tabParamName,
			};
		} catch (error) {
			console.error("Error parsing data for tabs and lang switcher:", error);
		}
	}
	return undefined;
};
