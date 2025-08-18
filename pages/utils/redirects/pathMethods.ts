/**
 * Methods for matching the URL path with the provided redirect
 */
export const getNormalizedPaths = (from: string, path: string) => {
	// Normalize both paths by removing trailing slashes if present
	return {
		normalizedFrom: from.endsWith("/") ? from.slice(0, -1) : from,
		normalizedPath: path.endsWith("/") ? path.slice(0, -1) : path,
	};
};

export const doNormalizedPathsMatch = (
	from: string | undefined,
	path: string | undefined,
) => {
	if (!from || !path) return false; // If either is empty, return false
	const { normalizedFrom, normalizedPath } = getNormalizedPaths(from, path);
	return normalizedPath === normalizedFrom;
};

export const doesIncludeNormalizedPath = (
	container: string | undefined,
	item: string | undefined,
) => {
	if (!container || !item) return false; // If either is empty, return false
	const {
		normalizedFrom: normalizedContainer,
		normalizedPath: normalizedItem,
	} = getNormalizedPaths(container, item);
	return normalizedContainer.includes(normalizedItem);
};

export const fromExact = (from: string) => (path: string) => {
	const { normalizedFrom, normalizedPath } = getNormalizedPaths(from, path);
	return [normalizedFrom, normalizedPath === normalizedFrom]; // [xyz]
};

export const fromIncludes = (from: string) => (path: string) => {
	const { normalizedFrom, normalizedPath } = getNormalizedPaths(from, path);

	return [normalizedFrom, normalizedPath.includes(normalizedFrom)];
};

export const toExact = (to: string) => () => to; // x -> y
export const toReplace = (to: string) => (path: string, from: string) =>
	path.replace(from, to); // abc/x -> xyz/x
