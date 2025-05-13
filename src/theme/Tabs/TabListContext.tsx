import { createContext } from "react";

export type TabItem = { item?: string; groupId?: string };

export type TabListContextType = {
	localStorageTab: TabItem | null;
	selectedTabItem: TabItem | null;
	updateSelectedTabItem: null | ((newTabItem: TabItem | undefined) => void);
};

const TabListContext = createContext<TabListContextType>({
	localStorageTab: null,
	selectedTabItem: null,
	updateSelectedTabItem: null,
});

export default TabListContext;
