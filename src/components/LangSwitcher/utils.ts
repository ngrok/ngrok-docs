import {
	parseLanguage,
	parseMetastring,
	type SupportedLanguage,
} from "@ngrok/mantle/code-block";

export const getStructuredChildren = (children: any) => {
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
export const paramName = "codeLang";

export const getDefaultLanguageData = (): {
	defaultLang: SupportedLanguage | string;
	defaultFound: boolean;
} => {
	let tempLang = localStorage.getItem(paramName);
	if (!tempLang) {
		const searchParams = new URLSearchParams(window.location.search);
		tempLang = searchParams.get(paramName);
	}
	/**
	 * Move this logic to the switcher component.
	 * We can check for this there, that way all this function does
	 * is check if there's a default language in localstorage or searchparams
	 */
	// Make sure the default value is a valid language for the
	// code tabs being displayed
	// if (tempLang) {
	// 	const foundChild = structuredChildren.find(
	// 		(child: any) => child.language === tempLang,
	// 	);
	// 	if (foundChild) {
	// 		return {
	// 			defaultLang: foundChild.language,
	// 			defaultCode: foundChild.content.toString(),
	// 		};
	// 	}
	// }
	return {
		defaultFound: Boolean(tempLang),
		defaultLang: tempLang || "bash",
	};
};
