<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"created_at": "2024-04-29T18:29:37Z",
	"description": "kinesis dev stream 1 of 3",
	"format": "json",
	"id": "ed_2fmnyoBDanIxubQ7Wd8bSR4i6pX",
	"metadata": "{\"environment\":\"dev\", \"stream\":1}",
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
	"uri": "https://api.ngrok.com/event_destinations/ed_2fmnyoBDanIxubQ7Wd8bSR4i6pX"
}
```
