---
sidebar_position: 4
---

# Event Subscriptions
--------------

Each action that happens in ngrok is published as an event, and Event Subscriptions allow you to subscribe to events that you are interested in and write those events to one or more destinations.

A subscription is made up of event sources, some of which can be filtered, and event destinations. Each subscription can send the events to one or more destinations, such as Amazon CloudWatch Logs, Amazon Kinesis (as a data stream) or Amazon Kinesis Firehose (as a delivery stream).

Event subscriptions can be configured through the [ngrok Dashboard](https://dashboard.ngrok.com/events/subscriptions) or the [ngrok API](/docs/api#api-event-subscriptions-create).

## Event Sources

Event Sources represent events from your ngrok account. See the [ngrok Event Sources reference](/docs/events) for a full list of sources and fields.

Many objects within ngrok have corresponding events that are generated when an instance of the object is created, updated and deleted. All Event Types have a version, represented in the Event Type string following the period. The initial version for all Event Types is `v0`.

Some event types support filters and selectable fields. Not all selectable fields are usable in filters. A full list of event types and their fields follows. A field marked "filterable" indicates that it is usable in the filter for an event source.

## Filtering Events

Some events, such as HTTP Request Complete and TCP Connection Closed, are high cardinality events. As such, these events can quickly hit the limits of the receiving destination. To reduce the number of events returned from these sources, you can add filtering logic to only allow specific events through to your destination.

See our [event filtering reference](/docs/events/filtering) for filtering examples.

## Event Destinations

An Event Destination specifies a service and configuration that allows ngrok to publish events to it. You can send a set of Events to one or more Destinations. Destinations can be shared across multiple subscriptions. You can configure destinations to send events to the following services:

*   AWS CloudWatch Logs
*   AWS Firehose
*   AWS S3 (via Firehose)
*   AWS Kinesis

As noted above, you can configure AWS Kinesis Firehose to [deliver events into an S3 bucket](https://docs.aws.amazon.com/firehose/latest/dev/create-destination.html#create-destination-s3).

Each destination requires a different setup. We have a helper script to automate setup but you can also configure these integrations via the AWS Console or a tool like Terraform. Once you've configured your destination, you can test it by sending a test event from the dashboard to make sure it is configured correctly.
