---
title: Best security practices for developer productivity
sidebar_label: Secure developer productivity
sidebar_position: 3
toc_max_heading_level: 2
---

While developers use ngrok for productivity, organizations must ensure security controls such as single sign-on, MFA, network security, auditing, shadow IT policies, and more, are consistently applied across all networks, including ngrok communications.

This guide describes the best practices and features organizations can apply to consistently secure developers using ngrok while leveraging their existing security investments.

## Why do developers use ngrok?

Developers use ngrok to increase their productivity while building and validating software in a few ways.

### Delivering APIs and applications to production

With a [self-service
platform](https://ngrok.com/blog-post/developer-self-service-composability),
created by a DevOps or platform engineering team, developers can create [internal
endpoints](/docs/universal-gateway/internal-endpoints) for their upstream
services and make them publicly available using an environment-agnostic
configuration&mdash; without needing to wire-up complex networks.

### Exposing localhost apps to the internet for user access and collaboration

In this use-case, developers expose localhost apps for public access so other peers — i.e., product designers, product managers, contractors, and users — can review and validate their work.

### Exposing local environments, APIs, and webhooks for SaaS services and API clients

In this use-case, developers expose webhooks and APIs running on localhost for integration tests with SaaS services — i.e., Slack & MS Team bots, Twilio webhook listeners, Zoom apps — and APIs clients — i.e., mobile apps, desktop apps, B2B services.

By using ngrok as a universal gateway to their APIs and apps, developers eliminate the repetitive tasks and time spent packaging and deploying their apps while testing and tweaking their apps for production usage, saving up to 90% time on each integrated test and review cycle:

![development and test cycle with ngrok](img/1.png)

## How does ngrok secure traffic orchestration?

While most developers begin and end their ngrok usage with simple connectivity, ngrok makes it easy to secure your network traffic with [Traffic Policy](/docs/traffic-policy/), a flexible configuration language to filter, manage, and orchestrate traffic exactly as you need.

With Traffic Policy, you can validate incoming traffic, enforce authentication,
block malicious requests, and choose between multiple forms of TLS termination,
including mTLS.

![ngrok security controls - 7 layers](img/2.png)

Leveraging and combining edge components allows you to meet your security requirements fast and without rearchitecting your services.

## Secure developer productivity

Many organizations allow developers to use ngrok at an individual level. In this deployment model, each developer owns and manages their ngrok tenants and decides which security policies, from ngrok settings to Traffic Policy rules, to apply to their agents and endpoints:

This leads to three challenges:

- **Security inconsistency**: Each developer applies ngrok security based on their own needs and discretion, making security controls inconsistent.
- **No reuse of security investments**: Developers don't have access and bandwidth to appropriately leverage your company's security investments — such as MFA, SSO, and SIEM systems.
- **Difficulty for security oversight**: Security teams have multiple tenants to monitor and secure to keep developers productive and safe.

By following the best practices, organizations manage the ngrok usage in a single tenant, leveraging their security stack and the security team expertise while keeping developer developers happy and productive:

![All developers on the same ngrok tenant with best practices applied](img/4.png)

## Elect a tenant for team usage

To implement security best practices consistently and enable security operations at scale, we recommend using a unified tenant for the team, with a limited number of administrators.

The process of electing and setting up a single tenant involves the following steps:

1. Subscribe to the team tenant and sign up as an administrator.
1. Create administrative accounts for your security and management teams.
1. Invite developers to use ngrok with limited access.

Developers will receive an invitation in their emails to the unified tenant. On sign-in, developers can enter the setup command to reassociate their ngrok agent(s) with your team tenant with `ngrok config add-authtoken ...`.

## Add authentication to public-facing URLs

With OAuth and SAML SSO, you can leverage your company's identity solution (SSO/MFA) or social providers to restrict access to specific public endpoints. ngrok enforces the authentication at the edge and block unauthorized calls before they reach your APIs/apps, providing authentication, authorization, and auditing events while preventing reconnaissance campaigns and DDoS attacks.

ngrok lets you configure authentication in different ways:

### Enterprise authentication and MFA

Use any OIDC-compliant provider—such as Okta, Microsoft Azure AD or AD
FS, Ping, and Auth0—to control access to public endpoints.

With the [`openid-connect` Traffic Policy
action](/docs/traffic-policy/actions/oidc), you can enforce strong
authentication mechanisms and policies defined in your identity solution, such
as Okta Verify, ThreatInsights, and FastPass, Azure
Conditional Access, PingID's MFA, WebAuthn, and Yubikeys.

```yaml
on_http_request:
  - actions:
      - type: openid-connect
        config:
          issuer_url: "<ISSUER_URL>"
          client_id: "<YOUR_APP_CLIIENT_ID>"
          client_secret: "<YOUR_APP_CLIENT_SECRET>"
          scopes:
            - openid
            - profile
            - email
```

### Social authentication

In addition to enterprise identity, you can use the [`oauth` Traffic Policy Action](/docs/traffic-policy/actions/oauth/) configure your endpoints to use social providers, such as GitHub and Google, for authentication. Social identity providers deliver a lightweight option for securing contractors or temp workers without onboarding them in your enterprise SSO solution.

```yaml
on_http_request:
  - actions:
      - type: oauth
        config:
          provider: github
```

To ensure only specific individuals or organizations can access your endpoints, restrict the social authentication based on the user email address or email domain. For example, the following rule enforces an OAuth login with GitHub, and then validates the email used. If the email _does not_ end in `example.com` or _is not exactly_ `john@external.com`, then ngrok denies the request.

```yaml
on_http_request:
- actions:
      - type: oauth
        config:
          provider: github
  - expressions:
      - !(actions.ngrok.oauth.identity.email.endsWith('@example.com')
      - !(actions.ngrok.oauth.identity.email == 'john@external.com')
    actions:
      - type: deny
```

## Secure webhook communications

With the [`verify-webhook` Traffic Policy action](/docs/traffic-policy/actions/verify-webhook), you can ensure only legitimate webhook calls are sent to your endpoints. For example, the following rule would verify all incoming PagerDuty webhooks against the secret value `secret!`, which you set when creating a [generic webhook](/docs/integrations/pagerduty/webhooks.mdx#setup-webhook).

```yaml
on_http_request:
  - actions:
      - type: verify-webhook
        config:
          provider: pagerduty
          secret: secret!
```

With webhook verification, ngrok authenticates webhook request authenticity and message integrity at the edge. As a result, unauthorized calls are blocked even before they even reach your developer's apps, providing authentication and integrity while preventing reconnaissance campaigns and DDoS attacks. To learn more, check our [webhook verification](/docs/traffic-policy/actions/verify-webhook) docs and documentation of providers such as [GitHub](/docs/integrations/github/webhooks/), [Okta](/docs/integrations/okta/webhooks/), and [Twilio](/docs/integrations/twilio/webhooks/).

## Enable IP Policies

[IP Policies](https://dashboard.ngrok.com/ip-policies/) allow companies to restrict access to ngrok based on IPs on all ngrok network communications, including:

- Public access to your endpoints
- The ngrok dashboard
- The ngrok API
- Where ngrok agents are launched (includes the ngrok agent and Docker container)

An ngrok tenant can have multiple policies set for different communications. Each policy may contain multiple deny and allow rules to specific IPv4 and IPv6 addresses:

<img
src={require('./img/ip-policies.png').default}
alt="Restrict access to approved IPs"
className="border rounded"
/>

#### Combining IP Policies and other security controls

IP Policies can be combined with other security controls, such as network, identity, authentication, and device security, for a multi-layered security approach. Examples:

- Combining **IP Policies and SSO/MFA** helps ensure that **only authenticated users on approved networks** can access ngrok endpoints.
- Combining **IP Policies and webhook verification** helps ensure that **only webhook calls from expected IPs** — i.e., [Brex](https://developer.brex.com/docs/webhooks/#ip-whitelisting), [Castle](https://docs.castle.io/docs/webhooks#allowlisting-castle-ips), and [Zoom](https://developers.zoom.us/docs/api/rest/webhook-reference/#ip-addresses), **authenticated and with message integrity** can reach your developer environment.

## Enforce and restrict ngrok agents with ACLs

After implementing access control, webhook security, and IP restrictions, companies must ensure developers launch only endpoints that adhere to security-defined policies. This enforcement can be achieved by using tunnel authtokens with ACLs.

Tunnel authtokens are the secret key used by ngrok agents to connect to the edge and enable remote access. By using ACLs at the authtoken level, security administrators can make sure endpoints are launched only if bound to specific policies, delivering consistent security:

<img
src={require('./img/acls.png').default}
alt="Use ACLs to restrict access to specific configurations and domains"
className="border rounded"
/>

## Track and block unauthorized activity

To ensure ngrok endpoints leverage right security policies, many organizations want to identify and block the use of independent ngrok accounts — using free plans and without the enterprise security controls — inside their networks. Organizations can accomplish that by defining custom ingress domains within ngrok while blocking free ngrok traffic.

With custom ingress domains, ngrok customers can define their own URLs for ngrok traffic within their networks — i.e., `tunnels.example.com`. This definition ensures that sanctioned ngrok traffic uses a dedicated URL, known and approved by IT. Any non-sanctioned traffic on `tunnel.ngrok.com` or `connect.ngrok-agent.com` can be blocked by the firewall at the URL level, without causing outages on approved endpoints:

<img
src={require('./img/tunnel-create.png').default}
alt="Define a custom ingress by picking an address"
className="border rounded"
/>
<img
src={require('./img/tunnel-dns.png').default}
alt="Define a custom ingress with records for your DNS server"
className="border rounded"
/>

## Add SSO and MFA to the admin UI

With Dashboard SSO, you can restrict access to the ngrok administrative interface only for users authenticated in your identity providers — such as Okta, Azure AD, Ping, AD FS, and Auth0. The ngrok dashboard SSO works with any SAML provider, and can be used with your identity provider MFA — i.e., Windows Hello, Okta Verify, FIDO, and PingID — to ensure two-factor authentication (2FA) in compliance with your security requirements.

<img
src={require('./img/mfa-sso.png').default}
alt="Enable both MFA for all accounts and SSO for new developer accounts"
className="border rounded"
/>

## What's next?

Developers use ngrok to increase productivity, whether that's bringing APIs and
apps to production or sharing in-development services running on `localhost`
with peers for collaboration and testing during development.

By following the best practices in this document, you can secure ngrok usage by leveraging your security stack and team's expertise, while keeping developer developers happy and productive.

![All developers on the same ngrok tenant with best practices applied](img/4.png)

- Visit our [Universal Gateway docs](/docs/universal-gateway) to explore more of
  ngrok's interfaces and what you can do with them.
- Learn more about filtering, managing, and taking action on traffic with our
  [Traffic Policy system](/docs/traffic-policy).
