
/**
 * Renders the URL origin from the `endpoint_url` search param.
 *
 * Provide a `fallback` to render when the search param is not present.
 */
export const EndpointUrlOrigin = ({ fallback }) => {
	const location = window.location;
	const searchParamKey = "endpoint_url";
	const searchParams = new URLSearchParams(location.search);
	if(!searchParams) return fallback;
	const paramKey = searchParams.get(searchParamKey);
	let endpointUrl;

	if (!paramKey) {
		return fallback;
	}

	try {
		endpointUrl = new URL(paramKey);
	} catch (_) {
		return paramKey || fallback;
	}

	return endpointUrl?.origin ?? fallback;
}

/**
 * Returns the `endpoint_url` search param as a URL, if present.
 */
export const useEndpointUrlFromSearchParams = () => {
	return useMemo(() => endpointUrl, [endpointUrl]);
}

/**
 * Converts a string to a URL, or `undefined` if the given value is not a valid URL.
 */
const toUrl = (value) => {
}
