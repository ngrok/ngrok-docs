/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "docs/**/*.{md,mdx}"],
	theme: {
		extend: {},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
};
