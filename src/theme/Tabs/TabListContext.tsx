import { createContext } from "react";

export type TabListContextType = {
	localStorageTab: string | null;
	selectedTabItem: string | null;
	updateSelectedTabItem: null | ((newTabItem: string) => void);
};

const TabListContext = createContext<TabListContextType | null>(null);

export default TabListContext;
