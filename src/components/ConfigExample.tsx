import React from "react";
import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import YAML from "yaml";

export default function ConfigExample({ config }) {
	const jsonExample = {
		// key ordering
		"//": "...snippet...",
		...config,
	};
	return (
		<Tabs groupId="config_example" queryString="config">
			<TabItem value="YAML" label="YAML">
				<CodeBlock language="yaml">
					{"---\n# snippet\n" + YAML.stringify(config)}
				</CodeBlock>
			</TabItem>
			<TabItem value="JSON" label="JSON">
				<CodeBlock language="yaml">
					{"// snippet\n" + JSON.stringify(jsonExample, null, 2)}
				</CodeBlock>
			</TabItem>
		</Tabs>
	);
}
