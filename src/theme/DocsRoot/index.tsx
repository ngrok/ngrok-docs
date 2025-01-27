import renderRoutes from "@docusaurus/renderRoutes";
import {
	HtmlClassNameProvider,
	ThemeClassNames,
} from "@docusaurus/theme-common";
import { ThemeProvider, type Theme } from "@ngrok/mantle/theme-provider";
import type { Props } from "@theme/DocVersionRoot";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { type ReactNode } from "react";

// pared-down supported themes in docs
const themes = ["light", "dark"] as const satisfies readonly Theme[];

/**
 * prefersDarkModeMediaQuery is the media query used to detect if the user prefers dark mode.
 */
const prefersDarkModeMediaQuery = "(prefers-color-scheme: dark)";

/**
 * prefersHighContrastMediaQuery is the media query used to detect if the user prefers high contrast mode.
 */
const prefersHighContrastMediaQuery = "(prefers-contrast: more)";

/**
 * pared-down version (less themese) of the mantle preventWrongThemeFlashScriptContent
 * prevents the wrong theme from flashing on initial page load.
 * Render as high as possible in the <head> element.
 */
function reconcileThemeScript(
	defaultTheme: Theme = "light",
	storageKey = "mantle-ui-theme",
): string {
	return `
(function() {
	const themes = ${JSON.stringify(themes)};
	const isTheme = (value) => typeof value === "string" && themes.includes(value);
	const fallbackTheme = "${defaultTheme}" ?? "system";
	let maybeStoredTheme = null;
	try {
		maybeStoredTheme = "localStorage" in window ? window.localStorage.getItem("${storageKey}") : null;
	} catch (_) {}
	const hasStoredTheme = isTheme(maybeStoredTheme);
	if (!hasStoredTheme && "localStorage" in window) {
		try {
			window.localStorage.setItem("${storageKey}", fallbackTheme);
		} catch (_) {}
	}
	const themePreference = hasStoredTheme ? maybeStoredTheme : fallbackTheme;
	const prefersDarkMode = window.matchMedia("${prefersDarkModeMediaQuery}").matches;
	const prefersHighContrast = window.matchMedia("${prefersHighContrastMediaQuery}").matches;
	let initialTheme = themePreference;
	if (initialTheme === "system") {
		if (prefersHighContrast) {
			initialTheme = prefersDarkMode ? "dark-high-contrast" : "light-high-contrast";
		} else {
			initialTheme = prefersDarkMode ? "dark" : "light";
		}
	}
	const htmlElement = document.documentElement;
	htmlElement.classList.remove(...themes);
	htmlElement.classList.add(initialTheme);
	htmlElement.dataset.appliedTheme = initialTheme;
	htmlElement.dataset.theme = themePreference;
})();
`.trim();
}

export default function DocsRoot(props: Props): ReactNode {
	return (
		<HtmlClassNameProvider className={clsx(ThemeClassNames.wrapper.docsPages)}>
			<script dangerouslySetInnerHTML={{ __html: reconcileThemeScript() }} />
			<ThemeProvider>
				<Layout>{renderRoutes(props.route.routes!)}</Layout>
			</ThemeProvider>
		</HtmlClassNameProvider>
	);
}
