import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ngrok/mantle/select";
import { useTheme } from "@ngrok/mantle/theme-provider";
import clsx from "clsx";

const themeOptions = [
	{ value: "system", label: "System" },
	{ value: "light", label: "Light" },
	{ value: "dark", label: "Dark" },
	{ value: "light-high-contrast", label: "Light High Contrast" },
	{ value: "dark-high-contrast", label: "Dark High Contrast" },
] as const;

type ThemeValue = (typeof themeOptions)[number]["value"];

export function ThemeSwitcher({
	className,
	onThemeChange,
}: {
	className?: string;
	onThemeChange?: (newTheme: string) => void;
}) {
	const [theme, setTheme] = useTheme();

	const handleThemeChange = (newTheme: string) => {
		if (newTheme !== theme) {
			setTheme(newTheme as ThemeValue);
			onThemeChange?.(newTheme);
		}
	};

	return (
		<div className={clsx(className, "")}>
			<Select value={theme} onValueChange={handleThemeChange}>
				<SelectTrigger className="w-[120px]">
					<SelectValue placeholder="Theme" />
				</SelectTrigger>
				<SelectContent>
					{themeOptions.map((option) => (
						<SelectItem key={option.value} value={option.value}>
							{option.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
