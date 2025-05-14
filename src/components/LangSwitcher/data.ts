export type LanguageInfo = {
	name: string;
	allNames?: string[];
	displayName: string;
	links: string[];
};

export const languageInfo: LanguageInfo[] = [
	{
		name: "go",
		displayName: "Go",
		links: ["https://pkg.go.dev/golang.ngrok.com/ngrok"],
	},
	{
		name: "rust",
		displayName: "Rust",
		links: ["https://docs.rs/ngrok/0.14.0-pre.13/ngrok/index.html"],
	},
	{
		name: "python",
		displayName: "Python",
		links: ["https://ngrok.github.io/ngrok-python/index.html"],
	},
	{
		name: "java",
		displayName: "Java",
		links: ["https://github.com/ngrok/ngrok-java"],
	},
	{
		name: "javascript",
		displayName: "JavaScript",
		links: ["https://ngrok.github.io/ngrok-javascript/"],
		allNames: ["javascript", "js", "jsx"],
	},
	{
		name: "typescript",
		displayName: "TypeScript",
		links: ["https://ngrok.github.io/ngrok-javascript/"],
		allNames: ["typescript", "ts", "tsx"],
	},
];

export type CustomLanguage = {
	name: string;
	// The language whose syntax should be used.
	// For example, a "ssh" language could use "bash" syntax.
	syntaxLanguage: string;
};

export const customLanguages: CustomLanguage[] = [
	{
		name: "ssh",
		syntaxLanguage: "bash",
	},
];
