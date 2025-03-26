import type { SupportedLanguage } from "@ngrok/mantle/code-block";
import { useState } from "react";
import LangSwitcherContext from "../components/LangSwitcher/LangSwitcherContext";
import { getDefaultLanguageData, getStructuredChildren } from "../components/LangSwitcher/utils";
export default function Root({ children }: {children: any[]}) {

		const structuredChildren = getStructuredChildren(children);
		const { defaultLang, defaultCode } =
			getDefaultLanguageData(structuredChildren);
		const [language, setLanguage] = useState<SupportedLanguage | string>(
			defaultLang,
		);
		const [blockContent, setBlockContent] = useState(defaultCode);
	
		const updateLanguageBlock = (
			newLang: SupportedLanguage,
			newContent: string,
		) => {
			localStorage.setItem(paramName, newLang);
			setBlockContent(newContent);
			setLanguage(newLang);
		};
	return (
		<LangSwitcherContext.Provider
			value={{ blockContent, language, updateLanguageBlock }}
		>
			{children};
		</LangSwitcherContext.Provider>
	);
}
