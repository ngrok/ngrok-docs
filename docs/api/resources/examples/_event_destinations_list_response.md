<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"event_destinations": [
		{
			"id": "ed_2arwbTWWrbJBXVOF7LiQCSZgsdv",
			"metadata": "{\"environment\":\"dev\"}",
			"created_at": "2024-01-12T20:07:56Z",
			"description": "kinesis dev stream",
			"format": "json",
			"target": {
				"firehose": null,
				"kinesis": {
					"auth": {
						"role": {
							"role_arn": "arn:aws:iam::123456789012:role/example"
						},
						"creds": null
					},
					"stream_arn": "arn:ngrok-local:kinesis:us-east-2:123456789012:stream/mystream2"
				},
				"cloudwatch_logs": null,
				"datadog": null
			},
			"uri": "https://api.ngrok.com/event_destinations/ed_2arwbTWWrbJBXVOF7LiQCSZgsdv"
		}
	],
	"uri": "https://api.ngrok.com/event_destinations",
	"next_page_uri": null
}
```
