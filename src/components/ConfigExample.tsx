import BrowserOnly from "@docusaurus/BrowserOnly";
import { useMDXComponents } from "@mdx-js/react";
import {
	Accordion,
	AccordionContent,
	AccordionHeading,
	AccordionItem,
	AccordionTrigger,
	AccordionTriggerIcon,
} from "@ngrok/mantle/accordion";
import TabItem from "@theme/TabItem";
import Tabs from "@theme/Tabs";
import { useState, type ReactNode } from "react";
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
};

export default function ConfigExample({
	// Show the agent config by default
	showAgentConfig = true,
	...props
}: ConfigExampleProps) {
	const components = useMDXComponents();
	const [configShowing, setConfigShowing] = useState(false);

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
	if (!components.h3) return <p>Error rendering config example.</p>;
	return (
		<>
			{policySnippet}
			{showAgentConfig && (
				<Accordion type="multiple" defaultValue={["show-agent-config"]}>
					<AccordionItem value="show-agent-config1">
						<AccordionHeading asChild>
							<p className="text-sm font-medium text-gray-600">
								{!configShowing
									? "Show agent config example"
									: "Hide agent config example"}
								<AccordionTrigger
									onClick={() => setConfigShowing(!configShowing)}
								>
									<AccordionTriggerIcon />
								</AccordionTrigger>
							</p>
						</AccordionHeading>
						<AccordionContent className="mx-[10px] pt-[-15px]">
							<>
								<p>You can add the snippet to your agent config like this:</p>
								{agentConfigSnippet}
							</>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			)}
		</>
	);
}
