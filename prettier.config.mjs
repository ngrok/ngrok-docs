/** @type {import("prettier").Config} */
const config = {
	arrowParens: "always",
	// printWidth: 120,
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,
	overrides: [
		{
			files: ["docs/guides/**/*.md", "docs/guides/**/*.mdx"],
			options: {
				bracketSpacing: false,
			},
		},
		{
			files: ["**/*.md", "**/*.mdx"],
			options: {
				embeddedLanguageFormatting: "off",
			},
		},
	],
};

export default config;
