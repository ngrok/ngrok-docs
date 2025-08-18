/**
 * This component is structured a little weirdly for the time being so it can
 * reproduce the behavior of the docusaurus tabs component.
 * This prevents us having to go through the entirety of the docs
 * and replace every existing tabs component.
 * In future, we can refactor this if need be.
 * We can also add more docusaurus functionality, like
 * `querystring` and `groupId` support.
 */
// Note: We also look into how accessible this component is. Probably need to make it work with keyboards.

import { CodeBlockFallback } from "@components/code-block";
import { getStorageTab } from "@components/LangSwitcher/utils";
import {
	Tabs as MantleTabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@ngrok/mantle/tabs";
import type React from "react";
import { useContext, useEffect, useState } from "react";
import type { TabItemData } from "./TabItem";
import TabListContext, { type TabsData } from "./TabListContext";
import { logWarning } from "~/utils/errorLogging";

type TabsProps = {
	groupId?: string;
	queryString?: string;
	children: React.ReactNode[];
};

export default function Tabs(props: TabsProps) {
	const [isHydrated, setIsHydrated] = useState(false);
	const tabRefs: (HTMLButtonElement | null)[] = [];
	const { localStorageTab, selectedTabItem, updateSelectedTabItem } =
		useContext(TabListContext);

	// Only hydrate on the client to prevent mismatch
	useEffect(() => {
		setIsHydrated(true);
	}, []);

	// Always show fallback until hydrated to prevent mismatch
	if (!isHydrated || !updateSelectedTabItem) {
		return (
			<CodeBlockFallback className="mb-4">Loading tabs...</CodeBlockFallback>
		);
	}

	const hasMultipleChildren = Array.isArray(props.children);
	if (!hasMultipleChildren) {
		logWarning({
			message: `Your Tabs component has only one child, which is not valid. Data: ${props}`,
			title: "Invalid Tabs Component",
		});
	}

	// Ensure children is always an array
	const children = hasMultipleChildren ? props.children : [props.children];
	// Alphabetize the tabs
	const tabs: any[] = children
		.slice(0)
		.sort((a: any, b: any) =>
			a.props.label && b.props.label
				? a.props.label.localeCompare(b.props.label)
				: a.props.value && b.props.value
					? a.props.value.localeCompare(b.props.value)
					: -1,
		);

	const handleTabChange = (
		event:
			| React.FocusEvent<HTMLButtonElement>
			| React.MouseEvent<HTMLButtonElement>
			| React.KeyboardEvent<HTMLButtonElement>,
	) => {
		const newTab = event.currentTarget;
		const newTabIndex = tabRefs.indexOf(newTab);
		const newTabValue = tabs[newTabIndex]?.props;

		const finalNewTabValue = newTabValue?.label || newTabValue?.value;

		if (finalNewTabValue !== selectedTabItem?.item && updateSelectedTabItem) {
			updateSelectedTabItem({
				item: finalNewTabValue,
				groupId: props.groupId,
			});
		}
	};

	const defaultTab = getValidDefaultTab(tabs, localStorageTab, props.groupId);
	const tabToShow = getValidTabToShow(tabs, selectedTabItem, defaultTab);

	const defaultValue = defaultTab.label || defaultTab.value;
	const valueToShow = tabToShow.label || tabToShow.value;

	if (!selectedTabItem) {
		updateSelectedTabItem({
			item: defaultValue,
			groupId: props.groupId,
		});
	}

	return (
		<MantleTabs
			orientation="horizontal"
			defaultValue={defaultValue}
			value={valueToShow}
		>
			<TabsList>
				{tabs?.map((tabItem: any, _i: number) => {
					const { label, value } = tabItem.props;

					const finalValue = label || value;
					if (!finalValue) {
						throw new Error("TabItem must have a label or value");
					}

					return (
						<TabsTrigger
							value={finalValue}
							role="tab"
							aria-selected={selectedTabItem === finalValue}
							key={`${finalValue}`}
							onClick={handleTabChange}
							ref={(tabControl) => {
								tabRefs.push(tabControl);
							}}
						>
							{finalValue}
						</TabsTrigger>
					);
				})}
			</TabsList>
			{tabs?.map((tabItem: any, i: number) => {
				const { label, value, children } = tabItem.props;
				const finalValue = label || value;
				return (
					<TabsContent value={finalValue} key={`${i}${finalValue}`}>
						{children}
					</TabsContent>
				);
			})}
		</MantleTabs>
	);
}

interface TabValue {
	props: TabItemData;
}

function getValidDefaultTab(
	tabValues: TabValue[],
	localStorageTab: TabsData | null | undefined,
	groupId: string | undefined,
) {
	// Check if the localStorageTab is set and matches the groupId
	if (localStorageTab) {
		let itemValue = localStorageTab.item;
		if (groupId) {
			const storageTab = getStorageTab(groupId);
			if (!storageTab) {
				console.error(
					`Default tab neither matches groupId nor localStorageTab\n${localStorageTab}\n${groupId}`,
				);
			}
			itemValue = storageTab?.item || itemValue;
		}
		const defaultTab = tabValues.find(
			(tab) => tab.props?.label === itemValue || tab.props?.value === itemValue,
		);
		if (defaultTab) {
			return defaultTab.props;
		}
	}
	const manualDefaultTab = tabValues.find((tab) => tab.props.default);
	return manualDefaultTab?.props || tabValues[0]?.props;
}

function getValidTabToShow(
	tabValues: TabValue[],
	selectedTabItem: TabsData | null | undefined,
	defaultTab: TabItemData,
) {
	if (selectedTabItem) {
		const selectedTab = tabValues.find(
			(tab) =>
				tab.props.label === selectedTabItem.item ||
				tab.props.value === selectedTabItem.item,
		);
		if (selectedTab) {
			return selectedTab.props;
		}
	}
	return defaultTab;
}
