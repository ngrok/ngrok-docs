export const iaRestructureRedirects = [
    /*IA Restructure redirects*/
    [ fromIncludes('/docs/tls/termination/agent-tls-termination/'), '/docs/agent/agent-tls-termination/'],
    [ fromIncludes('/docs/concepts/'), '/docs/overview/'],
        // HTTP Redirects
    [ fromIncludes('/docs/http/basic-auth'), '/docs/traffic-policy/actions/basic-auth/'],
    [ fromIncludes('/docs/http/circuit-breaker'), '/docs/traffic-policy/actions/circuit-breaker/'],
    [ fromIncludes('/docs/http/compression/'), '/docs/traffic-policy/actions/compress-response/'],
    [ fromIncludes('/docs/http/ip-restrictions/'), '/docs/traffic-policy/actions/restrict-ips/'],
    [ fromIncludes('/docs/http/mutual-tls/'), '/docs/traffic-policy/actions/terminate-tls/#enabling-mutual-tls'],
    [ fromIncludes('/docs/http/oauth/'), '/docs/traffic-policy/actions/oauth'],
    [ fromIncludes('/docs/http/openid-connect/'), '/docs/traffic-policy/actions/oidc'],
    [ fromIncludes('/docs/http/request-headers/'), '/docs/traffic-policy/actions/add-headers'],
    [ fromIncludes('/docs/http/response-headers/'), '/docs/traffic-policy/actions/custom-response'],
    [ fromIncludes('/docs/http/saml/'), '/docs/traffic-policy/actions/saml'],    
        // Network Edge
    [ fromIncludes('/docs/network-edge/'), '/docs/universal-gateway/edges'],
    [ fromIncludes('/docs/network-edge/edges'), '/docs/universal-gateway/edges'],
    [ fromIncludes('/docs/network-edge/cloud-endpoints'), '/docs/universal-gateway/cloud-endpoints'],
    [ fromIncludes('/docs/network-edge/domains-and-tcp-addresses'), '/docs/universal-gateway/domains'],
    [ fromIncludes('/docs/network-edge/internal-endpoints'), '/docs/universal-gateway/internal-endpoints'],
    [ fromIncludes('/docs/network-edge/tls-certificates'), '/docs/universal-gateway/tls-certificates'],  
    [ fromIncludes('/docs/network-edge/app-users/'), '/docs/traffic-policy/identities/'],
        // obs redirects   
    [ fromIncludes('/docs/obs/reference'), '/docs/obs/events/reference'],
        //tcp
    [ fromIncludes('/docs/tcp/ip-restrictions'), '/docs/traffic-policy/actions/restrict-ips/'],
    [ fromIncludes('/docs/tcp/traffic-policy/actions/deny/'), '/docs/traffic-policy/actions/deny/'],
    [ fromIncludes('/docs/tcp/traffic-policy/actions/'), '/docs/traffic-policy/actions/'],
    [ fromIncludes('/docs/tcp/traffic-policy/actions/log/'), '/docs/traffic-policy/actions/log'],
    [ fromIncludes('/docs/tcp/traffic-policy/actions/restrict-ips/'), '/docs/traffic-policy/actions/restrict-ips'],
        // tls
    [ fromIncludes('/docs/tls/ip-restrictions/'), '/docs/traffic-policy/actions/restrict-ips'],
    [ fromIncludes('/docs/tls/mutual-tls/'), '/docs/traffic-policy/actions/terminate-tls/#enabling-mutual-tls'],
    [ fromIncludes(`/docs/tls/termination/`), '/docs/traffic-policy/actions/terminate-tls/'],
        // universal gateway
    [ fromIncludes('/docs/network-edge/gslb/'), '/docs/universal-gateway/global-load-balancer/'],
    [ fromIncludes('/docs/http/'), '/docs/universal-gateway/http/'],
    [ fromIncludes('/docs/tcp/'), '/docs/universal-gateway/tcp/'],
    [ fromIncludes('/docs/tls/'), '/docs/universal-gateway/tls/'],
];