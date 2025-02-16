<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"event_destinations": [
		{
			"created_at": "2025-02-16T10:08:04Z",
			"description": "kinesis dev stream",
			"format": "json",
			"id": "ed_2t7Q9rGUJN5QVBrJgi4bIWqALNd",
			"metadata": "{\"environment\":\"dev\"}",
			"target": {
				"azure_logs_ingestion": null,
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
			"uri": "https://api.ngrok.com/event_destinations/ed_2t7Q9rGUJN5QVBrJgi4bIWqALNd"
		}
	],
	"next_page_uri": null,
	"uri": "https://api.ngrok.com/event_destinations"
}
```
