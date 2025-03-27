import type { WrapperProps } from "@docusaurus/types";
import type { SupportedLanguage } from "@ngrok/mantle/code-block";
import LangSwitcherContext from "@site/src/components/LangSwitcher/LangSwitcherContext";
import {
	getDefaultLanguage,
	paramName,
} from "@site/src/components/LangSwitcher/utils";
import Content from "@theme-original/DocItem/Content";
import type ContentType from "@theme/DocItem/Content";
import React, { useState, type ReactNode } from "react";
import useLocalStorage from "use-local-storage";

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): ReactNode {
	const [storageLang, setStorageLang] = useLocalStorage(paramName, {
		value: "",
	});
	const defaultLanguage = getDefaultLanguage() || storageLang.value;
	const [tabLanguage, setTabLanguage] = useState(defaultLanguage);
	const updateTab = (newLang: string | SupportedLanguage) => {
		setStorageLang({ value: newLang });
		setTabLanguage(newLang);
	};
	return (
		<LangSwitcherContext.Provider
			value={{
				defaultLanguage,
				tabLanguage,
				updateTab,
			}}
		>
			<Content {...props} />
		</LangSwitcherContext.Provider>
	);
}
