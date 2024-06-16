<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"event_subscriptions": [
		{
			"created_at": "2024-06-14T06:03:59Z",
			"description": "ip policy creations",
			"destinations": [
				{
					"id": "ed_2hrGyrF4wPic8yIGrchlpSRert3",
					"uri": "https://api.ngrok.com/event_destinations/ed_2hrGyrF4wPic8yIGrchlpSRert3"
				}
			],
			"id": "esb_2hrGyppGFG9dgvpjYdztK8NhtfQ",
			"metadata": "{\"environment\": \"staging\"}",
			"sources": [
				{
					"type": "ip_policy_created.v0",
					"uri": "https://api.ngrok.com/event_subscriptions/esb_2hrGyppGFG9dgvpjYdztK8NhtfQ/sources/ip_policy_created.v0"
				}
			],
			"uri": "https://api.ngrok.com/event_subscriptions/esb_2hrGyppGFG9dgvpjYdztK8NhtfQ"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/event_subscriptions"
}
```
