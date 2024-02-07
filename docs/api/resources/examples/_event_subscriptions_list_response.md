<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"event_subscriptions": [
		{
			"created_at": "2024-02-07T17:37:22Z",
			"description": "ip policy creations",
			"destinations": [
				{
					"id": "ed_2c35VAjpRW3DVWr7x1ozKtG4v8M",
					"uri": "https://api.ngrok.com/event_destinations/ed_2c35VAjpRW3DVWr7x1ozKtG4v8M"
				}
			],
			"id": "esb_2c35V81Jm2EhBDFsDHa8KC5bmuX",
			"metadata": "{\"environment\": \"staging\"}",
			"sources": [
				{
					"type": "ip_policy_created.v0",
					"uri": "https://api.ngrok.com/event_subscriptions/esb_2c35V81Jm2EhBDFsDHa8KC5bmuX/sources/ip_policy_created.v0"
				}
			],
			"uri": "https://api.ngrok.com/event_subscriptions/esb_2c35V81Jm2EhBDFsDHa8KC5bmuX"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/event_subscriptions"
}
```
