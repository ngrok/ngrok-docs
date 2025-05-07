import { Button } from "@ngrok/mantle/button";

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
		tabText === "SH" || tabText === "SHELL" ? "BASH" : tabText;
	return (
		<Button
			disabled={disabled}
			onClick={onClick}
			type="button"
			priority="neutral"
			appearance="ghost"
			className={className}
		>
			{finalTabText}
		</Button>
	);
}
