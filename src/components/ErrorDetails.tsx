import React from "react";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import loadable from "@loadable/component";

export default function ErrorDetails({ error }) {
	const Error = loadable(
		() => import("/docs/errors/details/_" + error + ".md")
	);
	return (
		<ErrorBoundary fallback={() => <br />}>
			<Error />
		</ErrorBoundary>
	);
}
