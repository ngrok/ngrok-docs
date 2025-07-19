<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "event_destinations": [
    {
      "created_at": "2025-07-19T10:08:14Z",
      "description": "kinesis dev stream",
      "format": "json",
      "id": "ed_305a4Falg6s7nNXhUgyM5FGzCnZ",
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
      "uri": "https://api.ngrok.com/event_destinations/ed_305a4Falg6s7nNXhUgyM5FGzCnZ"
    }
  ],
  "next_page_uri": null,
  "uri": "https://api.ngrok.com/event_destinations"
}
```
