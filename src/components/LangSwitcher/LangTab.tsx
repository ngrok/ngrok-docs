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
	return (
		<Button
			disabled={disabled}
			onClick={onClick}
			type="button"
			priority="neutral"
			appearance="ghost"
			className={className}
		>
			{tabText}
		</Button>
	);
}
