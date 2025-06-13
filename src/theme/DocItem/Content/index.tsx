import type { WrapperProps } from "@docusaurus/types";
import useIsBrowser from "@docusaurus/useIsBrowser";
import type { SupportedLanguage } from "@ngrok/mantle/code-block";
import LangSwitcherContext from "@site/src/components/LangSwitcher/LangSwitcherContext";
import {
	getStorageLanguage,
	getStorageTab,
	langParamName,
	tabParamName,
} from "@site/src/components/LangSwitcher/utils";
import { ViewAsMarkDown } from "@site/src/components/ViewAsMarkdown";
import Content from "@theme-original/DocItem/Content";
import type ContentType from "@theme/DocItem/Content";
import { type ReactNode, useState } from "react";
import TabListContext from "../../Tabs/TabListContext";
import type { TabItem } from "../../Tabs/TabListContext";

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): ReactNode {
	const isBrowser = useIsBrowser();

	const storageLanguage = isBrowser ? getStorageLanguage() : null;
	const [selectedLanguage, setSelectedLanguage] = useState(
		storageLanguage ?? null,
	);
	const storageTab = isBrowser ? getStorageTab() : null;
	const [selectedTabItem, setSelectedTabItem] = useState<
		TabItem | null | undefined
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
	const updateSelectedTabItem = (newItem: TabItem | undefined) => {
		if (!newItem?.item) return;
		if (isBrowser) {
			localStorage.setItem(
				newItem.groupId || tabParamName,
				JSON.stringify(newItem),
			);
		}
		setSelectedTabItem(newItem);
	};

	return (
		<TabListContext.Provider
			value={{
				localStorageTab: storageTab,
				selectedTabItem,
				updateSelectedTabItem,
			}}
		>
			<LangSwitcherContext.Provider
				value={{
					defaultLanguage: storageLanguage ?? null,
					selectedLanguage,
					updateSelectedLanguage,
				}}
			>
				<ViewAsMarkDown />
				<Content {...props} />
			</LangSwitcherContext.Provider>
		</TabListContext.Provider>
	);
}
