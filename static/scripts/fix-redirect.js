const path = window.location.pathname
const goto = (path) => {
    window.location.href = `${window.location.origin}${path}`
}

// Just for exact match
if (path.includes("/docs/ngrok-link")) goto(`/docs/cloud-edge`)
if (path.includes("/docs/api/api-clients")) goto(`/docs/api/#client-libraries`)
if (path.includes("/docs/api/client-libraries")) goto(`/docs/api/#client-libraries`)
if (path.includes("/docs/api/terraform")) goto(`/docs/api/#terraform-provider`)
if (path.includes("/docs/platform/api")) goto(`/docs/api/`)
if (path.includes("/docs/platform/events")) goto(`/docs/events/`)
if (path.includes("/docs/events/filtering")) goto(`/docs/events/#filters`)
if (path.includes("/docs/http-header-templates/")) goto(`/docs/cloud-edge/http-header-templates/`)
if (path.includes("/docs/platform/pops/")) goto(`/docs/cloud-edge/pops/`)
if (path.includes("/docs/best-practices/security-dev-productivity/")) goto(`/docs/guides/security-dev-productivity/`)
if (path.includes("/docs/platform/ip-policies/")) goto(`/docs/cloud-edge/ip-policies/`)
if (path.includes("/docs/platform/botusers/")) goto(`/docs/user-management/#bot-users`)
if (path.includes("/docs/platform/dashboard/")) goto(`/docs/user-management/#sso`)
if (path.includes("/docs/cloud-edge/modules/webhook/")) goto(`/docs/cloud-edge/modules/webhook-verification/`)
if (path.includes("/docs/cloud-edge/modules/oauth/amazon/")) goto(`/docs/integrations/amazon/oauth/`)
if (path.includes("/docs/cloud-edge/modules/oauth/facebook/")) goto(`/docs/integrations/facebook/oauth/`)
if (path.includes("/docs/cloud-edge/modules/oauth/github/")) goto(`/docs/integrations/github/oauth/`)
if (path.includes("/docs/cloud-edge/modules/oauth/gitlab/")) goto(`/docs/integrations/gitlab/oauth/`)
if (path.includes("/docs/cloud-edge/modules/oauth/google/")) goto(`/docs/integrations/google/oauth/`)
if (path.includes("/docs/cloud-edge/modules/oauth/linkedin/")) goto(`/docs/integrations/linkedin/oauth/`)
if (path.includes("/docs/cloud-edge/modules/oauth/microsoft/")) goto(`/docs/integrations/microsoft/oauth/`)
if (path.includes("/docs/cloud-edge/modules/oauth/twitch/")) goto(`/docs/integrations/twitch/oauth/`)
if (path.includes("/docs/cloud-edge/http-header-templates/")) goto(`/docs/cloud-edge/modules/request-headers/#variables`)
if (path.includes("/docs/integrations/awscloudwatch")) goto(`/docs/integrations/amazon-cloudwatch/`)
if (path.includes("/docs/integrations/awsfirehose")) goto(`/docs/integrations/amazon-firehose/`)
if (path.includes("/docs/integrations/awskinesis")) goto(`/docs/integrations/amazon-kinesis/`)

const match = path.match(/\/docs\/ngrok-agent(\/[\w]*)/);
if (!!match) {
	goto(`/docs/secure-tunnels/ngrok-agent/reference${match[1]}${window.location.hash}`)
}
