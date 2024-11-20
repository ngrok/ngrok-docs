<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"event_subscriptions": [
		{
			"created_at": "2024-11-20T21:02:19Z",
			"description": "ip policy creations",
			"destinations": [
				{
					"id": "ed_2p88rPxYZCrjGbAVlZCE6HxXS03",
					"uri": "https://api.ngrok.com/event_destinations/ed_2p88rPxYZCrjGbAVlZCE6HxXS03"
				}
			],
			"id": "esb_2p88rNojAGEWT1YAEFuztJsCeWZ",
			"metadata": "{\"environment\": \"staging\"}",
			"sources": [
				{
					"type": "ip_policy_created.v0",
					"uri": "https://api.ngrok.com/event_subscriptions/esb_2p88rNojAGEWT1YAEFuztJsCeWZ/sources/ip_policy_created.v0"
				}
			],
			"uri": "https://api.ngrok.com/event_subscriptions/esb_2p88rNojAGEWT1YAEFuztJsCeWZ"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/event_subscriptions"
}
```
