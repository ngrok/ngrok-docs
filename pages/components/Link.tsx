import clsx from "clsx";
import type React from "react";
import { usePageContext } from "vike-react/usePageContext";
import { useMobileSidebar } from "~/contexts/MobileSidebarContext";

function resolveRelativePath(
	currentPath: string,
	relativePath: string,
): string {
	// Remove /docs prefix from current path for resolution
	const cleanCurrentPath = currentPath.startsWith("/docs/")
		? currentPath.slice(5)
		: currentPath;

	// Split the current path into segments (each segment represents a directory)
	const currentSegments = cleanCurrentPath
		.split("/")
		.filter((segment) => segment !== "");

	// Split the relative path into segments
	const relativeSegments = relativePath
		.split("/")
		.filter((segment) => segment !== "");

	// Start from the current directory
	const resolvedSegments = [...currentSegments];

	for (const segment of relativeSegments) {
		if (segment === ".") {
		} else if (segment === "..") {
			// Parent directory - remove last segment
			resolvedSegments.pop();
		} else {
			// Regular segment - add to path
			resolvedSegments.push(segment);
		}
	}

	// Return with /docs prefix
	return `/docs/${resolvedSegments.join("/")}`;
}

interface LinkProps {
	href?: string;
	to?: string;
	children: React.ReactNode;
	className?: string;
	prefetch?: string;
	"aria-label"?: string;
	onClick?: () => void;
	external?: boolean;
}

export function Link({
	href,
	to,
	children,
	className,
	prefetch,
	"aria-label": ariaLabel,
	onClick,
	external,
}: LinkProps) {
	const pageContext = usePageContext();
	const isActive = pageContext.urlPathname === href;
	const { isMobileSidebarOpen, setIsMobileSidebarOpen } = useMobileSidebar();

	if (!href && !to) {
		throw new Error(
			"Either 'href' or 'to' must be provided for Link component",
		);
	}

	let finalLink = href || to;
	if (!finalLink) {
		throw new Error(
			"Either 'href' or 'to' must be provided for Link component",
		);
	}

	const firstChar = finalLink.charAt(0);

	if (firstChar !== "#" && !finalLink.startsWith("/docs/")) {
		// Only transform the link if it's not a hash link
		// and doesn't start with '/docs/'
		if (firstChar === "/") {
			finalLink = `/docs${finalLink}`;
		} else if (finalLink.startsWith("./") || finalLink.startsWith("../")) {
			// Handle relative paths
			finalLink = resolveRelativePath(pageContext.urlPathname, finalLink);
		} else {
			// If the link is not a full URL and doesn't
			// start with '/'
			if (!finalLink.startsWith("http")) {
				finalLink = `/${finalLink}`;
			}
		}
	}

	return (
		<a
			onClickCapture={() => setIsMobileSidebarOpen(false)}
			href={finalLink}
			className={clsx("", className)}
			aria-label={ariaLabel}
			onClick={onClick}
			data-active={isActive}
			target={external ? "_blank" : undefined}
			rel={external ? "noopener noreferrer" : undefined}
		>
			{children}
		</a>
	);
}

interface NavLinkProps {
	to: string;
	children:
		| React.ReactNode
		| ((props: { isActive: boolean }) => React.ReactNode);
	className?: string | ((props: { isActive: boolean }) => string);
	prefetch?: string;
	"aria-label"?: string;
	onClick?: () => void;
}

export function NavLink({
	to,
	children,
	className,
	prefetch,
	"aria-label": ariaLabel,
	onClick,
}: NavLinkProps) {
	const pageContext = usePageContext();
	const isActive = pageContext.urlPathname === to;

	const resolvedClassName =
		typeof className === "function" ? className({ isActive }) : className;
	const resolvedChildren =
		typeof children === "function" ? children({ isActive }) : children;

	return (
		<a
			href={to}
			className={resolvedClassName}
			aria-label={ariaLabel}
			onClick={onClick}
			data-active={isActive}
		>
			{resolvedChildren}
		</a>
	);
}
