import { Button } from "@ngrok/mantle/button";
import capitalize from "capitalize";

const langsToCapitalize = ["yaml", "json", "txt", "sh", "jsx", "tsx"];
const langsToSwap = [
	{ name: "js", swapName: "javascript" },
	{ name: "ts", swapName: "typescript" },
];

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
	const finalTabText =
		langsToSwap.find((lang) => lang.name === tabText)?.swapName || tabText;
	return (
		<Button
			disabled={disabled}
			onClick={onClick}
			type="button"
			priority="neutral"
			appearance="ghost"
			className={className}
		>
			{langsToCapitalize.includes(finalTabText)
				? finalTabText.toUpperCase()
				: capitalize(finalTabText)}
		</Button>
	);
}
