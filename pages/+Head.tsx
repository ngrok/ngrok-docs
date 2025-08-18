export default function Head() {
	const isDevelopment = process.env.NODE_ENV === "development";
	const faviconPath = isDevelopment ? "/dev-favicon.ico" : "/favicon.ico";

	return (
		<>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="icon" type="image/x-icon" href={faviconPath} />
			<script
				// biome-ignore lint/security/noDangerouslySetInnerHtml: Theme script requires dynamic content
				dangerouslySetInnerHTML={{
					__html: `(() => {
	window.semaphore = window.semaphore || [];
	window.ketch = (...args) => {
		window.semaphore.push(args);
	};
})();`,
				}}
			/>
			<script
				// biome-ignore lint/security/noDangerouslySetInnerHtml: Theme script requires dynamic content
				dangerouslySetInnerHTML={{
					__html: `(function() {
	const themes = ["system","light","dark","light-high-contrast","dark-high-contrast"];
	const isTheme = (value) => typeof value === "string" && themes.includes(value);
	const fallbackTheme = "system";
	let maybeStoredTheme = null;
	try {
		maybeStoredTheme = 'localStorage' in window ? window.localStorage.getItem("mantle-ui-theme") : null;
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
})();`,
				}}
			/>
		</>
	);
}
