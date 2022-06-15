---
sidebar_position: 11
description: Allows ngrok to assert requests to your endpoint originate from a supported webhook provider like Slack or Github.
---

# Webhook Verification
------------

The webhook verification module allows ngrok to assert requests to your endpoint originate from a supported webhook provider like Slack or Github.

The currently supported webhook providers are:

*   Github - [Github Webhook Docs](https://docs.github.com/en/developers/webhooks-and-events/webhooks/about-webhooks)
*   GitLab - [GitLab Webhook Docs](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html)
*   Intercom - [Intercom Webhook Docs](https://developers.intercom.com/building-apps/docs/setting-up-webhooks)
*   SendGrid - [SendGrid Webhook Docs](https://docs.sendgrid.com/for-developers/tracking-events/getting-started-event-webhook)
*   Shopify - [Shopify Webhook Docs](https://shopify.dev/apps/webhooks)
*   Slack - [Slack Webhook Docs](https://api.slack.com/messaging/webhooks)
*   Amazon Simple Notification Service (AWS SNS) - [AWS SNS Docs](https://docs.aws.amazon.com/sns/latest/dg/sns-http-https-endpoint-as-subscriber.html)
*   Stripe - [Stripe Webhook Docs](https://stripe.com/docs/webhooks)
*   Twilio - [Twilio Webhook Docs](https://www.twilio.com/docs/usage/webhooks)
*   Xero - [Xero Webhook Docs](https://developer.xero.com/documentation/guides/webhooks/overview/)

If ngrok can't verify a request as coming from the configured provider it will reject the request with a 403 status.
