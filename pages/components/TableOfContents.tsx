import { BackToTop } from "@components/BackToTop";
import { Button } from "@ngrok/mantle/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@ngrok/mantle/dropdown-menu";
import { CaretDown, List } from "@phosphor-icons/react";
import { isBrowser } from "is-in-browser";
import { useEffect, useRef, useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { useDocsContext } from "~/contexts/DocsContext";
import { useTableOfContents } from "~/hooks/useTableOfContents";
import { doNormalizedPathsMatch } from "~/utils/redirects/pathMethods";
import { MarkdownExportDropdown } from "./MarkdownExport";

interface TableOfContentsProps {
	className?: string;
	inline?: boolean; // When true, renders as inline content for layout (no fixed positioning)
}

export function TableOfContents({
	className = "",
	inline = false,
}: TableOfContentsProps) {
	const {
		headings: clientHeadings,
		activeId,
		scrollToHeading,
		userClickedRef,
	} = useTableOfContents();
	const pageContext = usePageContext();
	const { data } = pageContext;
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const tocContainerRef = useRef<HTMLDivElement>(null);
	const headingRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
	const tocId = "ng-table-of-contents";

	// Get mobile menu state from context, fallback to false if not in docs layout
	let _hasMobileMenu = false;
	let contextHasMobileMenu = false;
	try {
		// biome-ignore lint/correctness/useHookAtTopLevel: Need to conditionally use context
		({ hasMobileMenu: contextHasMobileMenu } = useDocsContext());
		_hasMobileMenu = contextHasMobileMenu;
	} catch {
		// Context not available, use default
	}

	// Use client headings if available and populated, otherwise fall back to server data

	const headings =
		isBrowser && clientHeadings.length > 0
			? clientHeadings
			: (data as any)?.headings || [];

	// Scroll to active heading in sidebar when it changes (but not when user clicked)
	useEffect(() => {
		if (activeId && tocContainerRef.current && !userClickedRef.current) {
			const activeElement = headingRefs.current.get(activeId);
			if (activeElement) {
				activeElement.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
				});
			}
		}
	}, [activeId, userClickedRef.current]);

	if (headings.length === 0) {
		return null;
	}

	const handleHeadingClick = (id: string) => {
		console.log("Heading clicked:", id);
		scrollToHeading(id);
		setDropdownOpen(false);
	};

	const getIndentClass = (level: number) => {
		switch (level) {
			case 1:
				return "pl-0";
			case 2:
				return "pl-1";
			default:
				return "pl-2";
		}
	};

	const getHeadingText = (heading: (typeof headings)[0]) => {
		return heading.text.endsWith(" #")
			? heading.text.slice(0, -2)
			: heading.text;
	};

	// Helper function to check if a heading should be highlighted
	const getHeadingHighlightState = (heading: (typeof headings)[0]) => {
		const isDirectlyActive = activeId === heading.id;

		// Check if this heading is a parent of the currently active heading
		const activeHeading = headings.find((h: any) => h.id === activeId);
		const isParentActive =
			activeHeading &&
			activeHeading.level > heading.level &&
			headings.indexOf(activeHeading) > headings.indexOf(heading) &&
			!headings
				.slice(headings.indexOf(heading) + 1, headings.indexOf(activeHeading))
				.some((h: any) => h.level <= heading.level);

		// Check if heading path matches current browser path
		const currentPath = isBrowser
			? window.location.pathname
			: pageContext.urlPathname;
		const headingPath = `#${heading.id}`;
		const isPathMatch = doNormalizedPathsMatch(
			headingPath,
			currentPath + headingPath,
		);

		return {
			isDirectlyActive,
			isParentActive,
			isPathMatch,
			isHighlighted: isDirectlyActive || isParentActive || isPathMatch,
		};
	};

	const HeadingItem = ({ heading }: { heading: (typeof headings)[0] }) => {
		const shouldWrapInPre =
			heading.text.charAt(0) === "`" &&
			heading.text.charAt(heading.text.length - 1) === "`";
		const { isDirectlyActive, isParentActive, isPathMatch } =
			getHeadingHighlightState(heading);

		const tocItemId = `toc-${heading.id}`;

		return (
			<button
				type="button"
				id={tocItemId}
				ref={(el) => {
					if (el) {
						headingRefs.current.set(heading.id, el);
					} else {
						headingRefs.current.delete(heading.id);
					}
				}}
				onClick={() => handleHeadingClick(heading.id)}
				className={`
        w-full text-left py-1 px-2 text-sm transition-colors relative
        ${heading.level <= 1 ? "" : "border-l-2"} hover:border-l-brand hover:text-brand
        ${
					isDirectlyActive || isPathMatch
						? `border-l-brand text-brand font-medium bg-brand/5`
						: isParentActive
							? "border-l-brand/50 text-foreground font-medium bg-brand/3"
							: "border-l-transparent text-muted-foreground"
				}
        ${getIndentClass(heading.level)}
      `}
			>
				{shouldWrapInPre ? (
					<pre className="inline">{heading.text.replaceAll("`", "")}</pre>
				) : (
					<span className="inline">{getHeadingText(heading)}</span>
				)}
			</button>
		);
	};

	// If inline, render simple inline version for layout
	if (inline) {
		return (
			<div id={tocId} className={className}>
				<h3 className="text-sm font-semibold text-foreground mb-3">
					On this page
				</h3>
				<nav className="space-y-1">
					{headings.map((heading: any) => (
						<HeadingItem key={heading.id} heading={heading} />
					))}
				</nav>
				<BackToTop />
			</div>
		);
	}

	return (
		<>
			{/* Mobile Fixed Dropdown */}
			<div id={tocId} className={`md:hidden p-1 ${className}`}>
				<div className="fixed bottom-4 left-4 right-4 z-10 mobile-toc">
					<div className="flex gap-1.5 items-stretch">
						<div className="flex-1 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg">
							<DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
								<DropdownMenuTrigger asChild>
									<Button
										type="button"
										appearance="outlined"
										className="w-full justify-between h-8 border-none"
									>
										<div className="flex items-center gap-2">
											<List size={16} />
											<span>On this page</span>
										</div>
										<CaretDown size={16} />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-[calc(100vw-2rem)] max-w-80 max-h-96 overflow-y-auto">
									{headings.map((heading: any) => {
										const { isDirectlyActive, isParentActive, isPathMatch } =
											getHeadingHighlightState(heading);
										return (
											<DropdownMenuItem
												key={heading.id}
												className={`
                        cursor-pointer border-l-2 hover:text-brand hover:border-l-brand
                        ${getIndentClass(heading.level)}
                        ${
													isDirectlyActive || isPathMatch
														? `${heading.level <= 1 ? "" : "border-l-brand"} bg-brand/5 text-brand font-medium`
														: isParentActive
															? `border-l-brand/50 bg-brand/3 text-foreground font-medium`
															: `border-l-transparent`
												}
                      `}
												onClick={() => handleHeadingClick(heading.id)}
											>
												<span className="text-sm">
													{getHeadingText(heading)}
												</span>
											</DropdownMenuItem>
										);
									})}
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						<MarkdownExportDropdown
							showMobile={true}
							className="bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg h-8"
						/>
					</div>
				</div>
			</div>

			{/* Desktop Fixed TOC */}
			<div id={tocId} className={`hidden md:block ${className}`}>
				<div
					ref={tocContainerRef}
					className="fixed top-24 md:top-28 lg:top-32 right-4 md:right-6 lg:right-8 w-56 md:w-60 lg:w-64 max-h-[calc(100vh-8rem)] overflow-y-auto pb-4 pr-2"
				>
					<h3 className="text-sm font-semibold text-foreground mb-3">
						On this page
					</h3>
					<nav className="space-y-1">
						{headings.map((heading: any) => (
							<HeadingItem key={heading.id} heading={heading} />
						))}
					</nav>
					<BackToTop />
				</div>
			</div>
		</>
	);
}
