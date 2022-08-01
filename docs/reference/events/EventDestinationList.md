
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| event_destinations.id | string | | Unique identifier for this Event Destination. |
| event_destinations.metadata | string | | Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes. |
| event_destinations.created_at | string | | Timestamp when the Event Destination was created, RFC 3339 format. |
| event_destinations.description | string | | Human-readable description of the Event Destination. Optional, max 255 bytes. |
| event_destinations.format | string | | The output format you would like to serialize events into when sending to their target. Currently the only accepted value is `JSON`. |
| event_destinations.target.firehose.auth.role.role_arn | string | | An ARN that specifies the role that ngrok should use to deliver to the configured target. |
| event_destinations.target.firehose.auth.creds.aws_access_key_id | string | | The ID portion of an AWS access key. |
| event_destinations.target.firehose.auth.creds.aws_secret_access_key | string | | The secret portion of an AWS access key. |
| event_destinations.target.firehose.delivery_stream_arn | string | | An Amazon Resource Name specifying the Firehose delivery stream to deposit events into. |
| event_destinations.target.kinesis.auth.role.role_arn | string | | An ARN that specifies the role that ngrok should use to deliver to the configured target. |
| event_destinations.target.kinesis.auth.creds.aws_access_key_id | string | | The ID portion of an AWS access key. |
| event_destinations.target.kinesis.auth.creds.aws_secret_access_key | string | | The secret portion of an AWS access key. |
| event_destinations.target.kinesis.stream_arn | string | | An Amazon Resource Name specifying the Kinesis stream to deposit events into. |
| event_destinations.target.cloudwatch_logs.auth.role.role_arn | string | | An ARN that specifies the role that ngrok should use to deliver to the configured target. |
| event_destinations.target.cloudwatch_logs.auth.creds.aws_access_key_id | string | | The ID portion of an AWS access key. |
| event_destinations.target.cloudwatch_logs.auth.creds.aws_secret_access_key | string | | The secret portion of an AWS access key. |
| event_destinations.target.cloudwatch_logs.log_group_arn | string | | An Amazon Resource Name specifying the CloudWatch Logs group to deposit events into. |
| event_destinations.uri | string | | URI of the Event Destination API resource. |
| uri | string | | URI of the Event Destinations list API resource. |
| next_page_uri | string | | URI of the next page, or null if there is no next page. |