<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"event_subscriptions": [
		{
			"created_at": "2024-02-16T19:35:32Z",
			"description": "ip policy creations",
			"destinations": [
				{
					"id": "ed_2cSjz0vv5yJQk7yU3nFKdOoVKeD",
					"uri": "https://api.ngrok.com/event_destinations/ed_2cSjz0vv5yJQk7yU3nFKdOoVKeD"
				}
			],
			"id": "esb_2cSjz2LJRguF8l36qjVzaxfnlI5",
			"metadata": "{\"environment\": \"staging\"}",
			"sources": [
				{
					"type": "ip_policy_created.v0",
					"uri": "https://api.ngrok.com/event_subscriptions/esb_2cSjz2LJRguF8l36qjVzaxfnlI5/sources/ip_policy_created.v0"
				}
			],
			"uri": "https://api.ngrok.com/event_subscriptions/esb_2cSjz2LJRguF8l36qjVzaxfnlI5"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/event_subscriptions"
}
```
