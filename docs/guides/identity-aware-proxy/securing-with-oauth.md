---
title: Secure your applications with OAuth 2.0
---

# Secure your applications with OAuth 2.0

Ngrok simplifies networking by creating secure ingress to any app, device, or service with a single command or line of code. It's an ingress-as-a-service platform that decouples ingress from infrastructure, removing the hassle of getting code online without provisioning proxies or VPNs.

If you're exposing endpoints with ngrok, it's important to keep them safe and secure. One way to protect them is by using OAuth, which requires visitors to sign in to view your app or webpage. This guide will walk you through the process of securing your ngrok endpoints with OAuth 2.0.

_Note: OAuth is included on the ngrok free plan up to 5 MAUs._

# Adding OAuth Authentication

To secure your applications with OAuth 2.0, you need to add the `--oauth=` flag to your tunnel command:

```
ngrok http 80 --oauth=github
```

By adding the OAuth flag in the example above, only users who log into GitHub can access your applications.

ngrok supports various major OAuth providers such as Google, GitHub, and Microsoft, as well as any solution compatible with OAuth, including OpenID Connect and SAML. This includes Okta, Auth0, and many other identity providers. [Learn more about creating custom OAuth applications here.](https://ngrok.com/docs/cloud-edge/modules/oauth/google/#creating-a-custom-google-oauth-application)

# Granular Authorization Requests

After you add OAuth to secure your application, you may want to further restrict access to specific domains or individual users. This granularity is supported by the `--oauth-allow` flags.

To restrict access by domain use the `--oauth-allow-domain` flag:

```
ngrok http 8080 --oauth=google --oauth-allow-domain=acme.com,doe.com
```

To restrict access by email use the `--oauth-allow-email` flag:

```
ngrok http 8080 --oauth=google --oauth-allow-email=john@acme.com,jane@doe.com
```

# Additional Security Controls

Besides OAuth 2.0, ngrok offers other access controls such as Webhook Verification, Basic Authentication, IP restrictions, and Mutual TLS. Depending on what you’re building, your combination of these controls may differ.
