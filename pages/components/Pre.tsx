import type { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"pre">;

export default function MDXPre(props: Props): ReactNode {
	return <>{props.children}</>;
}
