import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const fonts = [
	// add your font names here
	"Roboto Serif",
	"Lora",
	"Source Serif 4",
	"Cormorant",
] as const;

type Font = (typeof fonts)[number];

const isFont = (value: unknown): value is Font => fonts.includes(value as Font);

type Props = {
	className?: string;
	style?: CSSProperties;
};

const FontSwitcher = ({ className, style }: Props) => {
	const [currentFont, setCurrentFont] = useState<Font>(fonts[0]);

	useEffect(() => {
		const newVar = `--ifm-font-family-serif: ${fonts[0]}`;
		document.documentElement.setAttribute("style", newVar);
	}, []);

	return (
		<select
			className={className}
			style={style}
			value={currentFont}
			onChange={(event) => {
				const newFont = event.target.value;
				if (isFont(newFont)) {
					setCurrentFont(newFont);
					const newVar = `--ifm-font-family-serif: ${newFont}`;
					document.documentElement.setAttribute("style", newVar);
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
