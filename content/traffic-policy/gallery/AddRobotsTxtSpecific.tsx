import ConfigExample from "@components/ConfigExample";

export const AddRobotsTxtSpecific = () => (
	<ConfigExample
		config={{
			on_http_request: [
				{
					name: "Add `robots.txt` to deny specific bots and crawlers",
					expressions: ["req.url.contains('/robots.txt')"],
					actions: [
						{
							type: "custom-response",
							config: {
								status_code: 200,
								body: "User-agent: ChatGPT-User\\r\\nDisallow: /",
								headers: {
									"content-type": "text/plain",
								},
							},
						},
					],
				},
			],
		}}
	/>
);
