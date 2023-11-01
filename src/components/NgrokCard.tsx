import React from "react";
import { clsx } from "clsx";
import Link from "@docusaurus/Link";

function CardHeader({ size, title }) {
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

function CardHeading({ size, title, icon }) {
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

const sizes = ["sm", "lg", "xl"] as const;
type Size = (typeof sizes)[number];

type Props = {
	description?: string | undefined;
	descriptionLink?: string | undefined;
	icon?: React.ReactNode;
	img?: string;
	note?: boolean;
	size?: Size;
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
