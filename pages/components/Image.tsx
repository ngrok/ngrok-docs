import clsx from "clsx";
import { usePageContext } from "vike-react/usePageContext";

export function Image({
	src,
	alt,
	width,
	height,
	className,
}: {
	src?: string;
	alt?: string;
	width?: string | number;
	height?: string | number;
	className?: string;
}) {
	const pageContext = usePageContext();
	// Convert relative paths to absolute paths
	const resolvedSrc = src?.startsWith("../")
		? `/pages${pageContext.urlPathname.split("/").slice(0, -1).join("/")}${src.replace(/^\.\.\//, "/")}`
		: src;

	return (
		<img
			src={resolvedSrc}
			alt={alt}
			width={width}
			height={height}
			className={clsx(className, "place-self-center border-none")}
		/>
	);
}
