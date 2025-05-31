<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "created_at": "2025-05-31T10:07:20Z",
  "description": "kinesis dev stream",
  "format": "json",
  "id": "ed_2xrAuSA7H5NryYroTP3be3pAfQh",
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
  "uri": "https://api.ngrok.com/event_destinations/ed_2xrAuSA7H5NryYroTP3be3pAfQh"
}
```
