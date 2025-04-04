import type { LanguageData } from "./data";

export function LanguageData({ data }: { data: LanguageData }) {
	let anchoredLinks = data.links.map((link) => {
		return (
			<a href={link} target="_blank" rel="noopener noreferrer">
				here
			</a>
		);
	});

	const linkText = anchoredLinks.reduce((prev, curr, index): any => {
		if (index === 0) {
			return [prev, curr];
		} else if (index === data.links.length - 1) {
			return [prev, ", and ", curr];
		} else {
			return [prev, ", ", curr];
		}
	});

	return (
		<div className="flex w-full justify-end">
			<div className="mt-[-0.5rem] text-xs text-gray-500 dark:text-gray-600">
				See the ngrok {data.displayName} package docs {linkText}.
			</div>
		</div>
	);
}
