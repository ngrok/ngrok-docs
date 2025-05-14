import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import type { ReactNode } from "react";
import YAML, { type ToStringOptions } from "yaml";
import { LangSwitcher } from "./LangSwitcher";
import DocsCodeBlock from "./code-block";

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
		<LangSwitcher>
			<DocsCodeBlock
				language="yaml"
				metastring={yamlMetastring}
				title={`${titleToUse}.yml`}
				icon={icon}
			>
				{snippetText ? `# ${snippetText}\n${yamlConfig}` : yamlConfig}
			</DocsCodeBlock>
			<DocsCodeBlock
				language="json"
				metastring={jsonMetastring}
				title={`${titleToUse}.json`}
				icon={icon}
			>
				{snippetText ? `// ${snippetText}\n${jsonConfig}` : jsonConfig}
			</DocsCodeBlock>
		</LangSwitcher>
	);
};

const getAgentConfig = (
	config: ConfigExampleProps["config"],
	yamlOptions: ToStringOptions,
) => {
	const agentConfigTemplate = {
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
		yamlConfig: YAML.stringify(agentConfigTemplate, yamlOptions),
		jsonConfig: JSON.stringify(agentConfigTemplate, null, 2),
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
	showAgentConfig?: boolean;
	showTrafficPolicy?: boolean;
};

export default function ConfigExample({
	// Show the agent config by default
	showAgentConfig = false,
	showTrafficPolicy = true,
	...props
}: ConfigExampleProps) {
	const yamlOptions = {
		indent: 2,
		directives: true,
		defaultKeyType: "PLAIN",
	} as ToStringOptions;
	// This removes the initial --- because having it there
	// makes it annoying to copy/paste this in the dashboard
	const policyYamlConfig = YAML.stringify(props.config, yamlOptions).slice(4);
	const policyJsonConfig = JSON.stringify(props.config, null, 2);

	const policySnippet = showExample(
		"traffic-policy",
		props,
		policyYamlConfig,
		policyJsonConfig,
	);

	const agentConfig = getAgentConfig(props.config, yamlOptions);
	const agentConfigSnippet = showExample(
		"config",
		props,
		agentConfig.yamlConfig,
		agentConfig.jsonConfig,
	);

	// if both false, throw error;
	if (!showTrafficPolicy && !showAgentConfig) {
		throw new Error(
			"ConfigExample error: One of showTrafficPolicy or showAgentConfig must be true",
		);
	}

	// if only one is true, no need for <Tabs></Tabs>
	if (!showAgentConfig) {
		return policySnippet;
	}
	if (!showTrafficPolicy) {
		return agentConfigSnippet;
	}

	return (
		<Tabs groupId="config-example" queryString="config-example">
			{showTrafficPolicy ? (
				<TabItem value="traffic-policy" label="Traffic Policy" default>
					{policySnippet}
				</TabItem>
			) : null}

			{showAgentConfig ? (
				<TabItem value="agent-config" label="Agent Config">
					{agentConfigSnippet}
				</TabItem>
			) : null}
		</Tabs>
	);
}
