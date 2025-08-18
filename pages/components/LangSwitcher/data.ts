export type LanguageInfo = {
	name: string;
	allNames?: string[];
	displayName: string;
	links?: string[];
};

export const defaultLanguageInfo = {
	name: "bash",
	displayName: "Bash",
	allNames: [
		"sh",
		"bash",
		"shell",
		"http",
		"hcl",
		"toml",
		"cel",
		"curl",
		"pem",
	],
};

export const languageInfo: LanguageInfo[] = [
	// Leave this as the first item so it's the default
	{ ...defaultLanguageInfo },
	{
		name: "txt",
		displayName: "TXT",
	},
	{
		name: "go",
		displayName: "Go",
		links: ["https://pkg.go.dev/golang.ngrok.com/ngrok/v2"],
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
	{
		name: "yaml",
		displayName: "YAML",
		allNames: ["Yaml", "yaml", "yml"],
	},
	{
		name: "json",
		displayName: "JSON",
	},
];
