export const generalRedirects = {
	"/docs/getting-started/": "/docs/getting-started/agent-cli/",
	"/docs/1": "/docs/",
	"/docs/2": "/docs/",
	"/docs/overview": "/docs/",
	"/docs/ngrok-link": "/docs/universal-gateway/overview/",
	"/docs/api/api-clients": "/docs/api/#client-libraries",
	"/docs/api/client-libraries": "/docs/api/#client-libraries",
	"/docs/api/terraform": "/docs/api/#terraform-provider",
	"/docs/platform/api": "/docs/api/",
	"/docs/platform/events": "/docs/events/",
	"/docs/events/filtering": "/docs/events/#filters",
	"/docs/http-header-templates/": "/docs/traffic-policy/actions/add-headers/",
	"/docs/network-edge/pops": "/docs/universal-gateway/points-of-presence/",
	"/docs/platform/pops": "/docs/universal-gateway/points-of-presence/",
	"/docs/best-practices/security-dev-productivity/":
		"/docs/guides/security-dev-productivity/",
	"/docs/platform/ip-policies/": "/docs/api/resources/ip-policies/",
	"/docs/platform/botusers/": "/docs/user-management/#bot-users",
	"/docs/platform/dashboard/": "/docs/user-management/#sso",
	"/docs/cloud-edge/modules/webhook/":
		"/docs/api/resources/edge-route-webhook-verification-module",
	"/docs/cloud-edge/modules/oauth/amazon/": "/docs/integrations/amazon/oauth/",
	"/docs/cloud-edge/modules/oauth/facebook/":
		"/docs/integrations/facebook/oauth/",
	"/docs/cloud-edge/modules/oauth/github/": "/docs/integrations/github/oauth/",
	"/docs/cloud-edge/modules/oauth/gitlab/": "/docs/integrations/gitlab/oauth/",
	"/docs/cloud-edge/modules/oauth/google/": "/docs/integrations/google/oauth/",
	"/docs/cloud-edge/modules/oauth/linkedin/":
		"/docs/integrations/linkedin/oauth/",
	"/docs/cloud-edge/modules/oauth/microsoft/":
		"/docs/integrations/microsoft/oauth/",
	"/docs/cloud-edge/modules/oauth/twitch/": "/docs/integrations/twitch/oauth/",
	"/docs/cloud-edge/http-header-templates/":
		"/docs/traffic-policy/actions/add-headers/",
	"/docs/integrations/awscloudwatch": "/docs/integrations/amazon-cloudwatch/",
	"/docs/integrations/awsfirehose": "/docs/integrations/amazon-firehose/",
	"/docs/integrations/awskinesis": "/docs/integrations/amazon-kinesis/",
	"/docs/secure-tunnels/tunnels/tcp-tunnels": "/docs/universal-gateway/tcp/",
	"/docs/secure-tunnels/tunnels/ssh-reverse-tunnel-agent":
		"/docs/agent/ssh-reverse-tunnel-agent",

	// /docs/guides -> /docs/guides/other-guides
	// /docs/guides/how-to-set-up-a-custom-domain -> /docs/guides/other-guides/how-to-set-up-a-custom-domain
	"/docs/guides/how-to-set-up-a-custom-domain":
		"/docs/universal-gateway/custom-domains/",
	"/docs/guides/limits": "/docs/pricing-limits",

	"/docs/guides/licensing": "/docs/pricing-limits/",

	// /docs/guides/upgrade-v2-v3 -> /docs/guides/other-guides/upgrade-v2-v3
	"/docs/guides/upgrade-v2-v3": "/docs/guides/other-guides/upgrade-v2-v3",

	// /docs/guides/security-dev-productivity -> /docs/guides/other-guides/security-dev-productivity
	"/docs/guides/security-dev-productivity":
		"/docs/guides/other-guides/security-dev-productivity",

	// /docs/guides/securing-your-tunnels -> /docs/guides/other-guides/securing-your-tunnels
	"/docs/guides/securing-your-tunnels":
		"/docs/guides/other-guides/securing-your-tunnels",

	// /docs/guides/running-behind-firewalls -> /docs/guides/other-guides/running-behind-firewalls
	"/docs/guides/running-behind-firewalls":
		"/docs/guides/other-guides/running-behind-firewalls",

	// /docs/guides/using-tls-mutual-authentication -> /docs/guides/other-guides/using-tls-mutual-authentication
	"/docs/guides/using-tls-mutual-authentication":
		"/docs/guides/other-guides/using-tls-mutual-authentication",

	// /docs/guides/dashboard-sso-okta-setup -> /docs/integrations/okta/dashboard-sso-okta-setup
	"/docs/guides/dashboard-sso-okta-setup":
		"/docs/integrations/okta/dashboard-sso-okta-setup",

	// /docs/guides/load-balancing-with-cloud-edges -> /docs/guides/other-guides/load-balancing-with-cloud-edges
	"/docs/guides/load-balancing-with-cloud-edges":
		"/docs/guides/other-guides/load-balancing-with-cloud-edges",

	// /docs/guides/how-to-round-robin-load-balance-with-ngrok-cloud-edges -> /docs/guides/other-guides/how-to-round-robin-load-balance-with-ngrok-cloud-edges

	"/docs/guides/how-to-round-robin-load-balance-with-ngrok-cloud-edges":
		"/docs/guides/other-guides/how-to-round-robin-load-balance-with-ngrok-cloud-edges",

	// /docs/guides/how-to-do-weighted-load-balancing-with-ngrok-cloud-edges -> /docs/guides/other-guides/how-to-do-weighted-load-balancing-with-ngrok-cloud-edges

	"/docs/guides/how-to-do-weighted-load-balancing-with-ngrok-cloud-edges":
		"/docs/guides/other-guides/how-to-do-weighted-load-balancing-with-ngrok-cloud-edges",

	// /docs/guides/using-labels-within-ngrok -> /docs/guides/other-guides/using-labels-within-ngrok
	"/docs/guides/using-labels-within-ngrok":
		"/docs/guides/other-guides/using-labels-within-ngrok",

	"/docs/guides/site-to-site-dbs": "/docs/guides/site-to-site-connectivity/",

	"/docs/guides/site-to-site-apis": "/docs/guides/site-to-site-connectivity/",

	"/docs/guides/site-to-site-apis-mtls":
		"/docs/guides/site-to-site-connectivity/",

	"/docs/guides/site-to-site-dbs-mtls":
		"/docs/guides/site-to-site-connectivity/",

	// /docs/guides -> /docs/guides/identity-aware-proxy
	// /docs/guides/securing-with-oauth-> /docs/guides/identity-aware-proxy/securing-with-oauth
	"/docs/guides/securing-with-oauth":
		"/docs/guides/identity-aware-proxy/securing-with-oauth",

	// /docs/guides -> /docs/guides/developer-preview
	// /docs/guides/getting-started-> /docs/guides/developer-preview/getting-started
	"/docs/guides/getting-started":
		"/docs/guides/developer-preview/getting-started",

	// /docs/events/* -> /docs/obs/*
	"/docs/events/": "/docs/obs/",

	// redirects for ngrok agent, redirect cli first
	"/docs/secure-tunnels/ngrok-agent/reference/api/": "/docs/agent/api/",
	"/docs/secure-tunnels/ngrok-agent/reference/changelog/":
		"/docs/agent/changelog/",
	"/docs/secure-tunnels/ngrok-agent/reference/config/": "/docs/agent/config/",
	"/docs/secure-tunnels/ngrok-agent/reference/ngrok/": "/docs/agent/cli/",
	"/docs/secure-tunnels/ngrok-agent/remote-management/":
		"/docs/agent/#remote-management",
	"/docs/secure-tunnels/ngrok-agent/shell-autocompletion/":
		"/docs/agent/#tab-completion",
	"/docs/secure-tunnels/ngrok-agent/supported-platforms/":
		"/docs/agent/#system-requirements",
	"/docs/secure-tunnels/ngrok-agent/tunnel-authtokens/":
		"/docs/agent/#authtokens",
	"/docs/secure-tunnels/ngrok-agent/web-inspection-interface/":
		"/docs/agent/web-inspection-interface/",
	"/docs/secure-tunnels/ngrok-agent/api-access/": "/docs/agent/api/",
	"/docs/secure-tunnels/ngrok-agent/automatic-updates/": "/docs/agent/#updates",
	"/docs/secure-tunnels/ngrok-agent/configuration-file/": "/docs/agent/config/",
	"/docs/secure-tunnels/ngrok-agent/diagnose-command/":
		"/docs/agent/#troubleshooting-connectivity",
	"/docs/secure-tunnels/ngrok-agent/installing-as-a-service/":
		"/docs/agent/#background-service",
	"/docs/secure-tunnels/ngrok-agent/": "/docs/agent/",
	// redirects for secure-tunnels
	"/docs/secure-tunnels/agent_ingress/": "/docs/agent/ingress/",
	"/docs/secure-tunnels/agentless/":
		"/docs/agent/#using-ngrok-without-the-agent",
	"/docs/secure-tunnels/non-local/": "/docs/http/#forward-to-non-local",
	"/docs/secure-tunnels/tunnels/": "/docs/agent/",
	"/docs/secure-tunnels/tunnels/http-tunnels/": "/docs/universal-gateway/http/",
	"/docs/secure-tunnels/tunnels/ssh-reverse-tunnel-agent/":
		"/docs/agent/ssh-reverse-tunnel-agent/",
	"/docs/secure-tunnels/tunnels/tcp-tunnels/": "/docs/universal-gateway/tcp/",
	"/docs/secure-tunnels/tunnels/tls-tunnels/": "/docs/universal-gateway/tls/",
	"/docs/secure-tunnels/": "/docs/agent/",

	// redirects for cloud edges
	"/docs/cloud-edge/app-users/": "/docs/traffic-policy/identities/",
	"/docs/cloud-edge/edges/": "/docs/universal-gateway/edges/",
	"/docs/cloud-edge/edges/https/": "/docs/universal-gateway/http/",
	"/docs/cloud-edge/edges/tcp/": "/docs/universal-gateway/tcp/",
	"/docs/cloud-edge/edges/tls/": "/docs/universal-gateway/tls/",
	"/docs/cloud-edge/endpoints/": "/docs/universal-gateway/http/",
	"/docs/cloud-edge/ip-policies/": "/docs/http/#ip-restrictions",
	"/docs/cloud-edge/modules/circuit-breaker/":
		"/docs/traffic-policy/actions/circuit-breaker/",
	"/docs/cloud-edge/modules/compression/":
		"/docs/traffic-policy/actions/compress-response/",
	"/docs/cloud-edge/modules/ip-restrictions/":
		"/docs/traffic-policy/actions/restrict-ips/",
	"/docs/cloud-edge/modules/mutual-tls/":
		"/docs/traffic-policy/actions/terminate-tls/#enabling-mutual-tls",
	"/docs/cloud-edge/modules/oauth/": "/docs/traffic-policy/actions/oauth/",
	"/docs/cloud-edge/modules/openid-connect/":
		"/docs/traffic-policy/actions/oidc/",
	"/docs/cloud-edge/modules/request-headers/":
		"/docs/traffic-policy/actions/add-headers/",
	"/docs/cloud-edge/modules/response-headers/":
		"/docs/traffic-policy/actions/custom-response/",
	"/docs/cloud-edge/modules/saml/": "/docs/traffic-policy/actions/saml",
	"/docs/cloud-edge/modules/tls-termination/": "/docs/http/tls-termination/",
	"/docs/cloud-edge/modules/webhook-verification/":
		"/docs/http/webhook-verification/",
	"/docs/cloud-edge/modules/": "/docs/http/#modules",
	"/docs/cloud-edge/observability/": "/docs/http/#observability",
	"/docs/cloud-edge/pops/": "/docs/universal-gateway/points-of-presence/",
	"/docs/cloud-edge/zero-knowledge-tls/":
		"/docs/traffic-policy/actions/terminate-tls/",
	"/docs/tls/tls/termination/": "/docs/traffic-policy/actions/terminate-tls/",
	"/docs/cloud-edge/": "/docs/universal-gateway/overview/",
	"/docs/integrations/home-assistant/home-assistant":
		"/docs/integrations/home-assistant/home-assistant-with-ngrok",

	// Redirects for Traffic Policy Expressions
	"/docs/http/traffic-policy/expressions/#connection-variables":
		"/docs/http/traffic-policy/expressions/variables#connection-variables",
	"/docs/http/traffic-policy/expressions/#request-variables":
		"/docs/http/traffic-policy/expressions/variables#request-variables",
	"/docs/http/traffic-policy/expressions/#response-variables":
		"/docs/http/traffic-policy/expressions/variables#response-variables",
	"/docs/http/traffic-policy/expressions/#macros":
		"/docs/http/traffic-policy/expressions/macros",
	"/docs/tls/traffic-policy/expressions/#connection-variables":
		"/docs/tls/traffic-policy/expressions/variables#connection-variables",
	"/docs/tls/traffic-policy/expressions/#macros":
		"/docs/tls/traffic-policy/expressions/macros",
	"/docs/tcp/traffic-policy/expressions/#connection-variables":
		"/docs/traffic-policy/variables/",
	"/docs/tcp/traffic-policy/expressions/#macros":
		"/docs/traffic-policy/macros/",

	// /docs/user-management/* -> /docs/iam/*
	"/docs/user-management/#bot-users": "/docs/iam/bot-users/",
	"/docs/user-management/#sso": "/docs/iam/users/#dashboard-access",
	"/docs/user-management/#rbac": "/docs/iam/rbac/",
	"/docs/user-management": "/docs/iam/",

	// BL misc SEO fixes
	"/docs/api/resources/edge-route-policy-module":
		"/docs/api/resources/edge-route-traffic-policy-module/",
	"/docs/api/resources/tcp-edge-policy-module":
		"/docs/api/resources/tcp-edge-traffic-policy-module/",
	"/docs/api/resources/tls-edge-policy-module":
		"/docs/api/resources/tls-edge-traffic-policy-module/",
	"/docs/ngrok-agent/ngrok": "/docs/agent/",
	"/docs/network-edge/modules/webhook-verification":
		"/docs/api/resources/edge-route-webhook-verification-module/",
	"/docs/platform/ip-policies": "/docs/api/resources/ip-policies/",
	"/docs/http-header-templates": "/docs/traffic-policy/actions/add-headers/",

	// (DEC 2024) New Traffic Policy
	"/docs/traffic-policy/gallery/": "/docs/traffic-policy/examples/a-b-tests/",
	"/docs/http/traffic-policy/gallery/":
		"/docs/traffic-policy/examples/a-b-tests/",
	"/docs/tls/traffic-policy/gallery/":
		"/docs/traffic-policy/examples/a-b-tests/",
	"/docs/tcp/traffic-policy/gallery/":
		"/docs/traffic-policy/examples/a-b-tests/",
	"/docs/http/traffic-policy/expressions/writing-guide/":
		"/docs/traffic-policy/concepts/expressions/#writing-expressions",
	"/docs/tls/traffic-policy/expressions/writing-guide/":
		"/docs/traffic-policy/concepts/expressions/#writing-expressions",
	"/docs/tcp/traffic-policy/expressions/writing-guide/":
		"/docs/traffic-policy/concepts/expressions/#writing-expressions",

	"/docs/http/traffic-policy/expressions/variables/#action-result-variables":
		"/docs/traffic-policy/variables/action/",

	"/docs/http/traffic-policy/expressions/variables/#connection-variables":
		"/docs/traffic-policy/variables/connection/",

	"/docs/http/traffic-policy/expressions/variables/#connection-geo-variables":
		"/docs/traffic-policy/variables/connection/#connection-geo-variables",

	"/docs/http/traffic-policy/expressions/variables/#connection-tls-variables":
		"/docs/traffic-policy/variables/connection/#connection-tls-variables",

	"/docs/http/traffic-policy/expressions/variables/#connection-tls-client-variables":
		"/docs/traffic-policy/variables/connection/#connection-tls-client-variables",

	"/docs/http/traffic-policy/expressions/variables/#connection-tls-server-variables":
		"/docs/traffic-policy/variables/connection/#connection-tls-server-variables",

	"/docs/http/traffic-policy/expressions/variables/#endpoint-variables":
		"/docs/traffic-policy/variables/endpoint/",

	"/docs/http/traffic-policy/expressions/variables/#time-variables":
		"/docs/traffic-policy/variables/time/",

	"/docs/tls/traffic-policy/expressions/variables/#action-result-variables":
		"/docs/traffic-policy/variables/action/",

	"/docs/tls/traffic-policy/expressions/variables/#connection-variables":
		"/docs/traffic-policy/variables/connection/",

	"/docs/tls/traffic-policy/expressions/variables/#connection-geo-variables":
		"/docs/traffic-policy/variables/connection/#connection-geo-variables",

	"/docs/tls/traffic-policy/expressions/variables/#connection-tls-variables":
		"/docs/traffic-policy/variables/connection/#connection-tls-variables",

	"/docs/tls/traffic-policy/expressions/variables/#connection-tls-client-variables":
		"/docs/traffic-policy/variables/connection/#connection-tls-client-variables",

	"/docs/tls/traffic-policy/expressions/variables/#connection-tls-server-variables":
		"/docs/traffic-policy/variables/connection/#connection-tls-server-variables",

	"/docs/tls/traffic-policy/expressions/variables/#endpoint-variables":
		"/docs/traffic-policy/variables/endpoint/",

	"/docs/tls/traffic-policy/expressions/variables/#time-variables":
		"/docs/traffic-policy/variables/time/",

	"/docs/tcp/traffic-policy/expressions/variables/#action-result-variables":
		"/docs/traffic-policy/variables/action/",

	"/docs/tcp/traffic-policy/expressions/variables/#connection-variables":
		"/docs/traffic-policy/variables/connection/",

	"/docs/tcp/traffic-policy/expressions/variables/#connection-geo-variables":
		"/docs/traffic-policy/variables/connection/#connection-geo-variables",

	"/docs/tcp/traffic-policy/expressions/variables/#connection-tls-variables":
		"/docs/traffic-policy/variables/connection/#connection-tls-variables",

	"/docs/tcp/traffic-policy/expressions/variables/#connection-tls-client-variables":
		"/docs/traffic-policy/variables/connection/#connection-tls-client-variables",

	"/docs/tcp/traffic-policy/expressions/variables/#connection-tls-server-variables":
		"/docs/traffic-policy/variables/connection/#connection-tls-server-variables",

	"/docs/tcp/traffic-policy/expressions/variables/#endpoint-variables":
		"/docs/traffic-policy/variables/endpoint/",

	"/docs/tcp/traffic-policy/expressions/variables/#time-variables":
		"/docs/traffic-policy/variables/time/",
	"/docs/http/traffic-policy/expressions/variables/":
		"/docs/traffic-policy/variables/",
	"/docs/tls/traffic-policy/expressions/variables/":
		"/docs/traffic-policy/variables/",
	"/docs/tcp/traffic-policy/expressions/variables/":
		"/docs/traffic-policy/variables/",
	"/docs/http/traffic-policy/expressions/macros/":
		"/docs/traffic-policy/macros/",
	"/docs/tls/traffic-policy/expressions/macros/":
		"/docs/traffic-policy/macros/",
	"/docs/tcp/traffic-policy/expressions/macros/":
		"/docs/traffic-policy/macros/",
	"/docs/http/traffic-policy/expressions/":
		"/docs/traffic-policy/concepts/expressions/",
	"/docs/tls/traffic-policy/expressions/":
		"/docs/traffic-policy/concepts/expressions/",
	"/docs/tcp/traffic-policy/expressions/":
		"/docs/traffic-policy/concepts/expressions/",
	"/docs/http/traffic-policy/": "/docs/traffic-policy/",
	"/docs/tls/traffic-policy/": "/docs/traffic-policy/",

	// DEC 2024
	"/docs/traffic-policy/getting-started/":
		"/docs/traffic-policy/getting-started/agent-endpoints/cli",

	// JAN 2025
	"/docs/tls/tls-termination/": "/docs/traffic-policy/actions/terminate-tls/",
	"/docs/traffic-policy/templates/": "/docs/traffic-policy/examples/a-b-tests/",

	// IA Restructure redirects
	"/docs/tls/termination/agent-tls-termination/":
		"/docs/agent/agent-tls-termination/",
	"/docs/concepts/": "/docs/",
	// HTTP Redirects
	"/docs/http/basic-auth": "/docs/traffic-policy/actions/basic-auth/",
	"/docs/http/circuit-breaker": "/docs/traffic-policy/actions/circuit-breaker/",
	"/docs/http/compression/": "/docs/traffic-policy/actions/compress-response/",
	"/docs/http/ip-restrictions/": "/docs/traffic-policy/actions/restrict-ips/",
	"/docs/http/mutual-tls/":
		"/docs/traffic-policy/actions/terminate-tls/#enabling-mutual-tls",
	"/docs/http/oauth/": "/docs/traffic-policy/actions/oauth",
	"/docs/http/openid-connect/": "/docs/traffic-policy/actions/oidc",
	"/docs/http/request-headers/": "/docs/traffic-policy/actions/add-headers",
	"/docs/http/response-headers/":
		"/docs/traffic-policy/actions/custom-response",
	"/docs/http/saml/": "/docs/traffic-policy/actions/saml",
	// Network Edge
	"/docs/network-edge/edges": "/docs/universal-gateway/edges",
	"/docs/network-edge/cloud-endpoints":
		"/docs/universal-gateway/cloud-endpoints",
	"/docs/network-edge/domains-and-tcp-addresses":
		"/docs/universal-gateway/domains",
	"/docs/network-edge/internal-endpoints":
		"/docs/universal-gateway/internal-endpoints",
	"/docs/network-edge/tls-certificates":
		"/docs/universal-gateway/tls-certificates",
	"/docs/network-edge/app-users/": "/docs/traffic-policy/identities/",
	"/docs/network-edge/gslb/": "/docs/universal-gateway/global-load-balancer/",
	"/docs/network-edge/": "/docs/universal-gateway/edges",
	// obs
	"/docs/obs/reference": "/docs/obs/events/reference",
	// tcp
	"/docs/tcp/ip-restrictions": "/docs/traffic-policy/actions/restrict-ips/",
	"/docs/tcp/traffic-policy/actions/deny/":
		"/docs/traffic-policy/actions/deny/",
	"/docs/tcp/traffic-policy/actions/log/": "/docs/traffic-policy/actions/log",
	"/docs/tcp/traffic-policy/actions/restrict-ips/":
		"/docs/traffic-policy/actions/restrict-ips",
	"/docs/tcp/traffic-policy/actions/": "/docs/traffic-policy/actions/",
	"/docs/tcp/traffic-policy/": "/docs/traffic-policy/",
	// tls
	"/docs/tls/ip-restrictions/": "/docs/traffic-policy/actions/restrict-ips",
	"/docs/tls/mutual-tls/":
		"/docs/traffic-policy/actions/terminate-tls/#enabling-mutual-tls",
	"/docs/tls/termination/": "/docs/traffic-policy/actions/terminate-tls/",
	// Universal Gateway
	"/docs/http/": "/docs/universal-gateway/http/",
	"/docs/tcp/": "/docs/universal-gateway/tcp/",
	"/docs/tls/": "/docs/universal-gateway/tls/",

	// Kubernetes Operator Revamp
	"/docs/k8s/advanced-deployments/": "/docs/k8s",
	"/docs/k8s/deployment-guide/": "/docs/k8s",
	"/docs/k8s/developer-guide/": "/docs/k8s",
	"/docs/k8s/installation/install/": "/docs/k8s",
	"/docs/k8s/guides/quickstart/": "/docs/getting-started/kubernetes/ingress",
	"/docs/k8s/developer-guide/architecture/":
		"/docs/k8s/installation/architecture/",
	"/docs/k8s/developer-guide/releasing/": "/docs/k8s/releasing/",
	"/docs/k8s/developer-guide/internal-crds/": "/docs/k8s/crds/",
	"/docs/k8s/getting-started-gwapi/": "/docs/k8s/guides/using-gwapi",
	"/docs/k8s/getting-started-kic/": "/docs/k8s/guides/using-ingresses/",
	"/docs/k8s/custom-domain/": "/docs/k8s/guides/custom-domain/",
	"/docs/k8s/user-guide/": "/docs/k8s/",
	"/docs/k8s/with-edges/": "/docs/k8s/guides/using-ingresses/",
	"/docs/using-ngrok-with/k8s/": "/docs/k8s",

	// Load balancing guides

	"/docs/guides/other-guides/how-to-round-robin-load-balance-with-ngrok-cloud-edges":
		"/docs/guides/other-guides/load-balancing-multiple-clouds/",

	"/docs/guides/other-guides/how-to-do-weighted-load-balancing-with-ngrok-cloud-edges/":
		"/docs/guides/other-guides/load-balancing-multiple-clouds/",
	"/docs/guides/other-guides/load-balancing-with-cloud-edges/":
		"/docs/guides/other-guides/load-balancing-multiple-clouds/",
	"/docs/getting-started/kubernetes/": "/docs/k8s/installation/install",
	"/docs/guides/other-guides/how-to-set-up-a-custom-domain":
		"/docs/universal-gateway/custom-domains",
	"/docs/guides/other-guides/": "/docs/guides/security-dev-productivity/",
	"/docs/guides/using-ngrok-with/": "/docs/using-ngrok-with/minecraft/",
	"/docs/guides/device-gateway/": "/docs/guides/device-gateway/agent/",
	"/docs/guides/developer-preview/": "/docs/",
	"/docs/guides/identity-aware-proxy/":
		"/docs/guides/identity-aware-proxy/securing-with-oauth/",
	"/docs/guides/other-guides/security-dev-productivity/":
		"/docs/guides/security-dev-productivity/",

	"/docs/guides/other-guides/security-dev-productivity/security-dev-productivity/":
		"/docs/guides/security-dev-productivity/",
	"/docs/using-ngrok-with/python/": "/docs/getting-started/python/",
	"/docs/using-ngrok-with/node-js/": "/docs/getting-started/javascript/",
	"/docs/using-ngrok-with/django/": "/docs/getting-started/python/",
	"/docs/using-ngrok-with/go/": "/docs/getting-started/go/",
	"/docs/using-ngrok-with/rust/": "/docs/getting-started/rust/",
	"/docs/using-ngrok-with/rdp/": "/docs/guides/ssh-rdp",
	//site-to-site redirects
	"/docs/guides/site-to-site-connectivity/dbs/":
		"/docs/guides/site-to-site-connectivity/",
	"/docs/guides/site-to-site-connectivity/dbs-mtls/":
		"/docs/guides/site-to-site-connectivity/",
	"/docs/guides/site-to-site-connectivity/apis-mtls/":
		"/docs/guides/site-to-site-connectivity/",
	"/docs/guides/site-to-site-connectivity/apis/":
		"/docs/guides/site-to-site-connectivity/",
	"/docs/guides/other-guides/securing-your-tunnels/":
		"/docs/guides/security-dev-productivity/securing-your-tunnels",
	"/docs/guides/other-guides/licensing": "/docs/pricing-limits/",
	"/docs/guides/other-guides/upgrade-v2-v3/": "/docs/agent/upgrade-v2-v3/",
	"/docs/using-ngrok-with/wordpress/":
		"/docs/universal-gateway/examples/wordpress",
	"/docs/guides/other-guides/n8n": "/docs/universal-gateway/examples/n8n",
	"/docs/using-ngrok-with/ollama": "/docs/universal-gateway/examples/ollama",
	"/docs/guides/other-guides/load-balancing-multiple-clouds/":
		"/docs/universal-gateway/load-balancing-multiple-clouds/",
	"/docs/guides/other-guides/load-balancing-kubernetes/":
		"/docs/k8s/load-balancing/load-balancing-kubernetes/",
	"/docs/guides/other-guides/load-balancing-kubernetes-clusters/":
		"/docs/k8s/load-balancing/load-balancing-kubernetes-clusters/",
	"/docs/getting-started/cloud-endpoints-quickstart/":
		"/docs/getting-started/cloud-endpoints-quickstart",
	// Traffic Policy Macros consolidation (2025)
	"/docs/traffic-policy/macros/core": "/docs/traffic-policy/macros/",
	"/docs/traffic-policy/macros/ext": "/docs/traffic-policy/macros/",
	"/docs/traffic-policy/macros/http": "/docs/traffic-policy/macros/",
	"/docs/traffic-policy/macros/security": "/docs/traffic-policy/macros/",
	"/docs/traffic-policy/macros/utility": "/docs/traffic-policy/macros/",

	"/docs/guides/other-guides/how-to-terminate-traffic-with-ngrok-configs":
		"/docs/agent/agent-tls-termination/",
	"/docs/guides/other-guides/using-tls-mutual-authentication":
		"/docs/agent/agent-mutual-tls-termination/",
	"/docs/guides/other-guides/using-mcp/": "/docs/using-ngrok-with/using-mcp/",
	"/docs/guides/other-guides/running-behind-firewalls/":
		"/docs/guides/running-behind-firewalls/",
	"/docs/universal-gateway/examples/combine-auth-methods/":
		"/docs/universal-gateway/examples/ip-restrictions-basic-auth/",
	"/docs/guides/other-guides/path-based-routing-and-policy-decentralization-with-cloud-endpoints":
		"/docs/universal-gateway/cloud-endpoints/routing-and-policy-decentralization/",
	"/docs/guides/other-guides/forwarding-and-load-balancing-with-cloud-endpoints":
		"/docs/universal-gateway/cloud-endpoints/forwarding-and-load-balancing/",
	"/docs/guides/other-guides/how-to-set-up-auth-on-your-endpoint-using-traffic-policy":
		"/docs/traffic-policy/examples/oauth-protection",
	"/docs/guides/other-guides/dashboard-sso-okta-setup/":
		"/docs/integrations/okta/dashboard-sso-okta-setup",
	// Just a redirect so the top-level guides path goes somewhere (there's no guides/index)
	"/docs/guides/": "/docs/guides/api-gateway/get-started/",
};
