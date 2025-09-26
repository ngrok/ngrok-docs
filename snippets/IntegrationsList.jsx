
export const IntegrationsList = () => {

	const integrations = [
		{
		  "path": "/integrations/cli-credentials/cli-client",
		  "frontMatter": {
			"title": "1Password ngrok shell plugin",
			"description": "Secure your ngrok credentials with 1Password",
			"tags": [
			  "1password",
			  "security",
			  "password vault",
			  "command line"
			]
		  },
		  "contentTitle": "1Password ngrok shell plugin",
		  "category": "cli-credentials"
		},
		{
		  "path": "/integrations/webhooks/aftership-webhooks",
		  "frontMatter": {
			"description": "Develop and test AfterShip webhooks from localhost",
			"title": "AfterShip Webhooks"
		  },
		  "contentTitle": "AfterShip Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/airship-webhooks",
		  "frontMatter": {
			"description": "Develop and test Airship webhooks from localhost",
			"title": "Airship Webhooks"
		  },
		  "contentTitle": "Airship Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/alchemy-webhooks",
		  "frontMatter": {
			"description": "Develop and test Alchemy webhooks from localhost",
			"title": "Alchemy Webhooks"
		  },
		  "contentTitle": "Alchemy Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/oauth/oauth",
		  "frontMatter": {
			"description": "Authenticate users with Amazon OAuth",
			"title": "Amazon OAuth"
		  },
		  "contentTitle": "Amazon OAuth",
		  "category": "oauth"
		},
		{
		  "path": "/integrations/webhooks/amazon-sns-webhooks",
		  "frontMatter": {
			"description": "Develop and test Amazon SNS webhooks from localhost",
			"title": "Amazon SNS Webhooks"
		  },
		  "contentTitle": "Amazon SNS Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/dashboard-sso/sso-oidc",
		  "frontMatter": {
			"title": "Auth0 Endpoint SSO (OpenID Connect)",
			"description": "Use Auth0 OIDC to secure access to ngrok endpoints"
		  },
		  "contentTitle": "Auth0 Endpoint SSO (OpenID Connect)",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/webhooks/autodesk-webhooks",
		  "frontMatter": {
			"description": "Develop and test Autodesk webhooks from localhost",
			"title": "Autodesk Platform Services Webhooks"
		  },
		  "contentTitle": "Autodesk Platform Services Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/dashboard-sso/sso-saml",
		  "frontMatter": {
			"description": "Use Microsoft Azure AD B2C to secure access to ngrok endpoints",
			"title": "Azure Active Directory B2C SSO (SAML)"
		  },
		  "contentTitle": "Azure Active Directory B2C SSO (SAML)",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/webhooks/bitbucket-webhooks",
		  "frontMatter": {
			"description": "Develop and test Bitbucket webhooks from localhost",
			"title": "Bitbucket Repository Webhooks"
		  },
		  "contentTitle": "Bitbucket Repository Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/box-webhooks",
		  "frontMatter": {
			"description": "Develop and test Box webhooks from localhost",
			"title": "Box Webhooks"
		  },
		  "contentTitle": "Box Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/brex-webhooks",
		  "frontMatter": {
			"description": "Develop and test Brex webhooks from localhost",
			"title": "Brex Webhooks"
		  },
		  "contentTitle": "Brex Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/buildkite-webhooks",
		  "frontMatter": {
			"description": "Develop and test Buildkite webhooks from localhost",
			"title": "Buildkite Webhooks"
		  },
		  "contentTitle": "Buildkite Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/calendly-webhooks",
		  "frontMatter": {
			"description": "Develop and test Calendly webhooks from localhost",
			"title": "Calendly Webhooks"
		  },
		  "contentTitle": "Calendly Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/castle-webhooks",
		  "frontMatter": {
			"description": "Develop and test Castle webhooks from localhost",
			"title": "Castle Webhooks"
		  },
		  "contentTitle": "Castle Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/chargify-webhooks",
		  "frontMatter": {
			"description": "Develop and test Chargify webhooks from localhost",
			"title": "Chargify Webhooks"
		  },
		  "contentTitle": "Chargify Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/circleci-webhooks",
		  "frontMatter": {
			"description": "Develop and test CircleCI webhooks from localhost",
			"title": "CircleCI Webhooks"
		  },
		  "contentTitle": "CircleCI Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/webex-webhooks",
		  "frontMatter": {
			"description": "Develop and test Webex webhooks from localhost",
			"title": "Cisco Webex Webhooks"
		  },
		  "contentTitle": "Cisco Webex Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/clearbit-webhooks",
		  "frontMatter": {
			"description": "Develop and test Clearbit webhooks from localhost",
			"title": "Clearbit Webhooks"
		  },
		  "contentTitle": "Clearbit Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/clerk-webhooks",
		  "frontMatter": {
			"description": "Develop and test Clerk webhooks from localhost",
			"title": "Clerk Webhooks"
		  },
		  "contentTitle": "Clerk Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/coinbase-webhooks",
		  "frontMatter": {
			"description": "Develop and test Coinbase webhooks from localhost",
			"title": "Coinbase Webhooks"
		  },
		  "contentTitle": "Coinbase Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/dashboard-sso/auth0-dashboard-sso",
		  "frontMatter": {
			"title": "Configure Auth0 Single Sign-On with SAML",
			"description": "Configure Single Sign-On for your ngrok dashboard using Auth0 as the Identity Provider"
		  },
		  "contentTitle": "Configure Auth0 Single Sign-On with SAML",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/webhooks/contentful-webhooks",
		  "frontMatter": {
			"title": "Contentful Webhooks"
		  },
		  "contentTitle": "Contentful Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/dashboard-sso/curity-sso-oidc",
		  "frontMatter": {
			"description": "Use Curity Identity Server to secure access to ngrok endpoints",
			"title": "Curity Identity Server (OpenID Connect)"
		  },
		  "contentTitle": "Curity Identity Server (OpenID Connect)",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/kubernetes-ingress/apiops",
		  "frontMatter": {
			"title": "Deploy a production API and gateway with APIOps using Argo CD and ngrok",
			"description": "Deploy an API using a APIOps-based deployment and lifecycle management process with Argo CD, ngrok's API gateway, the ngrok Kubernetes Operator, and the Kubernetes Gateway API."
		  },
		  "contentTitle": "Deploy a production API and gateway with APIOps using Argo CD and ngrok",
		  "category": "kubernetes-ingress"
		},
		{
		  "path": "/integrations/dashboard-sso/descope-sso-oidc",
		  "frontMatter": {
			"title": "Descope Endpoint SSO (OpenID Connect)",
			"description": "Use Descope OIDC to secure access to ngrok endpoints"
		  },
		  "contentTitle": "Descope Endpoint SSO (OpenID Connect)",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/dashboard-sso/descope-sso-saml",
		  "frontMatter": {
			"description": "Use Descope SAML to secure access to ngrok endpoints",
			"title": "Descope SSO (SAML)"
		  },
		  "contentTitle": "Descope SSO (SAML)",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/webhooks/docusign-webhooks",
		  "frontMatter": {
			"description": "Develop and test DocuSign webhooks from localhost",
			"title": "DocuSign Webhooks"
		  },
		  "contentTitle": "DocuSign Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/dropbox-webhooks",
		  "frontMatter": {
			"description": "Develop and test Dropbox webhooks from localhost",
			"title": "Dropbox Webhooks"
		  },
		  "contentTitle": "Dropbox Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/oauth/jwt-action",
		  "frontMatter": {
			"title": "Enable JWT validation with Auth0",
			"description": "Configure JWT Validation for tokens issued from Auth0"
		  },
		  "contentTitle": "Enable JWT validation with Auth0",
		  "category": "oauth"
		},
		{
		  "path": "/integrations/webhooks/facebook-messenger-webhooks",
		  "frontMatter": {
			"description": "Develop and test Facebook Messenger webhooks from localhost",
			"title": "Facebook Messenger Webhooks"
		  },
		  "contentTitle": "Facebook Messenger Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/oauth/facebook-oauth",
		  "frontMatter": {
			"description": "Authenticate users via Facebook OAuth",
			"title": "Facebook OAuth"
		  },
		  "contentTitle": "Facebook OAuth",
		  "category": "oauth"
		},
		{
		  "path": "/integrations/webhooks/facebook-webhooks",
		  "frontMatter": {
			"description": "Develop and test Facebook webhooks from localhost",
			"title": "Facebook Webhooks"
		  },
		  "contentTitle": "Facebook Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/frameio-webhooks",
		  "frontMatter": {
			"description": "Develop and test Frame.io webhooks from localhost",
			"title": "Frame.io Webhooks"
		  },
		  "contentTitle": "Frame.io Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/dashboard-sso/frontegg-sso-oidc",
		  "frontMatter": {
			"title": "Frontegg Endpoint SSO (OpenID Connect)",
			"description": "Use Frontegg OIDC to secure access to ngrok endpoints"
		  },
		  "contentTitle": "Frontegg Endpoint SSO (OpenID Connect)",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/dashboard-sso/frontegg-sso-saml",
		  "frontMatter": {
			"description": "Use Frontegg SAML to secure access to ngrok endpoints",
			"title": "Frontegg SSO (SAML)"
		  },
		  "contentTitle": "Frontegg SSO (SAML)",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/dashboard-sso/fusionauth-sso-oidc",
		  "frontMatter": {
			"title": "FusionAuth Endpoint SSO (OpenID Connect)",
			"description": "Use FusionAuth SSO to secure access to ngrok endpoints"
		  },
		  "contentTitle": "FusionAuth Endpoint SSO (OpenID Connect)",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/oauth/github-oauth",
		  "frontMatter": {
			"description": "Authenticate users via GitHub OAuth",
			"title": "GitHub OAuth"
		  },
		  "contentTitle": "GitHub OAuth",
		  "category": "oauth"
		},
		{
		  "path": "/integrations/webhooks/github-webhooks",
		  "frontMatter": {
			"description": "Develop and test GitHub webhooks from localhost",
			"title": "GitHub Repository Webhooks"
		  },
		  "contentTitle": "GitHub Repository Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/oauth/gitlab-oauth",
		  "frontMatter": {
			"description": "Authenticate users via GitLab OAuth",
			"title": "GitLab"
		  },
		  "contentTitle": "GitLab",
		  "category": "oauth"
		},
		{
		  "path": "/integrations/webhooks/gitlab-webhooks",
		  "frontMatter": {
			"description": "Develop and test GitLab webhooks from localhost",
			"title": "GitLab Repository Webhooks"
		  },
		  "contentTitle": "GitLab Repository Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/oauth/google-oauth",
		  "frontMatter": {
			"description": "Authenticate users with Google OAuth",
			"title": "Google OAuth"
		  },
		  "contentTitle": "Google OAuth",
		  "category": "oauth"
		},
		{
		  "path": "/integrations/webhooks/heroku-webhooks",
		  "frontMatter": {
			"description": "Develop and test Heroku webhooks from localhost",
			"title": "Heroku Webhooks"
		  },
		  "contentTitle": "Heroku Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/cli-credentials/home-assistant-with-ngrok",
		  "frontMatter": {
			"title": "Home Assistant",
			"description": "Access your Home Assistant instance from anywhere with ngrok.",
			"tags": [
			  "home assistant",
			  "security",
			  "docker",
			  "iot"
			]
		  },
		  "contentTitle": "Home Assistant",
		  "category": "cli-credentials"
		},
		{
		  "path": "/integrations/webhooks/hostedhooks-webhooks",
		  "frontMatter": {
			"description": "Develop and test HostedHooks webhooks from localhost",
			"title": "HostedHooks Webhooks"
		  },
		  "contentTitle": "HostedHooks Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/hubspot-webhooks",
		  "frontMatter": {
			"description": "Develop and test HubSpot webhooks from localhost",
			"title": "HubSpot Webhooks"
		  },
		  "contentTitle": "HubSpot Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/hygraph-webhooks",
		  "frontMatter": {
			"description": "Develop and test Hygraph webhooks from localhost",
			"title": "Hygraph Webhooks"
		  },
		  "contentTitle": "Hygraph Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/kubernetes-ingress/k8s",
		  "frontMatter": {
			"description": "Set up a local cluster to demonstrate how to use the ngrok Kubernetes Operator with Linkerd.",
			"title": "Ingress to a microservices-based application connected via Linkerd's service mesh"
		  },
		  "contentTitle": "Ingress to a microservices-based application connected via Linkerd's service mesh",
		  "category": "kubernetes-ingress"
		},
		{
		  "path": "/integrations/kubernetes-ingress/azure-ad-k8s",
		  "frontMatter": {
			"description": "Add ingress to any app running in Kubernetes, then restrict access to only users authorized through Microsoft Entra ID, using the ngrok Kubernetes Operator.",
			"title": "Ingress to apps secured by Microsoft Entra ID in Kubernetes"
		  },
		  "contentTitle": "Ingress to apps secured by Microsoft Entra ID in Kubernetes",
		  "category": "kubernetes-ingress"
		},
		{
		  "path": "/integrations/kubernetes-ingress/vcluster-k8s",
		  "frontMatter": {
			"title": "Ingress to Kubernetes apps and srevices with vcluster",
			"description": "Setup a local virtual cluster to demonstrate how to use the ngrok Kubernetes Operator with vcluster."
		  },
		  "contentTitle": "Ingress to Kubernetes apps and srevices with vcluster",
		  "category": "kubernetes-ingress"
		},
		{
		  "path": "/integrations/kubernetes-ingress/azure-aks-k8s",
		  "frontMatter": {
			"title": "Ingress to Kubernetes apps deployed on Azure Kubernetes Service (AKS)",
			"description": "Learn how to deploy a new Kubernetes cluster and demo app via AKS, then add ingress to applications with ngrok's Kubernetes Operator."
		  },
		  "contentTitle": "Ingress to Kubernetes apps deployed on Azure Kubernetes Service (AKS)",
		  "category": "kubernetes-ingress"
		},
		{
		  "path": "/integrations/kubernetes-ingress/spectro-cloud-k8s",
		  "frontMatter": {
			"description": "Add ingress to any app running in a Kubernetes cluster managed by Spectro Cloud's Palette platform using the ngrok Kubernetes Operator.",
			"title": "Ingress to Kubernetes apps deployed on Spectro Cloud Palette"
		  },
		  "contentTitle": "Ingress to Kubernetes apps deployed on Spectro Cloud Palette",
		  "category": "kubernetes-ingress"
		},
		{
		  "path": "/integrations/kubernetes-ingress/rafay-k8s",
		  "frontMatter": {
			"title": "Ingress to Kubernetes apps managed by Rafay",
			"description": "Add ingress to any app running in a Kubernetes cluster managed by Rafay using the ngrok Kubernetes Operator."
		  },
		  "contentTitle": "Ingress to Kubernetes apps managed by Rafay",
		  "category": "kubernetes-ingress"
		},
		{
		  "path": "/integrations/kubernetes-ingress/digitalocean-k8s",
		  "frontMatter": {
			"title": "Ingress to Kubernetes apps on clusters managed by DigitalOcean",
			"description": "Add Kubernetes ingress to any app running in a cluster managed by DigitalOcean using the ngrok Kubernetes Operator."
		  },
		  "contentTitle": "Ingress to Kubernetes apps on clusters managed by DigitalOcean",
		  "category": "kubernetes-ingress"
		},
		{
		  "path": "/integrations/webhooks/instagram-webhooks",
		  "frontMatter": {
			"description": "Develop and test Instagram webhooks from localhost",
			"title": "Instagram Webhooks"
		  },
		  "contentTitle": "Instagram Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/event-destinations/azure-logs-event-destination",
		  "frontMatter": {
			"title": "Integrate with the Azure Logs Ingestion API",
			"description": "Send network traffic logs from ngrok to Azure Logs Ingestion",
			"tags": [
			  "events",
			  "logs",
			  "azure",
			  "event destinations"
			]
		  },
		  "contentTitle": "Integrate with the Azure Logs Ingestion API",
		  "category": "event-destinations"
		},
		{
		  "path": "/integrations/webhooks/intercom-webhooks",
		  "frontMatter": {
			"description": "Develop and test Intercom webhooks from localhost",
			"title": "Intercom Webhooks"
		  },
		  "contentTitle": "Intercom Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/dashboard-sso/jumpcloud-sso-oidc",
		  "frontMatter": {
			"title": "JumpCloud Endpoint SSO (OpenID Connect)",
			"description": "Use JumpCloud OIDC to secure access to ngrok endpoints"
		  },
		  "contentTitle": "JumpCloud Endpoint SSO (OpenID Connect)",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/dashboard-sso/jumpcloud-sso-saml",
		  "frontMatter": {
			"description": "Use JumpCloud SAML to secure access to ngrok endpoints",
			"title": "JumpCloud SSO (SAML)"
		  },
		  "contentTitle": "JumpCloud SSO (SAML)",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/kubernetes-ingress/rancher-k8s",
		  "frontMatter": {
			"title": "Kubernetes ingress to applications and clusters managed by Rancher",
			"description": "Set up a local installation of Rancher to deploy a new RKE2 cluster and add ingress to applications with ngrok's Kubernetes Operator."
		  },
		  "contentTitle": "Kubernetes ingress to applications and clusters managed by Rancher",
		  "category": "kubernetes-ingress"
		},
		{
		  "path": "/integrations/kubernetes-ingress/microk8s-k8s",
		  "frontMatter": {
			"title": "Kubernetes ingress to apps/APIs on clusters managed by Canonical MicroK8s",
			"description": "Add ingress to any app running in a Kubernetes cluster managed by Canonical Microk8s using the ngrok Kubernetes Operator."
		  },
		  "contentTitle": "Kubernetes ingress to apps/APIs on clusters managed by Canonical MicroK8s",
		  "category": "kubernetes-ingress"
		},
		{
		  "path": "/integrations/kubernetes-ingress/google-kubernetes-engine",
		  "frontMatter": {
			"title": "Kubernetes ingress to GKE services with ngrok",
			"description": "Learn how to use the ngrok Kubernetes Operator on Google Kubernetes Engine (GKE) to quickly add secure Kubernetes ingress to your apps or APIs.",
			"tags": [
			  "kubernetes",
			  "k8s",
			  "google kubernetes engine",
			  "gke",
			  "google",
			  "ingress controller"
			]
		  },
		  "contentTitle": "Kubernetes ingress to GKE services with ngrok",
		  "category": "kubernetes-ingress"
		},
		{
		  "path": "/integrations/kubernetes-ingress/eks",
		  "frontMatter": {
			"title": "Kubernetes ingress to services hosted on EKS",
			"description": "Learn how to get started running the ngrok Kubernetes Operator on AWS EKS",
			"tags": [
			  "kubernetes",
			  "k8s",
			  "eks",
			  "elastic kubernetes service",
			  "ingress controller",
			  "kubernetes operator",
			  "operator"
			]
		  },
		  "contentTitle": "Kubernetes ingress to services hosted on EKS",
		  "category": "kubernetes-ingress"
		},
		{
		  "path": "/integrations/kubernetes-ingress/consul-k8s",
		  "frontMatter": {
			"title": "Kubernetes ingress to services in a Consul service mesh",
			"description": "Setup a local Consul Service mesh to demonstrate how to use the ngrok Kubernetes Operator with Consul."
		  },
		  "contentTitle": "Kubernetes ingress to services in a Consul service mesh",
		  "category": "kubernetes-ingress"
		},
		{
		  "path": "/integrations/webhooks/launchdarkly-webhooks",
		  "frontMatter": {
			"description": "Develop and test LaunchDarkly webhooks from localhost",
			"title": "LaunchDarkly Webhooks"
		  },
		  "contentTitle": "LaunchDarkly Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/oauth/linkedin-oauth",
		  "frontMatter": {
			"description": "Authenticate users with LinkedIn OAuth",
			"title": "LinkedIn"
		  },
		  "contentTitle": "LinkedIn",
		  "category": "oauth"
		},
		{
		  "path": "/integrations/webhooks/mailchimp-webhooks",
		  "frontMatter": {
			"description": "Develop and test Mailchimp webhooks from localhost",
			"title": "Mailchimp Webhooks"
		  },
		  "contentTitle": "Mailchimp Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/mailgun-webhooks",
		  "frontMatter": {
			"description": "Develop and test Mailgun webhooks from localhost",
			"title": "Mailgun Webhooks"
		  },
		  "contentTitle": "Mailgun Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/dashboard-sso/azure-ad-sso-saml",
		  "frontMatter": {
			"description": "Use Microsoft Entra ID to secure access to ngrok endpoints",
			"title": "Microsoft Entra ID SSO (SAML)"
		  },
		  "contentTitle": "Microsoft Entra ID SSO (SAML)",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/dashboard-sso/microsoft-sso-saml",
		  "frontMatter": {
			"description": "Use SAML with Microsoft Entra ID to provide SSO to the ngrok Dashboard",
			"title": "Microsoft Entra ID SSO (SAML)"
		  },
		  "contentTitle": "Microsoft Entra ID SSO (SAML)",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/oauth/microsoft-oauth",
		  "frontMatter": {
			"description": "Authenticate users with Microsoft Entra ID OAuth",
			"title": "Microsoft OAuth"
		  },
		  "contentTitle": "Microsoft OAuth",
		  "category": "oauth"
		},
		{
		  "path": "/integrations/webhooks/teams-webhooks",
		  "frontMatter": {
			"description": "Develop and test Microsoft Teams webhooks from localhost",
			"title": "Microsoft Teams Webhooks"
		  },
		  "contentTitle": "Microsoft Teams Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/dashboard-sso/miniorange-sso-oidc",
		  "frontMatter": {
			"title": "miniOrange Endpoint SSO (OpenID Connect)",
			"description": "Use miniOrange OIDC to secure access to ngrok endpoints"
		  },
		  "contentTitle": "miniOrange Endpoint SSO (OpenID Connect)",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/dashboard-sso/miniorange-sso-saml",
		  "frontMatter": {
			"description": "Use miniOrange SAML to secure access to ngrok endpoints",
			"title": "miniOrange SSO (SAML)"
		  },
		  "contentTitle": "miniOrange SSO (SAML)",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/webhooks/modern-treasury-webhooks",
		  "frontMatter": {
			"description": "Develop and test Modern Treasury webhooks from localhost",
			"title": "Modern Treasury Webhooks"
		  },
		  "contentTitle": "Modern Treasury Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/mongodb-webhooks",
		  "frontMatter": {
			"description": "Develop and test MongoDB webhooks from localhost",
			"title": "MongoDB Webhooks"
		  },
		  "contentTitle": "MongoDB Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/guides/mqtt",
		  "frontMatter": {
			"description": "Communicate with your MQTT server",
			"title": "MQTT"
		  },
		  "contentTitle": "MQTT",
		  "category": "guides"
		},
		{
		  "path": "/integrations/webhooks/mux-webhooks",
		  "frontMatter": {
			"description": "Develop and test Mux webhooks from localhost",
			"title": "Mux Webhooks"
		  },
		  "contentTitle": "Mux Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/dashboard-sso/dashboard-sso-okta-setup",
		  "frontMatter": {
			"description": "How to use Okta SSO to sign into the ngrok dashboard",
			"title": "Okta Dashboard SSO Setup"
		  },
		  "contentTitle": "Okta Dashboard SSO Setup",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/dashboard-sso/okta-sso-oidc",
		  "frontMatter": {
			"title": "Okta Endpoint SSO (OpenID Connect)",
			"description": "Use Okta OIDC to secure access to ngrok endpoints"
		  },
		  "contentTitle": "Okta Endpoint SSO (OpenID Connect)",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/dashboard-sso/okta-sso-saml",
		  "frontMatter": {
			"description": "Use Okta SAML to secure access to ngrok endpoints",
			"title": "Okta Endpoint SSO (SAML)"
		  },
		  "contentTitle": "Okta Endpoint SSO (SAML)",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/dashboard-sso/scim",
		  "frontMatter": {
			"title": "Okta SCIM User Provisioning",
			"description": "Enable automated user provisioning via SCIM",
			"tags": [
			  "okta",
			  "scim",
			  "user provisioning",
			  "dashboard sso"
			]
		  },
		  "contentTitle": "Okta SCIM User Provisioning",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/webhooks/okta-webhooks",
		  "frontMatter": {
			"description": "Develop and test Okta webhooks from localhost",
			"title": "Okta Webhooks"
		  },
		  "contentTitle": "Okta Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/orbit-webhooks",
		  "frontMatter": {
			"description": "Develop and test Orbit webhooks from localhost",
			"title": "Orbit Webhooks"
		  },
		  "contentTitle": "Orbit Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/pagerduty-webhooks",
		  "frontMatter": {
			"description": "Develop and test PagerDuty webhooks from localhost",
			"title": "PagerDuty Webhooks"
		  },
		  "contentTitle": "PagerDuty Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/pinwheel-webhooks",
		  "frontMatter": {
			"description": "Develop and test Pinwheel webhooks from localhost",
			"title": "Pinwheel Webhooks"
		  },
		  "contentTitle": "Pinwheel Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/plivo-webhooks",
		  "frontMatter": {
			"description": "Develop and test Plivo webhooks from localhost",
			"title": "Plivo Webhooks"
		  },
		  "contentTitle": "Plivo Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/pusher-webhooks",
		  "frontMatter": {
			"description": "Develop and test Pusher webhooks from localhost",
			"title": "Pusher Webhooks"
		  },
		  "contentTitle": "Pusher Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/dashboard-sso/salesforce-dashboard-sso-with-oidc",
		  "frontMatter": {
			"title": "Salesforce Dashboard Single Sign-On (SSO) Using OIDC",
			"description": "Use Salesforce's managed applications to add SSO for your ngrok dashboard using the OIDC integration"
		  },
		  "contentTitle": "Salesforce Dashboard Single Sign-On (SSO) Using OIDC",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/dashboard-sso/ssowithendpoints",
		  "frontMatter": {
			"title": "Secure ngrok Endpoints using Salesforce OpenID Connect",
			"description": "Use Salesforce's managed applications to add SSO for your ngrok resources"
		  },
		  "contentTitle": "Secure ngrok Endpoints using Salesforce OpenID Connect",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/event-destinations/amazon-cloudwatch-event-destination",
		  "frontMatter": {
			"title": "Send Network Logs from ngrok to AWS CloudWatch",
			"description": "Send network traffic logs from ngrok to AWS CloudWatch",
			"tags": [
			  "events",
			  "logs",
			  "cloudwatch",
			  "aws",
			  "event destinations"
			]
		  },
		  "contentTitle": "Send Network Logs from ngrok to AWS CloudWatch",
		  "category": "event-destinations"
		},
		{
		  "path": "/integrations/event-destinations/amazon-firehose-event-destination",
		  "frontMatter": {
			"title": "Send Network Logs from ngrok to AWS Firehose",
			"description": "Send network traffic logs from ngrok to AWS Firehose",
			"tags": [
			  "events",
			  "logs",
			  "firehose",
			  "aws",
			  "event destinations"
			]
		  },
		  "contentTitle": "Send Network Logs from ngrok to AWS Firehose",
		  "category": "event-destinations"
		},
		{
		  "path": "/integrations/event-destinations/amazon-kinesis-event-destination",
		  "frontMatter": {
			"title": "Send Network Logs from ngrok to AWS Kinesis",
			"description": "Send network traffic logs from ngrok to AWS Kinesis",
			"tags": [
			  "events",
			  "logs",
			  "kinesis",
			  "aws",
			  "event destinations"
			]
		  },
		  "contentTitle": "Send Network Logs from ngrok to AWS Kinesis",
		  "category": "event-destinations"
		},
		{
		  "path": "/integrations/event-destinations/datadog-event-destination",
		  "frontMatter": {
			"title": "Send Network Logs from ngrok to Datadog",
			"description": "Send network traffic logs from ngrok to Datadog",
			"tags": [
			  "events",
			  "logs",
			  "datadog",
			  "event destinations"
			]
		  },
		  "contentTitle": "Send Network Logs from ngrok to Datadog",
		  "category": "event-destinations"
		},
		{
		  "path": "/integrations/webhooks/sendgrid-webhooks",
		  "frontMatter": {
			"description": "Develop and test SendGrid webhooks from localhost",
			"title": "SendGrid Webhooks"
		  },
		  "contentTitle": "SendGrid Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/sentry-webhooks",
		  "frontMatter": {
			"description": "Develop and test Sentry webhooks from localhost",
			"title": "Sentry Webhooks"
		  },
		  "contentTitle": "Sentry Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/shopify-webhooks",
		  "frontMatter": {
			"description": "Develop and test Shopify webhooks from localhost",
			"title": "Shopify Webhook"
		  },
		  "contentTitle": "Shopify Webhook",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/signalsciences-webhooks",
		  "frontMatter": {
			"description": "Develop and test Signal Sciences webhooks from localhost",
			"title": "Signal Sciences Webhooks"
		  },
		  "contentTitle": "Signal Sciences Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/slack-webhooks",
		  "frontMatter": {
			"description": "Develop and test Slack webhooks from localhost",
			"title": "Slack Webhook"
		  },
		  "contentTitle": "Slack Webhook",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/sonatype-nexus-webhooks",
		  "frontMatter": {
			"description": "Develop and test Sonatype Nexus webhooks from localhost",
			"title": "Sonatype Nexus Webhooks"
		  },
		  "contentTitle": "Sonatype Nexus Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/square-webhooks",
		  "frontMatter": {
			"description": "Develop and test Square webhooks from localhost",
			"title": "Square Webhooks"
		  },
		  "contentTitle": "Square Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/stripe-webhooks",
		  "frontMatter": {
			"description": "Develop and test Stripe webhooks from localhost",
			"title": "Stripe Webhook"
		  },
		  "contentTitle": "Stripe Webhook",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/svix-webhooks",
		  "frontMatter": {
			"description": "Develop and test Svix webhooks from localhost",
			"title": "Svix Webhooks"
		  },
		  "contentTitle": "Svix Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/terraform-webhooks",
		  "frontMatter": {
			"description": "Develop and test Terraform webhooks from localhost",
			"title": "Terraform Cloud Webhooks"
		  },
		  "contentTitle": "Terraform Cloud Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/tiktok-webhooks",
		  "frontMatter": {
			"description": "Develop and test TikTok webhooks from localhost",
			"title": "TikTok Webhooks"
		  },
		  "contentTitle": "TikTok Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/trendmicro-webhooks",
		  "frontMatter": {
			"description": "Develop and test Trend Micro webhooks from localhost",
			"title": "Trend Micro Webhooks"
		  },
		  "contentTitle": "Trend Micro Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/twilio-webhooks",
		  "frontMatter": {
			"description": "Develop and test Twilio webhooks from localhost",
			"title": "Twilio SMS Webhooks"
		  },
		  "contentTitle": "Twilio SMS Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/oauth/twitch-oauth",
		  "frontMatter": {
			"description": "Authenticate users with Twitch OAuth",
			"title": "Twitch"
		  },
		  "contentTitle": "Twitch",
		  "category": "oauth"
		},
		{
		  "path": "/integrations/webhooks/typeform-webhooks",
		  "frontMatter": {
			"description": "Develop and test Typeform webhooks from localhost",
			"title": "Typeform Webhooks"
		  },
		  "contentTitle": "Typeform Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/kubernetes-ingress/gslb",
		  "frontMatter": {
			"description": "In this guide, you'll learn how to layer load balancing between three or more globally-distributed, cloud-based virtual machines in DigitalOcean.",
			"title": "Use ngrok's Global Server Load Balancing with DigitalOcean"
		  },
		  "contentTitle": "Use ngrok's Global Server Load Balancing with DigitalOcean",
		  "category": "kubernetes-ingress"
		},
		{
		  "path": "/integrations/guides/linode-gslb",
		  "frontMatter": {
			"description": "In this guide, you'll learn how to layer load balancing between three or more globally-distributed, cloud-based virtual machines in Linode.",
			"title": "Use ngrok's Global Server Load Balancing with Linode"
		  },
		  "contentTitle": "Use ngrok's Global Server Load Balancing with Linode",
		  "category": "guides"
		},
		{
		  "path": "/integrations/webhooks/vmware-webhooks",
		  "frontMatter": {
			"description": "Develop and test VMware webhooks from localhost",
			"title": "VMware Workspace ONE Webhooks"
		  },
		  "contentTitle": "VMware Workspace ONE Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/dashboard-sso/trustelem-sso-oidc",
		  "frontMatter": {
			"title": "Wallix Trustelem Endpoint SSO (OpenID Connect)",
			"description": "Use Wallix Trustelem OIDC to secure access to ngrok endpoints"
		  },
		  "contentTitle": "Wallix Trustelem Endpoint SSO (OpenID Connect)",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/dashboard-sso/trustelem-sso-saml",
		  "frontMatter": {
			"description": "Use Wallix Trustelem SAML to secure access to ngrok endpoints",
			"title": "Wallix Trustelem SSO (SAML)"
		  },
		  "contentTitle": "Wallix Trustelem SSO (SAML)",
		  "category": "dashboard-sso"
		},
		{
		  "path": "/integrations/webhooks/whatsapp-webhooks",
		  "frontMatter": {
			"description": "Develop and test WhatsApp webhooks from localhost",
			"title": "WhatsApp Webhooks"
		  },
		  "contentTitle": "WhatsApp Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/worldline-webhooks",
		  "frontMatter": {
			"description": "Develop and test Worldline webhooks from localhost",
			"title": "Worldline Webhooks"
		  },
		  "contentTitle": "Worldline Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/twitter-webhooks",
		  "frontMatter": {
			"description": "Develop and test X (formerly Twitter) webhooks from localhost",
			"title": "X (formerly Twitter) Webhooks"
		  },
		  "contentTitle": "X (formerly Twitter) Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/xero-webhooks",
		  "frontMatter": {
			"description": "Develop and test Xero webhooks from localhost",
			"title": "Xero Webhooks"
		  },
		  "contentTitle": "Xero Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/zendesk-webhooks",
		  "frontMatter": {
			"description": "Develop and test Zendesk webhooks from localhost",
			"title": "Zendesk Webhooks"
		  },
		  "contentTitle": "Zendesk Webhooks",
		  "category": "webhooks"
		},
		{
		  "path": "/integrations/webhooks/zoom-webhooks",
		  "frontMatter": {
			"description": "Develop and test Zoom webhooks from localhost",
			"title": "Zoom Webhooks"
		  },
		  "contentTitle": "Zoom Webhooks",
		  "category": "webhooks"
		}
	  ];

	const categoriesList = [
		{ value: "webhooks",
			label: "Webhooks",
		},
		{ value: "oauth",
			label: "OAuth",
		},
		{ value: "dashboard-sso",
			label: "Dashboard SSO",
		},
		{ value: "cli-credentials",
			label: "CLI Credentials",
		},
		{ value: "kubernetes-ingress",
			label: "Kubernetes Ingress",
		},
		{ value: "event-destinations",
			label: "Event Destinations",
		},
		{ value: "guides",
			label: "Guides",
		}
	].sort((a,b) => a.label.localeCompare(b.label));

	


	return (
		categoriesList.map(category=>{
			return (
				<>
					<h2 className="text-2xl mb-3 font-bold text-strong" key={category.value}>{category.label}</h2>
		<Columns cols={2}>
			{integrations.map((integration) => {
				if(integration.category !== category.value) return null;
				return (
				<Card
					key={integration.path}
					href={integration.path}
					img={integration.img}
					icon={integration.icon}
					className="flex-col flex"
				>
					<h3 className="text-lg mb-3 font-bold text-strong">{integration.contentTitle || integration.frontMatter?.title}</h3>
					<span>{integration.frontMatter.excerpt || integration.frontMatter.description}</span>
				</Card>
			)})}
		</Columns>
				</>
			)
		})
	);
}
