
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| id | string | | Unique identifier for this Event Destination. |
| metadata | string | | Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes. |
| description | string | | Human-readable description of the Event Destination. Optional, max 255 bytes. |
| format | string | | The output format you would like to serialize events into when sending to their target. Currently the only accepted value is `JSON`. |
| target.firehose.auth.role.role_arn | string | | An ARN that specifies the role that ngrok should use to deliver to the configured target. |
| target.firehose.auth.creds.aws_access_key_id | string | | The ID portion of an AWS access key. |
| target.firehose.auth.creds.aws_secret_access_key | string | | The secret portion of an AWS access key. |
| target.firehose.delivery_stream_arn | string | | An Amazon Resource Name specifying the Firehose delivery stream to deposit events into. |
| target.kinesis.auth.role.role_arn | string | | An ARN that specifies the role that ngrok should use to deliver to the configured target. |
| target.kinesis.auth.creds.aws_access_key_id | string | | The ID portion of an AWS access key. |
| target.kinesis.auth.creds.aws_secret_access_key | string | | The secret portion of an AWS access key. |
| target.kinesis.stream_arn | string | | An Amazon Resource Name specifying the Kinesis stream to deposit events into. |
| target.cloudwatch_logs.auth.role.role_arn | string | | An ARN that specifies the role that ngrok should use to deliver to the configured target. |
| target.cloudwatch_logs.auth.creds.aws_access_key_id | string | | The ID portion of an AWS access key. |
| target.cloudwatch_logs.auth.creds.aws_secret_access_key | string | | The secret portion of an AWS access key. |
| target.cloudwatch_logs.log_group_arn | string | | An Amazon Resource Name specifying the CloudWatch Logs group to deposit events into. |