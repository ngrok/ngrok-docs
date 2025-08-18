import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { logError } from "~/utils/errorLogging";
import {
	getActiveNavCategory,
	ProcessedSidebarData,
} from "~/utils/sidebarGeneration";

const ActiveNavCategoryContext = createContext<
	ProcessedSidebarData | undefined
>(undefined);

export function useActiveNavCategory() {
	const context = useContext(ActiveNavCategoryContext);
	if (context === undefined) {
		throw new Error(
			"useActiveNavCategory must be used within a ActiveNavCategoryProvider",
		);
	}
	return context;
}

interface ActiveNavCategoryProviderProps {
	children: React.ReactNode;
}

export function ActiveNavCategoryProvider({
	children,
}: ActiveNavCategoryProviderProps) {
	const pageContext = usePageContext();
	const { urlPathname } = pageContext;

	const sidebarData = (pageContext.data as any)
		?.sidebarData as ProcessedSidebarData[];
	if (!sidebarData || sidebarData.length < 0) {
		return null;
	}
	let navCategory = getActiveNavCategory(urlPathname, sidebarData);
	if (!navCategory || !navCategory.items || navCategory.items.length === 0) {
		navCategory = sidebarData[0];
	}

	const matchingSidebar = navCategory.items
		? getActiveNavCategory(urlPathname, navCategory.items)
		: null;

	if (!matchingSidebar && urlPathname !== "/docs") {
		logError({
			message: `No matching sidebar list found for path: ${urlPathname}. Rendering fallback sidebar instead.`,
			title: "Client-side sidebar",
		});
	}

	const listToShow =
		matchingSidebar || navCategory.items?.[0] || navCategory || null;
	return (
		<ActiveNavCategoryContext.Provider value={listToShow}>
			{children}
		</ActiveNavCategoryContext.Provider>
	);
}
