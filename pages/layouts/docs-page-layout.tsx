import { Breadcrumbs } from "@components/Breadcrumbs";
import { MarkdownExportDropdown } from "@components/MarkdownExport";
import { Sidebar } from "@components/Sidebar";
import { TableOfContents } from "@components/TableOfContents";
import { Button } from "@ngrok/mantle/button";
import { Icon } from "@ngrok/mantle/icon";
import { ArrowLineRight, X } from "@phosphor-icons/react";
import clsx from "clsx";
import type React from "react";
import { usePageContext } from "vike-react/usePageContext";
import { getActiveNavCategory } from "~/utils/sidebarGeneration";
import { useMobileSidebar } from "../contexts/MobileSidebarContext";
import { useEffect } from "react";

interface DocsPageLayoutProps {
	children: React.ReactNode;
	category?: string;
	serverHeadings?: any[];
	frontmatter?: any;
}

export default function DocsPageLayout({
	children,
	category,
	serverHeadings = [],
	frontmatter = {},
}: DocsPageLayoutProps) {
	const { isMobileSidebarOpen, setIsMobileSidebarOpen } = useMobileSidebar();
	const pageContext = usePageContext();
	const data = (pageContext as any).data || {};
	const sidebarData = data.sidebarData || [];
	const isErrorPage = data.isErrorPage || false;
	const { urlPathname } = pageContext;

	// Get the current top-level group label
	const navBucket = getActiveNavCategory(urlPathname, sidebarData);
	const currentGroupLabel = navBucket?.label || "Docs";

	const hideToc = frontmatter.hide_toc || isErrorPage;
	const hideBreadcrumbs = frontmatter.hide_breadcrumbs || isErrorPage;

	return (
		<div className="flex flex-row h-full relative ">
			{/* Sidebar */}
			<nav
				aria-labelledby="main-nav-title"
				className={clsx(
					"fixed z-50 lg:z-auto top-0 bottom-0 flex flex-col ml-0 border-r lg:overflow-y-auto",
					"lg:w-[420px] lg:left-0 lg:top-[var(--header-height)] lg:sticky h-screen lg:h-[calc(100vh-var(--header-height))] lg:transition-all",
					isMobileSidebarOpen
						? "w-full left-0 transition-all"
						: "w-0 -left-full",
				)}
			>
				<div className="top-0 lg:top-[var(--header-height)] relative lg:sticky w-full lg:w-auto h-fit lg:h-screen overflow-y-scroll lg:overflow-auto [overscroll-behavior:contain] backdrop-blur backdrop-filter bg-background flex flex-col flex-grow">
					<span id="main-nav-title" className="sr-only">
						Main menu
					</span>
					<div className="top-0 sticky h-0 z-10">
						<div className="bg-gradient-to-b from-background to-transparent h-4 w-full"></div>
					</div>
					{/* Mobile sidebar header with close button */}
					<div className="lg:hidden flex items-center justify-between p-4 border-b">
						<div className="flex items-center justify-between w-full">
							<h2 className="text-lg font-semibold text-foreground">
								Navigation
							</h2>
							<Icon
								className="h-6 w-6 cursor-pointer text-foreground hover:text-foreground-light"
								svg={<X />}
								onClick={() => setIsMobileSidebarOpen(false)}
							/>
						</div>
					</div>
					<Sidebar />
				</div>
			</nav>

			{/* Mobile Table of Contents */}
			{hideToc ? null : <TableOfContents className="md:hidden" />}

			{/* Main content area */}
			<main
				id="docs-content-container"
				className="w-full transition-all ease-out relative lg:ml-0"
			>
				<div className="flex flex-col sticky top-0">
					{/* Mobile header (hidden on lg+) */}
					<div className="flex lg:hidden w-full top-0 left-0 right-0 z-50">
						{/* Mobile header content would go here */}
					</div>

					{/* Mobile breadcrumb bar */}
					<div className="sticky transition-all top-0 z-10 backdrop-blur backdrop-filter bg-background">
						<div className="lg:hidden px-3.5 border-b z-10 transition-all ease-out top-0 flex items-center gap-1">
							{/* Mobile sidebar button */}
							<Button
								appearance="ghost"
								type="button"
								className="flex items-center gap-2 text-foreground hover:bg-surface-100 p-2"
								onClick={() => setIsMobileSidebarOpen(true)}
							>
								<Icon svg={<ArrowLineRight />} className="h-4 w-4" />
								<span className="text-sm font-medium">{currentGroupLabel}</span>
							</Button>
						</div>
					</div>
				</div>

				<div className="grow">
					<div className="max-w-7xl px-5 mx-auto py-8 pb-0">
						<div className="grid grid-cols-12 relative gap-4">
							{/* Main content */}
							<div
								className={clsx(
									"relative transition-all ease-out duration-100 col-span-12",
									hideToc ? "" : "md:col-span-9",
								)}
							>
								{/* Breadcrumbs */}
								{hideBreadcrumbs ? null : <Breadcrumbs />}

								{/* Article content */}
								<article
									id="ng-docs-guide-main-article"
									className="prose max-w-none mb-14"
								>
									{!isErrorPage && (
										<div className="mt-10">
											<h1 className="mb-0 font-initial [&amp;>p]:m-0">
												{frontmatter.title}
											</h1>
											<p className="text-muted font-thin opacity-80 text-xl italic text-we">
												{frontmatter.showDescription && frontmatter.description}
											</p>
											<hr className="not-prose border-t-0 border-b my-6" />
										</div>
									)}
									{children}
								</article>
							</div>

							{/* Table of Contents */}
							{hideToc ? null : (
								<aside className="mb-8 thin-scrollbar overflow-y-auto h-fit px-px hidden md:flex col-span-3 self-start sticky top-[calc(var(--header-height)+1px+2rem)] max-h-[calc(100vh-var(--header-height)-3rem)]">
									<div className="w-full relative border-l flex flex-col gap-6 lg:gap-8 px-2 h-fit">
										<div className="flex ">
											<MarkdownExportDropdown />
										</div>
										<TableOfContents className="md:pl-2" inline />
									</div>
								</aside>
							)}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
