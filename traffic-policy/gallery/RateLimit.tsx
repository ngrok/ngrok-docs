import ConfigExample from "../../src/components/ConfigExample";

export const RateLimit = () => (
	<ConfigExample
		config={{
			on_http_request: [
				{
					expressions: ["req.url.contains('/api/specific_endpoint')"],
					actions: [
						{
							type: "rate-limit",
							config: {
								name: "Only allow 30 requests per minute",
								algorithm: "sliding_window",
								capacity: 30,
								rate: "60s",
								bucket_key: ["conn.client_ip"],
							},
						},
					],
				},
			],
		}}
	/>
);
