<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "created_at": "2025-09-06T10:07:49Z",
  "description": "kinesis dev stream",
  "format": "json",
  "id": "ed_32Jz4GA7WV0UsbDgBrx2eARj0eN",
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
  "uri": "https://api.ngrok.com/event_destinations/ed_32Jz4GA7WV0UsbDgBrx2eARj0eN"
}
```
