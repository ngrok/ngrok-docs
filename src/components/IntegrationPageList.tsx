import React from "react";
import NgrokCard from "./NgrokCard";
import { usePluginData } from "@docusaurus/useGlobalData";

type Integration = {
	name: string;
	path: string;
	docs: Array<IntegrationDoc>;
};

type IntegrationDoc = {
	path: string;
	excerpt: string;
	content: string;
	contentTitle: string;
	frontMatter: any;
};

export default function IntegrationPageList({ name }) {
	const integrations: any = usePluginData("ngrok-parse-integrations");
	const data: Integration = integrations.find(
		(x: Integration) => x.name === name
	);
	const cards: any = [];
	let group: any = [];

	for (let i = 0; i < data.docs.length; i++) {
		const { contentTitle, excerpt, path, frontMatter } = data.docs[i];

		group.push(
			<NgrokCard
				to={path}
				size="sm"
				title={frontMatter?.title || contentTitle}
				description={frontMatter?.description || excerpt}
			/>
		);

		if (
			group.length == 2 ||
			data.docs.length < 2 ||
			i == data.docs.length - 1
		) {
			cards.push(<div className="ngrok--cards ngrok--cards-row">{group}</div>);

			group = [];
		}
	}

	return <>{cards}</>;
}
