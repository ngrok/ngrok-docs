// A bordered list of prompts, each with a button that copies it.
export const PromptList = ({ prompts }) => {
	const [copied, setCopied] = useState(null);

	const copy = async (index) => {
		await navigator.clipboard.writeText(prompts[index]);
		setCopied(index);
		setTimeout(() => setCopied((current) => (current === index ? null : current)), 1500);
	};

	return (
		<ul className="not-prose my-6 list-none divide-y divide-gray-200 overflow-hidden rounded-xl border border-gray-200 p-0 dark:divide-white/10 dark:border-white/10">
			{prompts.map((prompt, index) => (
				<li key={prompt} className="m-0 flex items-center gap-4 py-3 pl-4 pr-2">
					<span className="grow text-gray-900 dark:text-gray-100">{prompt}</span>
					<button
						type="button"
						onClick={() => copy(index)}
						aria-label={copied === index ? "Copied" : "Copy prompt"}
						title={copied === index ? "Copied" : "Copy prompt"}
						className="shrink-0 cursor-pointer rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-gray-100"
					>
						{copied === index ? (
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
								<path d="M20 6 9 17l-5-5" />
							</svg>
						) : (
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
								<rect width="14" height="14" x="8" y="8" rx="2" />
								<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
							</svg>
						)}
					</button>
				</li>
			))}
		</ul>
	);
};
