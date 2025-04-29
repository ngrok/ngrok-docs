import { useColorMode } from "@docusaurus/theme-common";

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
