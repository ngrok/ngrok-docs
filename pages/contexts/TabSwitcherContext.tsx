import { createContext } from "react";

export type TabSwitcherContextType = {
	selectedTabItem: string | null;
	localStorageTab: string | null;
	updateSelectedTabItem: ((tabItem: string | null) => void) | null;
};

const TabSwitcherContext = createContext<TabSwitcherContextType>({
	selectedTabItem: null,
	localStorageTab: null,
	updateSelectedTabItem: null,
});

export default TabSwitcherContext;
