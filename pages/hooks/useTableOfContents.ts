import { useCallback, useEffect, useRef, useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
import {
	MAX_HEADING_LEVEL,
	MIN_HEADING_LEVEL,
} from "~/utils/globals/mdxSettings";

export interface TocHeading {
	id: string;
	text: string;
	level: number;
}

export function useTableOfContents() {
	const { urlParsed: location } = usePageContext();
	const [headings, setHeadings] = useState<TocHeading[]>([]);
	const [activeId, setActiveId] = useState<string>("");
	const activeIdRef = useRef<string>("");
	const userClickedRef = useRef<boolean>(false);
	const existingIds: string[] = [];

	// Keep ref in sync with state
	useEffect(() => {
		activeIdRef.current = activeId;
	}, [activeId]);

	// Generate a unique ID from heading text
	const generateId = useCallback((text: string): string => {
		const newID = text
			.toLowerCase()
			.replace(/_/g, "-")
			.replace(/[^a-z0-9]+/g, "-")
			.replace(/(^-|-$)/g, "");

		if (existingIds.includes(newID)) {
			const suffixedId = `${newID}-${existingIds.filter((id) => id.startsWith(newID)).length + 1}`;
			existingIds.push(suffixedId);
			return suffixedId;
		}

		existingIds.push(newID);
		return newID;
	}, []);

	// Extract headings from the DOM and add IDs
	const extractHeadings = useCallback(() => {
		// Only target headings within the markdown content area
		const markdownContainer = document.querySelector(
			"#ng-docs-guide-main-article",
		);
		if (!markdownContainer) return;

		const headingElements = markdownContainer.querySelectorAll("h1, h2, h3");
		const headingData: TocHeading[] = [];

		headingElements.forEach((heading) => {
			if (heading.getAttribute("data-ignore-toc") === "true") return;
			const level = parseInt(heading.tagName.charAt(1));
			if (level > MAX_HEADING_LEVEL || level < MIN_HEADING_LEVEL) return; // Skip h1s and all headings deeper than h3

			let text = heading.textContent || "";

			if (heading.firstChild?.firstChild?.nodeName === "PRE") {
				text = `\`${text}\``; // Handle inline code
			}

			if (text.trim()) {
				let id = heading.id;

				// Always normalize the ID, whether it exists or not
				if (!id) {
					id = generateId(text);
				} else {
					// Normalize existing ID to ensure consistent format
					id = generateId(text);
				}
				heading.id = id;

				// Wrap heading in anchor if not already wrapped
				if (!heading.querySelector("a")) {
					const anchor = document.createElement("a");
					anchor.href = `#${id}`;
					anchor.className = "heading-anchor";

					// Move all heading content into the anchor
					while (heading.firstChild) {
						anchor.appendChild(heading.firstChild);
					}
					heading.appendChild(anchor);
				}

				headingData.push({ id, text, level });
			}
		});

		existingIds.length = 0; // Clear existing IDs for next extraction
		setHeadings(headingData);
	}, [generateId]);

	// Handle smooth scrolling to heading
	const scrollToHeading = useCallback((id: string) => {
		// Mark that user clicked on TOC item
		userClickedRef.current = true;

		const element = document.getElementById(id);

		if (element) {
			// Try using scrollIntoView first as it's more reliable
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});

			// Add slight delay then adjust for header
			setTimeout(() => {
				const currentPosition = window.pageYOffset;
				const offset = 80;
				window.scrollTo({
					top: currentPosition - offset,
					behavior: "smooth",
				});

				// Reset the flag after scroll completes
				setTimeout(() => {
					userClickedRef.current = false;
				}, 500);
			}, 100);

			// Update URL hash
			if (window.history.pushState) {
				window.history.pushState(null, "", `#${id}`);
			} else {
				window.location.hash = id;
			}
		} else {
			// Fallback: try to find by anchor href
			const anchor = document.querySelector(`a[href="#${id}"]`);
			if (anchor) {
				anchor.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});

				// Reset the flag after fallback scroll
				setTimeout(() => {
					userClickedRef.current = false;
				}, 500);
			} else {
				// Reset flag even if element not found
				userClickedRef.current = false;
			}
		}
	}, []);

	// Track which heading is currently active using IntersectionObserver
	useEffect(() => {
		if (headings.length === 0) return;

		const observedElements = new Map<string, HTMLElement>();
		const visibleHeadings = new Set<string>();

		// Find all heading elements
		headings.forEach((heading) => {
			const element = document.getElementById(heading.id);
			if (element) {
				observedElements.set(heading.id, element);
			}
		});

		if (observedElements.size === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const headingId = entry.target.id;

					if (entry.isIntersecting) {
						visibleHeadings.add(headingId);
					} else {
						visibleHeadings.delete(headingId);
					}
				});

				// Find the active heading from visible ones
				if (visibleHeadings.size > 0) {
					// Get the first visible heading in document order
					const activeHeading = headings.find((h) =>
						visibleHeadings.has(h.id),
					)?.id;
					if (activeHeading && activeHeading !== activeIdRef.current) {
						setActiveId(activeHeading);
					}
				}
				// When no headings are visible, keep the last active heading highlighted
			},
			{
				// Account for fixed header with negative top margin
				rootMargin: "0px 0px -50% 0px",
				threshold: 0,
			},
		);

		// Observe all heading elements
		observedElements.forEach((element) => {
			observer.observe(element);
		});

		return () => {
			observer.disconnect();
		};
	}, [headings]);

	// Handle URL hash on page load
	useEffect(() => {
		const hash = window.location.hash.slice(1);
		if (hash) {
			setTimeout(() => {
				scrollToHeading(hash);
			}, 100);
		}
	}, [scrollToHeading]);

	// Re-extract headings when component mounts, content changes, or route changes
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		// Clear previous headings when route changes
		setHeadings([]);
		setActiveId("");

		// Extract headings after a short delay to ensure DOM is updated
		const timer = setTimeout(extractHeadings, 150);
		return () => clearTimeout(timer);
	}, [extractHeadings, location.pathname]);

	// Also listen for DOM mutations to catch dynamically loaded content
	useEffect(() => {
		const observer = new MutationObserver((mutations) => {
			const hasContentChanges = mutations.some(
				(mutation) =>
					mutation.type === "childList" &&
					Array.from(mutation.addedNodes).some(
						(node) =>
							node.nodeType === Node.ELEMENT_NODE &&
							(node as Element).querySelector?.("h1, h2, h3, h4, h5, h6"),
					),
			);

			if (hasContentChanges) {
				const timer = setTimeout(extractHeadings, 100);
				return () => clearTimeout(timer);
			}
		});

		// Observe the markdown content area for changes
		const markdownContainer = document.querySelector(
			"#ng-docs-guide-main-article",
		);
		if (markdownContainer) {
			observer.observe(markdownContainer, {
				childList: true,
				subtree: true,
			});
		}

		return () => observer.disconnect();
	}, [extractHeadings]);

	return {
		headings,
		activeId,
		scrollToHeading,
		userClickedRef,
	};
}
