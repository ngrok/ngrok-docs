export type TabItemData = {
	value: string;
	label?: string;
	default?: boolean;
	children?: React.ReactNode[] | React.ReactNode;
	[key: string]: any; // Allow other props to be passed
};

export default function TabItem(props: TabItemData) {
	console.log("TabItem props", props);
	return <div {...props}>{props.children}</div>;
}
