---
title: Send Network Logs from ngrok to AWS CloudWatch
description: Send network traffic logs from ngrok to AWS CloudWatch
tags:
  - events
  - logs
  - cloudwatch
  - aws
  - event destinations
---

# AWS CloudWatch Event Destination

---

:::tip TL;DR

To send ngrok events to Cloudwatch:

1. [Obtain CloudWatch log group ARN.](#obtain-cloudwatch-arn)
1. [Create Event Subscription.](#create-event-subscription)
1. [Create Event Destination.](#create-destination)

:::

This guide covers how to send ngrok events including network traffic logs into AWS CloudWatch.
Some essential use-cases for ngrok events include providing a history of changes within an account, per request visibility for active monitoring/troubleshooting and security traffic inspection or SIEM usage.

By integrating ngrok with CloudWatch, you can:

- **Quickly identify application issues** in real-time using ngrok request events using CloudWatch visibility.
- **Historically audit changes occurring within an account**. Be able to historically audit changes within an account.
- **Profile usage of your service** by using CloudWatch queries and analytic charts.
- **Identify security issues** by using ngrok request events.

## **Step 1**: Obtain CloudWatch Log Group ARN {#obtain-cloudwatch-arn}

For ngrok to successfully send events into CloudWatch we'll require a log group ARN. To either create or retrieve the ARN, reference the following link [AWS Log role documentation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html).

## **Step 2**: Create an Event Subscription {#create-event-subscription}

1. Using a browser, go to the [ngrok dashboard](https://dashboard.ngrok.com) and navigate to **Events** on the left hand navigation and select **Create Subscription**.

   ![ngrok event subscription](img/event_sub.png)

2. Within the Event Subscription configuration, provide a description for the event and within the sources tab select **Add Source** to pick and choose which events you would like to send to CloudWatch.

Once complete, select **Add Event Sources** to confirm your selections.

![ngrok event sources](img/event_sources.png)

## **Step 3**: Create Event Destination {#create-destination}

To send the events to CloudWatch we'll need to assign an Event Destination to the Event Subscription.

1. Within the Event Subscription configuration Destination Tab, select **Add Destination.**

1. Choose AWS CloudWatch Logs as the target and fill in the correct information.

   - **Log Group ARN**
   - **Description** - Optional

1. **Create IAM Role** - An IAM role is required to allow ngrok to stream logs into CloudWatch. Using the information provided by your preferred method of creation, either **API** or **CLI Script**, create the IAM role and provide the role ARN.

![ngrok event destination](img/event_destination.png)

4. Once all required inputs have values, select **Send Test Event** and you should be presented with a Success message. Select **Done** and the CloudWatch Event Destination setup is complete.

![ngrok event destination success](img/success.png)
