import { Link } from "@components/Link";
import { Button } from "@ngrok/mantle/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@ngrok/mantle/hover-card";
import { Icon } from "@ngrok/mantle/icon";
import { CaretDownIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import { usePageContext } from "vike-react/usePageContext";
import { navData, type NavCategory } from "~/utils/navData";
import {
	getActiveNavCategory,
	type SidebarItemData,
} from "~/utils/sidebarGeneration";

export default function Navigation(props: any) {
	const pageContext = usePageContext();
	const sidebarData = (pageContext.data as any)?.sidebarData || [];
	let navCategory = getActiveNavCategory(pageContext.urlPathname, sidebarData);
	if (!navCategory || !navCategory.items || navCategory.items.length === 0) {
		navCategory = sidebarData[0];
	}

	// We don't want to underline anything at the root path
	const isRootUrl = pageContext.urlPathname === "/docs";

	return (
		<div
			className={clsx(
				`ml-2 relative flex-grow basis-0 items-center space-x-1 hidden md:flex h-full`,
				props.className,
			)}
		>
			{navData.map((category: NavCategory) => (
				<CardItem
					key={category.label}
					category={category}
					isActive={!isRootUrl && category.label === navCategory?.label}
				/>
			))}
		</div>
	);
}

function CardItem({
	category,
	isActive,
}: {
	category: NavCategory;
	isActive: boolean;
}) {
	const hasChildren = category.items && category.items.length > 0;

	function generateCardContent() {
		return category.items?.map((item: SidebarItemData) => {
			let rawLink = item.id || item.link?.id || item.href;
			if (!rawLink) {
				// If no id or link, fallback to first item in items array
				rawLink =
					item.items && typeof item.items[0] === "string"
						? item.items[0]
						: (item.items?.[0] as SidebarItemData)?.link?.id;
			}
			const itemHref = `/docs/${rawLink}`;
			const IconComponent = item.icon;
			return (
				<Link
					key={item.id}
					to={itemHref}
					aria-label={item.label}
					className="flex items-center gap-3 px-3 py-2 text-sm text-black hover:text-brand rounded-md hover:bg-gray-50 transition-colors min-w-[200px]"
				>
					{IconComponent && (
						<Icon svg={<IconComponent />} className="text-gray-600" />
					)}
					<span>{item.label}</span>
				</Link>
			);
		});
	}

	if (category.noDropdown) {
		// Render as simple link if no children or no dropdown
		return (
			<Link
				to={`/docs/${category.items[0]?.link?.id}`}
				className={clsx(
					"text-sm px-2 py-0 hover:text-brand focus:outline-none relative h-full flex items-center",
					isActive &&
						"after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand",
				)}
			>
				{category.label}
			</Link>
		);
	}

	// Render as dropdown for categories with items
	return (
		<HoverCard>
			<HoverCardTrigger asChild>
				<Button
					appearance="link"
					type="button"
					className={clsx(
						"text-sm px-2 py-0 hover:text-brand focus:outline-none relative h-full flex items-center group",
						isActive &&
							"after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand",
					)}
				>
					{category.label}{" "}
					{hasChildren && (
						<Icon
							svg={<CaretDownIcon size={12} />}
							className="ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
						/>
					)}
				</Button>
			</HoverCardTrigger>
			<HoverCardContent
				className="flex flex-col p-2 z-50"
				side="bottom"
				align="start"
				sideOffset={4}
			>
				{generateCardContent()}
			</HoverCardContent>
		</HoverCard>
	);
}
