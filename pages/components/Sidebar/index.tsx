import { Link } from "@components/Link";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@ngrok/mantle/accordion";
import { Icon } from "@ngrok/mantle/icon";
import { CaretDownIcon, X } from "@phosphor-icons/react";
import clsx from "clsx";
import { useEffect, useMemo, useRef } from "react";
import scrollIntoView from "scroll-into-view-if-needed";
import { usePageContext } from "vike-react/usePageContext";
import { useActiveNavCategory } from "~/contexts/ActiveNavCategory";
import { useMobileSidebar } from "~/contexts/MobileSidebarContext";
import { useIsPathActive } from "~/hooks/useIsPathActive";
import { doNormalizedPathsMatch } from "~/utils/redirects/pathMethods";
import type { ProcessedSidebarData } from "~/utils/sidebarGeneration";

const SidebarChildItem = ({
	item,
	mainItem,
	className,
	itemKey,
}: {
	item: any;
	mainItem: ProcessedSidebarData;
	className?: string;
	itemKey: number;
}) => {
	const itemRef = useRef<HTMLDivElement | null>(null);
	const isPathActive = useIsPathActive(item.link?.id);

	useEffect(() => {
		if (isPathActive && itemRef.current) {
			scrollIntoView(itemRef.current, {
				scrollMode: "if-needed",
				block: "center",
				inline: "nearest",
				behavior: "smooth",
			});
		}
	}, [isPathActive]);

	if (!item) return null;

	// Prevent duplicate overview items in the sidebar
	if (
		item.type === "doc" &&
		item.label === "Overview" &&
		item.link?.id &&
		doNormalizedPathsMatch(item.link.id, mainItem.link?.id)
	) {
		return null; // Skip if item is a doc and matches the main item's link
	}

	const isTopLevel = Boolean(
		item.forceTopLevel ||
			item.type === "category" ||
			item.type === "subcategory",
	);

	return (
		<SidebarItem
			className={clsx("", className)}
			mainItem={item}
			parentItem={mainItem}
			isTopLevel={isTopLevel}
		/>
	);
};

const SectionChildren = ({
	mainItem,
	className,
}: {
	mainItem: ProcessedSidebarData;
	className?: string;
	itemIsChild?: boolean;
}) => {
	if (!mainItem?.items) return null;

	return (
		<>
			{mainItem.forceOverview && (
				<SidebarChildItem
					key={`${mainItem?.link?.id || mainItem?.label || "main-item"}-overview-item`}
					item={{ label: "Overview", link: mainItem.link, items: [] }}
					mainItem={mainItem}
					className={className}
					itemKey={0}
				/>
			)}
			{mainItem.items?.map((item: any, key) => {
				if (
					item.label === mainItem.label &&
					item?.link?.id &&
					mainItem.link?.id &&
					item.link?.id === mainItem.link?.id
				) {
					// Skip if item link matches main item's link
					return null;
				}

				return (
					<SidebarChildItem
						key={item?.link?.id || item?.label || key}
						item={item}
						mainItem={mainItem}
						className={className}
						itemKey={key}
					/>
				);
			})}
		</>
	);
};

const NavItem = ({
	linkPath,
	label,
	className,
}: {
	linkPath: string;
	label: ProcessedSidebarData["label"];
	className?: string;
}) => {
	const { urlPathname } = usePageContext();
	const isActive = doNormalizedPathsMatch(linkPath, urlPathname);

	return (
		<li className="mb-2">
			<Link
				className={clsx(
					"cursor-pointer transition text-sm block",
					isActive
						? "text-brand-link"
						: "text-foreground-lighter hover:text-foreground",
					className,
				)}
				to={linkPath}
			>
				{label}
			</Link>
		</li>
	);
};

