import { Badge } from "@ngrok/mantle/badge";
import { Button } from "@ngrok/mantle/button";
import { type PropsWithChildren, useState } from "react";

type ConfigItemProps = PropsWithChildren & {
	title: string;
	type: string;
	cel: boolean;
	required: boolean;
};

type ConfigChildrenProps = PropsWithChildren & {
	open: boolean;
};

type ConfigEnumProps = PropsWithChildren & {
	label?: string;
};

export const Config = ({ children }: PropsWithChildren) => {
	return (
		<ul className="m-0 flex flex-shrink-0 list-none flex-col divide-y divide-gray-200 self-start border-b border-t border-gray-200 p-0 dark:divide-gray-800 dark:border-gray-800 [&_li+li]:mt-0 [&_p]:w-2/3">
			{children}
		</ul>
	);
};

export const ConfigItem = ({
	title,
	type,
	cel = false,
	required = false,
	children,
}: ConfigItemProps) => {
	return (
		<li className="space-y-2 p-4 px-2 pb-3">
			<h4 className="m-0 flex gap-2 self-baseline p-0 text-sm font-normal leading-none">
				<span className="font-mono font-semibold text-strong">{title}</span>
				<span className="self-base flex gap-1.5 self-baseline text-xs text-muted">
					<span>{type}</span>
					{required && (
						<span className="font-semibold text-amber-600">Required</span>
					)}
					{cel && (
						<Badge appearance="muted" color="blue" className="-mt-0.5">
							CEL
						</Badge>
					)}
				</span>
			</h4>
			<div className="space-y-2 text-sm [&_p]:mb-0">{children}</div>
		</li>
	);
};

export const ConfigChildren = ({
	open = false,
	children,
}: ConfigChildrenProps) => {
	const [isOpen, setIsOpen] = useState(open);
	return (
		<div className="mx-2">
			<Button
				type="button"
				appearance="outlined"
				priority="neutral"
				onClick={() => setIsOpen(!isOpen)}
			>
				{!isOpen && "Show Child Properties"}
				{isOpen && "Hide Child Properties"}
			</Button>
			{isOpen && (
				<ul className="m-0 mt-2 flex flex-shrink-0 list-none flex-col divide-y divide-gray-200 self-start rounded-md border border-gray-200 p-0 dark:divide-gray-800 dark:border-gray-800 [&_li]:p-4">
					{children}
				</ul>
			)}
		</div>
	);
};

export const ConfigEnum = ({ label, children }: ConfigEnumProps) => {
	return (
		<ul className="m-0 flex flex-shrink-0 list-none flex-col divide-y divide-gray-200 self-start rounded-md border border-gray-200 p-0 dark:divide-gray-800 dark:border-gray-800 [&_li+li]:mt-0 [&_li]:py-2">
			<li className="px-4 font-semibold">
				{label ? label : "Possible enum values"}
			</li>
			{children}
		</ul>
	);
};

export const ConfigEnumOption = ({ children }: PropsWithChildren) => {
	return <li className="space-y-2 px-4">{children}</li>;
};
