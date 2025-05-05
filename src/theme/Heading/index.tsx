import { useLocation } from "@docusaurus/router";
import type { WrapperProps } from "@docusaurus/types";
import Heading from "@theme-original/Heading";
import type HeadingType from "@theme/Heading";
import React, { useEffect, type ReactNode } from "react";

type Props = WrapperProps<typeof HeadingType>;

export default function HeadingWrapper(props: Props): ReactNode {
	const { id } = props;
	const location = useLocation();

	useEffect(() => {
		if (location.hash === `#${id}`) {
			window.setTimeout(() => {
				if (!id) {
					return;
				}
				const element = document.getElementById(id);
				if (element) {
					console.log("Scrolling to element:", element);
					element.scrollIntoView();
				}
				// Delay the scroll until after any layout shift occurs
			}, 100);
		}
	}, [id, location]);

	return <Heading {...props} />;
}
