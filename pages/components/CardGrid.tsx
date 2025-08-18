import LinkCard from "./LinkCard";

type CardItem = {
	title: string;
	href: string;
	body: string;
	img?: string;
	imgAlt?: string;
};

type Props = {
	cards: CardItem[];
	className?: string;
	columns?: 2 | 3 | 4;
};

export default function CardGrid({ cards, className, columns = 2 }: Props) {
	const gridColsClass = {
		2: "md:grid-cols-2",
		3: "md:grid-cols-3",
		4: "md:grid-cols-4",
	}[columns];

	return (
		<div
			className={`ngrok--cards grid ${gridColsClass} gap-4 my-8 ${className || ""}`}
		>
			{cards.map((card) => (
				<LinkCard
					key={card.href}
					title={card.title}
					href={card.href}
					body={card.body}
					img={card.img}
					imgAlt={card.imgAlt}
				/>
			))}
		</div>
	);
}
