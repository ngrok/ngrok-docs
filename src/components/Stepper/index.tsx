import { cx } from "@ngrok/mantle/cx";
import type { WithStyleProps } from "@ngrok/mantle/types";
import type { ReactNode } from "react";
import { Panel } from "./Panel";

export type SetupPanelProps = {
	title: string;
	description: string;
	children: ReactNode;
	hasStick?: boolean;
	step?: number;
};

export const SetupPanel = ({
	title,
	description,
	children,
	hasStick,
	className,
	style,
}: SetupPanelProps & WithStyleProps) => {
	return (
		<Panel
			className={cx(
				hasStick
					? "border-gray-200 dark-high-contrast:border-black high-contrast:border-black"
					: "border-transparent",
				"relative p-4 pt-0 md:border-l-4 md:pb-[4.5rem] md:pl-6",
			)}
		>
			<Panel.Header className="relative px-0 text-gray-600 md:mb-6 md:p-4 md:py-0">
				<h2 className="-ml-0.5 mb-1 p-0 text-4xl font-medium text-strong">
					{title}
				</h2>
				<p className="mb-4 text-base">{description}</p>
			</Panel.Header>
			<Panel.Body
				className={cx(className, "rounded-lg border border-card p-4 md:p-6")}
				style={style}
			>
				{children}
			</Panel.Body>
		</Panel>
	);
};
