import ConfigExample from "../../src/components/ConfigExample";

export const RateLimitPricing = () => (
	<ConfigExample
		config={{
			on_http_request: [
				{
					expressions: ["!('Tier' in req.headers)"],
					name: "Free rate limiting tier",
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
					expressions: [
						"getReqHeader('tier').exists(v, v.matches('(?i)bronze'))",
					],
					name: "Bronze rate limiting tier",
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
				{
					expressions: [
						"getReqHeader('tier').exists(v, v.matches('(?i)silver'))",
					],
					name: "Bronze rate limiting tier",
					actions: [
						{
							type: "rate-limit",
							config: {
								name: "Allow 1000 requests per minute",
								algorithm: "sliding_window",
								capacity: 1000,
								rate: "60s",
								bucket_key: ["conn.client_ip"],
							},
						},
					],
				},
				{
					expressions: [
						"getReqHeader('tier').exists(v, v.matches('(?i)gold'))",
					],
					name: "Gold rate limiting tier",
					actions: [
						{
							type: "rate-limit",
							config: {
								name: "Allow 10000 requests per minute",
								algorithm: "sliding_window",
								capacity: 10000,
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
