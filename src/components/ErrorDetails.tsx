import ErrorBoundary from "@docusaurus/ErrorBoundary";
import loadable from "@loadable/component";

type ErrorDetailsProps = {
	error: `err_ngrok_${string}` | `err_ngrok_${number}` | (string & {});
};

export default function ErrorDetails({ error }: ErrorDetailsProps) {
	const LazyErrorPartial = loadable(
		() => import(`/docs/errors/details/_${error}.md`),
	);
	return (
		<ErrorBoundary fallback={() => <br />}>
			<LazyErrorPartial />
		</ErrorBoundary>
	);
}
