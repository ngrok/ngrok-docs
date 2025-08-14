import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

export default async function myPlugin(context, options) {
	return {
		name: "docusaurus-tailwindcss",
		configurePostCss(postcssOptions) {
			// Appends TailwindCSS.
			postcssOptions.plugins.push(require("@tailwindcss/postcss"));
			return postcssOptions;
		},
	};
}
