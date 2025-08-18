import type { DocSearchHit } from "@docsearch/react";

export function transformItems(items: DocSearchHit[]) {
	const baseURL = "https://ngrok.com";
	return items.map((item) => {
		return {
			...item,
			// Remove the base URL so results use relative navigation
			url: item.url.replace(baseURL, ""),
			url_without_anchor: item.url.replace(baseURL, ""),
		};
	});
}
