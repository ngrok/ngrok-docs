<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"event_subscriptions": [
		{
			"created_at": "2025-01-29T21:10:13Z",
			"description": "ip policy creations",
			"destinations": [
				{
					"id": "ed_2sJsSmTDZmsS5gutzY8gkaobJsC",
					"uri": "https://api.ngrok.com/event_destinations/ed_2sJsSmTDZmsS5gutzY8gkaobJsC"
				}
			],
			"id": "esb_2sJsSlb6MC7HSyzZVqB3PQgiTXj",
			"metadata": "{\"environment\": \"staging\"}",
			"sources": [
				{
					"type": "ip_policy_created.v0",
					"uri": "https://api.ngrok.com/event_subscriptions/esb_2sJsSlb6MC7HSyzZVqB3PQgiTXj/sources/ip_policy_created.v0"
				}
			],
			"uri": "https://api.ngrok.com/event_subscriptions/esb_2sJsSlb6MC7HSyzZVqB3PQgiTXj"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/event_subscriptions"
}
```
