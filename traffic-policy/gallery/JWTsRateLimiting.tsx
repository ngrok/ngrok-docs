import ConfigExample from "../../src/components/ConfigExample";

export const JWTsRateLimiting = () => (
	<ConfigExample
		config={{
			on_http_request: [
				{
					expressions: [],
					name: "Add JWT authentication and rate limiting",
					actions: [
						{
							type: "rate-limit",
							config: {
								name: "Only allow 30 requests per minute",
								algorithm: "sliding_window",
								capacity: 30,
								rate: "60s",
								bucket_key: ["req.headers['x-api-key']"],
							},
						},
						{
							type: "jwt-validation",
							config: {
								issuer: {
									allow_list: [
										{
											value: "https://<YOUR-AUTH-PROVIDER>",
										},
									],
								},
								audience: {
									allow_list: [
										{
											value: "<YOUR-NGROK-DOMAIN>",
										},
									],
								},
								http: {
									tokens: [
										{
											type: "jwt",
											method: "header",
											name: "Authorization",
											prefix: "Bearer ",
										},
									],
								},
								jws: {
									allowed_algorithms: ["RS256"],
									keys: {
										sources: {
											additional_jkus: [
												"https://<YOUR-AUTH-PROVIDER>/.well-known/jwks.json",
											],
										},
									},
								},
							},
						},
					],
				},
			],
			on_http_response: [],
		}}
	/>
);
