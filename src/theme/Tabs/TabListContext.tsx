import { createContext } from "react";

export type TabItem = { item?: string; groupId?: string };

export type TabListContextType = {
	localStorageTab: TabItem | null | undefined;
	selectedTabItem: TabItem | null | undefined;
	updateSelectedTabItem: null | ((newTabItem: TabItem | undefined) => void);
};

const TabListContext = createContext<TabListContextType>({
	localStorageTab: null,
	selectedTabItem: null,
	updateSelectedTabItem: null,
});

export default TabListContext;
