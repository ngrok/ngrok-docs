# Securing ngrok
--------------

This guide will walk you through recommendations for ensuring you are using ngrok securely.

### Encryption

For our HTTP tunnel type, use `scheme https` to configure the ngrok agent to open only a HTTPS endpoint and not a HTTP endpoint. If you are running the latest ngrok agent, this is the default.

If your local service is not running on the same machine as the ngrok agent, we recommend that you set up TLS encryption for the ngrok agent to upstream service leg of the tunnel using our [local HTTPS feature](/docs/secure-tunnels#http-tunnels-local-https).

For custom domains, use ngrok's [Automated TLS certificates](/docs/cloud-edge#automated-certs) to have ngrok automatically provision a TLS certificate for your endpoint from Let's Encrypt.

### Authtokens

Assign an [unique Authtoken to each ngrok agent](/docs/secure-tunnels#authtoken-per-agent) deployment to isolate issues if a specific Authtoken is compromised.

Set up a [minimum ACL per Authtoken](/docs/secure-tunnels#authtoken-acl-enforcement) to limit the endpoints each agent is able to start.

### ngrok Agent Installation

Do not run ngrok as root, as it should not be necessary.

Do not open any additional incoming ports in your firewall. ngrok only makes an outbound connection upon start.

Consider restricting the IPs that are able to start ngrok agent sessions.

### Dashboard authentication

For authenticating access to the dashboard, ngrok has features for role based access control (RBAC), IP Policy, and SSO.

With RBAC, you can configure permissions for groups of users within your team (for example admins and developers).

Consider restricting the IPs permitted to access the dashboard.

### API authentication

You need a API key to authenticate with the ngrok REST API. API keys are Base64 encoded strings and are available from the ngrok dashboard and also from an API endpoint, which makes it easy to rotate your API keys.

Consider restricting the IPs permitted to access the API. You can do so in the ngrok Dashboard under the Security section.

### TLS termination

TLS Encryption is terminated at different locations depending on the ngrok Tunnel / Edge type and configuration. See the documentation on [Terminating TLS Connections](/docs/cloud-edge#terminating-tls-connections) for more details.

### Automated TLS certificates provisioning

For HTTPS endpoints, ngrok will take care of TLS certificates automatically. For endpoints that are ngrok subdomains, ngrok uses a wildcard \*.ngrok.io certificate. We also provision certificates for your custom domains through Let's Encrypt and handle keeping them up to date for you.

### Minimum TLS version

It is possible to specify the minimum TLS version that clients are required to use to talk to the ngrok edge for your tunnel.

### Observability

ngrok provides functionality for consuming logs for events in the system. For more information, check out our [ngrok Event Subscriptions documentation](/docs/cloud-edge#observability).

