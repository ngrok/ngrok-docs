import Link from "@docusaurus/Link";
import { clsx } from "clsx";
import React from "react";
import type { ReactNode } from "react";

const cardSizes = ["xs", "sm", "md", "lg", "xl"] as const;
type CardSize = (typeof cardSizes)[number];

type CardHeaderProps = {
	size?: CardSize;
	title: ReactNode;
};

function CardHeader({ size, title }: CardHeaderProps) {
	switch (size) {
		case "xs":
		case "sm":
			return <h4 className="fw-600">{title}</h4>;

		case "xl":
			return <h2 className="fw-600">{title}</h2>;

		default:
			return <h3 className="fw-600">{title}</h3>;
	}
}

type CardHeadingProps = {
	icon: ReactNode;
	size?: CardSize;
	title: ReactNode;
};

function CardHeading({ icon, size, title }: CardHeadingProps) {
	if (icon) {
		return (
			<div className="ngrok--card-heading jc-space-between">
				{title && <CardHeader size={size} title={title} />}
				{icon}
			</div>
		);
	}

	if (title) {
		return (
			<div className="ngrok--card-heading">
				<CardHeader size={size} title={title} />
			</div>
		);
	}

	return null;
}

type Props = {
	description?: string | undefined;
	descriptionLink?: string | undefined;
	icon?: React.ReactNode;
	img?: string;
	note?: boolean;
	size?: CardSize;
	title: string;
	to: string;
};

export default function NgrokCard({
	description,
	descriptionLink,
	icon,
	img,
	note = false,
	size,
	title,
	to,
}: Props) {
	return (
		<Link
			to={to}
			className="rounded-md text-inherit no-underline hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline"
		>
			<div
				className={clsx("ngrok--card h-full", {
					"ngrok--card-note": note,
					"ngrok--card-sm": size == "sm",
					"ngrok--card-lg": size == "lg",
					"ngrok--card-xl": size == "xl",
				})}
			>
				{img && <img src={img} />}
				<CardHeading size={size} title={title} icon={icon} />
				{description && <p>{description}</p>}
				{descriptionLink && <a>{descriptionLink}</a>}
			</div>
		</Link>
	);
}
