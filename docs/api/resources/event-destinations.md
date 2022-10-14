import EventDestinationsCreateRequest from './examples/_event_destinations_create_request.md';
import EventDestinationsCreateResponse from './examples/_event_destinations_create_response.md';
import EventDestinationsDeleteRequest from './examples/_event_destinations_delete_request.md';
import EventDestinationsGetRequest from './examples/_event_destinations_get_request.md';
import EventDestinationsGetResponse from './examples/_event_destinations_get_response.md';
import EventDestinationsListRequest from './examples/_event_destinations_list_request.md';
import EventDestinationsListResponse from './examples/_event_destinations_list_response.md';
import EventDestinationsUpdateRequest from './examples/_event_destinations_update_request.md';
import EventDestinationsUpdateResponse from './examples/_event_destinations_update_response.md';

# Event Destinations
------------------

## Create Event Destination

Create a new Event Destination. It will not apply to anything until it is associated with an Event Subscription.

### Request

POST /event_destinations

<EventDestinationsCreateRequest />

#### Parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `metadata` | string | Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes. |
| `description` | string | Human-readable description of the Event Destination. Optional, max 255 bytes. |
| `format` | string | The output format you would like to serialize events into when sending to their target. Currently the only accepted value is `JSON`. |
| `target` | [EventTarget](#api-event-destinations-create-parameters-event-target) | An object that encapsulates where and how to send your events. An event destination must contain exactly one of the following objects, leaving the rest null: `kinesis`, `firehose`, `cloudwatch_logs`, or `s3`. |

#### EventTarget parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `firehose` | [EventTargetFirehose](#api-event-destinations-create-parameters-event-target-firehose) | Configuration used to send events to Amazon Kinesis Data Firehose. |
| `kinesis` | [EventTargetKinesis](#api-event-destinations-create-parameters-event-target-kinesis) | Configuration used to send events to Amazon Kinesis. |
| `cloudwatch_logs` | [EventTargetCloudwatchLogs](#api-event-destinations-create-parameters-event-target-cloudwatch-logs) | Configuration used to send events to Amazon CloudWatch Logs. |

#### EventTargetFirehose parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `auth` | [AWSAuth](#api-event-destinations-create-parameters-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `delivery_stream_arn` | string | An Amazon Resource Name specifying the Firehose delivery stream to deposit events into. |

#### AWSAuth parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `role` | [AWSRole](#api-event-destinations-create-parameters-aws-role) | A role for ngrok to assume on your behalf to deposit events into your AWS account. |
| `creds` | [AWSCredentials](#api-event-destinations-create-parameters-aws-credentials) | Credentials to your AWS account if you prefer ngrok to sign in with long-term access keys. |

#### AWSRole parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `role_arn` | string | An ARN that specifies the role that ngrok should use to deliver to the configured target. |

#### AWSCredentials parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `aws_access_key_id` | string | The ID portion of an AWS access key. |
| `aws_secret_access_key` | string | The secret portion of an AWS access key. |

#### EventTargetKinesis parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `auth` | [AWSAuth](#api-event-destinations-create-parameters-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `stream_arn` | string | An Amazon Resource Name specifying the Kinesis stream to deposit events into. |

#### EventTargetCloudwatchLogs parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `auth` | [AWSAuth](#api-event-destinations-create-parameters-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `log_group_arn` | string | An Amazon Resource Name specifying the CloudWatch Logs group to deposit events into. |


### Response

Returns a 201 response  on success

<EventDestinationsCreateResponse />

#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | Unique identifier for this Event Destination. |
| `metadata` | string | Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes. |
| `created_at` | string | Timestamp when the Event Destination was created, RFC 3339 format. |
| `description` | string | Human-readable description of the Event Destination. Optional, max 255 bytes. |
| `format` | string | The output format you would like to serialize events into when sending to their target. Currently the only accepted value is `JSON`. |
| `target` | [EventTarget](#api-event-destinations-create-fields-event-target) | An object that encapsulates where and how to send your events. An event destination must contain exactly one of the following objects, leaving the rest null: `kinesis`, `firehose`, `cloudwatch_logs`, or `s3`. |
| `uri` | string | URI of the Event Destination API resource. |

#### EventTarget fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `firehose` | [EventTargetFirehose](#api-event-destinations-create-fields-event-target-firehose) | Configuration used to send events to Amazon Kinesis Data Firehose. |
| `kinesis` | [EventTargetKinesis](#api-event-destinations-create-fields-event-target-kinesis) | Configuration used to send events to Amazon Kinesis. |
| `cloudwatch_logs` | [EventTargetCloudwatchLogs](#api-event-destinations-create-fields-event-target-cloudwatch-logs) | Configuration used to send events to Amazon CloudWatch Logs. |

#### EventTargetFirehose fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `auth` | [AWSAuth](#api-event-destinations-create-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `delivery_stream_arn` | string | An Amazon Resource Name specifying the Firehose delivery stream to deposit events into. |

#### AWSAuth fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `role` | [AWSRole](#api-event-destinations-create-fields-aws-role) | A role for ngrok to assume on your behalf to deposit events into your AWS account. |
| `creds` | [AWSCredentials](#api-event-destinations-create-fields-aws-credentials) | Credentials to your AWS account if you prefer ngrok to sign in with long-term access keys. |

#### AWSRole fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `role_arn` | string | An ARN that specifies the role that ngrok should use to deliver to the configured target. |

#### AWSCredentials fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `aws_access_key_id` | string | The ID portion of an AWS access key. |
| `aws_secret_access_key` | string | The secret portion of an AWS access key. |

#### EventTargetKinesis fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `auth` | [AWSAuth](#api-event-destinations-create-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `stream_arn` | string | An Amazon Resource Name specifying the Kinesis stream to deposit events into. |

#### EventTargetCloudwatchLogs fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `auth` | [AWSAuth](#api-event-destinations-create-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `log_group_arn` | string | An Amazon Resource Name specifying the CloudWatch Logs group to deposit events into. |


## Delete Event Destination

Delete an Event Destination. If the Event Destination is still referenced by an Event Subscription.

### Request

DELETE /event_destinations/{id}

<EventDestinationsDeleteRequest />

### Response

Returns a 204 response with no body on success


## Get Event Destination

Get detailed information about an Event Destination by ID.

### Request

GET /event_destinations/{id}

<EventDestinationsGetRequest />

### Response

Returns a 200 response  on success

<EventDestinationsGetResponse />

#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | Unique identifier for this Event Destination. |
| `metadata` | string | Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes. |
| `created_at` | string | Timestamp when the Event Destination was created, RFC 3339 format. |
| `description` | string | Human-readable description of the Event Destination. Optional, max 255 bytes. |
| `format` | string | The output format you would like to serialize events into when sending to their target. Currently the only accepted value is `JSON`. |
| `target` | [EventTarget](#api-event-destinations-get-fields-event-target) | An object that encapsulates where and how to send your events. An event destination must contain exactly one of the following objects, leaving the rest null: `kinesis`, `firehose`, `cloudwatch_logs`, or `s3`. |
| `uri` | string | URI of the Event Destination API resource. |

#### EventTarget fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `firehose` | [EventTargetFirehose](#api-event-destinations-get-fields-event-target-firehose) | Configuration used to send events to Amazon Kinesis Data Firehose. |
| `kinesis` | [EventTargetKinesis](#api-event-destinations-get-fields-event-target-kinesis) | Configuration used to send events to Amazon Kinesis. |
| `cloudwatch_logs` | [EventTargetCloudwatchLogs](#api-event-destinations-get-fields-event-target-cloudwatch-logs) | Configuration used to send events to Amazon CloudWatch Logs. |

#### EventTargetFirehose fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `auth` | [AWSAuth](#api-event-destinations-get-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `delivery_stream_arn` | string | An Amazon Resource Name specifying the Firehose delivery stream to deposit events into. |

#### AWSAuth fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `role` | [AWSRole](#api-event-destinations-get-fields-aws-role) | A role for ngrok to assume on your behalf to deposit events into your AWS account. |
| `creds` | [AWSCredentials](#api-event-destinations-get-fields-aws-credentials) | Credentials to your AWS account if you prefer ngrok to sign in with long-term access keys. |

#### AWSRole fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `role_arn` | string | An ARN that specifies the role that ngrok should use to deliver to the configured target. |

#### AWSCredentials fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `aws_access_key_id` | string | The ID portion of an AWS access key. |
| `aws_secret_access_key` | string | The secret portion of an AWS access key. |

#### EventTargetKinesis fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `auth` | [AWSAuth](#api-event-destinations-get-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `stream_arn` | string | An Amazon Resource Name specifying the Kinesis stream to deposit events into. |

#### EventTargetCloudwatchLogs fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `auth` | [AWSAuth](#api-event-destinations-get-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `log_group_arn` | string | An Amazon Resource Name specifying the CloudWatch Logs group to deposit events into. |


## List Event Destinations

List all Event Destinations on this account.

### Request

GET /event_destinations

<EventDestinationsListRequest />

### Response

Returns a 200 response  on success

<EventDestinationsListResponse />

#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `event_destinations` | [EventDestination](#api-event-destinations-list-fields-event-destination) | The list of all Event Destinations on this account. |
| `uri` | string | URI of the Event Destinations list API resource. |
| `next_page_uri` | string | URI of the next page, or null if there is no next page. |

#### EventDestination fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | Unique identifier for this Event Destination. |
| `metadata` | string | Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes. |
| `created_at` | string | Timestamp when the Event Destination was created, RFC 3339 format. |
| `description` | string | Human-readable description of the Event Destination. Optional, max 255 bytes. |
| `format` | string | The output format you would like to serialize events into when sending to their target. Currently the only accepted value is `JSON`. |
| `target` | [EventTarget](#api-event-destinations-list-fields-event-target) | An object that encapsulates where and how to send your events. An event destination must contain exactly one of the following objects, leaving the rest null: `kinesis`, `firehose`, `cloudwatch_logs`, or `s3`. |
| `uri` | string | URI of the Event Destination API resource. |

#### EventTarget fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `firehose` | [EventTargetFirehose](#api-event-destinations-list-fields-event-target-firehose) | Configuration used to send events to Amazon Kinesis Data Firehose. |
| `kinesis` | [EventTargetKinesis](#api-event-destinations-list-fields-event-target-kinesis) | Configuration used to send events to Amazon Kinesis. |
| `cloudwatch_logs` | [EventTargetCloudwatchLogs](#api-event-destinations-list-fields-event-target-cloudwatch-logs) | Configuration used to send events to Amazon CloudWatch Logs. |

#### EventTargetFirehose fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `auth` | [AWSAuth](#api-event-destinations-list-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `delivery_stream_arn` | string | An Amazon Resource Name specifying the Firehose delivery stream to deposit events into. |

#### AWSAuth fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `role` | [AWSRole](#api-event-destinations-list-fields-aws-role) | A role for ngrok to assume on your behalf to deposit events into your AWS account. |
| `creds` | [AWSCredentials](#api-event-destinations-list-fields-aws-credentials) | Credentials to your AWS account if you prefer ngrok to sign in with long-term access keys. |

#### AWSRole fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `role_arn` | string | An ARN that specifies the role that ngrok should use to deliver to the configured target. |

#### AWSCredentials fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `aws_access_key_id` | string | The ID portion of an AWS access key. |
| `aws_secret_access_key` | string | The secret portion of an AWS access key. |

#### EventTargetKinesis fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `auth` | [AWSAuth](#api-event-destinations-list-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `stream_arn` | string | An Amazon Resource Name specifying the Kinesis stream to deposit events into. |

#### EventTargetCloudwatchLogs fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `auth` | [AWSAuth](#api-event-destinations-list-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `log_group_arn` | string | An Amazon Resource Name specifying the CloudWatch Logs group to deposit events into. |


## Update Event Destination

Update attributes of an Event Destination.

### Request

PATCH /event_destinations/{id}

<EventDestinationsUpdateRequest />

#### Parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | Unique identifier for this Event Destination. |
| `metadata` | string | Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes. |
| `description` | string | Human-readable description of the Event Destination. Optional, max 255 bytes. |
| `format` | string | The output format you would like to serialize events into when sending to their target. Currently the only accepted value is `JSON`. |
| `target` | [EventTarget](#api-event-destinations-update-parameters-event-target) | An object that encapsulates where and how to send your events. An event destination must contain exactly one of the following objects, leaving the rest null: `kinesis`, `firehose`, `cloudwatch_logs`, or `s3`. |

#### EventTarget parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `firehose` | [EventTargetFirehose](#api-event-destinations-update-parameters-event-target-firehose) | Configuration used to send events to Amazon Kinesis Data Firehose. |
| `kinesis` | [EventTargetKinesis](#api-event-destinations-update-parameters-event-target-kinesis) | Configuration used to send events to Amazon Kinesis. |
| `cloudwatch_logs` | [EventTargetCloudwatchLogs](#api-event-destinations-update-parameters-event-target-cloudwatch-logs) | Configuration used to send events to Amazon CloudWatch Logs. |

#### EventTargetFirehose parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `auth` | [AWSAuth](#api-event-destinations-update-parameters-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `delivery_stream_arn` | string | An Amazon Resource Name specifying the Firehose delivery stream to deposit events into. |

#### AWSAuth parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `role` | [AWSRole](#api-event-destinations-update-parameters-aws-role) | A role for ngrok to assume on your behalf to deposit events into your AWS account. |
| `creds` | [AWSCredentials](#api-event-destinations-update-parameters-aws-credentials) | Credentials to your AWS account if you prefer ngrok to sign in with long-term access keys. |

#### AWSRole parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `role_arn` | string | An ARN that specifies the role that ngrok should use to deliver to the configured target. |

#### AWSCredentials parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `aws_access_key_id` | string | The ID portion of an AWS access key. |
| `aws_secret_access_key` | string | The secret portion of an AWS access key. |

#### EventTargetKinesis parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `auth` | [AWSAuth](#api-event-destinations-update-parameters-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `stream_arn` | string | An Amazon Resource Name specifying the Kinesis stream to deposit events into. |

#### EventTargetCloudwatchLogs parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `auth` | [AWSAuth](#api-event-destinations-update-parameters-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `log_group_arn` | string | An Amazon Resource Name specifying the CloudWatch Logs group to deposit events into. |


### Response

Returns a 200 response  on success

<EventDestinationsUpdateResponse />

#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | Unique identifier for this Event Destination. |
| `metadata` | string | Arbitrary user-defined machine-readable data of this Event Destination. Optional, max 4096 bytes. |
| `created_at` | string | Timestamp when the Event Destination was created, RFC 3339 format. |
| `description` | string | Human-readable description of the Event Destination. Optional, max 255 bytes. |
| `format` | string | The output format you would like to serialize events into when sending to their target. Currently the only accepted value is `JSON`. |
| `target` | [EventTarget](#api-event-destinations-update-fields-event-target) | An object that encapsulates where and how to send your events. An event destination must contain exactly one of the following objects, leaving the rest null: `kinesis`, `firehose`, `cloudwatch_logs`, or `s3`. |
| `uri` | string | URI of the Event Destination API resource. |

#### EventTarget fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `firehose` | [EventTargetFirehose](#api-event-destinations-update-fields-event-target-firehose) | Configuration used to send events to Amazon Kinesis Data Firehose. |
| `kinesis` | [EventTargetKinesis](#api-event-destinations-update-fields-event-target-kinesis) | Configuration used to send events to Amazon Kinesis. |
| `cloudwatch_logs` | [EventTargetCloudwatchLogs](#api-event-destinations-update-fields-event-target-cloudwatch-logs) | Configuration used to send events to Amazon CloudWatch Logs. |

#### EventTargetFirehose fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `auth` | [AWSAuth](#api-event-destinations-update-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `delivery_stream_arn` | string | An Amazon Resource Name specifying the Firehose delivery stream to deposit events into. |

#### AWSAuth fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `role` | [AWSRole](#api-event-destinations-update-fields-aws-role) | A role for ngrok to assume on your behalf to deposit events into your AWS account. |
| `creds` | [AWSCredentials](#api-event-destinations-update-fields-aws-credentials) | Credentials to your AWS account if you prefer ngrok to sign in with long-term access keys. |

#### AWSRole fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `role_arn` | string | An ARN that specifies the role that ngrok should use to deliver to the configured target. |

#### AWSCredentials fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `aws_access_key_id` | string | The ID portion of an AWS access key. |
| `aws_secret_access_key` | string | The secret portion of an AWS access key. |

#### EventTargetKinesis fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `auth` | [AWSAuth](#api-event-destinations-update-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `stream_arn` | string | An Amazon Resource Name specifying the Kinesis stream to deposit events into. |

#### EventTargetCloudwatchLogs fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `auth` | [AWSAuth](#api-event-destinations-update-fields-aws-auth) | Configuration for how to authenticate into your AWS account. Exactly one of `role` or `creds` should be configured. |
| `log_group_arn` | string | An Amazon Resource Name specifying the CloudWatch Logs group to deposit events into. |
