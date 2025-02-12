import BrowserOnly from "@docusaurus/BrowserOnly";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import type { ReactNode } from "react";
import YAML, { type ToStringOptions } from "yaml";
import DocsCodeBlock, { CodeBlockFallback } from "./code-block";

const showExample = (
	defaultTitle: string,
	{
		yamlMetastring,
		jsonMetastring,
		title,
		icon,
		snippetText,
	}: ConfigExampleProps,
	yamlConfig: string,
	jsonConfig: string,
) => {
	const titleToUse = title || defaultTitle;
	return (
		<Tabs className="mb-4" groupId="config_example" queryString="config">
			<TabItem value="YAML" label="YAML">
				<BrowserOnly
					fallback={
						<CodeBlockFallback className="mb-4">Loading…</CodeBlockFallback>
					}
				>
					{() => (
						<DocsCodeBlock
							language="yaml"
							metastring={yamlMetastring}
							title={titleToUse + ".yml"}
							icon={icon}
						>
							{snippetText ? `# ${snippetText}\n` + yamlConfig : yamlConfig}
						</DocsCodeBlock>
					)}
				</BrowserOnly>
			</TabItem>
			<TabItem value="JSON" label="JSON">
				<BrowserOnly
					fallback={
						<CodeBlockFallback className="mb-4">Loading…</CodeBlockFallback>
					}
				>
					{() => (
						<DocsCodeBlock
							language="json"
							metastring={jsonMetastring}
							title={titleToUse + ".json"}
							icon={icon}
						>
							{snippetText ? `// ${snippetText}\n` + jsonConfig : jsonConfig}
						</DocsCodeBlock>
					)}
				</BrowserOnly>
			</TabItem>
		</Tabs>
	);
};

const getFullConfig = (
	config: ConfigExampleProps["config"],
	yamlOptions: ToStringOptions,
) => {
	const fullTemplate = {
		endpoints: {
			name: "my-agent-endpoint",
			description: "Example Agent Endpoint with a Traffic Policy",
			upstream: {
				url: 80,
			},
			traffic_policy: {
				...config,
			},
		},
	};
	return {
		yamlConfig: YAML.stringify(fullTemplate, yamlOptions),
		jsonConfig: JSON.stringify(fullTemplate, null, 2),
	};
};

export type ConfigExampleProps = {
	config: Record<string, unknown>;
	snippetText?: string;
	showLineNumbers?: boolean;
	yamlMetastring?: string;
	jsonMetastring?: string;
	title?: string;
	icon?: ReactNode;
	showSnippetOnly?: boolean;
};

export default function ConfigExample(props: ConfigExampleProps) {
	const { config, showSnippetOnly } = props;
	const yamlOptions = {
		indent: 2,
		directives: true,
		defaultKeyType: "PLAIN",
		// I'm removing the initial --- because having it there
		// makes it annoying to copy/paste this in the dashboard
	} as ToStringOptions;
	const policyYamlConfig = YAML.stringify(config, yamlOptions).slice(4); // Remove the initial `---\n` from the YAML output
	const policyJsonConfig = JSON.stringify(config, null, 2);

	let defaultTitle = "traffic-policy";
	const policySnippet = showExample(
		defaultTitle,
		props,
		policyYamlConfig,
		policyJsonConfig,
	);

	/**
	 * Make showExample generic, accepting:
	 * - props
	 * - yamlConfig,
	 * - jsonConfig
	 * Returns the tabs component
	 * Then we can pass in the policy content and the full content
	 */

	if (showSnippetOnly) return policySnippet;

	const fullConfig = getFullConfig(config, yamlOptions);
	defaultTitle = "config";
	const fullSnippet = showExample(
		defaultTitle,
		props,
		fullConfig.yamlConfig,
		fullConfig.jsonConfig,
	);
	return (
		<Tabs groupId="exampleType" queryString="type" defaultValue="policy">
			<TabItem value="policy" label="Traffic Policy">
				{policySnippet}
			</TabItem>

			<TabItem value="agent" label="Agent Configuration File">
				{fullSnippet}
			</TabItem>
		</Tabs>
	);
}
