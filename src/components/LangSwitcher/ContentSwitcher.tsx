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
	language,
}: {
	children: React.ReactNode;
	language: string;
	className?: string;
}) {
	const { tabLanguage } =
		useContext<LangSwitcherContextType>(LangSwitcherContext);
	if (!language)
		throw new Error("Must specify a language for the ContentSwitcher");

	if (language !== tabLanguage) return null;
	return children;
}
