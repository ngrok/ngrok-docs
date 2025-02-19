import ConfigExample from "../../src/components/ConfigExample";

export const DeprecateVersion = () => (
	<ConfigExample
		config={{
			on_http_request: [
				{
					expressions: ["'2' in req.headers['X-Api-Version']"],
					name: "Deprecate API v2",
					actions: [
						{
							type: "custom-response",
							config: {
								status_code: 400,
								content:
									'{"error":{"message":"Version 2 of the API is no longer supported. Use Version 3 instead."}}',
							},
						},
					],
				},
			],
			on_http_response: [],
		}}
	/>
);
