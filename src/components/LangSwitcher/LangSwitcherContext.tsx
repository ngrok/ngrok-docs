import type { SupportedLanguage } from "@ngrok/mantle/code-block";
import { createContext } from "react";

const LangSwitcherContext = createContext({
	blockContent: "",
	language: "",
	updateLanguageBlock: (newLang: SupportedLanguage, newContent: string) => {},
});

export default LangSwitcherContext;
