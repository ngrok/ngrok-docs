/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
import { Link } from "@components/Link";
import React from "react";
import { usePageContext } from "vike-react/usePageContext";
import { useActiveNavCategory } from "~/contexts/ActiveNavCategory";
import { findInNestedArray } from "~/utils/sidebarGeneration";

interface BreadcrumbItem {
	label: string;
	href: string;
}

export function Breadcrumbs() {
	const pageContext = usePageContext();

	const { urlPathname } = pageContext;

	// Get the active nav category, then find the item deeply nested within it
	// that has a link.id that matches the url pathname, then get the breadcrumb property from that
	const activeNav = useActiveNavCategory();
	const breadcrumbSource = findInNestedArray(activeNav.items, urlPathname);

	const breadcrumbs = breadcrumbSource?.breadcrumbs;

	if (!breadcrumbs) {
		return null;
	}

	return (
		<nav aria-label="breadcrumb" className="mb-2">
			<ol className="flex flex-wrap items-center gap-0.5 break-words text-sm sm:gap-1.5 text-foreground-lighter p-0">
				{breadcrumbs.map((item: any, index: number) => (
					<React.Fragment key={item.href || index + item.label}>
						<li className="text-foreground-lighter gap-1.5 leading-5 flex items-center overflow-hidden">
							{item.href ? (
								<Link
									className="transition-colors underline lg:no-underline hover:text-foreground"
									href={item.href}
								>
									{item.label}
								</Link>
							) : (
								<span>{item.label}</span>
							)}
						</li>
						{index < breadcrumbs.length - 1 && (
							<li
								role="presentation"
								aria-hidden="true"
								className="[&>svg]:size-3.5"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="lucide lucide-chevron-right"
								>
									<path d="m9 18 6-6-6-6"></path>
								</svg>
							</li>
						)}
					</React.Fragment>
				))}
			</ol>
		</nav>
	);
}
