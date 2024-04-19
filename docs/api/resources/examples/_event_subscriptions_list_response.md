<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"event_subscriptions": [
		{
			"created_at": "2024-04-19T20:23:43Z",
			"description": "ip policy creations",
			"destinations": [
				{
					"id": "ed_2fKmcctct90h3Ce14msPrh3nc3A",
					"uri": "https://api.ngrok.com/event_destinations/ed_2fKmcctct90h3Ce14msPrh3nc3A"
				}
			],
			"id": "esb_2fKmccg3tJ1M2GCbN1nOpmiHF7G",
			"metadata": "{\"environment\": \"staging\"}",
			"sources": [
				{
					"type": "ip_policy_created.v0",
					"uri": "https://api.ngrok.com/event_subscriptions/esb_2fKmccg3tJ1M2GCbN1nOpmiHF7G/sources/ip_policy_created.v0"
				}
			],
			"uri": "https://api.ngrok.com/event_subscriptions/esb_2fKmccg3tJ1M2GCbN1nOpmiHF7G"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/event_subscriptions"
}
```
