<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"event_destinations": [
		{
			"created_at": "2024-05-23T20:36:22Z",
			"description": "kinesis dev stream",
			"format": "json",
			"id": "ed_2gsqMBLVvc9CUP2Ox8rtFNUygtt",
			"metadata": "{\"environment\":\"dev\"}",
			"target": {
				"cloudwatch_logs": null,
				"datadog": null,
				"firehose": null,
				"kinesis": {
					"auth": {
						"creds": null,
						"role": {
							"role_arn": "arn:aws:iam::123456789012:role/example"
						}
					},
					"stream_arn": "arn:ngrok-local:kinesis:us-east-2:123456789012:stream/mystream2"
				}
			},
			"uri": "https://api.ngrok.com/event_destinations/ed_2gsqMBLVvc9CUP2Ox8rtFNUygtt"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/event_destinations"
}
```
