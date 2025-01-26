import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import type { ReactNode } from "react";
import YAML from "yaml";
import DocsCodeBlock from "./code-block";

type Props = {
	config: Record<string, unknown>;
	snippetText?: string;
	showLineNumbers?: boolean;
	yamlMetastring?: string;
	jsonMetastring?: string;
	title?: string;
	icon?: ReactNode;
};

export default function ConfigExample({
	config,
	snippetText = "snippet",
	yamlMetastring = "",
	jsonMetastring = "",
	title,
	icon,
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
				<DocsCodeBlock
					language="yaml"
					metastring={yamlMetastring}
					title={title}
					icon={icon}
				>
					{snippetText ? `# ${snippetText}\n` + yamlConfig : yamlConfig}
				</DocsCodeBlock>
			</TabItem>
			<TabItem value="JSON" label="JSON">
				<DocsCodeBlock
					language="yaml"
					metastring={jsonMetastring}
					title={title}
					icon={icon}
				>
					{snippetText ? `// ${snippetText}\n` + jsonConfig : jsonConfig}
				</DocsCodeBlock>
			</TabItem>
		</Tabs>
	);
}
