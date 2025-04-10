import { fromExact } from "../fix-redirect";

export default [
	/**
	 * Universal Gateway > Concepts
	 */
	// Domains
	[
		fromExact("/docs/universal-gateway/domains/"),
		"/docs/universal-gateway/domains/what-are-domains/",
	],
	// hashes
	[
		fromExact("/docs/universal-gateway/domains/#branded-domains"),
		"/docs/universal-gateway/domains/how-do-i-use-my-own-domain/",
	],
	[
		fromExact("/docs/universal-gateway/domains/#global-load-balancer"),
		"/docs/universal-gateway/global-load-balancer/",
	],
	[
		fromExact("/docs/universal-gateway/domains/#public-endpoints"),
		"/docs/universal-gateway/public-endpoints/",
	],
	[
		fromExact("/docs/universal-gateway/domains/#ngrok-managed-domains"),
		"/docs/universal-gateway/domains/what-are-managed-domains/",
	],
	[
		fromExact("/docs/universal-gateway/domains/#hsts-preload"),
		"/docs/universal-gateway/domains/what-are-managed-domains/#hsts-preload",
	],
	[
		fromExact("/docs/universal-gateway/domains/#public-suffix-list"),
		"/docs/universal-gateway/domains/what-are-managed-domains/#public-suffix-list",
	],

	// TCP Addresses
	[
		fromExact("/docs/universal-gateway/tcp-addresses/"),
		"/docs/universal-gateway/tcp-addresses/what-are-tcp-addresses/",
	],
	// hashes
	[
		fromExact(
			"/docs/universal-gateway/tcp-addresses/#public-endpoint-creation",
		),
		"/docs/universal-gateway/tcp-addresses/what-are-tcp-addresses/",
	],
	[
		fromExact("/docs/universal-gateway/tcp-addresses/#address-assignment"),
		"/docs/universal-gateway/tcp-addresses/how-are-tcp-addresses-assigned/",
	],
	[
		fromExact("/docs/universal-gateway/tcp-addresses/#global-load-balancer/"),
		"/docs/universal-gateway/tcp-addresses/what-are-tcp-addresses/#tcp-address-load-balancing",
	],

	//TLS Certificates
	[
		fromExact("/docs/universal-gateway/tls-certificates/"),
		"/docs/universal-gateway/tls-certificates/how-does-ngrok-handle-tls",
	],
	// hashes
	[
		fromExact("/docs/universal-gateway/tls-certificates/#automated"),
		"/docs/universal-gateway/tls-certificates/what-is-automatic-certificate-management",
	],
	[
		fromExact(
			"/docs/universal-gateway/tls-certificates/#certificate-selection",
		),
		"/docs/universal-gateway/tls-certificates/how-are-certificates-selected",
	],
	[
		fromExact(
			"/docs/universal-gateway/tls-certificates/#certificate-provisioning",
		),
		"/docs/universal-gateway/tls-certificates/how-does-ngrok-handle-tls#how-certificates-work",
	],
	[
		fromExact("/docs/universal-gateway/tls-certificates/#certificate-bundles"),
		"/docs/universal-gateway/tls-certificates/what-is-a-certificate-bundle/",
	],
	[
		fromExact("/docs/universal-gateway/tls-certificates/#private-keys"),
		"/docs/universal-gateway/tls-certificates/what-are-private-tls-keys/",
	],
];
