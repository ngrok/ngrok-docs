import ConfigExample from "@components/ConfigExample";

export const LimitSize = () => (
	<ConfigExample
		config={{
			on_http_request: [
				{
					expressions: [
						"req.method == 'POST' || req.method == 'PUT'",
						"req.content_length >= 1000",
					],
					name: "Block POST/PUT requests of excessive length",
					actions: [
						{
							type: "custom-response",
							config: {
								status_code: 400,
								body: "Error: content length",
							},
						},
					],
				},
			],
			on_http_response: [],
		}}
	/>
);
