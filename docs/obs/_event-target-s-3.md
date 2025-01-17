<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| role_arn | string | An ARN that specifies the role that ngrok should use to deliver to the configured target. |
| aws_access_key_id | string | The ID portion of an AWS access key. |
| aws_secret_access_key | string | The secret portion of an AWS access key. |
| bucket_arn | string | An Amazon Resource Name specifying the S3 bucket to deposit events into. |
| object_prefix | string | An optional prefix to prepend to S3 object keys. |
| compression | boolean | Whether or not to compress files with gzip. |
| max_file_size | int64 | How many bytes we should accumulate into a single file before sending to S3. |
| max_file_age | int64 | How many seconds we should batch up events before sending them to S3. |