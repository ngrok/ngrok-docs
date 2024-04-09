# ngrok Platform Licensing FAQ

This guide will walk you through frequently asked questions about ngrok's licensing model.

# What resources in ngrok’s free plan are limited?

| Resource          | Limit on Free |
| ----------------- | ------------- |
| Data Transfer Out | 1 GB          |
| Endpoints[^1]     | 1             |
| Requests          | 10,000        |
| TCP Connections   | 10,000        |
| TLS Connections   | 10,000        |

# How can I see how my account stacks up against my limits?

The ngrok usage page at dashboard.ngrok.com/usage

# How often do limits refresh?

Your count of resources against a limit refreshes on the first day of each month.

## How it works

ngrok’s plans are designed to suit the use cases of individuals, teams, and organizations using ngrok to create secure ingress for development and production workloads. Each license at ngrok roughly represents a developer using an ngrok agent for building an application. It includes the ability to run an ngrok agent (or use the agent SDKs or Kubernetes Ingress Controller) with a custom domain or TCP Address.

## What's the difference between the usage-based and seat-based plans?

ngrok services are and will always be offered on a limited free tier to the broader community.

Seat-based plans are intended for developers, teams, and organizations using ngrok to test and share their apps publicly.

Usage-based plans are intended for developers who have production workloads and services that they choose to front with ngrok.

For details and to select a different plan, see [ngrok pricing](https://ngrok.com/pricing?ref=docs).

## What do I get for free on ngrok?

Resources included for free:

| Resource              | Limit on Free          |
| --------------------- | ---------------------- |
| Users                 | 1                      |
| Active Endpoints[^1]  | 1                      |
| ngrok static domain   | 1                      |
| Tunnels per agent     | up to 3                |
| Bandwidth             | 1 GB Outgoing/month    |
| TCP Connection Rate   | 120/min                |
| Agents                | 1                      |
| Edges                 | 1                      |
| Logs/Events           | Up to 10,000 per month |
| OAuth/OIDC MAU        | Up to 5 per month      |
| HTTP Requests         | Up to 20,000/month    |
| Webhook verifications | Up to 500/month        |

Features included for free on all plans

- HTTPS Tunnels
- HTTPS Edges
- Web Inspection Agent
- Replay Requests
- ngrok SDKs
- ngrok Kubernetes Ingress Controller
- Remote Agent Management
- Circuit Breaking
- Automatic Certificates and Encryption
- Email Support

## I hit a limit on my plan. What are my options?

ngrok's [free plans](https://ngrok.com/docs/guides/licensing/#what-do-i-get-for-free-on-ngrok) are generous, but some users on Free and Personal plans will find that they run into limits.

If you run into a limit, you have two options:

- You can wait for your cycle to refresh (limits refresh every 30 days per account)
- Upgrade to a plan with higher limits. If you're using ngrok for testing webhooks, the Pro plan is probably the best fit. If you're using ngrok for production, try the Pay-as-you-go plan.

## What do I pay for in ngrok’s Pay-as-you-go pricing?

On ngrok’s pay-as-you-go plan, you get more features and fewer limits (with the option to pay more for resources) than you would on free or the user-based plans. Please note: Our pay-as-you-go plan does have a minimum of $15 per month, invoiced monthly.

| Resource              | Limit on Free          | Advanced Usage-Based plan                               |
| --------------------- | ---------------------- | ------------------------------------------------------- |
| Users                 | 1                      | Unlimited at $0                                         |
| Active Endpoints[^1]  | 1                      | $15 per active endpoint per month                       |
| Custom Domains        | None                   | Unlimited at $0, pay per active endpoint                |
| Tunnels per agent     | up to 3                | Up to 20                                                |
| Bandwidth             | 1 GB/month             | Up to 1GB per month at $0<br /> $0.10 per additional GB |
| TCP Connection Rate   | 120/min                | 120/min                                                 |
| Agents                | 1                      | Unlimited at $0, pay per active endpoint                |
| Edges                 | 1                      | Unlimited at $0, pay per active endpoint                |
| Logs/Events           | Up to 10,000 per month | Up to 10,000/m <br /> $1 per additional 10,000          |
| OAuth/OIDC MAU        | Up to 5 per month      | Up to 5/month <br /> $0.07 per additional MAU           |
| SAML MAU              | None                   | Up to 5/month <br /> $5 per additional MAU              |
| HTTP Requests         | Up to 100,000/month    | Up to 100,000/m <br /> $0.01 per additional 100,000     |
| Webhook verifications | Up to 500/month        | Up to 2,500/m <br /> $0.10 per additional 10,000        |

[^1]: Active Endpoints: a domain that sends or receives data through ngrok in a given month
