<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"event_subscriptions": [
		{
			"id": "esb_2ZGowFODYe51hXJXRps2foPNKEf",
			"uri": "https://api.ngrok.com/event_subscriptions/esb_2ZGowFODYe51hXJXRps2foPNKEf",
			"created_at": "2023-12-08T17:53:33Z",
			"metadata": "{\"environment\": \"staging\"}",
			"description": "ip policy creations",
			"sources": [
				{
					"type": "ip_policy_created.v0",
					"uri": "https://api.ngrok.com/event_subscriptions/esb_2ZGowFODYe51hXJXRps2foPNKEf/sources/ip_policy_created.v0"
				}
			],
			"destinations": [
				{
					"id": "ed_2ZGowJtTfJDhZPefg9k7S8FqHzq",
					"uri": "https://api.ngrok.com/event_destinations/ed_2ZGowJtTfJDhZPefg9k7S8FqHzq"
				}
			]
		}
	],
	"uri": "https://api.ngrok.com/event_subscriptions",
	"next_page_uri": null
}
```
