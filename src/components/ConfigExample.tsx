import CodeBlock from "@theme/CodeBlock";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import React from "react";
import YAML from "yaml";

type Props = {
	config: Record<string, any>;
	snippetText?: string;
	showLineNumbers?: boolean;
	metastring?: string;
};

export default function ConfigExample({
	config,
	snippetText = "snippet",
	showLineNumbers = false,
	metastring = ""
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
				<CodeBlock language="yaml" showLineNumbers={showLineNumbers} metastring={metastring}>
					{snippetText ? `# ${snippetText}\n` + yamlConfig : yamlConfig}
				</CodeBlock>
			</TabItem>
			<TabItem value="JSON" label="JSON">
				<CodeBlock language="yaml" showLineNumbers={showLineNumbers} metastring={metastring}>
					{snippetText ? `// ${snippetText}\n` + jsonConfig : jsonConfig}
				</CodeBlock>
			</TabItem>
		</Tabs>
	);
}
