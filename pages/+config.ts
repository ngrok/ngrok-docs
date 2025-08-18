import type { Config } from "vike/types";
import vikeReact from "vike-react/config";
import { allRedirects } from "./utils/redirects/redirectAggregator";

export default {
	extends: [vikeReact],
	prerender: false,
	redirects: allRedirects,
} satisfies Config;
