# ngrok Platform Licensing FAQ

This guide will walk you through frequently asked questions about ngrok's licensing model.

# What are ngrok's limits?

This table shows ngrok's plan and overall platform limits. For pricing for on-demand resources or specific development plan features, check out our [pricing](https://ngrok.com/pricing?ref=docs).

| Feature                                       | Free Users          | Development Plans (Personal, Pro, Enterprise) | Production Pay-as-You-Go Plans                                   |
| --------------------------------------------- | ------------------- | --------------------------------------------- | ---------------------------------------------------------------- |
| **Domains**                                   | 1 static domain     | 1 per license                                 | No limit, priced on-demand                                       |
| **Endpoints**                                 | 3                   | 3 per license                                 | No limit, priced on-demand                                       |
| **TCP Addresses**                             | 1 with verification | 1 per license                                 | Priced on-demand, platform limit of 100. Contact us to increase. |
| **Endpoint Hours**                            | No limit            | No limit                                      | No limit, can be priced on-demand, contact us                    |
| **HTTP Requests**                             | 20,000              | Count of requests used (no limits)            | 100,000 and then on-demand pricing                               |
| **TCP Connections**                           | 2,000 connections   | No limit                                      | 10,000 and then on-demand pricing                                |
| **TLS Connections**                           | Not Available       | Count of conns used (no limit)                | 10,000 and then on-demand pricing                                |
| **Data Transfer In**                          | No limit            | No limit                                      | No limit                                                         |
| **Data Transfer Out**                         | 1 GB                | Refer to our pricing page for limits by plan  | 10 GB and then on-demand pricing                                 |
| **Request Rate limit HTTP**                   | 4k per min          | 20k per min                                   | 20k per Min. Contact us to increase.                             |
| **TCP Connection Rate Limit**                 | 120 per min         | 20k per min                                   | 20k per Min. Contact us to increase.                             |
| **Requests with basic policy actions**        | 2,000               | 2,000                                         | 2,000 then an add-on is required                                 |
| **TCP Connections with basic policy actions** | 500                 | 500                                           | 500 then an add-on is required                                   |
| **TLS Connections with basic policy actions** | Not Available       | 500                                           | 500 then an add-on is required                                   |
| **Requests with advanced policy actions**     | 2,000               | 2,000                                         | 2,000 then an add-on is required                                 |
| **TCP Connections with adv policy actions**   | 500                 | 500                                           | 500 then an add-on is required                                   |
| **TLS Connections with adv policy actions**   | Not Available       | 500                                           | 500 then an add-on is required                                   |
| **Requests with ent policy actions**          | 2,000               | 2,000                                         | 2,000 then an add-on is required                                 |
| **TCP Connections with ent policy actions**   | 500                 | 500                                           | 500 then an add-on is required                                   |
| **TLS Connections with ent policy actions**   | Not Available       | 500                                           | 500 then an add-on is required                                   |
| **Agents**                                    | 1                   | 1 per license                                 | Platform limit of 1000. Contact us to increase.                  |
| **Users**                                     | 1                   | 1 per license                                 | Platform limit of 100. Contact us to increase.                   |

# What resources in ngrok’s free plan are limited?

| Resource          | Limit on Free | Limit on Development Plans | Limit on Production Plans |
| ----------------- | ------------- | -------------------------- | ------------------------- |
| Data Transfer Out | 1 GB          | See pricing                | See pricing               |
| Endpoints[^1]     | 1             | See pricing                | See pricing               |
| Requests          | 20,000        | No limit                   | 100,000 then usage-based  |
| TCP Connections   | 5,000         | No limit                   | 10,000 then usage-based   |
| TLS Connections   | 5,000         | No limit                   | 10,000 then usage-based   |

To see current pricing, click here [ngrok pricing](https://ngrok.com/pricing?ref=docs)

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
| HTTP Requests         | Up to 20,000/month     |
| TCP Connections       | Up to 5,000/month      |
| TLS Connections       | Up to 5,000/month      |
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
