import ConfigExample from "@components/ConfigExample";

export const UserAgentFilter = () => (
	<ConfigExample
		config={{
			on_http_request: [
				{
					expressions: [
						"'user-agent' in req.headers",
						"size(req.headers['user-agent'].filter(x, x.matches('(?i).*Edg/\\\\d+.*'))) > 0",
					],
					actions: [
						{
							type: "custom-response",
							config: {
								status_code: 200,
								body: "Hello Edge User!",
							},
						},
					],
				},
			],
		}}
	/>
);
