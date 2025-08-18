import ConfigExample from "@components/ConfigExample";

export const LogUnsuccessful = () => (
	<ConfigExample
		config={{
			on_http_request: [],
			on_http_response: [
				{
					expressions: ["res.status_code < '200' && res.status_code >= '300'"],
					name: "Log unsuccessful requests",
					actions: [
						{
							type: "log",
							config: {
								metadata: {
									message: "Unsuccessful request",
									edge_id: "<YOUR-NGROK-DOMAIN>",
									success: false,
								},
							},
						},
					],
				},
			],
		}}
	/>
);
