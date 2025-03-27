import type { SupportedLanguage } from "@ngrok/mantle/code-block";
import { createContext } from "react";

export type LangSwitcherContextType = {
	tabLanguage: string | SupportedLanguage | null;
	defaultLanguage: string | null;
	updateTab: null | ((newLang: string | SupportedLanguage) => void);
};

const LangSwitcherContext = createContext<LangSwitcherContextType>({
	tabLanguage: "",
	updateTab: null,
	defaultLanguage: null,
});

export default LangSwitcherContext;
