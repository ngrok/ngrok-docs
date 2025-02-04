import { cx } from "@ngrok/mantle/cx";
import type { ReactNode } from "react";
import type React from "react";
import { Panel } from "./Panel";

const StickNum = ({ num, isLast }: { num: number; isLast: boolean }) => {
	return (
		<div className="absolute left-0 top-0 z-10 hidden h-[3.125rem] w-10 -translate-x-[1.125rem] -translate-y-1.5 items-center justify-center font-sans text-lg font-bold text-gray-900 dark-high-contrast:text-white high-contrast:text-white md:flex">
			{(function () {
				if (num === 1) {
					return (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="40"
							height="50"
							fill="currentColor"
							viewBox="0 0 40 50"
							className="absolute z-0 text-gray-200 dark-high-contrast:text-black high-contrast:text-black"
						>
							<path d="M26.418 43.948C23.983 44.772 22 46.86 22 49.43V50h-4v-.57c0-2.57-1.983-4.658-4.418-5.482C5.685 41.274 0 33.801 0 25 0 13.954 8.954 5 20 5s20 8.954 20 20c0 8.801-5.685 16.274-13.582 18.948Z" />
						</svg>
					);
				} else {
					if (isLast) {
						return (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="50"
								fill="currentColor"
								viewBox="0 0 40 50"
								className="absolute z-0 text-gray-200 dark-high-contrast:text-black high-contrast:text-black"
							>
								<path d="M18 0v.57c0 2.57-1.983 4.658-4.418 5.482C5.685 8.726 0 16.199 0 25c0 11.046 8.954 20 20 20s20-8.954 20-20c0-8.801-5.685-16.274-13.582-18.948C23.983 5.228 22 3.14 22 .57V0h-4Z" />
							</svg>
						);
					} else {
						return (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="50"
								fill="currentColor"
								viewBox="0 0 40 50"
								className="absolute z-0 text-gray-200 dark-high-contrast:text-black high-contrast:text-black"
							>
								<path d="M18 .57V0h4v.57c0 2.57 1.983 4.658 4.418 5.482C34.315 8.726 40 16.199 40 25s-5.685 16.274-13.582 18.948C23.983 44.772 22 46.86 22 49.43V50h-4v-.57c0-2.57-1.983-4.658-4.418-5.482C5.685 41.274 0 33.801 0 25S5.685 8.726 13.582 6.052C16.017 5.228 18 3.14 18 .57Z" />
							</svg>
						);
					}
				}
			})()}

			<div className="absolute">{num}</div>
		</div>
	);
};

export type StepProps = {
	num: number;
	body: ReactNode[];
	title: ReactNode;
	isLast: boolean;
};

const Step = ({ body, isLast = false, num, title }: StepProps) => {
	console.log("Title", num, title);
	return (
		<>
			<StickNum num={num} isLast={isLast} />
			<Panel
				className={cx(
					!isLast
						? "border-gray-200 dark-high-contrast:border-black high-contrast:border-black"
						: "border-transparent",
					"relative p-4 pt-0 md:border-l-4 md:pb-[4.5rem] md:pl-6",
				)}
			>
				<Panel.Header className="relative px-0 text-gray-600 md:mb-6 md:p-4 md:py-0">
					<div className="-ml-0.5 mb-1 p-0 text-4xl font-medium text-strong">
						{title}
					</div>
				</Panel.Header>
				<Panel.Body className={cx("rounded-lg border border-card p-4 md:p-6")}>
					{body}
				</Panel.Body>
			</Panel>
		</>
	);
};

export default Step;
