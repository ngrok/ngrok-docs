import ConfigExample from "../../src/components/ConfigExample";

export const OAuthConditionalAccess = () => (
	<ConfigExample
		config={{
			on_http_request: [
				{
					name: "OAuth",
					actions: [
						{
							type: "oauth",
							config: {
								auth_id: "oauth",
								provider: "google",
							},
						},
					],
				},
				{
					name: "good email",
					expressions: [
						"actions.ngrok.oauth.identity.email.endsWith('ngrok.com')",
					],
					actions: [
						{
							type: "custom-response",
							config: {
								content: "Welcome ${actions.ngrok.oauth.identity.name}!",
								status_code: 200,
							},
						},
					],
				},
				{
					name: "bad email",
					expressions: [
						"!actions.ngrok.oauth.identity.email.endsWith('ngrok.com')",
					],
					actions: [
						{
							type: "custom-response",
							config: {
								content:
									"Hey, no auth for you ${actions.ngrok.oauth.identity.name}!",
								status_code: 400,
							},
						},
					],
				},
			],
		}}
	/>
);
