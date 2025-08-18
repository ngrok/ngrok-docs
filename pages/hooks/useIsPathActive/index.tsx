import { useEffect, useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { doNormalizedPathsMatch } from "~/utils/redirects/pathMethods";

export function useIsPathActive(pathToCheck: string | undefined): boolean {
	const { urlPathname } = usePageContext();
	const [isPathActive, setIsPathActive] = useState(
		pathToCheck ? doNormalizedPathsMatch(pathToCheck, urlPathname) : false,
	);

	useEffect(() => {
		if (typeof window === "undefined" || !pathToCheck) return;
		setIsPathActive(doNormalizedPathsMatch(pathToCheck, urlPathname));
	}, [pathToCheck, urlPathname]);

	if (!pathToCheck) return false; // If no path is provided, return false immediately

	return isPathActive;
}
