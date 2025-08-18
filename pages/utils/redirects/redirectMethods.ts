import { doNormalizedPathsMatch } from "@utils/redirects/pathMethods";
import { allRedirects } from "./redirectAggregator";

export const checkForHashRedirects = (
	path: string,
	hash: string,
): {
	result: boolean;
	newPath: string | (string | boolean)[];
} => {
	const slashPath = !path.endsWith("/") ? `${path}/` : path;
	const fullPathWithSlash = `${slashPath}#${hash}`;
	const fullPathWithoutSlash = `${slashPath.slice(0, -1)}#${hash}`;
	// cycle through allRedirects object checking for property key matches
	for (const [key, value] of Object.entries(allRedirects)) {
		if (
			doNormalizedPathsMatch(key, fullPathWithSlash) ||
			doNormalizedPathsMatch(key, fullPathWithoutSlash)
		) {
			return { result: true, newPath: value };
		}
	}

	return { result: false, newPath: path };
};
