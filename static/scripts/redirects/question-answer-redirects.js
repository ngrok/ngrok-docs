import { fromExact, fromIncludes } from "../fix-redirect"

export default [
	/**
	 * Universal Gateway > Concepts
	 */
		// Domains
	[ fromExact('/docs/universal-gateway/domains/'), '/docs/universal-gateway/domains/what-are-domains/' ],
	
		// TCP Addresses
	[ fromExact('/docs/universal-gateway/tcp-addresses/'), '/docs/universal-gateway/tcp-addresses/what-are-tcp-addresses/' ],
			// hashes
	[ fromExact('/docs/universal-gateway/tcp-addresses/#public-endpoint-creation'), '/docs/universal-gateway/tcp-addresses/what-are-tcp-addresses/' ],
	[ fromExact('/docs/universal-gateway/tcp-addresses/#address-assignment'), '/docs/universal-gateway/tcp-addresses/how-are-tcp-addresses-assigned/' ],
	[ fromExact('/docs/universal-gateway/tcp-addresses/#global-load-balancer/'), '/docs/universal-gateway/tcp-addresses/what-are-tcp-addresses/#tcp-address-load-balancing' ],
]
