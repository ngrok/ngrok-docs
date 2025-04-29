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
		<img
			src={colorMode === "dark" ? darkSrc : lightSrc}
			alt={alt}
			className={`w-full h-full object-cover ${className}`}
		/>
	);
}
