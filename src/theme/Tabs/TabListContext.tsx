import { createContext } from "react";

export type TabListContextType = {
	defaultTabItem: string | null;
	selectedTabItem: string | null;
	setSelectedTabItem: null | ((newTabItem: string) => void);
};

const TabListContext = createContext<TabListContextType | null>(null);

export default TabListContext;
