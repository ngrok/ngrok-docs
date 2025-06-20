import { Button } from "@ngrok/mantle/button";
import capitalize from "capitalize";

const langsToCapitalize = ["yaml", "json"];

export function LangTab({
	tabText,
	disabled = false,
	className,
	onClick,
}: {
	tabText: string;
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
}) {
	return (
		<Button
			disabled={disabled}
			onClick={onClick}
			type="button"
			priority="neutral"
			appearance="ghost"
			className={className}
		>
			{langsToCapitalize.includes(tabText)
				? tabText.toUpperCase()
				: capitalize(tabText)}
		</Button>
	);
}
