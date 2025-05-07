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
		links: ["https://pkg.go.dev/golang.ngrok.com/ngrok#ListenAndForward"],
	},
	{
		name: "rust",
		displayName: "Rust",
		links: [
			"https://docs.rs/ngrok/0.14.0-pre.13/ngrok/config/struct.TcpTunnelBuilder.html#method.listen_and_forward",
		],
	},
	{
		name: "python",
		displayName: "Python",
		links: [
			"https://ngrok.github.io/ngrok-python/tcp_listener_builder.html#ngrok.TcpListenerBuilder.remote_addr",
			"https://ngrok.github.io/ngrok-python/index.html#full-configuration",
		],
	},
	{
		name: "java",
		displayName: "Java",
		links: ["https://github.com/ngrok/ngrok-java"],
	},
	{
		name: "javascript",
		displayName: "JavaScript",
		links: [
			"https://ngrok.github.io/ngrok-javascript/interfaces/Config.html#addr",
			"https://ngrok.github.io/ngrok-javascript/classes/TcpListenerBuilder.html#listenAndForward",
		],
		allNames: ["javascript", "typescript", "ts", "js", "jsx", "tsx"],
	},
	{
		name: "typescript",
		displayName: "TypeScript",
		links: [
			"https://ngrok.github.io/ngrok-javascript/interfaces/Config.html#addr",
			"https://ngrok.github.io/ngrok-javascript/classes/TcpListenerBuilder.html#listenAndForward",
		],
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
