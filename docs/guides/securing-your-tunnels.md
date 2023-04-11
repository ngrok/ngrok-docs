# Securing ngrok
--------------

This guide will walk you through recommendations for ensuring you are using ngrok securely.

## Agent Configuration

### Installation

Do not run ngrok as root, as it should not be necessary.

Do not open any additional incoming ports in your firewall. ngrok only makes an outbound connection upon start.

Consider restricting the IPs that are able to start ngrok agent sessions.

### Authtokens

Assign a [unique Authtoken to each ngrok agent](/secure-tunnels/ngrok-agent/tunnel-authtokens#per-agent-authtokens) deployment to isolate issues if a specific Authtoken is compromised.

Set up a [minimum ACL per Authtoken](/secure-tunnels/ngrok-agent/tunnel-authtokens#authtoken-acl-enforcement) to limit the endpoints each agent is able to start.

### Encryption

For our HTTP tunnel type, use `scheme https` to configure the ngrok agent to open only a HTTPS endpoint and not a HTTP endpoint. If you are running the latest ngrok agent, this is the default.

If your local service is not running on the same machine as the ngrok agent, we recommend that you set up TLS encryption for the ngrok agent to upstream service leg of the tunnel using our [local HTTPS feature](/secure-tunnels/tunnels/http-tunnels#local-https).

For custom domains, use ngrok's [Automated TLS certificates](/cloud-edge/endpoints#automated-tls-certificates) to have ngrok automatically provision a TLS certificate for your endpoint from Let's Encrypt.

### Using a custom ingress domain

If your organization uses a custom ingress domain, your default ngrok configuration will not work. Edit your ngrok agent confirmation to add a [`server_addr`](/ngrok-agent/config#server_addr) parameter to use the custom ingress domain of your organization.

## Tunnel Configuration

### TLS termination

TLS Encryption is terminated at different locations depending on the ngrok Tunnel / Edge type and configuration. See the documentation on [Terminating TLS Connections](/cloud-edge#terminating-tls-connections) for more details.

### Minimum TLS version

It is possible to specify the minimum TLS version that clients are required to use to talk to the ngrok edge for your tunnel.

### Automated TLS certificates provisioning

For HTTPS endpoints, ngrok will take care of TLS certificates automatically. For endpoints that are ngrok subdomains, ngrok uses a wildcard \*.ngrok.io certificate. We also provision certificates for your custom domains through Let's Encrypt and handle keeping them up to date for you.

### Observability

ngrok provides functionality for consuming logs for events in the system. For more information, check out our [ngrok Event Subscriptions documentation](/cloud-edge/observability).

### Blocking non-corporate accounts

For a tighter security policy, most administrators will want to block ngrok accounts that are not a part of their organization. The fastest approach is to block the ingress to the ngrok cloud for all regions with `tunnel.*.ngrok.com` or each region individually via `tunnel.us.ngrok.com`, `tunnel.eu.ngrok.com`, `tunnel.ap.ngrok.com`, `tunnel.au.ngrok.com`, `tunnel.sa.ngrok.com`, `tunnel.jp.ngrok.com`, and `tunnel.in.ngrok.com`


## API Configuration

You need a API key to authenticate with the ngrok REST API. API keys are Base64 encoded strings and are available from the ngrok dashboard and also from an API endpoint, which makes it easy to rotate your API keys.

Consider restricting the IPs permitted to access the API. You can do so in the ngrok Dashboard under the Security section.

## Dashboard Configuration

### Dashboard authentication

For authenticating access to the dashboard, ngrok has features for role based access control (RBAC), IP Policy, and [Single Sign-On](/platform/dashboard#dashboard-sso).

With RBAC, you can configure permissions for groups of users within your team (for example admins and developers).

Consider restricting the IPs permitted to access the dashboard.









