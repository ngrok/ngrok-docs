import { parseLanguage, parseMetastring } from "@ngrok/mantle/code-block";

export const getCodeBlocks = (children: any) => {
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

// The name of the query param or localstorage item to search for
// to get the default tab value
export const paramName = "defaultTabLang";

export const getDefaultLanguage = (): string | null => {
	const searchParams = new URLSearchParams(window.location.search);
	let tempLang = searchParams.get(paramName);
	if (!tempLang) {
		tempLang = localStorage.getItem(paramName);
	}

	return tempLang;
};
