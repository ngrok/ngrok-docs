import type { PageContextServer } from "vike/types";
import { data as parentData } from "../+data";

export async function data(pageContext: PageContextServer) {
	const parentDataResult = await parentData(pageContext);
	return {
		...parentDataResult,
		isErrorPage: true,
	};
}
