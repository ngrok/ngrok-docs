import { useLocation } from "@docusaurus/router";
import { useMemo, type ReactNode } from "react";

type Props = {
	fallback?: ReactNode;
};

const searchParamKey = "endpoint_url";

/**
 * Renders the URL hostname from the `endpoint_url` search param.
 *
 * Provide a `fallback` to render when the search param is not present.
 */
function EndpointUrlHostname({ fallback }: Props) {
	const endpointUrl = useEndpointUrlFromSearchParams();
	return endpointUrl?.hostname ?? fallback;
}

/**
 * Renders the URL origin from the `endpoint_url` search param.
 *
 * Provide a `fallback` to render when the search param is not present.
 */
function EndpointUrlOrigin({ fallback }: Props) {
	const endpointUrl = useEndpointUrlFromSearchParams();
	return endpointUrl?.origin ?? fallback;
}

/**
 * Returns the `endpoint_url` search param as a URL, if present.
 */
function useEndpointUrlFromSearchParams() {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const endpointUrl = toUrl(searchParams.get(searchParamKey));
	return useMemo(() => endpointUrl, [endpointUrl]);
}

export {
	//,
	EndpointUrlHostname,
	EndpointUrlOrigin,
	useEndpointUrlFromSearchParams,
};

/**
 * Converts a string to a URL, or `undefined` if the given value is not a valid URL.
 */
function toUrl(value: string | undefined | null) {
	if (!value) {
		return undefined;
	}

	try {
		return new URL(value);
	} catch (_) {
		return undefined;
	}
}
