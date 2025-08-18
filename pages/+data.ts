/** biome-ignore-all lint/style/noNonNullAssertion: <explanation> */
import "dotenv/config";
import sidebarData from "@root/generated/sidebar/autogenSidebarData.json";
import type { PageContextServer } from "vike/types";
import {
	ALGOLIA_APP_ID,
	ALGOLIA_INDEX_NAME,
	ALGOLIA_PUBLIC_API_KEY,
} from "./utils/globals/config";
import type { ProcessedSidebarData } from "./utils/sidebarGeneration";

export async function data(_pageContext: PageContextServer) {
	// Use global variable for instant updates
	const isSidebarGenerating = (global as any).isSidebarBuilding || false;

	return {
		isSidebarGenerating: isSidebarGenerating && import.meta.env.DEV,
		sidebarData: sidebarData as ProcessedSidebarData[],
		algoliaInfo: {
			appId: ALGOLIA_APP_ID,
			indexName: ALGOLIA_INDEX_NAME,
			apiKey: ALGOLIA_PUBLIC_API_KEY,
		},
	};
}
