
const searchParamKey = "endpoint_url";

/**
 * Renders the URL hostname from the `endpoint_url` search param.
 *
 * Provide a `fallback` to render when the search param is not present.
 */
export const EndpointUrlHostname = ({ fallback }) => {
	const endpointUrl = useEndpointUrlFromSearchParams();
	return endpointUrl?.hostname ?? fallback;
}

/**
 * Renders the URL origin from the `endpoint_url` search param.
 *
 * Provide a `fallback` to render when the search param is not present.
 */
export const EndpointUrlOrigin = ({ fallback }) => {
	const endpointUrl = useEndpointUrlFromSearchParams();
	return endpointUrl?.origin ?? fallback;
}

/**
 * Returns the `endpoint_url` search param as a URL, if present.
 */
export const useEndpointUrlFromSearchParams = () => {
	const location = window.location;
	const searchParams = new URLSearchParams(location.search);
	const endpointUrl = toUrl(searchParams.get(searchParamKey));
	return useMemo(() => endpointUrl, [endpointUrl]);
}

/**
 * Converts a string to a URL, or `undefined` if the given value is not a valid URL.
 */
const toUrl = (value) => {
	if (!value) {
		return undefined;
	}

	try {
		return new URL(value);
	} catch (_) {
		return undefined;
	}
}
