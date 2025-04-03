import {
	sanitizeTabsChildren,
	useScrollPositionBlocker,
	useTabs,
	type TabItemProps,
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
import React, {
	cloneElement,
	useContext,
	type ReactElement,
	type ReactNode,
} from "react";
import styles from "./styles.module.css";
import TabListContext from "./TabListContext";

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
	const { defaultTabItem, selectedTabItem, setSelectedTabItem } =
		useContext(TabListContext) ?? {};

	const handleTabChange = (
		event:
			| React.FocusEvent<HTMLButtonElement>
			| React.MouseEvent<HTMLButtonElement>
			| React.KeyboardEvent<HTMLButtonElement>,
	) => {
		const newTab = event.currentTarget;
		const newTabIndex = tabRefs.indexOf(newTab);
		const newTabValue =
			tabValues[newTabIndex]!.label || tabValues[newTabIndex]!.value;

		if (newTabValue !== selectedTabItem && setSelectedTabItem) {
			blockElementScrollPositionUntilNextRender(newTab);
			setSelectedTabItem(newTabValue);
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
				focusElement = tabRefs[nextTab] ?? tabRefs[0]!;
				break;
			}
			case "ArrowLeft": {
				const prevTab = tabRefs.indexOf(event.currentTarget) - 1;
				focusElement = tabRefs[prevTab] ?? tabRefs[tabRefs.length - 1]!;
				break;
			}
			default:
				break;
		}
		switch (event.key) {
			case "Enter": {
				handleTabChange(event);
				break;
			}
			case "ArrowRight": {
				const nextTab = tabRefs.indexOf(event.currentTarget) + 1;
				focusElement = tabRefs[nextTab] ?? tabRefs[0]!;
				break;
			}
			case "ArrowLeft": {
				const prevTab = tabRefs.indexOf(event.currentTarget) - 1;
				focusElement = tabRefs[prevTab] ?? tabRefs[tabRefs.length - 1]!;
				break;
			}
			default:
				break;
		}

		focusElement?.focus();
	};
		focusElement?.focus();
	};

	const defaultTab = tabValues.find((tab) => tab.default);
	console.log("Selected", selectedTabItem);
	return (
		<MantleTabs
			orientation="horizontal"
			defaultValue={defaultTab?.label || selectedTabItem || ""}
			value={selectedTabItem || defaultTab?.label || ""}
		>
			<TabsList>
				{tabValues.map(({ value, label, attributes }) => (
					<TabsTrigger
						value={label ?? value}
						role="tab"
						aria-selected={selectedTabItem === label}
						key={value}
						ref={(tabControl) => {
							tabRefs.push(tabControl);
						}}
						onKeyDown={handleKeydown}
						onClick={handleTabChange}
						{...attributes}
					>
						{label ?? value}
					</TabsTrigger>
				))}
			</TabsList>
			<TabContent
				tabValues={tabValues}
				selectValue={selectValue}
				selectedValue={selectedValue}
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
				key={tabItem.props.value + i}
			>
				{tabItem.props.children}
			</TabsContent>
		);
	});
}

function TabsComponent(props: Props): ReactNode {
	const tabs = useTabs(props);
	return (
		<div className={clsx("tabs-container", styles.tabList)}>
			<TabList {...tabs} {...props} />
		</div>
	);
}

export default function Tabs(props: Props): ReactNode {
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
