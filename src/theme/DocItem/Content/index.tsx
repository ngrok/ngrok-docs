import type { WrapperProps } from "@docusaurus/types";
import useIsBrowser from "@docusaurus/useIsBrowser";
import type { SupportedLanguage } from "@ngrok/mantle/code-block";
import LangSwitcherContext from "@site/src/components/LangSwitcher/LangSwitcherContext";
import {
	getDefaultLanguage,
	paramName,
} from "@site/src/components/LangSwitcher/utils";
import Content from "@theme-original/DocItem/Content";
import type ContentType from "@theme/DocItem/Content";
import React, { useState, type ReactNode } from "react";

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): ReactNode {
	const isBrowser = useIsBrowser();

	const defaultLanguage = isBrowser ? getDefaultLanguage() : null;
	const [tabLanguage, setTabLanguage] = useState(defaultLanguage);
	const updateTab = (newLang: string | SupportedLanguage) => {
		if (isBrowser) {
			localStorage.setItem(paramName, newLang);
		}
		setTabLanguage(newLang);
	};

	return (
		<LangSwitcherContext.Provider
			value={{ defaultLanguage, tabLanguage, updateTab }}
		>
			<Content {...props} />
		</LangSwitcherContext.Provider>
	);
}
