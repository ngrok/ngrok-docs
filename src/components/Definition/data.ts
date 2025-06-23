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
	{
		titles: ["IP CIDR", "CIDR"],
		meaning:
			"Classless Inter-Domain Routing is a method used to allocate IP addresses more efficiently and route IP packets more flexibly than the older class-based system.",
		link: "https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing",
		pluralEnding: "s",
	},
	{
		titles: ["IP CIDR", "CIDR"],
		meaning:
			"Classless Inter-Domain Routing is a method used to allocate IP addresses more efficiently and route IP packets more flexibly than the older class-based system.",
		link: "https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing",
		pluralEnding: "s",
	},
	{
		titles: ["shadow IT"],
		meaning:
			"Shadow IT refers IT systems, software, and cloud services used by individuals within an organization without the IT department's knowledge or approval",
		link: "https://en.wikipedia.org/wiki/Shadow_IT",
	},
	{
		titles: ["OpenID Connect", "OIDC"],
		meaning:
			"OpenID Connect (OIDC) is an authentication protocol that enables third-party applications to confirm a user's identity and access basic profile details through a single sign-on (SSO) process.",
		link: "https://en.wikipedia.org/wiki/OpenID",
	},
	{
		titles: ["Let’s Encrypt", "Let's Encrypt", "LetsEncrypt", "Lets encrypt"],
		meaning:
			"Let's Encrypt is a free, automated, and open certificate authority (CA) that provides digital certificates to enable HTTPS (SSL/TLS) for websites.",
		link: "https://letsencrypt.org/about/",
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
	},
	{
		titles: ["Ingress"],
		meaning:
			"An ingress is an entry point into a network for traffic from outside of the network.",
		pluralEnding: "es",
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
		titles: ["v3"],
		caseSensitive: true,
		meaning: "v3 is shorthand for the third major version of the ngrok Agent.",
		link: "/docs/agent/config/v3",
	},
	{
		titles: ["v2"],
		caseSensitive: true,
		meaning: "v2 is shorthand for the second major version of the ngrok Agent.",
		link: "/docs/agent/config/v2",
	},
	{
		titles: ["OWASP"],
		meaning:
			"OWASP: The Open Web Application Security Project. This non-profit organization is dedicated to improving software security through providing resources, tools, and community support.",
		link: "https://owasp.org/about/",
	},
	{
		titles: ["Helm"],
		meaning:
			"Helm is a package manager for Kubernetes that simplifies the deployment and management of applications on Kubernetes clusters.",
		link: "https://helm.sh/",
	},
	{
		titles: ["TLS Termination"],
		meaning:
			"TLS termination is the process of decrypting incoming TLS (Transport Layer Security) traffic at a server or load balancer before passing the unencrypted traffic to internal systems.",
		link: "/docs/universal-gateway/tls-termination/",
	},
	{
		titles: ["Gateway API CRD", "Gateway API"],
		link: "https://gateway-api.sigs.k8s.io/guides/",
		meaning:
			"Gateway API CRDs (Custom Resource Definitions) are a set of standardized, extensible resources that define and manage networking configurations like routing, gateways, and traffic policies in a more expressive and role-oriented way than Ingress.",
		pluralEnding: "s",
	},
	{
		titles: ["CRD", "Custom Resource Definition"],
		meaning:
			"CustomResourceDefinitions allow users to extend the Kubernetes API by defining their own resource types.",
		link: "https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/",
		pluralEnding: "s",
	},
	{
		titles: ["ALPN"],
		link: "https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation",
		meaning:
			"ALPN (Application-Layer Protocol Negotiation) allows a client and server to negotiate which application protocol (like HTTP/2 or HTTP/1.1) to use over a secure connection during the TLS handshake.",
	},
	{
		titles: ["SNI"],
		link: "https://en.wikipedia.org/wiki/Server_Name_Indication",
		meaning:
			"SNI (Server Name Indication) is a TLS extension that allows a client to specify the hostname it is trying to connect to during the TLS handshake, enabling servers to present the correct SSL/TLS certificate for that hostname.",
	},
	{
		titles: ["CEL"],
		caseSensitive: true,
		link: "https://github.com/google/cel-spec/tree/master?tab=readme-ov-file#common-expression-language",
		meaning:
			"CEL (Common Expression Language) is a fast, safe, and portable expression language developed by Google for evaluating expressions in configuration, policy, and runtime environments.",
	},
];
