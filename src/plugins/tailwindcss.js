import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

export default async function myPlugin(context, options) {
	return {
		name: "docusaurus-tailwindcss",
		configurePostCss(postcssOptions) {
			// Appends TailwindCSS and AutoPrefixer.
			postcssOptions.plugins.push(require("tailwindcss"));
			postcssOptions.plugins.push(require("autoprefixer"));
			return postcssOptions;
		},
	};
}
