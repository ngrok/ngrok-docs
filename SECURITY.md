# Security Policy

## Reporting a Vulnerability

At VIVIA CONNECT, security is a top priority. If you believe you’ve discovered a potential vulnerability in our application, integrations (e.g., Stripe, Zillow API, Realtor syndication), or infrastructure, we encourage responsible disclosure.

Please report security issues directly to our security team:

📧 **Email**: security@viviarentals.com  
🔐 **PGP Key** (optional): [https://viviarentals.com/security-pgp](https://viviarentals.com/security-pgp)

We will acknowledge your report within 2 business days and aim to provide a resolution timeline based on the severity of the issue.

---

## Supported Versions

| Version | Supported |
|---------|-----------|
| `main` (production) | ✅ Yes |
| `dev` (testing/staging) | ✅ Yes |
| Any deprecated branches | ❌ No |

---

## Scope

This policy applies to:

- [viviarentals.com](https://viviarentals.com)
- Stripe integrations (Elements, Checkout, Connect)
- Google Cloud deployed functions
- Webhooks (e.g., `/stripe_webhooks`, `/zillow_webhooks`, `/realtor_webhooks`)
- Admin tools and dashboards

---

## Exclusions

Please avoid automated scans or denial-of-service attacks. These are outside the scope of responsible disclosure.

---

Thank you for helping us keep VIVIA CONNECT safe and secure for everyone.
