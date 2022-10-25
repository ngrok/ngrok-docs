# Webhook Verification
------------

The webhook verification module allows ngrok to assert requests to your endpoint originate from a supported webhook provider like Slack or Github.

The currently supported webhook providers are:

| Provider | Provider Identifier | Docs Link |
| --- | --- | --- |
| AfterShip | `aftership` | [Documentation](https://www.aftership.com/docs/aftership/95a6c99e13602-webhook-signature) |
| Airship | `airship` | [Documentation](https://support.airship.com/hc/en-us/articles/360032501831-Implementing-a-Signature-Hash-and-Validating-an-Open-Channel-Webhook) |
| Amazon SNS | `sns` | [Documentation](https://docs.aws.amazon.com/sns/latest/dg/sns-verify-signature-of-message.html) |
| Autodesk | `autodesk_forge` | [Documentation](https://forge.autodesk.com/en/docs/webhooks/v1/developers_guide/basics/#secret-token) |
| Bitbucket | `bitbucket` | [Documentation](https://confluence.atlassian.com/bitbucketserver/manage-webhooks-938025878.html#Managewebhooks-webhooksecrets) |
| Bolt | `bolt` | [Documentation](https://help.bolt.com/developers/guides/webhooks/hook-verification/) |
| Box | `box` | [Documentation](https://developer.box.com/guides/webhooks/v2/signatures-v2/) |
| Brex | `brex` | [Documentation](https://developer.brex.com/docs/webhooks/) |
| Buildkite | `buildkite` | [Documentation](https://buildkite.com/docs/apis/webhooks#webhook-signature) |
| Calendly | `calendly` | [Documentation](https://calendly.stoplight.io/docs/api-docs/ZG9jOjM2MzE2MDM4-webhook-signatures#verifying-signatures) |
| Castle | `castle` | [Documentation](https://docs.castle.io/docs/subscribe-to-webhooks) |
| Chargify | `chargify` | [Documentation](https://maxio-chargify.zendesk.com/hc/en-us/articles/5405357509645-Webhooks-Reference#webhook-signature) |
| CircleCI | `circleci` | [Documentation](https://circleci.com/docs/2.0/webhooks/) |
| Clearbit | `clearbit` | [Documentation](https://dashboard.clearbit.com/docs#webhooks-securing-webhooks) |
| Coinbase | `coinbase` | [Documentation](https://docs.cloud.coinbase.com/commerce/docs/webhooks-fields-and-security) |
| Contentful | `contentful` | [Documentation](https://www.contentful.com/developers/docs/extensibility/app-framework/request-verification/) |
| DocuSign | `docusign` | [Documentation](https://developers.docusign.com/platform/webhooks/connect/hmac/) |
| Dropbox | `dropbox` | [Documentation](https://www.dropbox.com/developers/reference/webhooks) |
| Facebook Graph API | `facebook_graph_api` | [Documentation](https://developers.facebook.com/docs/graph-api/webhooks/getting-started/#verification-requests) |
| Facebook Messenger | `facebook_messenger` | [Documentation](https://developers.facebook.com/docs/messenger-platform/webhook/#security) |
| Frame.io | `frameio` | [Documentation](https://developer.frame.io/docs/automations-webhooks/webhooks-overview#verify-webhook-signatures) |
| GitHub | `github` | [Documentation](https://developer.github.com/webhooks/securing/) |
| GitLab | `gitlab` | [Documentation](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html) |
| Go1 | `go1` | [Documentation](https://www.go1.com/developers/partners/concepts/webhook-signature-authentification) |
| GraphCMS | `graphcms` | [Documentation](https://graphcms.com/docs/api-reference/basics/webhooks) |
| Heroku | `heroku` | [Documentation](https://devcenter.heroku.com/articles/app-webhooks#securing-webhook-requests) |
| Hubspot | `hubspot` | [Documentation](https://developers.hubspot.com/docs/api/webhooks/validating-requests?__hstc=83945990.b168c4bd4d28eeb985bb9c1f6f60be78.1642547408851.1665184505642.1665233861688.501&__hssc=83945990.2.1665233861688&__hsfp=3833684012) |
| Intercom | `intercom` | [Documentation](https://developers.intercom.com/building-apps/docs/webhook-model#section-signed-notifications) |
| Launch Darkly | `launch_darkly` | [Documentation](https://docs.launchdarkly.com/home/connecting/webhooks#signing-webhooks) |
| Mailchimp | `mailchimp` | [Documentation](https://mailchimp.com/developer/transactional/guides/track-respond-activity-webhooks/#authenticating-webhook-requests) |
| Mailgun | `mailgun` | [Documentation](https://documentation.mailgun.com/en/latest/api-webhooks.html#webhooks) |
| Microsoft Teams | `microsoft_teams` | [Documentation](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-outgoing-webhook?tabs=verifyhmactoken%2Cdotnet) |
| Modern Treasury | `modern_treasury` | [Documentation](https://docs.moderntreasury.com/docs/verifying-webhooks) |
| MongoDB | `mongodb` | [Documentation](https://www.mongodb.com/docs/realm/endpoints/#payload-signature-verification) |
| Mux | `mux` | [Documentation](https://docs.mux.com/guides/video/verify-webhook-signatures) |
| Orbit | `orbit` | [Documentation](https://orbit.love/knowledge-base/webhooks) |
| PagerDuty | `pagerduty` | [Documentation](https://developer.pagerduty.com/docs/ZG9jOjExMDI5NTkz-verifying-signatures) |
| Pinwheel | `pinwheel` | [Documentation](https://docs.pinwheelapi.com/docs/webhook-signature-verification) |
| Plivo | `plivo` | [Documentation](https://www.plivo.com/docs/sms/concepts/signature-validation) |
| Pusher | `pusher` | [Documentation](https://pusher.com/docs/channels/server_api/webhooks/#authentication) |
| SendGrid | `sendgrid` | [Documentation](https://docs.sendgrid.com/for-developers/tracking-events/getting-started-event-webhook-security-features) |
| Sentry | `sentry` | [Documentation](https://docs.sentry.io/product/integrations/integration-platform/webhooks/#sentry-hook-signature) |
| Shopify | `shopify` | [Documentation](https://help.shopify.com/en/api/getting-started/webhooks) |
| Signal Sciences | `signal_sciences` | [Documentation](https://docs.fastly.com/signalsciences/integrations/generic-webhooks/) |
| Slack | `slack` | [Documentation](https://api.slack.com/docs/verifying-requests-from-slack) |
| Sonatype | `sonatype` | [Documentation](https://help.sonatype.com/repomanager3/integrations/webhooks/working-with-hmac-payloads) |
| Square | `square` | [Documentation](https://developer.squareup.com/docs/webhooks/step3validate) |
| Stripe | `stripe` | [Documentation](https://stripe.com/docs/webhooks/signatures) |
| Terraform | `terraform` | [Documentation](https://www.terraform.io/cloud-docs/api-docs/notification-configurations#notification-authenticity) |
| TikTok | `tiktok` | [Documentation](https://developers.tiktok.com/doc/webhooks-verification) |
| Trend Micro Conformity | `trendmicro_conformity` | [Documentation](https://cloudone.trendmicro.com/docs/conformity/webhook-communication/) |
| Twilio | `twilio` | [Documentation](https://www.twilio.com/docs/usage/security#test-the-validity-of-your-webhook-signature) |
| Typeform | `typeform` | [Documentation](https://developer.typeform.com/webhooks/secure-your-webhooks/) |
| VMware | `vmware` | [Documentation](https://docs.vmware.com/en/VMware-Workspace-ONE-UEM/services/System_Settings_On_Prem/GUID-AWT-SYSTEM-ADVANCED-API-NOTIF.html) |
| Webex | `webex` | [Documentation](https://developer.webex.com/docs/api/guides/webhooks#handling-requests-from-webex) |
| Xero | `xero` | [Documentation](https://developer.xero.com/documentation/guides/webhooks/overview/) |
| Zendesk | `zendesk` | [Documentation](https://developer.zendesk.com/documentation/event-connectors/webhooks/verifying/) |
| Zoom | `zoom` | [Documentation](https://marketplace.zoom.us/docs/api-reference/webhook-reference/#headers) |

If ngrok can't verify a request as coming from the configured provider it will reject the request with a 403 status.
