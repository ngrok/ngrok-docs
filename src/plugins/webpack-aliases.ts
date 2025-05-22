import path from "node:path";
import type { Plugin } from "@docusaurus/types";

export default function webpackAliasesPlugin(): Plugin {
	return {
		name: "custom-webpack-aliases",

		configureWebpack: () => {
			return {
				resolve: {
					alias: {
						// this needs to match the aliases defined in the root tsconfig.json
						"@site": path.resolve(__dirname, "../../"),
						"@components": path.resolve(__dirname, "../components"),
						"@traffic-policy": path.resolve(__dirname, "../../traffic-policy"),
					},
				},
			};
		},
	};
}
