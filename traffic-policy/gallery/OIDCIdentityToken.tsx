import ConfigExample from "../../src/components/ConfigExample";

export const OIDCIdentityToken = () => (
	<ConfigExample
		config={{
			on_http_request: [
				{
					name: "OIDC",
					actions: [
						{
							type: "openid-connect",
							config: {
								issuer_url: "https://accounts.google.com",
								client_id: "<your-oidc-client-id>",
								client_secret: "<your-oidc-client-secret>",
								scopes: ["openid", "profile", "email"],
							},
						},
					],
				},
				{
					name: "Headers",
					actions: [
						{
							type: "add-headers",
							config: {
								headers: {
									"id-token": "${actions.ngrok.oidc.identity_token}",
								},
							},
						},
					],
				},
			],
		}}
	/>
);
