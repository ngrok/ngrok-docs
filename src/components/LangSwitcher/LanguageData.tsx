import type { LanguageInfo } from "./data";

export function LanguageData({ data }: { data: LanguageInfo }) {
	const anchoredLinks = data.links.map((link) => {
		return (
			<a href={link} key={link} target="_blank" rel="noopener noreferrer">
				here
			</a>
		);
	});

	const linkText = anchoredLinks.reduce(
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		(prev, curr, index): any => {
			if (index === 0) {
				return [prev, curr];
			}
			if (index === data.links.length - 1) {
				return [prev, ", and ", curr];
			}
			return [prev, ", ", curr];
		},
	);

	return (
		<div className="flex w-full justify-end">
			<div className="mb-[0.9rem] mt-[0.3rem] text-xs text-gray-500 dark:text-gray-600">
				See the ngrok {data.displayName} package docs {linkText}.
			</div>
		</div>
	);
}
