import { CustomDocSearch } from "@components/CustomDocSearch";
import { useRef } from "react";

export function HeaderSearch({ className = "" }: { className?: string }) {
	const searchButtonRef = useRef<HTMLDivElement>(null);

	const handleSearchClick = () => {
		// Find the DocSearch button and click it
		const docSearchButton = document.querySelector(".DocSearch-Button");
		if (docSearchButton) {
			(docSearchButton as HTMLElement).click();
		} else {
			// Fallback: trigger the Cmd+K / Ctrl+K keyboard shortcut that DocSearch listens for
			const event = new KeyboardEvent("keydown", {
				key: "k",
				metaKey: navigator.platform.includes("Mac"),
				ctrlKey: !navigator.platform.includes("Mac"),
				bubbles: true,
			});
			document.dispatchEvent(event);
		}
	};

	return (
		<div className={`${className}`} ref={searchButtonRef}>
			{/* Search Button */}
			<button
				type="button"
				className="px-4 py-2 whitespace-nowrap border-input text-sm font-medium hover:bg-accent hover:text-accent-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group flex-grow md:w-44 xl:w-56 h-[30px] rounded-md pl-1.5 md:pl-2 pr-1 flex items-center justify-between bg-surface-100/75 text-foreground-lighter border hover:bg-opacity-100 hover:border-strong focus-visible:!outline-4 focus-visible:outline-offset-1 focus-visible:outline-brand-600 transition"
				aria-haspopup="dialog"
				aria-expanded={false}
				onClick={handleSearchClick}
			>
				<div className="flex items-center space-x-2 text-foreground-muted">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-search"
					>
						<circle cx="11" cy="11" r="8"></circle>
						<path d="m21 21-4.3-4.3"></path>
					</svg>
					<p className="flex text-sm m-0 pr-2">
						Search<span className="hidden xl:inline ml-1">docs...</span>
					</p>
				</div>
				<div className="hidden md:flex items-center space-x-1">
					<div
						aria-hidden="true"
						className="md:flex items-center justify-center h-full px-1 border rounded bg-surface-300 gap-0.5"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="12"
							height="12"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="lucide lucide-command"
						>
							<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
						</svg>
						<span className="text-[12px]">K</span>
					</div>
				</div>
			</button>

			{/* DocSearch component - always rendered so it can handle keyboard events */}
			<div className="hidden">
				<CustomDocSearch />
			</div>
		</div>
	);
}
