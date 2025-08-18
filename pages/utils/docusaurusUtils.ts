/**
 * This file is a bunch of utils copied over from docusaurus to make migrating our site to remix easier
 */

/**
 * Converts file path to a reasonable URL path, e.g. `'index.md'` -> `'/'`,
 * `'foo/bar.js'` -> `'/foo/bar'`
 */
export function fileToPath(file: string): string {
	const indexRE = /(?<dirname>^|.*\/)index\.(?:mdx?|jsx?|tsx?)$/i;
	const extRE = /\.(?:mdx?|jsx?|tsx?)$/;

	if (indexRE.test(file)) {
		return file.replace(indexRE, "/$1");
	}
	return `/${file.replace(extRE, "").replace(/\\/g, "/")}`;
}
