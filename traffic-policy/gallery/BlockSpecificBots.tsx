import ConfigExample from "../../src/components/ConfigExample";

export const BlockSpecificBots = () => (
	<ConfigExample
		config={{
			on_http_request: [
				{
					name: "Block specific bots by user agent",
					expressions: [
						"req.user_agent.matches('(?i).*(chatgpt-user|gptbot)/\\\\d+.*')",
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
