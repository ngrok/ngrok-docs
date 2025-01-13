import { createRequire } from "node:module";
import {
	mantlePreset,
	resolveMantleContentGlob,
} from "@ngrok/mantle/tailwind-preset";
import type { Config } from "tailwindcss";

const require = createRequire(import.meta.url);

export default {
	presets: [mantlePreset],
	content: [
		resolveMantleContentGlob(require),
		"./src/**/*.{js,jsx,ts,tsx}",
		"./docs/**/*.{md,mdx}",
		"./traffic-policy/**/*.{md,mdx}",
	],
	corePlugins: {
		preflight: false,
	},
} satisfies Config;
