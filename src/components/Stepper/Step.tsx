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
			<Panel.Body className={cx("rounded-lg border border-card p-4 md:p-6")}>
				{children}
			</Panel.Body>
		</Panel>
	);
};

export default Step;
