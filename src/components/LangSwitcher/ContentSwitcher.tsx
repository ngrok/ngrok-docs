import { useContext } from "react";
import type { LangSwitcherContextType } from "./LangSwitcherContext";
import LangSwitcherContext from "./LangSwitcherContext";

/**
 * Renders its children only if the specified language matches the
 * currently selected language for the LangSwithcher component.
 * This is useful for conditionally rendering content based on the
 * selected language.
 */
export function ContentSwitcher({
	children,
	languages,
}: {
	children: React.ReactNode;
	languages: string[];
	className?: string;
}) {
	const { selectedLanguage } =
		useContext<LangSwitcherContextType>(LangSwitcherContext);
	if (!languages?.length)
		throw new Error("Must specify a language for the ContentSwitcher");

	for (const lang of languages) {
		if (lang === selectedLanguage) {
			return children;
		}
	}
	return null;
}
