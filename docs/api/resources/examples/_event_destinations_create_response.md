<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
	"id": "ed_2ZGowJr3rw1gc3qDtiQ7JRP2INb",
	"metadata": "{\"environment\":\"dev\"}",
	"created_at": "2023-12-08T17:53:33Z",
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
	"uri": "https://api.ngrok.com/event_destinations/ed_2ZGowJr3rw1gc3qDtiQ7JRP2INb"
}
```
