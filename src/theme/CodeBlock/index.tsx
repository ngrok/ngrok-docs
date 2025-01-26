import { cx } from "@ngrok/mantle/cx";
import type { ComponentProps } from "react";
import DocsCodeBlock from "../../components/code-block";

type Props = ComponentProps<typeof DocsCodeBlock>;

export default function CodeBlock({ className, ...props }: Props) {
	return <DocsCodeBlock className={cx("mb-4", className)} {...props} />;
}
