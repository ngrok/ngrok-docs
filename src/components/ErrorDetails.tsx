import ErrorBoundary from "@docusaurus/ErrorBoundary";
import loadable from "@loadable/component";
import React from "react";

type ErrorDetailsProps = {
	error: `err_ngrok_${string}` | `err_ngrok_${number}` | (string & {});
};

export default function ErrorDetails({ error }: ErrorDetailsProps) {
	const Error = loadable(() => import(`/docs/errors/details/_${error}.md`));
	return (
		<ErrorBoundary fallback={() => <br />}>
			<Error />
		</ErrorBoundary>
	);
}
