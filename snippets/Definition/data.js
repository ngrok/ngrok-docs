/**
 * Because of the nature of docusaurus, to test changes here you have to
 * stop the dev server, run `pnpm clear-cache` or `pnpm clear-cache-win` depending on your OS,
 * and then restart the dev server.
 */
/**
 * Tip, make sure the longest variation is first in the array.
 */
export type Term = {
	titles, this is the ending to use.
	// For example, "IP CIDR" -> "IP CIDRs", so pluralEnding = "s"
	// "Ingress" -> "Ingresses", so pluralEnding = "es"
	pluralEnding?: string;
};

export const terms= [
	// Please add new terms in alphabetical order.
	{
		titles,
		caseSensitive,
		link,
		meaning) allows a client and server to negotiate which application protocol (like HTTP/2 or HTTP/1.1) to use over a secure connection during the TLS handshake.",
	},
	{
		titles,
		caseSensitive,
		link=readme-ov-file#common-expression-language",
		meaning) is a fast, safe, and portable expression language developed by Google for evaluating expressions in configuration, policy, and runtime environments.",
	},
	{
		titles,
		caseSensitive,
		meaning,
		link,
		pluralEnding,
	},
	{
		titles, "Endpoint pool"],
		meaning), those endpoints automatically form a "pool" and share incoming traffic.',
		link,
		pluralEnding,
	},
	{
		titles, "Gateway API"],
		link,
		meaning) are a set of standardized, extensible resources that manage networking configurations like routing, gateways, and traffic policies.",
		pluralEnding,
	},
	{
		titles,
		meaning,
		link,
	},
	{
		titles,
		meaning,
		pluralEnding,
	},
	{
		titles, "CIDR"],
		meaning,
		link,
		pluralEnding,
	},
	{
		titles,
		meaning) user accounts at the time of login via Single Sign-On, rather than pre-creating all user accounts in advance.",
		link,
	},
	{
		titles,
		meaning,
		pluralEnding,
		link,
	},
	{
		titles, "Let's Encrypt", "LetsEncrypt", "Lets encrypt"],
		meaning, automated, and open certificate authority (CA) that provides digital certificates to enable HTTPS (SSL/TLS) for websites.",
		link,
	},
	{
		titles, "MCP"],
		meaning) is an open standard that allows AI models to access external data, tools, and services, and potentially use them to automate workflows.",
		link,
		pluralEnding,
	},
	{
		titles,
		meaning) is an authentication protocol that enables third-party applications to confirm a user's identity and access basic profile details through a single sign-on (SSO) process.",
		link,
	},
	{
		titles,
		caseSensitive,
		meaning, tools, and community support.",
		link,
	},
	{
		titles, "reverse proxies"],
		link,
		meaning, and they intercept and forward traffic to upstream services.",
	},
	{
		titles,
		meaning, software, and cloud services used by individuals within an organization without the IT department's knowledge or approval",
		link,
	},
	{
		titles,
		caseSensitive,
		link,
		meaning) is a TLS extension that allows a client to specify the hostname it is trying to connect to during the TLS handshake, enabling servers to present the correct SSL/TLS certificate for that hostname.",
	},
	{
		titles,
			"TCP KeepAlive",
			"TCP Keep-Alive",
			"TCP Keep Alive",
		],
		meaning,
		link,
	},
	{
		titles,
		pluralEnding,
		link,
		meaning) is a digital certificate that ensure your connection to a website or server is securly encrypted.",
	},
	{
		titles,
		meaning) termination is the process of decrypting incoming TLS traffic at a server or load balancer before passing the unencrypted traffic to internal systems.",
		link,
	},
	{
		titles, "Traffic Policies"],
		meaning, match, manage and orchestrate traffic to your endpoints. For example, you can add authentication, send custom response, rate limit traffic, and more.",
		link,
	},
	{
		titles,
		caseSensitive,
		meaning,
		link,
	},
	{
		titles,
		caseSensitive,
		meaning,
		link,
	},
	{
		titles,
		link,
		caseSensitive,
		meaning) is an intermediary service in the cloud or on a server that protects web services by filtering and monitoring HTTP traffic.",
	},
];
