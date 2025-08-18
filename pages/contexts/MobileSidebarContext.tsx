import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

interface MobileSidebarContextType {
	isMobileSidebarOpen: boolean;
	setIsMobileSidebarOpen: (open: boolean) => void;
}

const MobileSidebarContext = createContext<MobileSidebarContextType | undefined>(
	undefined,
);

export function useMobileSidebar() {
	const context = useContext(MobileSidebarContext);
	if (context === undefined) {
		throw new Error(
			"useMobileSidebar must be used within a MobileSidebarProvider",
		);
	}
	return context;
}

interface MobileSidebarProviderProps {
	children: React.ReactNode;
}

export function MobileSidebarProvider({ children }: MobileSidebarProviderProps) {
	const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

	// Handle escape key and body scroll lock for mobile sidebar
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsMobileSidebarOpen(false);
			}
		};

		if (isMobileSidebarOpen) {
			document.addEventListener("keydown", handleEscape);
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "";
		};
	}, [isMobileSidebarOpen]);

	const value = {
		isMobileSidebarOpen,
		setIsMobileSidebarOpen,
	};

	return (
		<MobileSidebarContext.Provider value={value}>
			{children}
		</MobileSidebarContext.Provider>
	);
}
