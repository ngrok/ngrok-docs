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

export default function NgrokCard({
	to,
	note = false,
	size = "",
	title,
	img = "",
	icon = false,
	description = false,
	descriptionLink = false,
}) {
	size = size.toLowerCase();

	let classNames = clsx("ngrok--card", {
		"ngrok--card-note": note,
		"ngrok--card-sm": size == "sm",
		"ngrok--card-lg": size == "lg",
		"ngrok--card-xl": size == "xl",
	});

	return (
		<Link to={to}>
			<div className={classNames}>
				{img && <img src={img} />}
				<CardHeading size={size} title={title} icon={icon} />
				{description && <p>{description}</p>}
				{descriptionLink && <a>{descriptionLink}</a>}
			</div>
		</Link>
	);
}
