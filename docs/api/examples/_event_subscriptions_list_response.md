<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"event_subscriptions": [
		{
			"created_at": "2025-01-02T10:07:23Z",
			"description": "ip policy creations",
			"destinations": [
				{
					"id": "ed_2r4JWFMLRcDlSJt12BWwewA4PQX",
					"uri": "https://api.ngrok.com/event_destinations/ed_2r4JWFMLRcDlSJt12BWwewA4PQX"
				}
			],
			"id": "esb_2r4JWDmAeR3mXbrKF0aG7uyKNvI",
			"metadata": "{\"environment\": \"staging\"}",
			"sources": [
				{
					"type": "ip_policy_created.v0",
					"uri": "https://api.ngrok.com/event_subscriptions/esb_2r4JWDmAeR3mXbrKF0aG7uyKNvI/sources/ip_policy_created.v0"
				}
			],
			"uri": "https://api.ngrok.com/event_subscriptions/esb_2r4JWDmAeR3mXbrKF0aG7uyKNvI"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/event_subscriptions"
}
```
