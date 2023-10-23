<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"event_subscriptions": [
		{
			"id": "esb_2XB9wKlkg9yMQd22qOeZ7M7n8Ll",
			"uri": "https://api.ngrok.com/event_subscriptions/esb_2XB9wKlkg9yMQd22qOeZ7M7n8Ll",
			"created_at": "2023-10-23T20:10:42Z",
			"metadata": "{\"environment\": \"staging\"}",
			"description": "ip policy creations",
			"sources": [
				{
					"type": "ip_policy_created.v0",
					"uri": "https://api.ngrok.com/event_subscriptions/esb_2XB9wKlkg9yMQd22qOeZ7M7n8Ll/sources/ip_policy_created.v0"
				}
			],
			"destinations": [
				{
					"id": "ed_2XB9wF6lR3LMEPtyUwEfK5cT8Aj",
					"uri": "https://api.ngrok.com/event_destinations/ed_2XB9wF6lR3LMEPtyUwEfK5cT8Aj"
				}
			]
		}
	],
	"uri": "https://api.ngrok.com/event_subscriptions",
	"next_page_uri": null
}
```
