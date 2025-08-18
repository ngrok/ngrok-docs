import ConfigExample from "@components/ConfigExample";

export const EnforceTLS = () => (
	<ConfigExample
		config={{
			on_http_request: [
				{
					expressions: ["conn.tls.version < '1.3'"],
					name: "Reject requests using old TLS versions",
					actions: [
						{
							type: "custom-response",
							config: {
								status_code: 401,
								body: "Unauthorized: TLS version too old",
							},
						},
					],
				},
			],
			on_http_response: [],
		}}
	/>
);
