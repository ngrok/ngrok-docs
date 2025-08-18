import { createContext } from "react";

export type TabsData = { item?: string; groupId?: string };

export type TabListContextType = {
	localStorageTab: TabsData | null | undefined;
	selectedTabItem: TabsData | null | undefined;
	updateSelectedTabItem: null | ((newTabItem: TabsData | undefined) => void);
};

const TabListContext = createContext<TabListContextType>({
	localStorageTab: null,
	selectedTabItem: null,
	updateSelectedTabItem: null,
});

export default TabListContext;
