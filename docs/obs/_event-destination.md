<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | Unique identifier for this Event Destination. |
| metadata | string | Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes. |
| created_at | string | Timestamp when the Event Destination was created, RFC 3339 format. |
| description | string | Human-readable description of the Event Destination. Optional, max 255 bytes. |
| format | string | The output format you would like to serialize events into when sending to their target. Currently the only accepted value is `JSON`. |
| role_arn | string | An ARN that specifies the role that ngrok should use to deliver to the configured target. |
| aws_access_key_id | string | The ID portion of an AWS access key. |
| aws_secret_access_key | string | The secret portion of an AWS access key. |
| delivery_stream_arn | string | An Amazon Resource Name specifying the Firehose delivery stream to deposit events into. |
| role_arn | string | An ARN that specifies the role that ngrok should use to deliver to the configured target. |
| aws_access_key_id | string | The ID portion of an AWS access key. |
| aws_secret_access_key | string | The secret portion of an AWS access key. |
| stream_arn | string | An Amazon Resource Name specifying the Kinesis stream to deposit events into. |
| role_arn | string | An ARN that specifies the role that ngrok should use to deliver to the configured target. |
| aws_access_key_id | string | The ID portion of an AWS access key. |
| aws_secret_access_key | string | The secret portion of an AWS access key. |
| log_group_arn | string | An Amazon Resource Name specifying the CloudWatch Logs group to deposit events into. |
| api_key | string | Datadog API key to use. |
| ddtags | string | Tags to send with the event. |
| service | string | Service name to send with the event. |
| ddsite | string | Datadog site to send event to. |
| tenant_id | string | Tenant ID for the Azure account |
| client_id | string | Client ID for the application client |
| client_secret | string | Client Secret for the application client |
| logs_ingestion_uri | string | Data collection endpoint logs ingestion URI |
| data_collection_rule_id | string | Data collection rule immutable ID |
| data_collection_stream_name | string | Data collection stream name to use as destination, located inside the DCR |
| uri | string | URI of the Event Destination API resource. |