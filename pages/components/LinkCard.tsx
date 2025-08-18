import { Link } from "@components/Link";
import { Card, CardBody, CardHeader, CardTitle } from "@ngrok/mantle/card";
import type { ReactNode } from "react";

type Props = {
	title: string;
	href: string;
	body: string;
	img?: string;
	imgAlt?: string;
	icon?: ReactNode;
};

export default function LinkCard({
	title,
	href,
	body,
	img,
	imgAlt,
	icon,
}: Props) {
	return (
		<Link
			to={href}
			className="w-full block text-inherit no-underline hover:text-inherit hover:no-underline focus:text-inherit focus:no-underline"
		>
			<Card className="flex h-full w-full flex-col hover:bg-card-hover">
				{img && <img alt={imgAlt} src={img} />}
				<CardHeader className="">
					{icon ? (
						<div className="flex items-start gap-3">
							<div className="flex-shrink-0 mt-[0.27rem]">{icon}</div>
							<CardTitle className="mb-0 my-0 sm:text-base">
								<p className="font-bold text-lg py-0 leading-none">{title}</p>
							</CardTitle>
						</div>
					) : (
						<CardTitle className="mb-0 my-0 sm:text-base">
							<p className="font-bold text-lg py-0">{title}</p>
						</CardTitle>
					)}
				</CardHeader>
				<CardBody className="flex-grow pl-auto my-0 pt-0 pb-2">
					<p className="sm:text-sm">{body}</p>
				</CardBody>
			</Card>
		</Link>
	);
}
