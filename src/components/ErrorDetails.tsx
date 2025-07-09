import ErrorBoundary from "@docusaurus/ErrorBoundary";
import loadable from "@loadable/component";

type ErrorDetailsProps = {
	error: `err_ngrok_${string}` | `err_ngrok_${number}` | (string & {});
};

// Static import mapping to avoid dynamic import expression warnings
const errorComponentMap = {
	err_ngrok_1006: loadable(
		() => import("/docs/errors/details/_err_ngrok_1006.md"),
	),
	err_ngrok_107: loadable(
		() => import("/docs/errors/details/_err_ngrok_107.md"),
	),
	err_ngrok_108: loadable(
		() => import("/docs/errors/details/_err_ngrok_108.md"),
	),
	err_ngrok_3004: loadable(
		() => import("/docs/errors/details/_err_ngrok_3004.md"),
	),
	err_ngrok_305: loadable(
		() => import("/docs/errors/details/_err_ngrok_305.md"),
	),
	err_ngrok_306: loadable(
		() => import("/docs/errors/details/_err_ngrok_306.md"),
	),
	err_ngrok_314: loadable(
		() => import("/docs/errors/details/_err_ngrok_314.md"),
	),
	err_ngrok_3200: loadable(
		() => import("/docs/errors/details/_err_ngrok_3200.md"),
	),
	err_ngrok_3208: loadable(
		() => import("/docs/errors/details/_err_ngrok_3208.md"),
	),
	err_ngrok_334: loadable(
		() => import("/docs/errors/details/_err_ngrok_334.md"),
	),
	err_ngrok_354: loadable(
		() => import("/docs/errors/details/_err_ngrok_354.md"),
	),
	err_ngrok_4000: loadable(
		() => import("/docs/errors/details/_err_ngrok_4000.md"),
	),
	err_ngrok_4108: loadable(
		() => import("/docs/errors/details/_err_ngrok_4108.md"),
	),
	err_ngrok_4302: loadable(
		() => import("/docs/errors/details/_err_ngrok_4302.md"),
	),
	err_ngrok_502: loadable(
		() => import("/docs/errors/details/_err_ngrok_502.md"),
	),
	err_ngrok_6024: loadable(
		() => import("/docs/errors/details/_err_ngrok_6024.md"),
	),
	err_ngrok_702: loadable(
		() => import("/docs/errors/details/_err_ngrok_702.md"),
	),
	err_ngrok_715: loadable(
		() => import("/docs/errors/details/_err_ngrok_715.md"),
	),
	err_ngrok_717: loadable(
		() => import("/docs/errors/details/_err_ngrok_717.md"),
	),
	err_ngrok_8012: loadable(
		() => import("/docs/errors/details/_err_ngrok_8012.md"),
	),
	err_ngrok_9009: loadable(
		() => import("/docs/errors/details/_err_ngrok_9009.md"),
	),
	err_ngrok_9040: loadable(
		() => import("/docs/errors/details/_err_ngrok_9040.md"),
	),
} as const;

export default function ErrorDetails({ error }: ErrorDetailsProps) {
	const LazyErrorPartial =
		errorComponentMap[error as keyof typeof errorComponentMap];

	if (!LazyErrorPartial) {
		return <br />;
	}

	return (
		<ErrorBoundary fallback={() => <br />}>
			<LazyErrorPartial />
		</ErrorBoundary>
	);
}
