import { useColorMode, useThemeConfig } from "@docusaurus/theme-common";
import { useTheme } from "@ngrok/mantle/theme-provider";
import ColorModeToggle from "@theme/ColorModeToggle";
import type { Props } from "@theme/Navbar/ColorModeToggle";
import React, { type ReactNode } from "react";
import styles from "./styles.module.css";

export default function NavbarColorModeToggle({ className }: Props): ReactNode {
	const navbarStyle = useThemeConfig().navbar.style;
	const disabled = useThemeConfig().colorMode.disableSwitch;
	const { colorMode, setColorMode } = useColorMode();
	const [, setTheme] = useTheme();

	if (disabled) {
		return null;
	}

	return (
		<ColorModeToggle
			className={className}
			buttonClassName={
				navbarStyle === "dark" ? styles.darkNavbarColorModeToggle : undefined
			}
			value={colorMode}
			onChange={(value) => {
				// todo(cody): later, we should remove the need for this and replace
				// all theming w/ mantle theme provider
				setColorMode(value);
				setTheme(value);
			}}
		/>
	);
}
