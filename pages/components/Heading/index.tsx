import { useEffect } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { logError } from "~/utils/errorLogging";
import { getHeadingId } from "~/utils/getHeadings";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
	as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading = ({ as: Tag, children, ...props }: HeadingProps) => {
	let id = "";

	if (typeof children === "string") {
		id = getHeadingId(children);
	} else if (typeof children === "object") {
		try {
			if (Array.isArray(children)) {
				const normalizedValue = (children as React.ReactElement[]).reduce(
					(acc, child) => {
						if (typeof child === "string") {
							return acc + child;
						} else if (typeof child === "object" && child.props) {
							return acc + child.props.children;
						}
						return acc;
					},
					"",
				);
				id = getHeadingId(normalizedValue);
			} else {
				const normalizedValue = (children as React.ReactElement).props.children;
				id = getHeadingId(normalizedValue);
			}
		} catch (error) {
			logError({
				title: "Heading/index.tsx error",
				message: "Error generating heading ID",
				error,
			});
		}
	}

	const { urlParsed } = usePageContext();

	useEffect(() => {
		const hash = urlParsed?.hash || "";
		if (id && hash === `#${id}`) {
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		}
	}, [id, urlParsed]);

	return (
		<Tag className="group scroll text-2xl mb-6" id={id} {...props}>
			{children}{" "}
			<a
				className="ml-2 opacity-0 group-hover:opacity-100 transition"
				href={`#${id}`}
			>
				#
			</a>
		</Tag>
	);
};
