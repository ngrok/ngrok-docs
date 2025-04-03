import type { SupportedLanguage } from "@ngrok/mantle/code-block";
import { createContext } from "react";

export type LangSwitcherContextType = {
	selectedLanguage: string | SupportedLanguage | null;
	defaultLanguage: string | null;
	updateSelectedLanguage:
		| null
		| ((newLang: string | SupportedLanguage) => void);
};

const LangSwitcherContext = createContext<LangSwitcherContextType>({
	selectedLanguage: "",
	updateSelectedLanguage: null,
	defaultLanguage: null,
});

export default LangSwitcherContext;
