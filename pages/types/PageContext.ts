import type { PageContextClient } from "vike/types";
import type { ProcessedSidebarData } from "~/utils/sidebarGeneration";

export type DocsPageContext = PageContextClient & {
	data?: {
		sidebarData?: ProcessedSidebarData[];
	};
};
