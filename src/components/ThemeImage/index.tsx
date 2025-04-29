import { useColorMode } from "@docusaurus/theme-common";
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
	const { colorMode } = useColorMode(); // 'light' or 'dark'

	const [imgSrc, setImgSrc] = useState<string>(
		colorMode === "dark" ? darkSrc : lightSrc,
	);

	// Have to do this in useEffect because sometimes the
	// initial value of colorMode is not set yet when the
	// component first renders
	useEffect(() => {
		setImgSrc(colorMode === "dark" ? darkSrc : lightSrc);
	}, [colorMode, darkSrc, lightSrc]);

	return <img alt={alt} className={className} src={imgSrc} />;
}
