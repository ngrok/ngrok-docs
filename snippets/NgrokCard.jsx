import {Link} from "/snippets/Link.jsx";

const cardSizes = ["xs", "sm", "md", "lg", "xl"];

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

function CardHeading({ icon, size, title }) {
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

export const NgrokCard = ({
	description,
	icon,
	img,
	imgAlt,
	note = false,
	size,
	title,
	to,
}) => {
	return (
		<Link
			to={to}
			className="rounded-md text-inherit no-underline hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline"
		>
			<div
				className={clsx("ngrok--card h-full", {
					"ngrok--card-note": note,
					"ngrok--card-sm": size === "sm",
					"ngrok--card-lg": size === "lg",
					"ngrok--card-xl": size === "xl",
				})}
			>
				{img && <img alt={imgAlt} src={img} />}
				<CardHeading size={size} title={title} icon={icon} />
				{description && <p>{description}</p>}
			</div>
		</Link>
	);
}
