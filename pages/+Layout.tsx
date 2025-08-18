import { DocsLogo } from "@components/DocsLogo";
import { ThemeSwitcher } from "@components/ThemeSwitcher";
import { ThemeProvider } from "@ngrok/mantle/theme-provider";
import type React from "react";
import { useEffect, useState } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { DocsFooter } from "./components/DocsFooter";
import MobileNavigation from "./components/MobileNavigation";
import Navigation from "./components/Navigation";
import "tailwind.css";
import LangSwitcherContext from "@components/LangSwitcher/LangSwitcherContext";
import {
	getStorageLanguage,
	getStorageTab,
	langParamName,
	tabParamName,
} from "@components/LangSwitcher/utils";
import TabListContext, { type TabsData } from "@components/Tabs/TabListContext";
import { MDXProvider } from "@mdx-js/react";
import type { SupportedLanguage } from "@ngrok/mantle/code-block";
import { isBrowser } from "is-in-browser";
import { navigate } from "vike/client/router";
import type { PageContext } from "vike/types";
import { HeaderSearch } from "./components/HeaderSearch";
import DocsPageLayout from "./layouts/docs-page-layout";
import HomepageLayout from "./layouts/homepage-layout";
import { globalComponents } from "./utils/componentsToImport";
import { checkForHashRedirects } from "./utils/redirects/redirectMethods";
import { MobileSidebarProvider } from "./contexts/MobileSidebarContext";
import { ActiveNavCategoryProvider } from "./contexts/ActiveNavCategory";
import { SidebarLoading } from "@components/SidebarLoading";

async function processClientSideRedirects(
	location: Location | PageContext["urlParsed"],
) {
	const { pathname, hash } = location;
	if (hash) {
		const { result, newPath } = checkForHashRedirects(pathname, hash);
		if (result) {
			console.log("Result found", newPath, result);
			navigate(newPath as string, {
				keepScrollPosition: false,
				overwriteLastHistoryEntry: true,
			});
		}
	}
}

export default function Layout({ children }: { children: React.ReactNode }) {
	const pageContext = usePageContext();

	const location = pageContext.urlParsed || window.location;

	// Extract route information to determine layout type
	const isDocsPage =
		location.pathname.startsWith("/docs") && location.pathname !== "/docs";
	const isHomepage =
		location.pathname === "/docs" || location.pathname === "/docs/";

	// Extract category from URL for sidebar (e.g., /docs/getting-started/... -> getting-started)
	const urlParts = location.pathname.split("/");
	const category = isDocsPage && urlParts.length > 2 ? urlParts[2] : "";

	// Mock headings for TOC - in a real app this would come from pageContext.data or be extracted from the page
	const headings = (pageContext.data as any)?.headings || [];
	const frontmatter = (pageContext.data as any)?.frontmatter || {};

	const storageLanguage = isBrowser ? getStorageLanguage() : null;
	const [selectedLanguage, setSelectedLanguage] = useState(
		storageLanguage ?? null,
	);
	const storageTab = isBrowser ? getStorageTab() : null;
	const [selectedTabItem, setSelectedTabItem] = useState<
		TabsData | null | undefined
	>(storageTab);
	const updateSelectedLanguage = (
		newLang: string | SupportedLanguage | undefined,
	) => {
		if (!newLang) return;
		if (isBrowser) {
			localStorage.setItem(langParamName, newLang);
		}
		setSelectedLanguage(newLang);
	};

	const updateSelectedTabItem = (newItem: TabsData | undefined) => {
		if (!newItem?.item) return;
		if (isBrowser) {
			localStorage.setItem(
				newItem.groupId || tabParamName,
				newItem.item as string,
			);
		}
		setSelectedTabItem(newItem);
	};

	useEffect(() => {
		processClientSideRedirects(location);
		setSelectedLanguage(storageLanguage);
	}, [location, storageLanguage]);

	return (
		<ThemeProvider>
			<ActiveNavCategoryProvider>
				<MobileSidebarProvider>
					<TabListContext.Provider
						value={{
							localStorageTab: storageTab ?? null,
							selectedTabItem,
							updateSelectedTabItem,
						}}
					>
						<LangSwitcherContext.Provider
							value={{
								selectedLanguage,
								defaultLanguage: storageLanguage ?? null,
								updateSelectedLanguage,
							}}
						>
							<MDXProvider components={globalComponents}>
								<SidebarLoading />
								<div className="flex flex-col">
									<div className="grow">
										<div className="flex flex-col max-w-full">
											{/* Global Header - shown on all pages */}
											<div className="sticky w-full top-0 left-0 right-0 z-50">
												<header className="w-full z-40 flex flex-col border-b backdrop-blur backdrop-filter bg bg-opacity-75">
													<div className="w-full px-5 lg:pl-10 flex justify-between h-[var(--header-height)] gap-3">
														{/* Left side - Logo and Navigation */}
														<div className="flex h-full items-center justify-center gap-3">
															<DocsLogo className="mr-2" />
															{/* Desktop Navigation */}
															<div className="hidden lg:flex relative gap-2 justify-start items-center w-full h-full">
																<nav className="relative z-10 flex-1 items-center w-full flex justify-start h-full">
																	<div
																		style={{ position: "relative" }}
																		className="h-full"
																	>
																		<div className="md:max-w-full ml-2 relative flex-grow basis-0 items-center space-x-3 hidden md:flex h-full">
																			<Navigation />
																		</div>
																	</div>
																</nav>
															</div>
														</div>

														{/* Right side - Search, Theme Switcher, Mobile Menu */}
														<div className="flex gap-3 items-center h-full">
															{/* Desktop Search and Theme Switcher */}
															<div className="hidden lg:flex gap-2 items-center">
																<HeaderSearch />
																<ThemeSwitcher />
															</div>

															{/* Mobile Search and Menu Button */}
															<div className="flex lg:hidden gap-2 items-center">
																<HeaderSearch />
																<MobileNavigation />
															</div>
														</div>
													</div>
												</header>
											</div>

											{/* Main content area with top padding for fixed header */}
											{isHomepage ? (
												// Homepage layout with cards and sections
												<HomepageLayout>{children}</HomepageLayout>
											) : isDocsPage ? (
												// Docs layout with sidebar and TOC
												<DocsPageLayout
													category={category}
													serverHeadings={headings}
													frontmatter={frontmatter}
												>
													{children}
												</DocsPageLayout>
											) : (
												// Regular layout for other pages
												<main className="min-h-screen bg-background px-4 lg:px-8 py-8">
													{children}
												</main>
											)}

											{/* Footer - use DocsFooter for all docs-related pages */}
											{(isHomepage || isDocsPage) && <DocsFooter />}
										</div>
									</div>
								</div>
							</MDXProvider>
						</LangSwitcherContext.Provider>
					</TabListContext.Provider>
				</MobileSidebarProvider>
			</ActiveNavCategoryProvider>
		</ThemeProvider>
	);
}
