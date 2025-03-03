<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"event_subscriptions": [
		{
			"created_at": "2025-03-03T10:07:22Z",
			"description": "ip policy creations",
			"destinations": [
				{
					"id": "ed_2tnmvPdrm9hm7sqMZwwrugkbB0M",
					"uri": "https://api.ngrok.com/event_destinations/ed_2tnmvPdrm9hm7sqMZwwrugkbB0M"
				}
			],
			"id": "esb_2tnmvTgsFVfnSh0k3aEOWxHNKD2",
			"metadata": "{\"environment\": \"staging\"}",
			"sources": [
				{
					"type": "ip_policy_created.v0",
					"uri": "https://api.ngrok.com/event_subscriptions/esb_2tnmvTgsFVfnSh0k3aEOWxHNKD2/sources/ip_policy_created.v0"
				}
			],
			"uri": "https://api.ngrok.com/event_subscriptions/esb_2tnmvTgsFVfnSh0k3aEOWxHNKD2"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/event_subscriptions"
}
```
