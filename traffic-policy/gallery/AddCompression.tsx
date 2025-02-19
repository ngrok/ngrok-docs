import ConfigExample from "../../src/components/ConfigExample";

export const AddCompression = () => (
	<ConfigExample
		config={{
			on_http_request: [],
			on_http_response: [
				{
					expressions: [],
					name: "Add compression",
					actions: [
						{
							type: "compress-response",
							config: {
								algorithms: ["gzip", "br", "deflate", "compress"],
							},
						},
					],
				},
			],
		}}
	/>
);
