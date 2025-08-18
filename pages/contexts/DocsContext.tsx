import { createContext, type ReactNode, useContext } from "react";

interface DocsContextType {
	hasMobileMenu: boolean;
	selectedCategory: string | null;
	isMobile: boolean;
}

const DocsContext = createContext<DocsContextType | undefined>(undefined);

export function DocsProvider({
	children,
	value,
}: {
	children: ReactNode;
	value: DocsContextType;
}) {
	return <DocsContext.Provider value={value}>{children}</DocsContext.Provider>;
}

export function useDocsContext() {
	const context = useContext(DocsContext);
	if (context === undefined) {
		throw new Error("useDocsContext must be used within a DocsProvider");
	}
	return context;
}
