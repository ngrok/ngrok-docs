import CodeBlock from "@theme/CodeBlock";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import YAML from "yaml";

type Props = {
	config: Record<string, any>;
	snippetText?: string;
	showLineNumbers?: boolean;
	yamlMetastring?: string;
	jsonMetastring?: string;
};

export default function ConfigExample({
	config,
	snippetText = "snippet",
	showLineNumbers = false,
	yamlMetastring = "",
	jsonMetastring = "",
}: Props) {
	const yamlConfig = YAML.stringify(config, {
		indent: 2,
		directives: true,
		defaultKeyType: "PLAIN",
	});

	const jsonConfig = JSON.stringify(config, null, 2);

	return (
		<Tabs groupId="config_example" queryString="config">
			<TabItem value="YAML" label="YAML">
				<CodeBlock
					language="yaml"
					showLineNumbers={showLineNumbers}
					metastring={yamlMetastring}
				>
					{snippetText ? `# ${snippetText}\n` + yamlConfig : yamlConfig}
				</CodeBlock>
			</TabItem>
			<TabItem value="JSON" label="JSON">
				<CodeBlock
					language="yaml"
					showLineNumbers={showLineNumbers}
					metastring={jsonMetastring}
				>
					{snippetText ? `// ${snippetText}\n` + jsonConfig : jsonConfig}
				</CodeBlock>
			</TabItem>
		</Tabs>
	);
}
