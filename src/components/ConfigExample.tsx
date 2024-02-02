import React from "react";
import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import YAML from "yaml";

export default function ConfigExample({ config }) {
	return (
		<Tabs groupId="config_example" queryString="config">
			<TabItem value="YAML" label="YAML">
				<CodeBlock language="yaml">{YAML.stringify(config)}</CodeBlock>
			</TabItem>
			<TabItem value="JSON" label="JSON">
				<CodeBlock language="json">{JSON.stringify(config, null, 2)}</CodeBlock>
			</TabItem>
		</Tabs>
	);
}
