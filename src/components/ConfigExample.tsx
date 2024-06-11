import React from "react";
import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import YAML from "yaml";

interface Props {
	config: Record<string, any>;
	snippetText?: string;
}

export default function ConfigExample({
	config,
	snippetText = "snippet",
}: Props) {
	const yamlConfig = YAML.stringify(config, {
		indent: 2,
		directives: true,
		defaultKeyType: "PLAIN",
		defaultStringType: "QUOTE_DOUBLE",
	});

	const jsonConfig = JSON.stringify(config, null, 2);

	return (
		<Tabs groupId="config_example" queryString="config">
			<TabItem value="YAML" label="YAML">
				<CodeBlock language="yaml">
					{`# ${snippetText}\n` + yamlConfig}
				</CodeBlock>
			</TabItem>
			<TabItem value="JSON" label="JSON">
				<CodeBlock language="yaml">
					{`// ${snippetText}\n` + jsonConfig}
				</CodeBlock>
			</TabItem>
		</Tabs>
	);
}
