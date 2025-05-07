import Link from "@docusaurus/Link";
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
import type React from "react";
import { terms } from "./data";

type DefinitionProps = {
	children: React.ReactNode;
	meaning?: string;
	link?: string;
};

export function Definition({
	children,
	meaning,
	link,
}: DefinitionProps): React.ReactElement {
	if (!children) throw new Error("<Definition/> requires children");

	// Don't get the match if the meaning or link is provided
	const match =
		meaning && link
			? null
			: terms.find((term) => term.titles.includes(children.toString()));

	const data = {
		meaning: meaning || match?.meaning,
		link: link || match?.link,
	};

	return (
		<HoverCard>
			<HoverCardTrigger className="m-0" asChild>
				<Button
					className="mx-[-4px]"
					type="button"
					priority="neutral"
					appearance="link"
				>
					<>
						<span className=" mr-[-5px]">{children}</span>

						<QuestionMark size={8} className="mb-2" />
					</>
				</Button>
			</HoverCardTrigger>
			<HoverCardContent className="p-3 w-80 text-sm">
				<div className="flex flex-col gap-3">
					<span>{data.meaning}</span>
					{Boolean(data.link) && (
						<span className="flex">
							<Link className="mb-0 flex gap-1 items-center" href={data.link}>
								{data?.link?.includes("http") ? (
									<Icon svg={<ArrowSquareOut />} />
								) : (
									<Icon svg={<LinkSimpleHorizontal />} />
								)}
								Learn More
							</Link>
						</span>
					)}
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}
