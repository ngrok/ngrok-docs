/**
 * Because of the nature of docusaurus, to test changes here you have to
 * stop the dev server, run `pnpm clear-cache` or `pnpm clear-cache-win` depending on your OS,
 * and then restart the dev server.
 */
/**
 * Tip: When adding titles, make sure the longest variation is first in the array.
 */
export type Term = {
	titles: string[];
	meaning: string;
	link?: string;
	caseSensitive?: boolean;
	// If the term can be pluralized, this is the ending to use.
	// For example, "IP CIDR" -> "IP CIDRs", so pluralEnding = "s"
	// "Ingress" -> "Ingresses", so pluralEnding = "es"
	pluralEnding?: string;
};

export const terms: Term[] = [
	// Please add new terms in alphabetical order.
	{
		titles: ["ALPN"],
		caseSensitive: true,
		link: "https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation",
		meaning:
			"ALPN (Application-Layer Protocol Negotiation) allows a client and server to negotiate which application protocol (like HTTP/2 or HTTP/1.1) to use over a secure connection during the TLS handshake.",
	},
	{
		titles: ["CEL"],
		caseSensitive: true,
		link: "https://github.com/google/cel-spec/tree/master?tab=readme-ov-file#common-expression-language",
		meaning:
			"CEL (Common Expression Language) is a fast, safe, and portable expression language developed by Google for evaluating expressions in configuration, policy, and runtime environments.",
	},
	{
		titles: ["CRD"],
		caseSensitive: true,
		meaning:
			"CustomResourceDefinitions allow users to extend the Kubernetes API by defining their own resource types.",
		link: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/",
		pluralEnding: "s",
	},
	{
		titles: ["Endpoint Pooling", "Endpoint pool"],
		meaning:
			'When your create two ngrok endpoints with the same URL (and binding), those endpoints automatically form a "pool" and share incoming traffic.',
		link: "/docs/universal-gateway/endpoint-pooling/",
		pluralEnding: "s",
	},
	{
		titles: ["Gateway API CRD", "Gateway API"],
		link: "https://gateway-api.sigs.k8s.io/guides/",
		meaning:
			"Gateway API CRDs (Custom Resource Definitions) are a set of standardized, extensible resources that manage networking configurations like routing, gateways, and traffic policies.",
		pluralEnding: "s",
	},
	{
		titles: ["Helm"],
		meaning:
			"Helm is a package manager for Kubernetes that simplifies the deployment and management of applications on Kubernetes clusters.",
		link: "https://helm.sh/",
	},
	{
		titles: ["Ingress"],
		meaning:
			"An ingress is an entry point into a network for traffic from outside of the network.",
		pluralEnding: "es",
	},
	{
		titles: ["IP CIDR", "CIDR"],
		meaning:
			"Classless Inter-Domain Routing is a method used to allocate IP addresses more efficiently and route IP packets more flexibly than older class-based systems.",
		link: "https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing",
		pluralEnding: "s",
	},
	{
		titles: ["JIT provisioning"],
		meaning:
			"Just-In-Time Single Sign-On Provisioning is a user account provisioning method that automatically creates (or updates) user accounts at the time of login via Single Sign-On, rather than pre-creating all user accounts in advance.",
		link: "https://en.wikipedia.org/wiki/System_for_Cross-domain_Identity_Management",
	},
	{
		titles: ["K8"],
		meaning: "K8s is an industry-standard abbreviation for Kubernetes.",
		pluralEnding: "s",
		link: "https://kubernetes.io/docs/concepts/overview/",
	},
	{
		titles: ["Let's Encrypt", "Let's Encrypt", "LetsEncrypt", "Lets encrypt"],
		meaning:
			"Let's Encrypt is a free, automated, and open certificate authority (CA) that provides digital certificates to enable HTTPS (SSL/TLS) for websites.",
		link: "https://letsencrypt.org/about/",
	},
	{
		titles: ["MCP server", "MCP"],
		meaning:
			"MCP (Model Context Protocol) is an open standard that allows AI models to access external data, tools, and services, and potentially use them to automate workflows.",
		link: "https://en.wikipedia.org/wiki/Model_Context_Protocol",
		pluralEnding: "s",
	},
	{
		titles: ["OIDC"],
		meaning:
			"OpenID Connect (OIDC) is an authentication protocol that enables third-party applications to confirm a user's identity and access basic profile details through a single sign-on (SSO) process.",
		link: "https://en.wikipedia.org/wiki/OpenID",
	},
	{
		titles: ["OWASP"],
		caseSensitive: true,
		meaning:
			"The Open Web Application Security Project is a non-profit organization dedicated to improving software security through providing resources, tools, and community support.",
		link: "https://owasp.org/about/",
	},
	{
		titles: ["reverse proxy", "reverse proxies"],
		link: "https://en.wikipedia.org/wiki/Reverse_proxy",
		meaning:
			"Reverse proxies are an extra security layer between public traffic and your internal services. They live on servers or cloud services, and they intercept and forward traffic to upstream services.",
	},
	{
		titles: ["shadow IT"],
		meaning:
			"Shadow IT refers to IT systems, software, and cloud services used by individuals within an organization without the IT department's knowledge or approval",
		link: "https://en.wikipedia.org/wiki/Shadow_IT",
	},
	{
		titles: ["SNI"],
		caseSensitive: true,
		link: "https://en.wikipedia.org/wiki/Server_Name_Indication",
		meaning:
			"SNI (Server Name Indication) is a TLS extension that allows a client to specify the hostname it is trying to connect to during the TLS handshake, enabling servers to present the correct SSL/TLS certificate for that hostname.",
	},
	{
		titles: [
			"TCP-KeepAlive",
			"TCP KeepAlive",
			"TCP Keep-Alive",
			"TCP Keep Alive",
		],
		meaning:
			"TCP KeepAlive enables TCP connections to remain active even when no data is exchanged between the connected endpoints.",
		link: "https://en.wikipedia.org/wiki/Keepalive",
	},
	{
		titles: ["TLS Certificate"],
		pluralEnding: "s",
		link: "https://en.wikipedia.org/wiki/Transport_Layer_Security",
		meaning:
			"A TLS certificate (or SSL certificate) is a digital certificate that ensure your connection to a website or server is securly encrypted.",
	},
	{
		titles: ["TLS Termination"],
		meaning:
			"TLS (Transport Layer Security) termination is the process of decrypting incoming TLS traffic at a server or load balancer before passing the unencrypted traffic to internal systems.",
		link: "/docs/universal-gateway/tls-termination/",
	},
	{
		titles: ["Traffic Policy", "Traffic Policies"],
		meaning:
			"Traffic Policy is a configuration language that enables you to filter, match, manage and orchestrate traffic to your endpoints. For example, you can add authentication, send custom response, rate limit traffic, and more.",
		link: "/docs/traffic-policy/",
	},
	{
		titles: ["v2"],
		caseSensitive: true,
		meaning: "v2 is shorthand for the second major version of the ngrok Agent.",
		link: "/docs/agent/config/v2",
	},
	{
		titles: ["v3"],
		caseSensitive: true,
		meaning: "v3 is shorthand for the third major version of the ngrok Agent.",
		link: "/docs/agent/config/v3",
	},
	{
		titles: ["WAF"],
		link: "https://en.wikipedia.org/wiki/Web_application_firewall",
		caseSensitive: true,
		meaning:
			"A web application firewall (WAF) is an intermediary service in the cloud or on a server that protects web services by filtering and monitoring HTTP traffic.",
	},
];
