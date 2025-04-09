import { parseLanguage, parseMetastring } from "@ngrok/mantle/code-block";
import { Children, isValidElement } from "react";
import type { ReactNode } from "react";

export const getCodeBlocks = (children: ReactNode) => {
	return Children.map(children, (child, index) => {
		const { className, metastring, children, language } = isValidElement(child)
			? (child.props.children?.props ?? child.props)
			: {};
		const parsedLanguage = language || parseLanguage(className);
		const meta = parseMetastring(metastring);
		const title =
			meta.title ?? (isValidElement(child) ? child.props.title : undefined);

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
		};
	});
};

// The name of the query param or localstorage item to search for
// to get the default tab value
export const paramName = "defaultTabLang";

export const getDefaultLanguage = (): string | null => {
	const searchParams = new URLSearchParams(window?.location?.search);
	let tempLang = searchParams.get(paramName);
	if (!tempLang && localStorage) {
		tempLang = localStorage.getItem(paramName);
	}

	return tempLang;
};
