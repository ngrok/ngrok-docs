import Heading from "@theme/Heading";
import type { Props } from "@theme/MDXComponents/Heading";
import React, { type ReactNode } from "react";

export default function MDXHeading(props: Props): ReactNode {
	return <Heading {...props} />;
}