export const Sidebar = ({ className }: any) => {
	const { isMobileSidebarOpen, setIsMobileSidebarOpen } = useMobileSidebar();

	const listToShow = useActiveNavCategory();

	if (listToShow) {
		return (
			<div
				className={clsx(
					"transition-all ease-out duration-200 absolute left-0 right-0 px-5 pl-5 pt-6 pb-16 bg-background lg:relative lg:left-0 lg:pb-10 lg:px-10 lg:flex lg:flex-col lg:opacity-100 lg:visible",
					className,
				)}
			>
				<div
					className="transition-all duration-150 ease-out opacity-100 ml-0 delay-150"
					data-orientation="vertical"
				>
					<ul className="relative w-full flex flex-col gap-0 pb-5">
						<span>
							<div
								className={`flex justify-between hover:text-brand-link items-center gap-3 my-3 font-mono font-semibold uppercase`}
							>
								{listToShow.link?.id ? (
									<Link to={listToShow.link?.id} className="false">
										{listToShow.label}
									</Link>
								) : (
									<span className="false text-brand">{listToShow.label}</span>
								)}
								{isMobileSidebarOpen && (
									<Icon
										className="h-6 w-6 cursor-pointer text-foreground hover:text-foreground-light"
										svg={<X />}
										onClick={() => setIsMobileSidebarOpen(false)}
									/>
								)}
							</div>
						</span>
						{listToShow?.items?.map((topLevelItem: ProcessedSidebarData) => {
							if (!topLevelItem) return null;
							if (topLevelItem.label === listToShow.label) {
								topLevelItem.label = "Overview";
							}
							return (
								<div key={topLevelItem.link?.id + topLevelItem.label}>
									{topLevelItem.forceOverview && (
										<SidebarItem
											parentItem={topLevelItem}
											mainItem={{ ...topLevelItem, items: [] }}
											isTopLevel={true}
										/>
									)}
									<SidebarItem
										parentItem={listToShow}
										mainItem={topLevelItem}
										isTopLevel={true}
									/>
								</div>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
};

function SidebarItem({
	mainItem,
	className,
	isTopLevel = false,
	parentItem = null,
}: {
	mainItem: ProcessedSidebarData;
	className?: string;
	isTopLevel?: boolean;
	parentItem?: ProcessedSidebarData | null;
}) {
	const { urlPathname } = usePageContext();
	const itemHasChildren = mainItem.items && mainItem.items.length > 0;

	// Check if this item contains a child that has the same link as the main item
	const itemIsChild =
		mainItem?.items?.length === 1 &&
		mainItem.link?.id === mainItem.items[0].link?.id &&
		mainItem.label === mainItem.items[0].label;

	// Determine if this accordion should be open based on current path
	const shouldBeOpen = useMemo(() => {
		if (!itemHasChildren) return false;

		// Check if current path matches mainItem or any of its children
		const mainItemMatches =
			mainItem.link?.id &&
			doNormalizedPathsMatch(mainItem.link.id, urlPathname);
		const childMatches = mainItem.items?.some(
			(child: ProcessedSidebarData) =>
				child?.link?.id && doNormalizedPathsMatch(child.link.id, urlPathname),
		);

		return mainItemMatches || childMatches;
	}, [itemHasChildren, mainItem.link?.id, mainItem.items, urlPathname]);

	// Get current accordion value based on URL matching
	const accordionValue = shouldBeOpen ? mainItem.label : undefined;

	const _isSubcategory =
		mainItem.type === "subcategory" || parentItem?.type === "subcategory";
	const _parentIsCategory = parentItem?.type === "category";

	const isActive = doNormalizedPathsMatch(mainItem.link?.id, urlPathname);

	// Render as top-level section with divider and uppercase styling
	if (itemHasChildren && isTopLevel && !itemIsChild) {
		const indentation = ""; // isSubcategory ? "pl-2" : "";
		return (
			<div className={`${indentation} ${className}`}>
				<div className="flex flex-col">
					<span className="text-sm text-foreground-muted font-semibold mb-3">
						{mainItem.link?.id ? (
							<Link
								to={mainItem.link.id}
								className={`${isActive ? "text-brand" : ""} hover:text-brand`}
							>
								{mainItem.label}
							</Link>
						) : (
							mainItem.label
						)}
					</span>
					<SectionChildren itemIsChild={itemIsChild} mainItem={mainItem} />
				</div>
			</div>
		);
	}

	// Render as collapsible category if it has children (nested or top-level without special styling)
	if (itemHasChildren && !itemIsChild) {
		return (
			<Accordion
				type="single"
				collapsible
				defaultValue={accordionValue}
				className="w-full"
			>
				<AccordionItem value={mainItem.label}>
					<AccordionTrigger
						className={clsx(
							"cursor-pointer transition text-sm justify-between group hover:no-underline mb-3",
							isActive
								? "text-brand-link"
								: "text-foreground-lighter hover:text-foreground",
						)}
					>
						<span>{mainItem.label}</span>
						<Icon
							svg={<CaretDownIcon size={12} />}
							className="h-3 w-3 transition-transform duration-200 -rotate-90 group-data-[state=open]:rotate-0"
						/>
					</AccordionTrigger>
					<AccordionContent className="pb-0 pt-0 mb-1">
						<SectionChildren mainItem={mainItem} />
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		);
	}

	// Render as simple nav item
	return (
		<NavItem
			className={clsx("ml-4", className)}
			linkPath={mainItem.link?.id || mainItem.href || ""}
			label={mainItem.label}
		/>
	);
}
