export function getPathWithNormalizedSlashes(str: string) {
	let normalizedPath = str;
	if (normalizedPath.endsWith("/")) {
		normalizedPath = normalizedPath.substring(0, normalizedPath.length - 1);
	}
	return normalizedPath;
}

export function getRemixPath(str: string) {
	let normalizedPath = str;
	if (normalizedPath.startsWith("/")) {
		normalizedPath = normalizedPath.substring(1);
	}
	normalizedPath = normalizedPath.replaceAll("/", "+/");
	if (normalizedPath.endsWith("/")) {
		normalizedPath = normalizedPath.substring(0, normalizedPath.length - 2);
	}
	return normalizedPath;
}

export function getFullUrlPath(str: string | undefined | null): string {
	if (!str) return "";
	let normalizedPath = str.replaceAll("\\", "/");
	if (normalizedPath.includes(":")) {
		// If it's a file path, cut it down to the docs path
		normalizedPath = normalizedPath.substring(normalizedPath.indexOf("/docs/"));
	}
	if (!normalizedPath.startsWith("/")) {
		normalizedPath = `/${normalizedPath}`;
	}
	if (!normalizedPath.startsWith("/docs")) {
		normalizedPath = `/docs${normalizedPath}`;
	}
	if (normalizedPath.includes("+Page")) {
		normalizedPath = normalizedPath.replaceAll("+Page", "");
	}
	if (normalizedPath.includes(".md")) {
		normalizedPath = normalizedPath.substring(0, normalizedPath.indexOf(".md"));
	}
	if (!normalizedPath.endsWith("/")) {
		normalizedPath += "/";
	}
	if (normalizedPath.endsWith("index/")) {
		normalizedPath = normalizedPath.replace("index/", "");
	}
	normalizedPath = normalizedPath.replaceAll("//", "/");
	return normalizedPath;
}
