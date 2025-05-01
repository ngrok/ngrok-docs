import BrowserOnly from "@docusaurus/BrowserOnly";
import { useTheme } from "@ngrok/mantle/theme-provider";

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
	const currentTheme = useAppliedTheme();
	let imgSrc = lightSrc;

	switch (currentTheme) {
		case "dark":
		case "dark-high-contrast": {
			imgSrc = darkSrc;
			break;
		}
		case "light":
		case "light-high-contrast":
		default: {
			imgSrc = lightSrc;
		}
	}

	return (
		<BrowserOnly fallback={<span>Loading ...</span>}>
			{() => <img alt={alt} className={className} src={imgSrc} />}
		</BrowserOnly>
	);
}
