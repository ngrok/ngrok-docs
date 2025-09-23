<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "created_at": "2025-09-22T18:34:35Z",
  "description": "kinesis dev stream",
  "format": "json",
  "id": "ed_334AfmGep0PZVifHCM3vR3e3H3q",
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
  "uri": "https://api.ngrok.com/event_destinations/ed_334AfmGep0PZVifHCM3vR3e3H3q"
}
```
