import type { PageContext } from "vike/types";
import { DEFAULT_DESCRIPTION } from "~/utils/globals/config";
export function description(pageContext: PageContext<any>) {
	return pageContext.data?.frontmatter?.description || DEFAULT_DESCRIPTION;
}
