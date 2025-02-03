import { cx } from "@ngrok/mantle/cx";
import type { ReactNode } from "react";
import { Panel } from "./Panel";

export type StepProps = {
	children: ReactNode;
	isLast: boolean;
};

const Step = ({ children, isLast = false }: StepProps) => {
	return (
		<Panel
			className={cx(
				!isLast
					? "border-gray-200 dark-high-contrast:border-black high-contrast:border-black"
					: "border-transparent",
				"relative p-4 pt-0 md:border-l-4 md:pb-[4.5rem] md:pl-6",
			)}
		>
			{/* <div style={{ margin: "40px" }}>{children}</div>; */}
			{/* <Panel.Header className="relative px-0 text-gray-600 md:mb-6 md:p-4 md:py-0">
				<h2 className="text-strong -ml-0.5 mb-1 p-0 text-4xl font-medium">{title}</h2>
				<p className="mb-4 text-base">Hi</p>
			</Panel.Header> */}
			<Panel.Body className={cx("rounded-lg border border-card p-4 md:p-6")}>
				{children}
			</Panel.Body>
		</Panel>
	);
};

export default Step;
