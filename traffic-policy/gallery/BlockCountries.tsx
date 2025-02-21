import ConfigExample from "../../src/components/ConfigExample";

export const BlockCountries = () => (
	<ConfigExample
		config={{
			on_http_request: [
				{
					expressions: [
						"conn.geo.country_code in ['<COUNTRY-01>', '<COUNTRY-02>']",
					],
					name: "Block traffic from unwanted countries",
					actions: [
						{
							type: "custom-response",
							config: {
								status_code: 401,
								content: "Unauthorized request due to country of origin",
							},
						},
					],
				},
			],
			on_http_response: [],
		}}
	/>
);
