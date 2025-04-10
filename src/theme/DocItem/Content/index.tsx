import type { WrapperProps } from "@docusaurus/types";
import useIsBrowser from "@docusaurus/useIsBrowser";
import type { SupportedLanguage } from "@ngrok/mantle/code-block";
import LangSwitcherContext from "@site/src/components/LangSwitcher/LangSwitcherContext";
import {
	getStorageLanguageAndTab,
	langParamName,
	tabParamName,
} from "@site/src/components/LangSwitcher/utils";
import Content from "@theme-original/DocItem/Content";
import type ContentType from "@theme/DocItem/Content";
import { type ReactNode, useState } from "react";
import TabListContext from "../../Tabs/TabListContext";

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): ReactNode {
	const isBrowser = useIsBrowser();

	const storageData = isBrowser ? getStorageLanguageAndTab() : null;
	const [selectedLanguage, setSelectedLanguage] = useState(
		storageData?.defaultLanguage ?? null,
	);
	const [selectedTabItem, setSelectedTabItem] = useState(
		storageData?.defaultLanguage ?? null,
	);
	const updateSelectedLanguage = (newLang: string | SupportedLanguage) => {
		if (isBrowser) {
			localStorage.setItem(langParamName, newLang);
		}
		setSelectedLanguage(newLang);
	};
	const updateSelectedTabItem = (newItem: string | undefined) => {
		if (!newItem) return;
		if (isBrowser) {
			localStorage.setItem(tabParamName, newItem);
		}
		setSelectedTabItem(newItem);
	};

	return (
		<TabListContext.Provider
			value={{
				localStorageTab: storageData?.defaultTabItem ?? null,
				selectedTabItem,
				updateSelectedTabItem,
			}}
		>
			<LangSwitcherContext.Provider
				value={{
					defaultLanguage: storageData?.defaultTabItem ?? null,
					selectedLanguage,
					updateSelectedLanguage,
				}}
			>
				<Content {...props} />
			</LangSwitcherContext.Provider>
		</TabListContext.Provider>
	);
}
