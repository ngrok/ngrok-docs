import ConfigExample from "../../src/components/ConfigExample";

export const BlockAIBotsByIPIntel = () => (
	<ConfigExample
		config={{
			on_http_request: [
				{
					name: "Block specific AI Bots with IP Intelligence",
					expressions: [
						"('com.anthropic' in conn.client_ip.categories) || ('com.openai' in conn.client_ip.categories) || ('com.perplexity' in conn.client_ip.categories)",
					],
					actions: [
						{
							type: "deny",
							config: {
								status_code: 404,
							},
						},
					],
				},
			],
		}}
	/>
);
