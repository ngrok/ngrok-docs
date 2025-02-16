<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"event_subscriptions": [
		{
			"created_at": "2025-02-16T10:08:04Z",
			"description": "ip policy creations",
			"destinations": [
				{
					"id": "ed_2t7Q9pkFdE7FIQb4fdjfHj6kPZ7",
					"uri": "https://api.ngrok.com/event_destinations/ed_2t7Q9pkFdE7FIQb4fdjfHj6kPZ7"
				}
			],
			"id": "esb_2t7Q9pF2nHYPNOhwfGhzKFBUbkv",
			"metadata": "{\"environment\": \"staging\"}",
			"sources": [
				{
					"type": "ip_policy_created.v0",
					"uri": "https://api.ngrok.com/event_subscriptions/esb_2t7Q9pF2nHYPNOhwfGhzKFBUbkv/sources/ip_policy_created.v0"
				}
			],
			"uri": "https://api.ngrok.com/event_subscriptions/esb_2t7Q9pF2nHYPNOhwfGhzKFBUbkv"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/event_subscriptions"
}
```
