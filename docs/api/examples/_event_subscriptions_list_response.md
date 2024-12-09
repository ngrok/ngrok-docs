<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"event_subscriptions": [
		{
			"created_at": "2024-12-04T10:08:38Z",
			"description": "ip policy creations",
			"destinations": [
				{
					"id": "ed_2pkP5gWnppkuARvbu4VkA9fifZ0",
					"uri": "https://api.ngrok.com/event_destinations/ed_2pkP5gWnppkuARvbu4VkA9fifZ0"
				}
			],
			"id": "esb_2pkP5kf183jpl9O049VPKg2RjaY",
			"metadata": "{\"environment\": \"staging\"}",
			"sources": [
				{
					"type": "ip_policy_created.v0",
					"uri": "https://api.ngrok.com/event_subscriptions/esb_2pkP5kf183jpl9O049VPKg2RjaY/sources/ip_policy_created.v0"
				}
			],
			"uri": "https://api.ngrok.com/event_subscriptions/esb_2pkP5kf183jpl9O049VPKg2RjaY"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/event_subscriptions"
}
```
