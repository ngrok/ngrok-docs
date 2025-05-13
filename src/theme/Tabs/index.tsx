import {
	type TabItemProps,
	type TabValue,
	sanitizeTabsChildren,
	useScrollPositionBlocker,
	useTabs,
} from "@docusaurus/theme-common/internal";
import useIsBrowser from "@docusaurus/useIsBrowser";
import {
	Tabs as MantleTabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@ngrok/mantle/tabs";
import type { Props } from "@theme/Tabs";
import clsx from "clsx";
import { type ReactElement, type ReactNode, useContext } from "react";
import TabListContext from "./TabListContext";
import styles from "./styles.module.css";

function getValidTabToShow(
	tabValues: readonly TabValue[],
	selectedValue: string | undefined,
	defaultTab: string | undefined,
) {
	if (selectedValue) {
		const selectedTab = tabValues.find((tab) => tab.label === selectedValue);
		if (selectedTab) {
			return selectedTab.label;
		}
	}
	return defaultTab;
}

function getValidDefaultTab(
	tabValues: readonly TabValue[],
	localStorageTab: string | null | undefined,
) {
	const defaultTab = tabValues.find(
		(tab) => tab.label === localStorageTab || tab.value === localStorageTab,
	);
	if (defaultTab) {
		return defaultTab.label;
	}
	return tabValues[0]?.label;
}

function TabList({
	className,
	block,
	selectedValue,
	selectValue,
	tabValues,
	...props
}: Props & ReturnType<typeof useTabs>) {
	const tabRefs: (HTMLButtonElement | null)[] = [];
	const { blockElementScrollPositionUntilNextRender } =
		useScrollPositionBlocker();
	const { localStorageTab, selectedTabItem, updateSelectedTabItem } =
		useContext(TabListContext);

	const handleTabChange = (
		event:
			| React.FocusEvent<HTMLButtonElement>
			| React.MouseEvent<HTMLButtonElement>
			| React.KeyboardEvent<HTMLButtonElement>,
	) => {
		// Check the queryString value
		// If it doesn't match the tabs component being modified, return early
		const newTab = event.currentTarget;
		const newTabIndex = tabRefs.indexOf(newTab);
		const newTabValue =
			tabValues[newTabIndex]?.label || tabValues[newTabIndex]?.value;

		if (newTabValue !== selectedTabItem?.item && updateSelectedTabItem) {
			blockElementScrollPositionUntilNextRender(newTab);
			updateSelectedTabItem({
				item: newTabValue,
				groupId: props.groupId,
			});
		}
	};

	const handleKeydown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		let focusElement: HTMLButtonElement | null = null;

		switch (event.key) {
			case "Enter": {
				handleTabChange(event);
				break;
			}
			case "ArrowRight": {
				const nextTab = tabRefs.indexOf(event.currentTarget) + 1;
				focusElement = tabRefs[nextTab] ?? tabRefs[0] ?? null;
				break;
			}
			case "ArrowLeft": {
				const prevTab = tabRefs.indexOf(event.currentTarget) - 1;
				focusElement = tabRefs[prevTab] ?? tabRefs[tabRefs.length - 1] ?? null;
				break;
			}
			default:
				break;
		}

		focusElement?.focus();
	};

	const defaultTab = getValidDefaultTab(tabValues, localStorageTab?.item);
	const tabToShow = getValidTabToShow(tabValues, selectedValue, defaultTab);
	return (
		<MantleTabs
			orientation="horizontal"
			defaultValue={defaultTab}
			value={tabToShow}
		>
			<TabsList className="overflow-y-hidden pr-4">
				{tabValues.map(({ value, label, attributes }) => (
					<TabsTrigger
						value={label || value}
						role="tab"
						aria-selected={selectedTabItem?.item === label}
						key={value}
						ref={(tabControl) => {
							tabRefs.push(tabControl);
						}}
						onKeyDown={handleKeydown}
						onClick={handleTabChange}
						{...attributes}
					>
						{label || value}
					</TabsTrigger>
				))}
			</TabsList>
			<TabContent
				tabValues={tabValues}
				selectValue={selectValue}
				selectedValue={selectedValue}
				// biome-ignore lint/correctness/noChildrenProp:
				children={props.children}
			/>
		</MantleTabs>
	);
}

function TabContent({ children }: Props & ReturnType<typeof useTabs>) {
	const childTabs = (Array.isArray(children) ? children : [children]).filter(
		Boolean,
	) as ReactElement<TabItemProps>[];
	return childTabs.map((tabItem, i) => {
		return (
			<TabsContent
				value={tabItem.props.label || tabItem.props.value}
				key={`${tabItem.props.value}${i}`}
			>
				{tabItem.props.children}
			</TabsContent>
		);
	});
}

type TabsComponentProps = Props & { unAlphabetized: boolean };

function TabsComponent(props: TabsComponentProps): ReactNode {
	const tabs = useTabs(props);
	const alphabetizedTabs = {
		...tabs,
		tabValues: tabs.tabValues
			.slice(0)
			.sort((a, b) =>
				a.label && b.label ? a.label.localeCompare(b.label) : -1,
			),
	};

	return (
		<div className={clsx("tabs-container", styles.tabList)}>
			<TabList {...tabs} {...props} />
		</div>
	);
}

export default function Tabs(props: TabsComponentProps): ReactNode {
	const isBrowser = useIsBrowser();
	return (
		<TabsComponent
			// Remount tabs after hydration
			// Temporary fix for https://github.com/facebook/docusaurus/issues/5653
			key={String(isBrowser)}
			{...props}
		>
			{sanitizeTabsChildren(props.children)}
		</TabsComponent>
	);
}
