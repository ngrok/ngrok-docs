import { redirect } from "vike/abort";

export function onBeforeRender() {
	throw redirect("/docs/");
}
