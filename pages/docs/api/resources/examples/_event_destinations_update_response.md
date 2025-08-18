<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "created_at": "2025-08-05T19:35:24Z",
  "description": "kinesis dev stream 1 of 3",
  "format": "json",
  "id": "ed_30si8rUzqJc31WnU35aMqlphXJg",
  "metadata": "{\"environment\":\"dev\", \"stream\":1}",
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
  "uri": "https://api.ngrok.com/event_destinations/ed_30si8rUzqJc31WnU35aMqlphXJg"
}
```
