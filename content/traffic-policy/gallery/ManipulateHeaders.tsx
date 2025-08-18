import ConfigExample from "@components/ConfigExample";

export const ManipulateHeaders = () => (
	<ConfigExample
		config={{
			on_http_request: [
				{
					expressions: [],
					name: "Add headers to requests",
					actions: [
						{
							type: "add-headers",
							config: {
								headers: {
									"is-ngrok": "1",
									country: "${.ngrok.geo.country_code}",
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
