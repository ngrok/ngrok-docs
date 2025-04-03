import type { WrapperProps } from "@docusaurus/types";
import useIsBrowser from "@docusaurus/useIsBrowser";
import type { SupportedLanguage } from "@ngrok/mantle/code-block";
import LangSwitcherContext from "@site/src/components/LangSwitcher/LangSwitcherContext";
import {
	getDefaultLanguageAndTab,
	langParamName,
	tabParamName,
} from "@site/src/components/LangSwitcher/utils";
import Content from "@theme-original/DocItem/Content";
import type ContentType from "@theme/DocItem/Content";
import React, { useState, type ReactNode } from "react";
import TabListContext from "../../Tabs/TabListContext";

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): ReactNode {
	const isBrowser = useIsBrowser();

	const defaultData = isBrowser ? getDefaultLanguageAndTab() : null;
	const [selectedLanguage, setSelectedLanguage] = useState(
		defaultData?.defaultLanguage ?? null,
	);
	const [selectedTabItem, setSelectedTabItem] = useState(
		defaultData?.defaultLanguage ?? null,
	);
	const updateSelectedLanguage = (newLang: string | SupportedLanguage) => {
		if (isBrowser) {
			localStorage.setItem(langParamName, newLang);
		}
		setSelectedLanguage(newLang);
	};

	return (
		<TabListContext.Provider
			value={{
				defaultTabItem: defaultData?.defaultTabItem ?? null,
				selectedTabItem,
				setSelectedTabItem,
			}}
		>
			<LangSwitcherContext.Provider
				value={{
					defaultLanguage: defaultData?.defaultTabItem ?? null,
					selectedLanguage,
					updateSelectedLanguage,
				}}
			>
				<Content {...props} />
			</LangSwitcherContext.Provider>
		</TabListContext.Provider>
	);
}
