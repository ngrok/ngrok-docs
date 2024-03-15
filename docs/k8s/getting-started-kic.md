---
title: Getting Started - Kubernetes Ingress Controller
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

import K8sIngressInstallExample from "/examples/k8s/install-ingress.mdx";
import K8sGatewayAPIInstallExample from "/examples/k8s/install-gateway-api.mdx";

import K8sIngressModifyHeadersExample from "/examples/k8s/http-request-headers.mdx";
import K8sGatewayModifyHeadersExample from "/examples/k8s/http-request-headers-gateway.mdx";

import K8sIngressRedirectExample from "/examples/k8s/http-request-redirect.mdx";
import K8sGatewayRedirectExample from "/examples/k8s/http-request-redirect-gateway.mdx";

import StaticDomainKubernetesExample from "/examples/k8s/http-static-domain.mdx";
import StaticDomainKubernetesGatewayExample from "/examples/k8s/http-static-domain-gateway.mdx";

import StaticDomainKubernetesPathExample from "/examples/k8s/http-static-domain-path.mdx";
import StaticDomainKubernetesGatewayPathExample from "/examples/k8s/http-static-domain-gateway-path.mdx";

# Kubernetes Ingress Controller

## Overview

The Kubernetes Ingress Controller within the Kubernetes Operator allows access to k8s Services using Kubernetes [Ingress CRDs](https://kubernetes.io/docs/concepts/services-networking/ingress/). More details on how these are derived can be found [here](/docs/k8s/with-edges).

Other ngrok features such as TCP Edges can be configured via [CRDs](/docs/k8s/user-guide/crds).

If you are looking to install the controller for the first time, see our [deployment-guide](/docs/k8s/deployment-guide/).
If it's already installed and you are looking to configure ingress for an app or service, see our [user-guide](/docs/k8s/user-guide/).

## Install

Installing the ngrok Operator is easy using Helm.

		<K8sIngressInstallExample />

<br />

## Example Usage

This would create an Edge on with the Domain `example.ngrok.app` that routes traffic to the Kubernetes service `example-service` running on port 80.

<Tabs groupId="k8s-basic" queryString="k8s-basic">
	<TabItem value="ingress" label="Ingress Controller">
		<StaticDomainKubernetesExample />
	</TabItem>
	<TabItem value="gatewayAPI" label="Gateway API" default>
		<StaticDomainKubernetesGatewayExample />
	</TabItem>
</Tabs>

## Route Traffic based on a path

This would create an Edge on with the Domain `example.ngrok.app` that routes traffic from example.ngrok.app/foo to the Kubernetes service `example-service` running on port 80.

<Tabs groupId="k8s-basic-path" queryString="k8s-basic-path">
	<TabItem value="ingress" label="Ingress Controller">
		<StaticDomainKubernetesPathExample />
	</TabItem>
	<TabItem value="gatewayAPI" label="Gateway API" default>
		<StaticDomainKubernetesGatewayPathExample />
	</TabItem>
</Tabs>

## Modify Headers

<Tabs groupId="k8s-request-headers" queryString="k8s-request-headers">
	<TabItem value="ingress" label="Ingress Controller">
		<K8sIngressModifyHeadersExample />
	</TabItem>
	<TabItem value="gatewayAPI" label="Gateway API" default>
		<K8sGatewayModifyHeadersExample />
	</TabItem>
</Tabs>

## Redirect Traffic

<Tabs groupId="k8s-request-redirect" queryString="k8s-request-redirect">
	<TabItem value="ingress" label="Ingress Controller">
		<K8sIngressRedirectExample />
	</TabItem>
	<TabItem value="gatewayAPI" label="Gateway API" default>
		<K8sGatewayRedirectExample />
	</TabItem>
</Tabs>

## Pricing

The ngrok Kubernetes Ingress Controller is available to all ngrok users at no
additional charge. You only incur costs if the resources provisioned by the
controller incur a cost.
