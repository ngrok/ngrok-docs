<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"event_subscriptions": [
		{
			"created_at": "2024-04-29T18:29:37Z",
			"description": "ip policy creations",
			"destinations": [
				{
					"id": "ed_2fmnylp9CxPoBUIZD0lxStarJG5",
					"uri": "https://api.ngrok.com/event_destinations/ed_2fmnylp9CxPoBUIZD0lxStarJG5"
				}
			],
			"id": "esb_2fmnynPkU5YMPRg7CjvDB0Lgkir",
			"metadata": "{\"environment\": \"staging\"}",
			"sources": [
				{
					"type": "ip_policy_created.v0",
					"uri": "https://api.ngrok.com/event_subscriptions/esb_2fmnynPkU5YMPRg7CjvDB0Lgkir/sources/ip_policy_created.v0"
				}
			],
			"uri": "https://api.ngrok.com/event_subscriptions/esb_2fmnynPkU5YMPRg7CjvDB0Lgkir"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/event_subscriptions"
}
```
