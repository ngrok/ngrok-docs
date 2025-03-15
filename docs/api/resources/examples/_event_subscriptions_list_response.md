<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"event_subscriptions": [
		{
			"created_at": "2025-03-15T10:06:48Z",
			"description": "ip policy creations",
			"destinations": [
				{
					"id": "ed_2uLgL0We3jczI8zLcZSNRBX8Bsj",
					"uri": "https://api.ngrok.com/event_destinations/ed_2uLgL0We3jczI8zLcZSNRBX8Bsj"
				}
			],
			"id": "esb_2uLgKzvVeMK6QDmcPgQLVGrhw1c",
			"metadata": "{\"environment\": \"staging\"}",
			"sources": [
				{
					"type": "ip_policy_created.v0",
					"uri": "https://api.ngrok.com/event_subscriptions/esb_2uLgKzvVeMK6QDmcPgQLVGrhw1c/sources/ip_policy_created.v0"
				}
			],
			"uri": "https://api.ngrok.com/event_subscriptions/esb_2uLgKzvVeMK6QDmcPgQLVGrhw1c"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/event_subscriptions"
}
```
