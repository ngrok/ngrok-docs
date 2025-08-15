import { useColorMode, useThemeConfig } from "@docusaurus/theme-common";
import { cx } from "@ngrok/mantle/cx";
import {
	type Theme,
	useAppliedTheme,
	useTheme,
} from "@ngrok/mantle/theme-provider";
import { Desktop } from "@phosphor-icons/react/Desktop";
import { Moon } from "@phosphor-icons/react/Moon";
import { Sun } from "@phosphor-icons/react/Sun";
import type { Props } from "@theme/Navbar/ColorModeToggle";
import type { ComponentProps, ReactNode } from "react";

export default function NavbarColorModeToggle({ className }: Props): ReactNode {
	const themeConfig = useThemeConfig();
	const disabled = themeConfig.colorMode.disableSwitch;
	const [, setTheme] = useTheme();
	const { setColorMode } = useColorMode();
	const appliedTheme = useAppliedTheme();

	if (disabled) {
		return null;
	}

	return (
		<button
			type="button"
			className={cx(
				"text-muted hover:text-body",
				"cursor-pointer bg-transparent focus:outline-none",
				"flex shrink-0 cursor-pointer items-center justify-center rounded-full p-1.5 ring-focus-accent focus:outline-none focus-visible:ring-4",
				"size-9 dark-high-contrast:text-black dark-high-contrast:hover:text-white",
				className,
			)}
			onClick={() => {
				const nextTheme = /light/i.test(appliedTheme) ? "dark" : "light";
				setTheme(nextTheme);
				// todo(cody): someday figure out how to remove this without being forced to
				// swizzle literally every single docusaurus theme component
				setColorMode(nextTheme);
			}}
		>
			<AutoThemeIcon className="size-5 shrink-0" />
		</button>
	);
}

function AutoThemeIcon(props: ComponentProps<"svg">) {
	const appliedTheme = useAppliedTheme();

	return <ThemeIcon theme={appliedTheme} {...props} />;
}

type ThemeIconProps = ComponentProps<"svg"> & { theme: Theme };
const ThemeIcon = ({ theme, ...props }: ThemeIconProps) => {
	switch (theme) {
		case "system":
			return <Desktop weight="bold" {...props} />;
		case "light":
			return <Sun weight="bold" {...props} />;
		case "dark":
			return <Moon weight="bold" {...props} />;
		case "light-high-contrast":
			return <Sun {...props} weight="fill" />;
		case "dark-high-contrast":
			return <Moon {...props} weight="fill" />;
	}
};
