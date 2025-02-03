import type { ReactNode } from "react";

export type StepProps = {
	children: ReactNode;
};

const Step = ({ children }: StepProps) => {
	return <div style={{ margin: "40px" }}>{children}</div>;
};

export default Step;
