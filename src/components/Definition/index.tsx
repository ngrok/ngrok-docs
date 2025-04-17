import Link from "@docusaurus/Link";
import { Button } from "@ngrok/mantle/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@ngrok/mantle/hover-card";
import { QuestionMark } from "@phosphor-icons/react";
import type React from "react";
import { terms } from "./data";

type DefinitionProps = {
	children: React.ReactNode;
	meaning?: string;
};

export function Definition({
	children,
	meaning,
}: DefinitionProps): React.ReactElement {
	if (!children) throw new Error("<Definition/> requires children");
	const getMatchingTerm = () => {
		const match = terms.find((term) =>
			term.titles.includes(children.toString()),
		);
		if (!match)
			throw new Error(
				"<Definition/> requires the meaning prop if no corresponding term is found.",
			);
		return (
			<div>
				<p>{match.meaning}</p>
				<p>
					{match.link && (
						<Link className="mb-0" href={match.link}>
							Learn More
						</Link>
					)}
				</p>
			</div>
		);
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
			<HoverCardContent className="pb-0 w-80">
				<span>{meaning || getMatchingTerm()}</span>
			</HoverCardContent>
		</HoverCard>
	);
}
