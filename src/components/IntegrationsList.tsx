import React from "react";
import NgrokCard from "./NgrokCard";
import useGlobalData, { usePluginData } from "@docusaurus/useGlobalData";

export default function IntegrationsList() {
	const data: any = usePluginData("ngrok-parse-integrations");
	const cards: any = [];
	let group: any = [];

	for (let i = 0; i < data.length; i++) {
		const { name, path, metadata } = data[i];

		group.push(
			<NgrokCard
				to={path}
				size="sm"
				img={metadata?.logo || false}
				title={metadata?.sidebar_label || name}
				description={metadata?.excerpt || false}
			/>
		);

		if (group.length == 2 || data.length < 2 || i == data.length - 1) {
			cards.push(<div className="ngrok--cards ngrok--cards-row">{group}</div>);

			group = [];
		}
	}

	return <>{cards}</>;
}
