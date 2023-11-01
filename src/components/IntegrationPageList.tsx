import React from "react";
import NgrokCard from "./NgrokCard";
import { usePluginData } from "@docusaurus/useGlobalData";
import { ReactNode } from "react";

type Integration = {
	name: string;
	path: string;
	docs?: Array<IntegrationDoc> | undefined;
};

type IntegrationDoc = {
	path: string;
	excerpt: string;
	content: string;
	contentTitle: string;
	frontMatter?: FrontMatter | undefined;
};

type FrontMatter = {
	title?: string | undefined;
	description?: string | undefined;
};

const pluginKey = "ngrok-parse-integrations" as const;

type Props = {
	name: string;
};

export default function IntegrationPageList({ name }: Props) {
	const pluginData = usePluginData(pluginKey);
	console.log("IntegrationPageList", { name, pluginData });
	const integrations: Array<Integration> = Array.isArray(pluginData)
		? pluginData
		: [];
	const data = integrations.find((x: Integration) => x.name === name);

	if (!data || !data.docs) {
		return null;
	}

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
			/>,
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
