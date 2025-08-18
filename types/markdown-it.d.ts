declare module "markdown-it" {
	interface MarkdownIt {
		render(md: string): string;
		parse(src: string, env?: any): any[];
		use(plugin: any, ...args: any[]): MarkdownIt;
	}

	interface MarkdownItConstructor {
		new (options?: any): MarkdownIt;
		(options?: any): MarkdownIt;
	}

	const MarkdownIt: MarkdownItConstructor;
	export = MarkdownIt;
}
