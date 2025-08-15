---
title: Secure your applications with OAuth 2.0
---

# Secure your applications with OAuth 2.0

Ngrok simplifies networking by creating secure ingress to any app, device, or service with a single command or line of code. It's an ingress-as-a-service platform that decouples ingress from infrastructure, removing the hassle of getting code online without provisioning proxies or VPNs.

If you're exposing endpoints with ngrok, it's important to keep them safe and secure. One way to protect them is by using OAuth, which requires visitors to sign in to view your app or webpage. This guide will walk you through the process of securing your ngrok endpoints with OAuth 2.0.

_Note: OAuth is included on the ngrok free plan up to 5 MAUs._

# Adding OAuth Authentication

To secure your applications with OAuth 2.0, you need to create a traffic policy file and use the `--traffic-policy-file` flag:

Create a file called `oauth-policy.yml`:

```yaml
on_http_request:
  - actions:
      - type: oauth
        config:
          provider: github
```

Then run your tunnel with the policy file:

```
ngrok http 80 --traffic-policy-file=oauth-policy.yml
```

By adding the OAuth flag in the example above, only users who log into GitHub can access your applications.

ngrok supports various major OAuth providers such as Google, GitHub, and Microsoft, as well as any solution compatible with OAuth, including OpenID Connect and SAML. This includes Okta, Auth0, and many other identity providers. [Learn more about creating custom OAuth applications here.](/integrations/google/oauth/)

# Granular Authorization Requests

After you add OAuth to secure your application, you may want to further restrict access to specific domains or individual users. This granularity is supported by the `--oauth-allow` flags.

To restrict access by domain, use an expression to check the email domain after the OAuth action:

```yaml
on_http_request:
  - actions:
      - type: oauth
        config:
          provider: google
  - expressions:
      - "!(actions.ngrok.oauth.identity.email.endsWith('@acme.com') || actions.ngrok.oauth.identity.email.endsWith('@doe.com'))"
    actions:
      - type: deny
```

Then run:

```
ngrok http 8080 --traffic-policy-file=oauth-policy.yml
```

To restrict access by email, use an expression to check if the email is in the allowed list:

```yaml
on_http_request:
  - actions:
      - type: oauth
        config:
          provider: google
  - expressions:
      - "!(actions.ngrok.oauth.identity.email in ['john@acme.com', 'jane@doe.com'])"
    actions:
      - type: deny
```

Then run:

```
ngrok http 8080 --traffic-policy-file=oauth-policy.yml
```

# Additional Security Controls

Besides OAuth 2.0, ngrok offers other access controls such as Webhook Verification, Basic Authentication, IP restrictions, and Mutual TLS. Depending on what you’re building, your combination of these controls may differ.
