import React from "react";
import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import YAML from "yaml";

export default function ConfigExample({ config }) {
	return (
		<Tabs groupId="config_example" queryString="config">
			<TabItem value="YAML" label="YAML">
				<CodeBlock language="yaml">{"...\n"+YAML.stringify(config)+"\n..."}</CodeBlock>
			</TabItem>
			<TabItem value="JSON" label="JSON">
				<CodeBlock language="yaml">{"...\n"+JSON.stringify(config, null, 2)+"\n..."}</CodeBlock>
			</TabItem>
		</Tabs>
	);
}
