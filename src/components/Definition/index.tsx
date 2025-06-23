import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import { Button } from "@ngrok/mantle/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@ngrok/mantle/hover-card";
import { Icon } from "@ngrok/mantle/icon";
import {
	ArrowSquareOut,
	LinkSimpleHorizontal,
	QuestionMark,
} from "@phosphor-icons/react";
import clsx from "clsx";
import type React from "react";
import { terms } from "./data";

type DefinitionProps = {
	children: React.ReactNode;
	meaning?: string;
	link?: string;
	dontShowIfInPageURL?: boolean;
	className?: string;
};

function foundDefinitionInUrl(
	pathname: string,
	children: React.ReactNode,
	titles: string[] | undefined,
): boolean {
	if (!children) return false;
	if (pathname.includes(children.toString())) {
		return true;
	}
	if (titles) {
		for (const title of titles) {
			if (pathname.includes(title)) {
				return true;
			}
		}
	}
	return false;
}

export function Definition({
	children,
	meaning,
	link,
	className,
	dontShowIfInPageURL,
}: DefinitionProps): React.ReactElement {
	if (!children) throw new Error("<Definition/> requires children");
	const linkType = link?.startsWith("http")
		? "external"
		: link?.startsWith("/")
			? "internal"
			: null;
	if (link && !linkType)
		throw new Error(`<Definition/> link must be a valid URL. Received ${link}`);

	if (link?.includes("localhost:"))
		throw new Error(
			`<Definition/> link must not be a localhost URL. Received ${link}`,
		);

	const { pathname } = useLocation();

	// Don't get the match if the meaning or link is provided
	const match =
		meaning && link
			? null
			: terms.find((term) => term.titles.includes(children.toString()));
	const data = {
		meaning: meaning || match?.meaning,
		// If link is to the current page, don't use it. No need to
		// link to the same page.
		link: !link
			? undefined
			: pathname?.includes(link)
				? undefined
				: link || match?.link,
	};

	// If this flag is set to true, don't show the definition component
	// on a page that includes the term in the URL. This prevents adding
	// the definition component to pages that already explain the term.
	// For example if we have a page at /docs/ingress, we don't
	// want to show the definition component for "ingress" on that page.
	if (dontShowIfInPageURL) {
		if (foundDefinitionInUrl(pathname, children, match?.titles)) {
			return <>{children}</>;
		}
	}

	const iconSize = 4;

	return (
		<HoverCard>
			<HoverCardTrigger className="m-0" asChild>
				<Button
					className="mx-[-4px]"
					type="button"
					priority="neutral"
					appearance="link"
					aria-label={children.toString()}
				>
					<>
						<span className={clsx("mr-[-5px]", className)}>{children}</span>

						<QuestionMark size={8} className="mb-2" />
					</>
				</Button>
			</HoverCardTrigger>
			<HoverCardContent className="p-3 w-80 text-sm">
				<div className="flex flex-col gap-3">
					<span>{data.meaning}</span>
					{Boolean(data?.link) && (
						<span className="flex">
							<Link
								className="mb-0 flex gap-1 text-xs items-center"
								href={data.link}
							>
								<div className="max-w-[16px]">
									{linkType === "external" ? (
										<Icon className="max-w-[100%]" svg={<ArrowSquareOut />} />
									) : (
										<Icon
											className="max-w-[100%]"
											svg={<LinkSimpleHorizontal size={iconSize} />}
										/>
									)}
								</div>
								Learn More
							</Link>
						</span>
					)}
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}
