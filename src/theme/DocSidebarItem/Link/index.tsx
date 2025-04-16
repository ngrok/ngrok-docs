import Link from "@docusaurus/Link";
import isInternalUrl from "@docusaurus/isInternalUrl";
import { isActiveSidebarItem } from "@docusaurus/plugin-content-docs/client";
import { ThemeClassNames } from "@docusaurus/theme-common";
import type { Props } from "@theme/DocSidebarItem/Link";
import IconExternalLink from "@theme/Icon/ExternalLink";
import clsx from "clsx";
import { type ReactNode, useEffect, useRef } from "react";

import styles from "./styles.module.css";

export default function DocSidebarItemLink({
	item,
	onItemClick,
	activePath,
	level,
	index,
	...props
}: Props): ReactNode {
	const { href, label, className, autoAddBaseUrl } = item;
	const isActive = isActiveSidebarItem(item, activePath);
	const isInternalLink = isInternalUrl(href);
	const itemRef = useRef<HTMLLIElement | null>(null);

	useEffect(() => {
		if (isActive && itemRef.current) {
			itemRef.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "nearest",
			});
		}
	}, [isActive]);
	return (
		<li
			ref={itemRef}
			className={clsx(
				ThemeClassNames.docs.docSidebarItemLink,
				ThemeClassNames.docs.docSidebarItemLinkLevel(level),
				"menu__list-item",
				className,
			)}
			key={label}
		>
			<Link
				className={clsx(
					"menu__link",
					!isInternalLink && styles.menuExternalLink,
					{
						"menu__link--active": isActive,
					},
				)}
				autoAddBaseUrl={autoAddBaseUrl}
				aria-current={isActive ? "page" : undefined}
				to={href}
				{...(isInternalLink && {
					onClick: onItemClick ? () => onItemClick(item) : undefined,
				})}
				{...props}
			>
				{label}
				{!isInternalLink && <IconExternalLink />}
			</Link>
		</li>
	);
}
