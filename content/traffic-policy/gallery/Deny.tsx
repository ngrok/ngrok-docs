import ConfigExample from "@components/ConfigExample";

export const Deny = () => (
	<ConfigExample
		config={{
			on_http_request: [
				{
					expressions: ["req.method != 'GET'"],
					actions: [{ type: "deny" }],
				},
			],
		}}
	/>
);
