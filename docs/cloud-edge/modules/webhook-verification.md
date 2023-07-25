# Webhook Verification
----------------

## Overview

The Webhook Verification module authenticates that webhook requests sent to
your HTTP endpoints are originated by your webhook provider and intended for
you. It also prevents replay attacks when supported by the provider.

It is configured with a provider name and a secret key given to you by the
provider.

Webhook Verification is important because without it, an attacker could send
malicious payloads to your application which could lead to security
vulnerabilities or leak confidential data.

Webhook requests that are properly authenticated by the provider will be sent
to your upstream application. Other requests will be [rejected with an
error](#errors).

We've written [integration guides for every supported
provider](#supported-providers) to make it easy for you to set up because there
is little standardization among providers.

We contribute everything we learn while building this module back to the
community at [Webhooks.fyi](https://webhooks.fyi).

## Quickstart

### Agent CLI

```
ngrok http 80 --verify-webhook stripe --verify-webhook-secret whsec_secret
```

### Agent Configuration File

```
tunnels:
  example:
    proto: http
    addr: 80
    verify_webhook:
      provider: "twilio"
      secret: "twilio-auth-token"
```

### SSH

```
ssh -R 443:localhost:80 connect.ngrok-agent.com http \
  --verify-webhook slack \
  --verify-webhook-secret slack_signing_secret
```

### Go SDK

```
import (
	"context"
	"net"

	"golang.ngrok.com/ngrok"
	"golang.ngrok.com/ngrok/config"
)

func listenWebhookVerification(ctx context.Context) net.Listener {
	listener, _ := ngrok.Listen(ctx,
		config.HTTPEndpoint(
			config.WithWebhookVerification("shopify", "app-client-secret"),
		),
		ngrok.WithAuthtokenFromEnv(),
	)
	return listener
}
```

### Rust SDK

```
use ngrok::prelude::*;

async fn start_tunnel() -> anyhow::Result<impl Tunnel> {
    let sess = ngrok::Session::builder()
        .authtoken_from_env()
        .connect()
        .await?;
    let tun = sess
        .http_endpoint()
        .webhook_verification("zendesk", "zendesk-signing-secret")
        .listen()
        .await?;
    println!("Listening on URL: {:?}", tun.url());
    Ok(tun)
}
```

### Kubernetes Ingress Controller

```yaml
---
apiVersion: v1
kind: Secret
metadata:
  name: github-webhook-secret
type: Opaque
data:
  secret-token: "<base64-encoded-webhook-secret>"
---
kind: NgrokModuleSet
apiVersion: ingress.k8s.ngrok.com/v1alpha1
metadata:
  name: ngrok-module-set
modules:
  webhookVerification:
    provider: github
    secret:
      name: github-webhook-secret
      key: secret-token
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
  annotations:
    k8s.ngrok.com/modules: ngrok-module-set
spec:
  ingressClassName: ngrok
  rules:
    - host: your-domain.ngrok.app
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: example-service
                port:
                  number: 80
```


### Edges

Webhook Verification is a supported module for HTTPS edges. It is attached to
an edge route. Like all edge modules, it can be configured via API.

- [HTTPS Edge Webhook Verification Module API Resource](/api/resources/https-edge-route-webhook-validation-module/)

## Try it out

Consult the [comprehensive step-by-step integration
guides](#supported-providers) we've written for every supported provider.

## Behavior

If a webhook request is verified, it is sent to the upstream server. If it is
not, ngrok [returns a 403 error response](#errors).

If there is provider-specific behavior it will be documented in the [provider's
integration guide](#supported-providers).

### Timestamp Tolerance

When a webhook provider provides a mechanism to prevent [replay
attacks](https://webhooks.fyi/security/replay-prevention) by including a signed
timestamp in the webhook, ngrok will reject the webhook request if the
difference between the current time and the included timestamp are is outside
of tolerance.

If the webhook provider's documentation suggests a tolerance value, we will use
that.

Otherwise, ngrok uses a tolerance of **180 seconds**.

### Preflight Request Verification

Some webhook providers require a [one-time
verification](https://webhooks.fyi/security/one-time-verification-challenge)
from your application before they will begin sending webhook requests. This
helps providers prevent their webhook infrastructure from being used for DOS
attacks.

When you configure verification for the following providers, ngrok will
automatically handle the pre-flight verification request for your application.

- Twitter
- Wordline
- Zoom

## Reference

### Supported Providers {#supported-providers}

| Provider | Provider Identifier | Integration Guide |
| --- | --- | --- |
| AfterShip | `aftership` | [Documentation](/docs/integrations/aftership/webhooks/) |
| Airship | `airship` | [Documentation](/docs/integrations/airship/webhooks/) |
| Amazon SNS | `sns` | [Documentation](/docs/integrations/amazonsns/webhooks/) |
| Autodesk Platform Services | `autodesk` | [Documentation](/docs/integrations/autodesk/webhooks/) |
| Bitbucket | `bitbucket` | [Documentation](/docs/integrations/bitbucket/webhooks/) |
| Bolt | `bolt` | [Documentation](https://help.bolt.com/developers/guides/webhooks/hook-verification/) |
| Box | `box` | [Documentation](/docs/integrations/box/webhooks/) |
| Brex | `brex` | [Documentation](/docs/integrations/brex/webhooks/) |
| Buildkite | `buildkite` | [Documentation](/docs/integrations/buildkite/webhooks/) |
| Calendly | `calendly` | [Documentation](/docs/integrations/calendly/webhooks/) |
| Castle | `castle` | [Documentation](/docs/integrations/castle/webhooks/) |
| Chargify | `chargify` | [Documentation](/docs/integrations/chargify/webhooks/) |
| CircleCI | `circleci` | [Documentation](/docs/integrations/circleci/webhooks/) |
| Clearbit | `clearbit` | [Documentation](/docs/integrations/clearbit/webhooks/) |
| Clerk | `clerk` | [Documentation](/docs/integrations/clerk/webhooks/) |
| Coinbase | `coinbase` | [Documentation](/docs/integrations/coinbase/webhooks/) |
| Contentful | `contentful` | [Documentation](/docs/integrations/contentful/webhooks/) |
| DocuSign | `docusign` | [Documentation](/docs/integrations/docusign/webhooks/) |
| Dropbox | `dropbox` | [Documentation](/docs/integrations/dropbox/webhooks/) |
| Facebook Graph API | `facebook_graph_api` | [Documentation](/docs/integrations/facebook/webhooks/) |
| Facebook Messenger | `facebook_messenger` | [Documentation](/docs/integrations/facebook-messenger/webhooks/) |
| Frame.io | `frameio` | [Documentation](/docs/integrations/frameio/webhooks/) |
| GitHub | `github` | [Documentation](/docs/integrations/github/webhooks/) |
| GitLab | `gitlab` | [Documentation](/docs/integrations/gitlab/webhooks/) |
| Go1 | `go1` | [Documentation](https://www.go1.com/developers/partners/concepts/webhook-signature-authentification) |
| Heroku | `heroku` | [Documentation](/docs/integrations/heroku/webhooks/) |
| Hosted Hooks | `hostedhooks` | [Documentation](/docs/integrations/hostedhooks/webhooks/) |
| HubsSpot | `hubspot` | [Documentation](/docs/integrations/hubspot/webhooks/) |
| Hygraph (Formerly GraphCMS) | `graphcms` | [Documentation](/docs/integrations/hygraph/webhooks/) |
| Instagram | `instagram` | [Documentation](/docs/integrations/instagram/webhooks/) |
| Intercom | `intercom` | [Documentation](/docs/integrations/intercom/webhooks/) |
| Launch Darkly | `launch_darkly` | [Documentation](/docs/integrations/launchdarkly/webhooks/) |
| Mailchimp | `mailchimp` | [Documentation](/docs/integrations/mailchimp/webhooks/) |
| Mailgun | `mailgun` | [Documentation](/docs/integrations/mailgun/webhooks/) |
| Microsoft Teams | `microsoft_teams` | [Documentation](/docs/integrations/teams/webhooks/) |
| Modern Treasury | `modern_treasury` | [Documentation](/docs/integrations/modern-treasury/webhooks/) |
| MongoDB | `mongodb` | [Documentation](/docs/integrations/mongodb/webhooks/) |
| Mux | `mux` | [Documentation](/docs/integrations/mux/webhooks/) |
| Orbit | `orbit` | [Documentation](/docs/integrations/orbit/webhooks/) |
| PagerDuty | `pagerduty` | [Documentation](/docs/integrations/pagerduty/webhooks/) |
| Pinwheel | `pinwheel` | [Documentation](/docs/integrations/pinwheel/webhooks/) |
| Plivo | `plivo` | [Documentation](/docs/integrations/plivo/webhooks/) |
| Pusher | `pusher` | [Documentation](/docs/integrations/pusher/webhooks/) |
| SendGrid | `sendgrid` | [Documentation](/docs/integrations/sendgrid/webhooks/) |
| Sentry | `sentry` | [Documentation](/docs/integrations/sentry/webhooks/) |
| Shopify | `shopify` | [Documentation](/docs/integrations/shopify/webhooks/) | 
| Signal Sciences | `signal_sciences` | [Documentation](/docs/integrations/signalsciences/webhooks/) |
| Slack | `slack` | [Documentation](/docs/integrations/slack/webhooks/) |
| Sonatype Nexus | `sonatype` | [Documentation](/docs/integrations/sonatype-nexus/webhooks/) |
| Square | `square` | [Documentation](/docs/integrations/square/webhooks/) |
| Stripe | `stripe` | [Documentation](/docs/integrations/stripe/webhooks/) |
| Svix | `svix` | [Documentation](/docs/integrations/svix/webhooks/) |
| Terraform | `terraform` | [Documentation](/docs/integrations/terraform/webhooks/) |
| TikTok | `tiktok` | [Documentation](/docs/integrations/tiktok/webhooks/) |
| Trend Micro Conformity | `trendmicro_conformity` | [Documentation](/docs/integrations/trendmicro/webhooks/) |
| Twilio | `twilio` | [Documentation](/docs/integrations/twilio/webhooks/) |
| Twitter | `twitter` | [Documentation](/docs/integrations/twitter/webhooks/) |
| Typeform | `typeform` | [Documentation](/docs/integrations/typeform/webhooks/) |
| VMware Workspace | `vmware` | [Documentation](/docs/integrations/vmware/webhooks/) |
| Webex | `webex` | [Documentation](/docs/integrations/webex/webhooks/) |
| WhatsApp | `whatsapp` | [Documentation](/docs/integrations/whatsapp/webhooks/) |
| Worldline | `worldline` | [Documentation](/docs/integrations/worldline/webhooks/) |
| Xero | `xero` | [Documentation](/docs/integrations/xero/webhooks/) |
| Zendesk | `zendesk` | [Documentation](/docs/integrations/zendesk/webhooks/) |
| Zoom | `zoom` | [Documentation](/docs/integrations/zoom/webhooks/) |

### Upstream Headers {#upstream-headers}

No additional upstream headers are added by the Webhook Verification module.

### Events

When the Webhook Verification module is enabled, it populates the following
fields in the
[http\_request\_complete.v0](/events/reference/#http-request-complete) event:

| Fields |
| ------ |
| `webhook_verification.decision` |

### Errors

If a webhook request fails verification for any reason, the ngrok edge will
return [ERR\_NGROK\_3204](/errors/err_ngrok_3204/) with a 403 Forbidden status.

### Licensing

Webhook Verification is available on the Free and Personal plans for up to 500
verifications per month. For additional verifications, you must be subscribed
to a Pro or Enterprise plan.
