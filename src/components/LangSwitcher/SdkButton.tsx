import { IconButton } from "@ngrok/mantle/button";
import { Popover } from "@ngrok/mantle/popover";
import { BookOpenTextIcon } from "@phosphor-icons/react";
import type { LanguageInfo } from "./data";

export function SdkButton({
	data,
	className,
}: { data: LanguageInfo; className?: string }) {
	if (!data.links || data.links.length === 0) {
		return null;
	}
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
			if (data?.links && index === data.links.length - 1) {
				return [prev, ", and ", curr];
			}
			return [prev, ", ", curr];
		},
	);

	return (
		<div className={className}>
			<Popover.Root>
				<Popover.Trigger asChild>
					<IconButton
						type="button"
						label={`See the ngrok ${data.displayName} package docs ${linkText}.`}
						icon={<BookOpenTextIcon />}
						size="sm"
						appearance="ghost"
					/>
				</Popover.Trigger>
				<Popover.Content className="p-2 text-sm">
					See the ngrok {data.displayName} package docs {linkText}.
				</Popover.Content>
			</Popover.Root>
		</div>
	);
}
