<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "created_at": "2025-09-27T10:08:31Z",
  "description": "kinesis dev stream",
  "format": "json",
  "id": "ed_33HIkDjttLEQi5ziX202COOijHU",
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
  "uri": "https://api.ngrok.com/event_destinations/ed_33HIkDjttLEQi5ziX202COOijHU"
}
```
