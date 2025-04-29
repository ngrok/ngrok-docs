import BrowserOnly from "@docusaurus/BrowserOnly";
import { useColorMode } from "@docusaurus/theme-common";
import { useTheme } from "@ngrok/mantle/theme-provider";
import { useEffect, useState } from "react";

export function ThemeImage({
	darkSrc,
	lightSrc,
	alt,
	className,
}: {
	darkSrc: string;
	lightSrc: string;
	alt: string;
	className?: string;
}): React.ReactElement {
	const [currentTheme] = useTheme();

	function getColorMode() {
		switch (currentTheme) {
			case "dark":
			case "dark-high-contrast":
				return darkSrc;
			case "light":
			case "light-high-contrast":
				return lightSrc;
			case "system":
				return window.matchMedia("(prefers-color-scheme: dark)").matches
					? darkSrc
					: lightSrc;
			default:
				return lightSrc;
		}
	}

	return (
		<BrowserOnly fallback={<span>Loading ...</span>}>
			{() => <img alt={alt} className={className} src={getColorMode()} />}
		</BrowserOnly>
	);
}
