import { Link } from "@components/Link";
import { Icon } from "@ngrok/mantle/icon";
import { CaretDownIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { navData, type NavCategory } from "~/utils/navData";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { SidebarItemData } from "~/utils/sidebarGeneration";

export default function MobileNavigation() {
	const [isOpen, setIsOpen] = useState(false);

	// Handle escape key and body scroll lock
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<div className="relative">
			{/* Hamburger Button */}
			<button
				type="button"
				className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-surface-100 hover:text-foreground-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-600"
				aria-expanded={isOpen}
				onClick={(e) => {
					e.stopPropagation();
					setIsOpen(!isOpen);
				}}
			>
				<span className="sr-only">Open main menu</span>
				<Icon className="h-6 w-6" svg={isOpen ? <XIcon /> : <ListIcon />} />
			</button>

			{/* Mobile Menu Overlay */}
			{isOpen && (
				<>
					{/* Backdrop */}
					<button
						type="button"
						className="fixed inset-0 bg-black bg-opacity-50 z-40"
						onClick={() => setIsOpen(false)}
						onKeyDown={(e) => {
							if (e.key === "Escape") setIsOpen(false);
						}}
					/>

					{/* Menu Panel */}
					<div className="fixed top-0 right-0 w-full h-screen bg-background border-l z-50 overflow-y-auto">
						<div className="flex flex-col h-full">
							{/* Header with close button */}
							<div className="flex items-center justify-between p-4 border-b">
								<div className="flex items-center justify-between w-full">
									<h2 className="text-lg font-semibold text-foreground">
										Navigation
									</h2>
									<Icon
										className="h-6 w-6 cursor-pointer text-foreground hover:text-foreground-light"
										svg={<XIcon />}
										onClick={() => setIsOpen(false)}
									/>
								</div>
							</div>

							{/* Navigation Items */}
							<div className="flex-1 py-4">
								<nav className="space-y-1 px-4">
									{navData.map((category: NavCategory) => (
										<MobileNavCategory
											key={category.label}
											category={category}
											onItemClick={() => setIsOpen(false)}
										/>
									))}
								</nav>
							</div>

							{/* Theme Switcher in Footer */}
							<div className="border-t p-4">
								<div className="flex items-center justify-between">
									<span className="text-sm font-medium text-foreground">
										Theme
									</span>
									<ThemeSwitcher onThemeChange={() => setIsOpen(false)} />
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

function MobileNavCategory({
	category,
	onItemClick,
}: {
	category: NavCategory;
	onItemClick: () => void;
}) {
	const [isExpanded, setIsExpanded] = useState(false);
	const hasChildren = category.items && category.items.length > 0;

	// Render as expandable category
	return (
		<div>
			<button
				type="button"
				className="flex items-center justify-between w-full px-3 py-2 text-left rounded-md text-foreground hover:bg-surface-100 hover:text-brand"
				onClick={() => setIsExpanded(!isExpanded)}
			>
				<span className="font-semibold">{category.label}</span>
				{hasChildren && (
					<Icon
						className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
						svg={<CaretDownIcon />}
					/>
				)}
			</button>

			{isExpanded && hasChildren && (
				<div className="ml-4 mt-1 space-y-1">
					{category.items?.map((item: SidebarItemData) => {
						const itemHref = `/docs/${item.id}`;
						const IconComponent = item.icon;
						return (
							<Link
								key={item.id}
								to={itemHref}
								className="flex items-center gap-3 px-3 py-2 text-sm text-foreground-light hover:text-brand hover:bg-surface-50 rounded-md"
								onClick={onItemClick}
							>
								{IconComponent && (
									<Icon svg={<IconComponent />} className="text-gray-600" />
								)}
								<span>{item.label}</span>
							</Link>
						);
					})}
				</div>
			)}
		</div>
	);
}
