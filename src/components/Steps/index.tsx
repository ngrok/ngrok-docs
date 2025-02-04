import type { WithStyleProps } from "@ngrok/mantle/types";
import { Children, type ReactNode } from "react";
import Step from "./Step";

const getStepData = (arrayChildren: Array<any>): Array<StepData> => {
	const stepData: Array<StepData> = [];
	let stepNum = -1;
	arrayChildren.forEach((child: any) => {
		if (child?.type?.name === "h2") {
			stepNum++;
			return stepData.push({
				title: child,
				body: [],
			});
		}
		if (stepNum < 0)
			throw new Error(
				"When using StepList, each step must be an h2. Did you forget to put an h2 above your first step?",
			);
		return stepData[stepNum]?.body.push(child);
	});
	return stepData;
};

type StepListProps = {
	children: ReactNode;
};

type StepData = {
	title: ReactNode;
	body: Array<any>;
};

const StepList = ({ children }: StepListProps & WithStyleProps) => {
	const arrayChildren = Children.toArray(children);
	const stepData = getStepData(arrayChildren);

	return (
		<div className="mt-8 sm:ml-5">
			{stepData.map((step, index) => {
				const isLast = index === stepData.length - 1;
				return (
					<div key={index} className="relative">
						<Step
							num={index + 1}
							isLast={isLast}
							body={step.body}
							title={step.title}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default StepList;
