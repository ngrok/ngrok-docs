import { createContext } from "react";

export type TabListContextType = {
	localStorageTab: string | null;
	selectedTabItem: string | null;
	updateSelectedTabItem: null | ((newTabItem: string) => void);
};

const TabListContext = createContext<TabListContextType>({
	localStorageTab: null,
	selectedTabItem: null,
	updateSelectedTabItem: null,
});

export default TabListContext;
