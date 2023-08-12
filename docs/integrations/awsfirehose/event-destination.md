---
title: Send Network Logs from ngrok to AWS Firehose
description: Send network traffic logs from ngrok to AWS Firehose
tags:
  - events
  - logs
  - firehose
  - aws
  - event destinations
---

# AWS Firehose Event Destination

---

:::tip TL;DR

To send ngrok events to Firehose:

1. [Obtain Firehose Delivery Stream ARN.](#obtain-firehose-arn)
1. [Create Event Subscription.](#create-event-subscription)
1. [Create Event Destination.](#create-destination)

:::

This guide covers how to send ngrok events including network traffic logs into AWS Firehose.
Some essential use-cases for ngrok events include providing a history of changes within an account, per request visibility for active monitoring/troubleshooting and security traffic inspection or SIEM usage.

By integrating ngrok with Firehose, you can:

- **Quickly identify application issues** in real-time using ngrok request events using Firehose data processing.
- **Historically audit changes occurring within an account**. Be able to historically audit changes within an account.
- **Profile usage of your service** by using Firehose queries and real-time data analytics.
- **Identify security issues** by using ngrok request events.

## **Step 1**: Obtain Firehose Delivery Stream ARN {#obtain-firehose-arn}

For ngrok to successfully send events into Firehose we'll require a delivery stream ARN. To either create or retrieve the ARN, reference the following link [AWS Firehose Stream documentation](https://docs.aws.amazon.com/ses/latest/dg/event-publishing-kinesis-analytics-firehose-stream.html).

## **Step 2**: Create an Event Subscription {#create-event-subscription}

1. Using a browser, go to the [ngrok dashboard](https://dashboard.ngrok.com) and navigate to **Events** on the left hand navigation and select **Create Subscription**.

   ![ngrok event subscription](img/event_sub.png)

2. Within the Event Subscription configuration, provide a description for the event and within the sources tab select **Add Source** to pick and choose which events you would like to send to Firehose.

Once complete, select **Add Event Sources** to confirm your selections.

![ngrok event sources](img/event_sources.png)

## **Step 3**: Create Event Destination {#create-destination}

To send the events to Firehose we'll need to assign an Event Destination to the Event Subscription.

1. Within the Event Subscription configuration Destination Tab, select **Add Destination.**

1. Choose AWS Firehose Logs as the target and fill in the correct information.

   - **Delivery Stream ARN**
   - **Description** - Optional

1. **Create IAM Role** - An IAM role is required to allow ngrok to stream logs into Firehose. Using the information provided by your preferred method of creation, either **API** or **CLI Script**, create the IAM role and provide the role ARN.

![ngrok event destination](img/event_destination.png)

4. Once all required inputs have values, select **Send Test Event** and you should be presented with a Success message. Select **Done** and the Firehose Event Destination setup is complete.

![ngrok event destination success](img/success.png)
