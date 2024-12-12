const fromExact = (from) => (path) => [ from, path === from ]               // [xyz]
const fromIncludes = (from) => (path) => [ from, path.includes(from) ]      // [xy]z
const toExact = (to) => () => to                                            // x -> y
const toReplace = (to) => (path, from) => path.replace(from, to)            // abc/x -> xyz/x

// List of redirects
//  String values are treated as exacts by default.
//  Exact matches should be listed first as redirects are stacked
//
// To change behavior you can use the following method structures:
//  [0 - from]: (path) => [matchStr, boolean (true for match, false for do not match)]
//  [1 - to]:  (path, from) => string (returned value becomes the new path)
const redirects = [
    [ fromIncludes(`/docs/1`), `/docs/` ],
    [ fromIncludes(`/docs/2`), `/docs/` ],
    [ fromIncludes(`/docs/ngrok-link`), `/docs/network-edge/` ],
    [ fromIncludes(`/docs/api/api-clients`), `/docs/api/#client-libraries` ],
    [ fromIncludes(`/docs/api/client-libraries`), `/docs/api/#client-libraries` ],
    [ fromIncludes(`/docs/api/terraform`), `/docs/api/#terraform-provider` ],
    [ fromIncludes(`/docs/platform/api`), `/docs/api/` ],
    [ fromIncludes(`/docs/platform/events`), `/docs/events/` ],
    [ fromIncludes(`/docs/events/filtering`), `/docs/events/#filters` ],
    [ fromIncludes(`/docs/http-header-templates/`), `/docs/network-edge/http-header-templates/` ],
    [ fromIncludes(`/docs/network-edge/pops`), `/docs/network-edge/#points-of-presence` ],
    [ fromIncludes(`/docs/platform/pops`), `/docs/network-edge/#points-of-presence` ],
    [ fromIncludes(`/docs/best-practices/security-dev-productivity/`), `/docs/guides/security-dev-productivity/` ],
    [ fromIncludes(`/docs/platform/ip-policies/`), `/docs/network-edge/ip-policies/` ],
    [ fromIncludes(`/docs/platform/botusers/`), `/docs/user-management/#bot-users` ],
    [ fromIncludes(`/docs/platform/dashboard/`), `/docs/user-management/#sso` ],
    [ fromIncludes(`/docs/cloud-edge/modules/webhook/`), `/docs/network-edge/modules/webhook-verification/` ],
    [ fromIncludes(`/docs/cloud-edge/modules/oauth/amazon/`), `/docs/integrations/amazon/oauth/` ],
    [ fromIncludes(`/docs/cloud-edge/modules/oauth/facebook/`), `/docs/integrations/facebook/oauth/` ],
    [ fromIncludes(`/docs/cloud-edge/modules/oauth/github/`), `/docs/integrations/github/oauth/` ],
    [ fromIncludes(`/docs/cloud-edge/modules/oauth/gitlab/`), `/docs/integrations/gitlab/oauth/` ],
    [ fromIncludes(`/docs/cloud-edge/modules/oauth/google/`), `/docs/integrations/google/oauth/` ],
    [ fromIncludes(`/docs/cloud-edge/modules/oauth/linkedin/`), `/docs/integrations/linkedin/oauth/` ],
    [ fromIncludes(`/docs/cloud-edge/modules/oauth/microsoft/`), `/docs/integrations/microsoft/oauth/` ],
    [ fromIncludes(`/docs/cloud-edge/modules/oauth/twitch/`), `/docs/integrations/twitch/oauth/` ],
    [ fromIncludes(`/docs/cloud-edge/http-header-templates/`), `/docs/network-edge/modules/request-headers/#variables` ],
    [ fromIncludes(`/docs/integrations/awscloudwatch`), `/docs/integrations/amazon-cloudwatch/` ],
    [ fromIncludes(`/docs/integrations/awsfirehose`), `/docs/integrations/amazon-firehose/` ],
    [ fromIncludes(`/docs/integrations/awskinesis`), `/docs/integrations/amazon-kinesis/` ],
    [ fromIncludes(`/docs/secure-tunnels/tunnels/tcp-tunnels`), `/docs/tcp/` ],
    [ fromIncludes(`/docs/secure-tunnels/tunnels/ssh-reverse-tunnel-agent`), `/docs/agent/ssh-reverse-tunnel-agent` ],

    // /docs/guides -> /docs/guides/other-guides
    // /docs/guides/how-to-set-up-a-custom-domain -> /docs/guides/other-guides/how-to-set-up-a-custom-domain
    [ fromIncludes(`/docs/guides/how-to-set-up-a-custom-domain`), `/docs/guides/other-guides/how-to-set-up-a-custom-domain` ],

    // /docs/guides/limits -> /docs/guides/other-guides/limits
    [ fromIncludes(`/docs/guides/limits`), `/docs/guides/other-guides/limits` ],

    // /docs/guides/licensing -> /docs/guides/other-guides/licensing
    [ fromIncludes(`/docs/guides/licensing`), `/docs/guides/other-guides/licensing`],

    // /docs/guides/upgrade-v2-v3 -> /docs/guides/other-guides/upgrade-v2-v3
    [ fromIncludes(`/docs/guides/upgrade-v2-v3`), `/docs/guides/other-guides/upgrade-v2-v3`],

    // /docs/guides/security-dev-productivity -> /docs/guides/other-guides/security-dev-productivity
    [ fromIncludes(`/docs/guides/security-dev-productivity`), `/docs/guides/other-guides/security-dev-productivity`],

    // /docs/guides/securing-your-tunnels -> /docs/guides/other-guides/securing-your-tunnels
    [ fromIncludes(`/docs/guides/securing-your-tunnels`), `/docs/guides/other-guides/securing-your-tunnels`],

    // /docs/guides/running-behind-firewalls -> /docs/guides/other-guides/running-behind-firewalls
    [ fromIncludes(`/docs/guides/running-behind-firewalls`), `/docs/guides/other-guides/running-behind-firewalls`],

    // /docs/guides/using-tls-mutual-authentication -> /docs/guides/other-guides/using-tls-mutual-authentication
    [ fromIncludes(`/docs/guides/using-tls-mutual-authentication`), `/docs/guides/other-guides/using-tls-mutual-authentication`],

    // /docs/guides/dashboard-sso-okta-setup -> /docs/guides/other-guides/dashboard-sso-okta-setup
    [ fromIncludes(`/docs/guides/dashboard-sso-okta-setup`), `/docs/guides/other-guides/dashboard-sso-okta-setup`],

    // /docs/guides/load-balancing-with-cloud-edges -> /docs/guides/other-guides/load-balancing-with-cloud-edges
    [ fromIncludes(`/docs/guides/load-balancing-with-cloud-edges`), `/docs/guides/other-guides/load-balancing-with-cloud-edges`],

    // /docs/guides/how-to-round-robin-load-balance-with-ngrok-cloud-edges -> /docs/guides/other-guides/how-to-round-robin-load-balance-with-ngrok-cloud-edges
    [ fromIncludes(`/docs/guides/how-to-round-robin-load-balance-with-ngrok-cloud-edges`), `/docs/guides/other-guides/how-to-round-robin-load-balance-with-ngrok-cloud-edges`],

    // /docs/guides/how-to-do-weighted-load-balancing-with-ngrok-cloud-edges -> /docs/guides/other-guides/how-to-do-weighted-load-balancing-with-ngrok-cloud-edges
    [ fromIncludes(`/docs/guides/how-to-do-weighted-load-balancing-with-ngrok-cloud-edges`), `/docs/guides/other-guides/how-to-do-weighted-load-balancing-with-ngrok-cloud-edges`],

     // /docs/guides/using-labels-within-ngrok -> /docs/guides/other-guides/using-labels-within-ngrok
    [ fromIncludes(`/docs/guides/using-labels-within-ngrok`), `/docs/guides/other-guides/using-labels-within-ngrok`],

    // /docs/guides -> /docs/guides/site-to-site-connectivity
    // /docs/guides/site-to-site-dbs -> /docs/guides/site-to-site-connectivity/dbs
    [ fromIncludes(`/docs/guides/site-to-site-dbs`), `/docs/guides/site-to-site-connectivity/dbs`],

    // /docs/guides/site-to-site-apis -> /docs/guides/site-to-site-connectivity/apis
    [ fromIncludes(`/docs/guides/site-to-site-apis`), `/docs/guides/site-to-site-connectivity/apis`],

    // /docs/guides/site-to-site-apis-mtls -> /docs/guides/site-to-site-connectivity/apis-mtls
    [ fromIncludes(`/docs/guides/site-to-site-apis-mtls`), `/docs/guides/site-to-site-connectivity/apis-mtls`],

    // docs/guides/site-to-site-dbs-mtls -> /docs/guides/site-to-site-connectivity/dbs-mtls
    [ fromIncludes(`/docs/guides/site-to-site-dbs-mtls`), `/docs/guides/site-to-site-connectivity/dbs-mtls`],

    // /docs/guides -> /docs/guides/identity-aware-proxy
    // /docs/guides/securing-with-oauth-> /docs/guides/identity-aware-proxy/securing-with-oauth
    [ fromIncludes(`/docs/guides/securing-with-oauth`), `/docs/guides/identity-aware-proxy/securing-with-oauth`],

    // /docs/guides -> /docs/guides/developer-preview
    // /docs/guides/getting-started-> /docs/guides/developer-preview/getting-started
    [ fromIncludes(`/docs/guides/getting-started`), `/docs/guides/developer-preview/getting-started`],

    // /docs/events/* -> /docs/obs/*
    [ fromIncludes(`/docs/events/`), toReplace(`/docs/obs/`) ],

    // redirects for ngrok agent, redirect cli first
    [ fromIncludes(`/docs/secure-tunnels/ngrok-agent/reference/api/`), `/docs/agent/api/` ],
    [ fromIncludes(`/docs/secure-tunnels/ngrok-agent/reference/changelog/`), `/docs/agent/changelog/` ],
    [ fromIncludes(`/docs/secure-tunnels/ngrok-agent/reference/config/`), `/docs/agent/config/` ],
    [ fromIncludes(`/docs/secure-tunnels/ngrok-agent/reference/ngrok/`), `/docs/agent/cli/` ],
    [ fromIncludes(`/docs/secure-tunnels/ngrok-agent/remote-management/`), `/docs/agent/#remote-management` ],
    [ fromIncludes(`/docs/secure-tunnels/ngrok-agent/shell-autocompletion/`), `/docs/agent/#tab-completion` ],
    [ fromIncludes(`/docs/secure-tunnels/ngrok-agent/supported-platforms/`), `/docs/agent/#system-requirements` ],
    [ fromIncludes(`/docs/secure-tunnels/ngrok-agent/tunnel-authtokens/`), `/docs/agent/#authtokens` ],
    [ fromIncludes(`/docs/secure-tunnels/ngrok-agent/web-inspection-interface/`), `/docs/agent/web-inspection-interface/` ],
    [ fromIncludes(`/docs/secure-tunnels/ngrok-agent/reference/ngrok`), `/docs/agent/cli` ],
    [ fromIncludes(`/docs/secure-tunnels/ngrok-agent/api-access/`), `/docs/agent/api/` ],
    [ fromIncludes(`/docs/secure-tunnels/ngrok-agent/automatic-updates/`), `/docs/agent/#updates` ],
    [ fromIncludes(`/docs/secure-tunnels/ngrok-agent/configuration-file/`), `/docs/agent/config/` ],
    [ fromIncludes(`/docs/secure-tunnels/ngrok-agent/diagnose-command/`), `/docs/agent/#troubleshooting-connectivity` ],
    [ fromIncludes(`/docs/secure-tunnels/ngrok-agent/installing-as-a-service/`), `/docs/agent/#background-service` ],
    [ fromIncludes(`/docs/secure-tunnels/ngrok-agent/`), toReplace(`/docs/agent/`) ],

    // redirects for secure-tunnels
    [ fromIncludes(`/docs/secure-tunnels/agent_ingress/`), `/docs/agent/ingress/` ],
    [ fromIncludes(`/docs/secure-tunnels/agentless/`), `/docs/agent/#using-ngrok-without-the-agent` ],
    [ fromIncludes(`/docs/secure-tunnels/non-local/`), `/docs/http/#forward-to-non-local` ],
    [ fromIncludes(`/docs/secure-tunnels/tunnels/`), `/docs/agent/` ],
    [ fromIncludes(`/docs/secure-tunnels/tunnels/http-tunnels/`), `/docs/http/` ],
    [ fromIncludes(`/docs/secure-tunnels/tunnels/ssh-reverse-tunnel-agent/`), `/docs/agent/ssh-reverse-tunnel-agent/` ],
    [ fromIncludes(`/docs/secure-tunnels/tunnels/tcp-tunnels/`), `/docs/tcp/` ],
    [ fromIncludes(`/docs/secure-tunnels/tunnels/tls-tunnels/`), `/docs/tls/` ],
    [ fromIncludes(`/docs/secure-tunnels/`), `/docs/agent/` ],

    // redirects for cloud edges
    [ fromIncludes(`/docs/cloud-edge/app-users/`), `/docs/network-edge/app-users/` ],
    [ fromIncludes(`/docs/cloud-edge/edges/`), `/docs/network-edge/edges/` ],
    [ fromIncludes(`/docs/cloud-edge/edges/https/`), `/docs/http/` ],
    [ fromIncludes(`/docs/cloud-edge/edges/tcp/`), `/docs/tcp/` ],
    [ fromIncludes(`/docs/cloud-edge/edges/tls/`), `/docs/tls/` ],
    [ fromIncludes(`/docs/cloud-edge/endpoints/`), `/docs/http/` ],
    [ fromIncludes(`/docs/cloud-edge/ip-policies/`), `/docs/http/#ip-restrictions` ],
    [ fromIncludes(`/docs/cloud-edge/modules/circuit-breaker/`), `/docs/http/circuit-breaker/` ],
    [ fromIncludes(`/docs/cloud-edge/modules/compression/`), `/docs/http/compression/` ],
    [ fromIncludes(`/docs/cloud-edge/modules/ip-restrictions/`), `/docs/http/ip-restrictions/` ],
    [ fromIncludes(`/docs/cloud-edge/modules/mutual-tls/`), `/docs/http/mutual-tls/` ],
    [ fromIncludes(`/docs/cloud-edge/modules/oauth/`), `/docs/http/oauth/` ],
    [ fromIncludes(`/docs/cloud-edge/modules/openid-connect/`), `/docs/http/openid-connect/` ],
    [ fromIncludes(`/docs/cloud-edge/modules/request-headers/`), `/docs/http/request-headers/` ],
    [ fromIncludes(`/docs/cloud-edge/modules/response-headers/`), `/docs/http/response-headers/` ],
    [ fromIncludes(`/docs/cloud-edge/modules/saml/`), `/docs/http/saml/` ],
    [ fromIncludes(`/docs/cloud-edge/modules/tls-termination/`), `/docs/http/tls-termination/` ],
    [ fromIncludes(`/docs/cloud-edge/modules/webhook-verification/`), `/docs/http/webhook-verification/` ],
    [ fromIncludes(`/docs/cloud-edge/modules/`), `/docs/http/#modules` ],
    [ fromIncludes(`/docs/cloud-edge/observability/`), `/docs/http/#observability` ],
    [ fromIncludes(`/docs/cloud-edge/pops/`), `/docs/network-edge/#points-of-presence` ],
    [ fromIncludes(`/docs/cloud-edge/zero-knowledge-tls/`), `/docs/tls/tls-termination/#zero-knowledge-tls` ],
    [ fromIncludes(`/docs/cloud-edge/`), `/docs/network-edge/` ],

    // Redirects for Traffic Policy Expressions
    [ fromIncludes(`/docs/http/traffic-policy/expressions/#connection-variables`), `/docs/http/traffic-policy/expressions/variables#connection-variables` ],
    [ fromIncludes(`/docs/http/traffic-policy/expressions/#request-variables`), `/docs/http/traffic-policy/expressions/variables#request-variables` ],
    [ fromIncludes(`/docs/http/traffic-policy/expressions/#response-variables`), `/docs/http/traffic-policy/expressions/variables#response-variables` ],
    [ fromIncludes(`/docs/http/traffic-policy/expressions/#macros`), `/docs/http/traffic-policy/expressions/macros` ],
    [ fromIncludes(`/docs/tls/traffic-policy/expressions/#connection-variables`), `/docs/tls/traffic-policy/expressions/variables#connection-variables` ],
    [ fromIncludes(`/docs/tls/traffic-policy/expressions/#macros`), `/docs/tls/traffic-policy/expressions/macros` ],
    [ fromIncludes(`/docs/tcp/traffic-policy/expressions/#connection-variables`), `/docs/tcp/traffic-policy/expressions/variables#connection-variables` ],
    [ fromIncludes(`/docs/tcp/traffic-policy/expressions/#macros`), `/docs/tcp/traffic-policy/expressions/macros` ],

    // /docs/user-management/* -> /docs/iam/*
    [ fromIncludes(`/docs/user-management/#bot-users`), `/docs/iam/bot-users/` ],
    [ fromIncludes(`/docs/user-management/#sso`), `/docs/iam/users/#dashboard-access` ],
    [ fromIncludes(`/docs/user-management/#rbac`), `/docs/iam/rbac/` ],
    [ fromIncludes(`/docs/user-management`), `/docs/iam/` ],

    // BL misc SEO fixes
    [ fromIncludes(`/docs/api/resources/edge-route-policy-module`), `/docs/api/resources/edge-route-traffic-policy-module/` ],
    [ fromIncludes(`/docs/api/resources/tcp-edge-policy-module`), `/docs/api/resources/tcp-edge-traffic-policy-module/` ],
    [ fromIncludes(`/docs/api/resources/tls-edge-policy-module`), `/docs/api/resources/tls-edge-traffic-policy-module/` ],
    [ fromIncludes(`/docs/ngrok-agent/ngrok`), `/docs/agent/` ],
    [ fromIncludes(`/docs/network-edge/modules/webhook-verification`), `/docs/api/resources/edge-route-webhook-verification-module/` ],
    [ fromIncludes(`/docs/platform/ip-policies`), `/docs/api/resources/ip-policies/` ],
    [ fromIncludes(`/docs/http-header-templates`), `/docs/http/request-headers/` ],

    // (DEC 2024) New Traffic Policy
    [ fromIncludes(`/docs/traffic-policy/gallery/`), `/docs/traffic-policy/templates/` ],
    [ fromIncludes(`/docs/http/traffic-policy/gallery/`), `/docs/traffic-policy/templates/` ],
    [ fromIncludes(`/docs/tls/traffic-policy/gallery/`), `/docs/traffic-policy/templates/` ],
    [ fromIncludes(`/docs/tcp/traffic-policy/gallery/`), `/docs/traffic-policy/templates/` ],
    [ fromIncludes(`/docs/http/traffic-policy/expressions/writing-guide/`), `/docs/traffic-policy/concepts/expressions/#writing-expressions` ],
    [ fromIncludes(`/docs/tls/traffic-policy/expressions/writing-guide/`), `/docs/traffic-policy/concepts/expressions/#writing-expressions` ],
    [ fromIncludes(`/docs/tcp/traffic-policy/expressions/writing-guide/`), `/docs/traffic-policy/concepts/expressions/#writing-expressions` ],
    [ fromIncludes(`/docs/http/traffic-policy/expressions/variables/#action-result-variables`), `/docs/traffic-policy/variables/action/` ],
    [ fromIncludes(`/docs/http/traffic-policy/expressions/variables/#connection-variables`), `/docs/traffic-policy/variables/connection/` ],
    [ fromIncludes(`/docs/http/traffic-policy/expressions/variables/#connection-geo-variables`), `/docs/traffic-policy/variables/connection/#connection-geo-variables` ],
    [ fromIncludes(`/docs/http/traffic-policy/expressions/variables/#connection-tls-variables`), `/docs/traffic-policy/variables/connection/#connection-tls-variables` ],
    [ fromIncludes(`/docs/http/traffic-policy/expressions/variables/#connection-tls-client-variables`), `/docs/traffic-policy/variables/connection/#connection-tls-client-variables` ],
    [ fromIncludes(`/docs/http/traffic-policy/expressions/variables/#connection-tls-server-variables`), `/docs/traffic-policy/variables/connection/#connection-tls-server-variables` ],
    [ fromIncludes(`/docs/http/traffic-policy/expressions/variables/#endpoint-variables`), `/docs/traffic-policy/variables/endpoint/` ],
    [ fromIncludes(`/docs/http/traffic-policy/expressions/variables/#time-variables`), `/docs/traffic-policy/variables/time/` ],
    [ fromIncludes(`/docs/tls/traffic-policy/expressions/variables/#action-result-variables`), `/docs/traffic-policy/variables/action/` ],
    [ fromIncludes(`/docs/tls/traffic-policy/expressions/variables/#connection-variables`), `/docs/traffic-policy/variables/connection/` ],
    [ fromIncludes(`/docs/tls/traffic-policy/expressions/variables/#connection-geo-variables`), `/docs/traffic-policy/variables/connection/#connection-geo-variables` ],
    [ fromIncludes(`/docs/tls/traffic-policy/expressions/variables/#connection-tls-variables`), `/docs/traffic-policy/variables/connection/#connection-tls-variables` ],
    [ fromIncludes(`/docs/tls/traffic-policy/expressions/variables/#connection-tls-client-variables`), `/docs/traffic-policy/variables/connection/#connection-tls-client-variables` ],
    [ fromIncludes(`/docs/tls/traffic-policy/expressions/variables/#connection-tls-server-variables`), `/docs/traffic-policy/variables/connection/#connection-tls-server-variables` ],
    [ fromIncludes(`/docs/tls/traffic-policy/expressions/variables/#endpoint-variables`), `/docs/traffic-policy/variables/endpoint/` ],
    [ fromIncludes(`/docs/tls/traffic-policy/expressions/variables/#time-variables`), `/docs/traffic-policy/variables/time/` ],
    [ fromIncludes(`/docs/tcp/traffic-policy/expressions/variables/#action-result-variables`), `/docs/traffic-policy/variables/action/` ],
    [ fromIncludes(`/docs/tcp/traffic-policy/expressions/variables/#connection-variables`), `/docs/traffic-policy/variables/connection/` ],
    [ fromIncludes(`/docs/tcp/traffic-policy/expressions/variables/#connection-geo-variables`), `/docs/traffic-policy/variables/connection/#connection-geo-variables` ],
    [ fromIncludes(`/docs/tcp/traffic-policy/expressions/variables/#connection-tls-variables`), `/docs/traffic-policy/variables/connection/#connection-tls-variables` ],
    [ fromIncludes(`/docs/tcp/traffic-policy/expressions/variables/#connection-tls-client-variables`), `/docs/traffic-policy/variables/connection/#connection-tls-client-variables` ],
    [ fromIncludes(`/docs/tcp/traffic-policy/expressions/variables/#connection-tls-server-variables`), `/docs/traffic-policy/variables/connection/#connection-tls-server-variables` ],
    [ fromIncludes(`/docs/tcp/traffic-policy/expressions/variables/#endpoint-variables`), `/docs/traffic-policy/variables/endpoint/` ],
    [ fromIncludes(`/docs/tcp/traffic-policy/expressions/variables/#time-variables`), `/docs/traffic-policy/variables/time/` ],
    [ fromIncludes(`/docs/tcp/traffic-policy/expressions/variables/`), `/docs/traffic-policy/variables/` ],
    [ fromIncludes(`/docs/http/traffic-policy/expressions/variables/`), `/docs/traffic-policy/variables/` ],
    [ fromIncludes(`/docs/tls/traffic-policy/expressions/variables/`), `/docs/traffic-policy/variables/` ],
    [ fromIncludes(`/docs/tcp/traffic-policy/expressions/variables/`), `/docs/traffic-policy/variables/` ],
    [ fromIncludes(`/docs/http/traffic-policy/expressions/macros/`), `/docs/traffic-policy/macros/` ],
    [ fromIncludes(`/docs/tls/traffic-policy/expressions/macros/`), `/docs/traffic-policy/macros/` ],
    [ fromIncludes(`/docs/tcp/traffic-policy/expressions/macros/`), `/docs/traffic-policy/macros/` ],
    [ fromIncludes(`/docs/http/traffic-policy/expressions/`), `/docs/traffic-policy/concepts/expressions/` ],
    [ fromIncludes(`/docs/tls/traffic-policy/expressions/`), `/docs/traffic-policy/concepts/expressions/` ],
    [ fromIncludes(`/docs/tcp/traffic-policy/expressions/`), `/docs/traffic-policy/concepts/expressions/` ],
    [ fromIncludes(`/docs/http/traffic-policy/`), `/docs/traffic-policy/` ],
    [ fromIncludes(`/docs/tls/traffic-policy/`), `/docs/traffic-policy/` ],
    [ fromIncludes(`/docs/tcp/traffic-policy/`), `/docs/traffic-policy/` ],

    // DEC 2024 - New TP Getting Started
    [ fromExact(`/docs/traffic-policy/getting-started/`), `/docs/traffic-policy/getting-started/agent-endpoints/cli` ],
]

// get current href from window
const currentPath = window.location.pathname

// set new path to current path
let newPath = currentPath

// iterate over each redirect, when a match is found, update newPath
// we do this until the list is finished letting us stack redirects:
// redirect A (2018) -> redirect B (2020) -> redirect C (current year)
for (const redirect of redirects) {
    let fromFn = redirect[0]
    let toFn = redirect[1]

    // Sugar for exact matching
    if (typeof fromFn === 'string') {
        fromFn = fromExact(fromFn)
    }

    // Sugar for exact replacement
    if (typeof toFn === 'string') {
        toFn = toExact(toFn)
    }

    const [from, fromResult] = fromFn(newPath)
    console.log(from, fromResult, fromFn, newPath)
    if (fromResult) {
        newPath = toFn(newPath, from)
    }
}

// redirect when the path has changed
if (newPath != currentPath && newPath != window.location.pathname) {
    window.location.href = newPath
} else {
    console.error(`ignoring redirect from ${window.location.href} to ${newPath}; looks loopy`)
}
