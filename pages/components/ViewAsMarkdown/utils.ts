import TurndownService from "turndown";

export function exportPageAsMarkdown() {
	const turndownService = new TurndownService();

	// You can narrow the scope if needed (e.g., just main content)
	const content = document.querySelector(
		'div[class^="theme-doc-markdown"]',
	)?.innerHTML;
	if (!content) {
		alert("Unable to find page content to convert.");
		return;
	}

	const markdown = turndownService.turndown(content);

	// Create a blob and open in a new tab
	const blob = new Blob([markdown], { type: "text/markdown" });
	const url = URL.createObjectURL(blob);
	window.open(url, "_blank");
}
