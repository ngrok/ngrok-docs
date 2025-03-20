import ConfigExample from "../../src/components/ConfigExample";

export const RateLimitAuthentication = () => (
	<ConfigExample
		config={{
			on_http_request: [
				{
					expressions: ["!('Authorization' in req.headers)"],
					name: "Unauthorized rate limiting tier",
					actions: [
						{
							type: "rate-limit",
							config: {
								name: "Allow 10 requests per minute",
								algorithm: "sliding_window",
								capacity: 10,
								rate: "60s",
								bucket_key: ["conn.client_ip"],
							},
						},
					],
				},
				{
					expressions: ["('Authorization' in req.headers)"],
					name: "Authorized rate limiting tier",
					actions: [
						{
							type: "rate-limit",
							config: {
								name: "Allow 100 requests per minute",
								algorithm: "sliding_window",
								capacity: 100,
								rate: "60s",
								bucket_key: ["conn.client_ip"],
							},
						},
					],
				},
			],
			on_http_response: [],
		}}
	/>
);
