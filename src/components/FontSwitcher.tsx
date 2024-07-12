import { useState } from "react";
import type { CSSProperties } from "react";

const fonts = [
	// add your font names here
	"Noticia Text",
	"Lora",
	"Karla",
	"Inter",
] as const;

type Font = (typeof fonts)[number];

const isFont = (value: unknown): value is Font => fonts.includes(value as Font);

type Props = {
	className?: string;
	style?: CSSProperties;
};

const readDefaultFont = (): Font => {
	if (typeof window === "undefined" || typeof document === "undefined") {
		return fonts[0];
	}

	// Get the computed styles of the html element
	const computedStyles = window.getComputedStyle(document.documentElement);

	// Get the value of the CSS variable
	const fontFamily = computedStyles
		.getPropertyValue("--ifm-font-family-serif")
		.trim();

	// grab the first font from the list
	const font = fontFamily.split(",")[0]?.trim();

	if (isFont(font)) {
		return font;
	}

	return fonts[0];
};

const writeFontToHtmlStyle = (font: Font) => {
	if (typeof window === "undefined" || typeof document === "undefined") {
		return;
	}
	const newVar = `--ifm-font-family-serif: "${font}", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;`;
	document.documentElement.setAttribute("style", newVar);
};

const FontSwitcher = ({ className, style }: Props) => {
	const [currentFont, setCurrentFont] = useState<Font>(() => {
		const defaultFont = readDefaultFont();
		writeFontToHtmlStyle(defaultFont);
		return defaultFont;
	});

	return (
		<select
			className={className}
			style={style}
			value={currentFont}
			onChange={(event) => {
				const newFont = event.target.value;
				if (isFont(newFont)) {
					setCurrentFont(newFont);
					writeFontToHtmlStyle(newFont);
				}
			}}
		>
			{fonts.map((font) => (
				<option key={font} value={font}>
					{font}
				</option>
			))}
		</select>
	);
};

export {
	//,
	FontSwitcher,
};
