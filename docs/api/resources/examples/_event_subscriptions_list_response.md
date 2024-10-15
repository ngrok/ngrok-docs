<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"event_subscriptions": [
		{
			"created_at": "2024-10-11T22:09:11Z",
			"description": "ip policy creations",
			"destinations": [
				{
					"id": "ed_2nJI3JpwWQBDmmtEIYwjfwTLFuH",
					"uri": "https://api.ngrok.com/event_destinations/ed_2nJI3JpwWQBDmmtEIYwjfwTLFuH"
				}
			],
			"id": "esb_2nJI3LCUWRTLmOcpQ82mOGqQwMI",
			"metadata": "{\"environment\": \"staging\"}",
			"sources": [
				{
					"type": "ip_policy_created.v0",
					"uri": "https://api.ngrok.com/event_subscriptions/esb_2nJI3LCUWRTLmOcpQ82mOGqQwMI/sources/ip_policy_created.v0"
				}
			],
			"uri": "https://api.ngrok.com/event_subscriptions/esb_2nJI3LCUWRTLmOcpQ82mOGqQwMI"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/event_subscriptions"
}
```
