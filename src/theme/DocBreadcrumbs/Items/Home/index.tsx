import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { House } from "@phosphor-icons/react/House";
import React, { type ReactNode } from "react";

export default function HomeBreadcrumbItem(): ReactNode {
	const homeHref = useBaseUrl("/");

	return (
		<li className="breadcrumbs__item flex items-center justify-center">
			<Link
				aria-label={translate({
					id: "theme.docs.breadcrumbs.home",
					message: "Home page",
					description: "The ARIA label for the home page in the breadcrumbs",
				})}
				className="breadcrumbs__link"
				href={homeHref}
			>
				<House weight="fill" className="size-4" />
			</Link>
		</li>
	);
}
