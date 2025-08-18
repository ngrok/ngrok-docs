import type { Config } from "tailwindcss";

const {
	mantlePreset,
	resolveMantleContentGlob,
} = require("@ngrok/mantle/tailwind-preset");

module.exports = {
	presets: [mantlePreset],
	content: [
		resolveMantleContentGlob(require),
		"./pages/**/*.{js,jsx,ts,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"Inter",
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji",
				],
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				"foreground-lighter": "hsl(var(--foreground-lighter))",
				"foreground-muted": "hsl(var(--foreground-muted))",
				border: "hsl(var(--border))",
				"border-strong": "hsl(var(--border-strong))",
				brand: "hsl(var(--brand))",
				"brand-link": "hsl(var(--brand-link))",
				accent: "hsl(var(--accent))",
				"accent-foreground": "hsl(var(--accent-foreground))",
				"surface-100": "hsl(var(--surface-100))",
				"surface-300": "hsl(var(--surface-300))",
				"border-input": "hsl(var(--border-input))",
				ring: "hsl(var(--ring))",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
} satisfies Config;
