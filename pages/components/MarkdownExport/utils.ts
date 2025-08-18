import TurndownService from "turndown";

function getMarkdownFromPage(): string | null {
	const turndownService = new TurndownService();

	const content = document.querySelector(
		"#ng-docs-guide-main-article",
	)?.innerHTML;

	if (!content) {
		alert("Unable to find page content to convert.");
		return null;
	}

	return turndownService.turndown(content);
}

export function copyPageAsMarkdown() {
	const markdown = getMarkdownFromPage();
	if (!markdown) return;

	navigator.clipboard
		.writeText(markdown)
		.then(() => {
			// Optional: Show a toast or notification that copy was successful
			console.log("Page copied to clipboard as markdown");
		})
		.catch((err) => {
			console.error("Failed to copy to clipboard:", err);
			alert("Failed to copy to clipboard");
		});
}

export function viewPageAsMarkdown() {
	const markdown = getMarkdownFromPage();
	if (!markdown) return;

	const blob = new Blob([markdown], { type: "text/markdown" });
	const url = URL.createObjectURL(blob);
	window.open(url, "_blank");
}
