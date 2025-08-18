import { exportPageAsMarkdown } from "./utils";

export function ViewAsMarkDown() {
	return (
		<button
			type="button"
			onClick={exportPageAsMarkdown}
			className="button button--outline text-4xl m-5"
		>
			View as Markdown
		</button>
	);
}
