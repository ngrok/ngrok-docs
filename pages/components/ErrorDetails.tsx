import { ErrorBoundary } from "react-error-boundary";
import Loadable from "react-loadable";
import ClientOnly from "./ClientOnly";

type ErrorDetailsProps = {
	error: `err_ngrok_${string}` | `err_ngrok_${number}` | (string & {});
};

export default function ErrorDetails({ error }: ErrorDetailsProps) {
	const ErrorComponent = Loadable({
		loader: () => import(`../docs/errors/details/_${error}.md`),
		loading: () => <br />,
	});
	return (
		<ClientOnly>
			<ErrorBoundary fallback={<br />}>
				<ErrorComponent />
			</ErrorBoundary>
		</ClientOnly>
	);
}
