import ConfigExample from "../../src/components/ConfigExample";

export const GettingStarted = () => (
	<ConfigExample
		config={{
			on_http_request: [{
				actions: [{
					type: "custom-response",
					config: {
						status_code: 200,
						content: "Hello, World!",
					},
				}],
			}],
		}}
	/>
);
