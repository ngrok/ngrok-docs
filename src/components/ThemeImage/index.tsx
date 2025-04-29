import { useLocation } from "@docusaurus/router";
import { useColorMode } from "@docusaurus/theme-common";
import Markdown from "react-markdown";

export function ThemeImage({
	darkSrc,
	lightSrc,
	alt,
	className,
}: {
	darkSrc:string;
	lightSrc: string;
	alt: string;
	className?: string;
}): React.ReactElement {
	const { colorMode } = useColorMode(); // 'light' or 'dark'
	
	return (
		<img alt={alt} className={className} src={colorMode === "dark" ? darkSrc : lightSrc} />
	);
}
