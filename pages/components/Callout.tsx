import { Alert, AlertContent, AlertDescription } from "@ngrok/mantle/alert";
import { Icon } from "@ngrok/mantle/icon";
import {
	ArrowRightIcon,
	CheckCircleIcon,
	LightbulbFilamentIcon,
	WarningIcon,
} from "@phosphor-icons/react";
import { InfoIcon } from "@phosphor-icons/react/dist/ssr";
import React from "react";

type CalloutProps = {
	children: React.ReactNode | React.ReactNode[];
	type:
		| "info"
		| "warning"
		| "caution"
		| "danger"
		| "note"
		| "success"
		| "tip"
		| "default";
	label?: string;
	className?: string;
};

export default function Callout({
	label,
	type,
	children,
	className = "",
}: CalloutProps): React.ReactElement {
	if (!children) throw new Error("<Callout/> requires children");
	if (!type || type === "default")
		throw new Error("<Callout/> requires a type. 'default' is not valid.");
	let priority = type;
	switch (priority) {
		case "tip":
			priority = "success";
			break;
		case "note":
			priority = "info";
			break;
		case "danger":
		case "caution":
			priority = "warning";
			break;
	}

	const childrenCount = React.Children.count(children);
	const onlyOneChild = childrenCount === 1;
	children = React.Children.map(children, (child: any, index: number) => {
		if (onlyOneChild || index + 1 === childrenCount) {
			return React.cloneElement(child, { className: "m-0 p-0" });
		}

		return child;
	});

	// no need for a base label if the type is default
	// const baseLabel = type.toUpperCase();
	return (
		<Alert
			className={`max-w-[100%] mt-6 mb-4 ${className}`}
			priority={priority}
		>
			<Icon svg={getIcon(type)} />
			<AlertContent>
				<AlertDescription className="m-0 p-0">{children}</AlertDescription>
			</AlertContent>
		</Alert>
	);
}

const getIcon = (type: string) => {
	switch (type) {
		case "note":
		case "info":
			return <Icon svg={<InfoIcon />} />;
		case "tip":
			return <Icon svg={<LightbulbFilamentIcon />} />;
		case "warning":
		case "danger":
			return <Icon svg={<WarningIcon />} />;
		case "success":
			return <Icon svg={<CheckCircleIcon />} />;
		default:
			return <Icon svg={<ArrowRightIcon />} />;
	}
};
