import { createRequire } from "node:module";
import { mantlePreset, resolveMantleContentGlob } from "@ngrok/mantle/tailwind-preset";

const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [mantlePreset],
	content: [resolveMantleContentGlob(require), "./src/**/*.{js,jsx,ts,tsx}", "docs/**/*.{md,mdx}"],
	corePlugins: {
		preflight: false,
	},
};
