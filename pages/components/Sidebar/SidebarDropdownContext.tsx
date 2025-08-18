import { createContext, type ReactNode, useContext, useState } from "react";

interface SidebarDropdownContextType {
	openDropdowns: string[];
	setOpenDropdowns: (dropdowns: string[]) => void;
}

const SidebarDropdownContext = createContext<
	SidebarDropdownContextType | undefined
>(undefined);

export function SidebarDropdownProvider({
	children,
	value,
}: {
	children: ReactNode;
	value?: SidebarDropdownContextType;
}) {
	const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

	return (
		<SidebarDropdownContext.Provider
			value={
				value || {
					openDropdowns,
					setOpenDropdowns,
				}
			}
		>
			{children}
		</SidebarDropdownContext.Provider>
	);
}

export function useSidebarDropdownContext() {
	const context = useContext(SidebarDropdownContext);
	if (context === undefined) {
		throw new Error(
			"useSidebarDropdownContext must be used within a DocsProvider",
		);
	}
	return context;
}
