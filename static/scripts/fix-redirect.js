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

    // /docs/guides/how-to-set-up-a-custom-domain/ -> /docs/guides/other-guides/how-to-set-up-a-custom-domain
    [ fromIncludes(`/docs/guides/how-to-set-up-a-custom-domain/`), `/docs/guides/other-guides/how-to-set-up-a-custom-domain/` ],

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

]

// get current href from window
const currentPath = window.location.href

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
