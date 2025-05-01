import React, { useEffect, type ReactNode } from "react";
import clsx from "clsx";
import { translate } from "@docusaurus/Translate";
import { useThemeConfig } from "@docusaurus/theme-common";
import Link from "@docusaurus/Link";
import useBrokenLinks from "@docusaurus/useBrokenLinks";
import type { Props } from "@theme/Heading";

import styles from "./styles.module.css";
import { useLocation } from "@docusaurus/router";

export default function Heading({ as: As, id, ...props }: Props): ReactNode {
	const brokenLinks = useBrokenLinks();
	const {
		navbar: { hideOnScroll },
	} = useThemeConfig();
	// H1 headings do not need an id because they don't appear in the TOC.
	if (As === "h1" || !id) {
		return <As {...props} id={undefined} />;
	}

	brokenLinks.collectAnchor(id);

	const anchorTitle = translate(
		{
			id: "theme.common.headingLinkTitle",
			message: "Direct link to {heading}",
			description: "Title for link to heading",
		},
		{
			heading: typeof props.children === "string" ? props.children : id,
		},
	);

	const location = useLocation();

	useEffect(() => {
		if (location.hash === `#${id}`) {
			setTimeout(() => {
				const element = document.getElementById(id);
				if (element) {
					element.scrollIntoView();
				}
				// Delay the scroll until after any layout shift occurs
			}, 100);
		}
	}, [location, id]);

	return (
		<As
			{...props}
			className={clsx(
				"anchor",
				hideOnScroll
					? styles.anchorWithHideOnScrollNavbar
					: styles.anchorWithStickyNavbar,
				props.className,
			)}
			id={id}
		>
			{props.children}
			<Link
				className="hash-link"
				to={`#${id}`}
				aria-label={anchorTitle}
				title={anchorTitle}
			>
				&#8203;
			</Link>
		</As>
	);
}
