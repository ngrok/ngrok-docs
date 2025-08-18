import { Link } from "@components/Link";
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
import { usePageContext } from "vike-react/usePageContext";
import { terms } from "./data";

type DefinitionProps = {
	children: React.ReactNode;
	meaning?: string;
	link?: string;
	className?: string;
	// The stringified term provided by the definitionwrapper
	wrapperTermString?: string;
	// If true, the definition will not be rendered on pages
	// where the content most likely already explains the term
	hideIfRedundant?: boolean;
};

function verifyLink(link: string | undefined, linkType: string | null): void {
	if (link && !linkType)
		throw new Error(`<Definition/> link must be a valid URL. Received ${link}`);

	if (link?.includes("localhost:"))
		throw new Error(
			`<Definition/> link must not be a localhost URL. Received ${link}`,
		);
}

function findMatchingTerm(content: string) {
	return terms.find((term) => term.titles.includes(content));
}

export function Definition({
	children,
	meaning,
	link,
	className,
	hideIfRedundant,
	wrapperTermString,
}: DefinitionProps): React.ReactElement {
	if (!children) throw new Error("<Definition/> requires children");
	const linkType = link?.startsWith("http")
		? "external"
		: link?.startsWith("/")
			? "internal"
			: null;

	verifyLink(link, linkType);

	const parsedWrapperTerm = wrapperTermString
		? JSON.parse(wrapperTermString)
		: null;

	// Don't get the match if the meaning is provided
	const match =
		parsedWrapperTerm || meaning ? null : findMatchingTerm(children.toString());

	const data = match ||
		parsedWrapperTerm || {
			meaning,
			link,
		};

	const { urlPathname } = usePageContext();

	if (data.link && hideIfRedundant) {
		const pathSegments = urlPathname.split("/");
		const lastPathSegment = pathSegments[pathSegments.length - 2];
		// If the link is in the current path, don't render
		// the definition component. Probably redundant.
		if (lastPathSegment && data.link.includes(lastPathSegment)) {
			return <>{children}</>;
		}

		// If the last path segment matches any of the titles,
		// don't render the definition component. Probably redundant.
		if (
			data.titles?.some((title: string) =>
				lastPathSegment?.includes(title.split(" ").join("-").toLowerCase()),
			)
		) {
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
					<span
						className={clsx(
							"mr-[-5px] ml-1.5 font-bold inline text-inherit ",
							className,
						)}
					>
						{children}
					</span>
					<QuestionMark size={8} className="mb-2 mr-1.5" />
				</Button>
			</HoverCardTrigger>
			<HoverCardContent className="p-3 w-80 text-sm">
				<div className="flex flex-col gap-3">
					<span>{data.meaning}</span>
					{Boolean(data?.link) && (
						<span className="flex">
							<Link
								className="mb-0 flex gap-1 text-xs items-center"
								to={data.link}
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
