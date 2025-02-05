(function() {
	const themes = ["light","dark"];
	const isTheme = (value) => typeof value === "string" && themes.includes(value);
	const fallbackTheme = "light" ?? "system";
	let maybeStoredTheme = null;
	try {
		maybeStoredTheme = "localStorage" in window ? window.localStorage.getItem("mantle-ui-theme") : null;
	} catch (_) {}
	const hasStoredTheme = isTheme(maybeStoredTheme);
	if (!hasStoredTheme && "localStorage" in window) {
		try {
			window.localStorage.setItem("mantle-ui-theme", fallbackTheme);
		} catch (_) {}
	}
	const themePreference = hasStoredTheme ? maybeStoredTheme : fallbackTheme;
	const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const prefersHighContrast = window.matchMedia("(prefers-contrast: more)").matches;
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
