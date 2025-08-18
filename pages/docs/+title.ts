import type { PageContext } from "vike/types";
// +config.ts
export function title(pageContext: PageContext<any>) {
	const pageTitle = pageContext.data?.frontmatter?.title || "";
	if (!pageTitle) {
		return "ngrok Documentation";
	}
	return `${pageTitle} | ngrok Documentation`;
}
