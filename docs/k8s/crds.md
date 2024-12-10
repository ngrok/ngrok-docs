# CRDs

Kubernetes has the concept of [Custom Resource Definitions](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) (CRDs) which allow you to define your own custom resources. This document will cover the CRDs you might use to achieve your goals with the ngrok Kubernetes Operator.

_**Warning:**_ There are other CRDs not documented here that are used internally by the controller. It is not recommended to edit these, but inspecting them to query the state of the system could be useful at times. See the [internal CRDs](/docs/k8s/developer-guide/internal-crds) document for more details.

## Ngrok Module Sets

`NgrokModuleSets` is a CRD that lets you define combinations of ngrok modules that can be set on your ingress objects and applied to all of their routes. For an in-depth guide on configuring `NgrokModuleSets` see the [Route Modules Guide](/docs/k8s/user-guide#modules).

### NgrokModuleSetModules

| Field                 | Type                         | Description                                            |
| --------------------- | ---------------------------- | ------------------------------------------------------ |
| `compression`         | EndpointCompression          | Configuration for compression for this module          |
| `headers`             | EndpointHeaders              | Configuration for headers for this module              |
| `ipRestriction`       | EndpointIPPolicy             | Configuration for IP restriction for this module       |
| `tlsTermination`      | EndpointTLSTerminationAtEdge | Configuration for TLS termination for this module      |
| `webhookVerification` | EndpointWebhookVerification  | Configuration for webhook verification for this module |

### NgrokModuleSet

| Field        | Type                  | Description                                                    |
| ------------ | --------------------- | -------------------------------------------------------------- |
| `apiVersion` | string                | API version of the `NgrokModuleSet` custom resource definition |
| `kind`       | string                | Kind of the custom resource definition                         |
| `metadata`   | ObjectMeta            | Standard Kubernetes metadata                                   |
| `modules`    | NgrokModuleSetModules | The set of modules for this custom resource definition         |

### NgrokTrafficPolicy

| Field        | Type            | Description                                            |
| ------------ | --------------- | ------------------------------------------------------ |
| `apiVersion` | string          | API version of the `NgrokTrafficPolicy`                |
| `kind`       | string          | Kind of the custom resource definition                 |
| `metadata`   | ObjectMeta      | Standard Kubernetes metadata                           |
| `policy`     | json.RawMessage | See [policy configuration](/docs/http/traffic-policy/) |

### EndpointCompression

| Field     | Type    | Description                                             |
| --------- | ------- | ------------------------------------------------------- |
| `enabled` | boolean | Whether or not compression is enabled for this endpoint |

### EndpointIPPolicy

| Field        | Type     | Description                           |
| ------------ | -------- | ------------------------------------- |
| `ippolicies` | []string | List of IP policies for this endpoint |

### EndpointRequestHeaders

| Field    | Type              | Description                                                                   |
| -------- | ----------------- | ----------------------------------------------------------------------------- |
| `add`    | map[string]string | Map of header key to header value that will be injected into the HTTP Request |
| `remove` | []string          | List of header names that will be removed from the HTTP Request               |

### EndpointResponseHeaders

| Field    | Type              | Description                                                                    |
| -------- | ----------------- | ------------------------------------------------------------------------------ |
| `add`    | map[string]string | Map of header key to header value that will be injected into the HTTP Response |
| `remove` | []string          | List of header names that will be removed from the HTTP Response               |

### EndpointHeaders

| Field      | Type                    | Description                                          |
| ---------- | ----------------------- | ---------------------------------------------------- |
| `request`  | EndpointRequestHeaders  | Configuration for request headers for this endpoint  |
| `response` | EndpointResponseHeaders | Configuration for response headers for this endpoint |

### EndpointTLSTerminationAtEdge

| Field        | Type   | Description                                              |
| ------------ | ------ | -------------------------------------------------------- |
| `minVersion` | string | Minimum TLS version to allow for connections to the edge |

### SecretKeyRef

| Field  | Type   | Description                   |
| ------ | ------ | ----------------------------- |
| `name` | string | Name of the Kubernetes secret |
| `key`  | string | Key in the secret to use      |

### EndpointWebhookVerification

| Field      | Type         | Description                                                                                   |
| ---------- | ------------ | --------------------------------------------------------------------------------------------- |
| `provider` | string       | String indicating which webhook provider will be sending webhooks to this endpoint            |
| `secret`   | SecretKeyRef | Reference to a secret containing the secret used to validate requests from the given provider |

## IP Policies

The `IPPolicy` CRD manages the ngrok [API resource](https://ngrok.com/docs/api/resources/ip-policies) directly. It is a first class CRD that you can manage to control these policies in your account.

It's optional to create IP Policies this way vs using the ngrok dashboard or [terraform provider](https://registry.terraform.io/providers/ngrok/ngrok/latest/docs/resources/ip_policy). Once created though, you can use it in your ingress objects using the [annotations](/docs/k8s/user-guide#ip-restrictions).

| Field            | Description                                | Required | Type                                                                                    | Example                                                  |
| ---------------- | ------------------------------------------ | -------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| metadata         | Standard object metadata                   | No       | [metav1.ObjectMeta](https://pkg.go.dev/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta) | `name: my-ip-policy`                                     |
| spec.description | Description for the IP policy              | No       | `string`                                                                                | `{}`                                                     |
| spec.metadata    | Metadata for the IP Policy                 | No       | `string`                                                                                | `{}`                                                     |
| spec.rules       | A list of rules that belong to the policy  | No       | `[]IPPolicyRule`                                                                        | `[{cidr: "1.2.3.4", action: "allow"}]`                   |
| status.id        | The unique identifier for this policy      | No       | `string`                                                                                | `"my-ip-policy-id"`                                      |
| status.rules     | A list of IP policy rules and their status | No       | `[]IPPolicyRuleStatus`                                                                  | `[{id: "my-rule-id", cidr: "1.2.3.4", action: "allow"}]` |

### IPPolicyRule

| Field  | Description                                               | Required | Type     | Example        |
| ------ | --------------------------------------------------------- | -------- | -------- | -------------- |
| cidr   | The CIDR block that the rule applies to                   | Yes      | `string` | `"1.2.3.4/24"` |
| action | The action to take for the rule, either "allow" or "deny" | Yes      | `string` | `"allow"`      |

### IPPolicyRuleStatus

| Field  | Description                                               | Required | Type     | Example        |
| ------ | --------------------------------------------------------- | -------- | -------- | -------------- |
| id     | The unique identifier for this rule                       | No       | `string` | `"my-rule-id"` |
| cidr   | The CIDR block that the rule applies to                   | No       | `string` | `"1.2.3.4/24"` |
| action | The action to take for the rule, either "allow" or "deny" | No       | `string` | `"allow"`      |

## TCP Edges {#tcp-edges}

The Kubernetes ingress spec does not directly support TCP traffic. The ngrok Kubernetes Operator supports TCP traffic via the [TCP Edge](https://ngrok.com/docs/api/resources/edges-tcp/) resource. This is a first class CRD that you can manage to control these edges in your account. See the [TCP and TLS Edges guide](/docs/k8s/user-guide#tcp-tls-edges) for more details.

| Field      | Type                                                                                    | Required | Description                                                                                                                                                                                                                   |
| ---------- | --------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| apiVersion | string                                                                                  | Yes      | The API version for this custom resource.                                                                                                                                                                                     |
| kind       | string                                                                                  | Yes      | The kind of the custom resource.                                                                                                                                                                                              |
| metadata   | [metav1.ObjectMeta](https://pkg.go.dev/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta) | No       | Standard object's metadata. More info: [https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions#metadata](https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions#metadata) |
| spec       | [TCPEdgeSpec](#tcpedgespec)                                                             | Yes      | Specification of the TCP edge.                                                                                                                                                                                                |
| status     | [TCPEdgeStatus](#tcpedgestatus)                                                         | No       | Observed status of the TCP edge.                                                                                                                                                                                              |

### TCPEdgeSpec

| Field         | Type                                                                                     | Required | Description                                                                    |
| ------------- | ---------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------ |
| description   | string                                                                                   | No       | A human-readable description of the edge.                                      |
| metadata      | string                                                                                   | No       | Metadata for the edge.                                                         |
| backend       | [TunnelGroupBackend](#tunnelgroupbackend)                                                | Yes      | The definition for the tunnel group backend that serves traffic for this edge. |
| ipRestriction | [EndpointIPPolicy](https://ngrok.com/docs/api/resources/tcp-edge-ip-restriction-module/) | No       | An IPRestriction to apply to this route.                                       |

### TunnelGroupBackend

| Field       | Type              | Required | Description                                  |
| ----------- | ----------------- | -------- | -------------------------------------------- |
| description | string            | No       | A human-readable description of the backend. |
| metadata    | string            | No       | Metadata for the backend.                    |
| labels      | map[string]string | No       | Labels to watch for tunnels on this backend. |

### TCPEdgeStatus

| Field     | Type                                                  | Required | Description                                                                  |
| --------- | ----------------------------------------------------- | -------- | ---------------------------------------------------------------------------- |
| id        | string                                                | No       | The unique identifier for this edge.                                         |
| uri       | string                                                | No       | The URI of the edge.                                                         |
| hostports | []string                                              | No       | Hostports served by this edge.                                               |
| backend   | [TunnelGroupBackendStatus](#tunnelgroupbackendstatus) | No       | Stores the status of the tunnel group backend, mainly the ID of the backend. |

### TunnelGroupBackendStatus

| Field | Type   | Required | Description                             |
| ----- | ------ | -------- | --------------------------------------- |
| id    | string | No       | The unique identifier for this backend. |

## TLS Edges

ngrok's TLS Edges function similarly to TCP Edges in that they may contain arbitrary application data, not just HTTP. As such, the Kubernetes Ingress spec isn't a perfect fit for them either. The ngrok Kubernetes Operator supports arbitrary TLS endpoints via the [TLS Edge](https://ngrok.com/docs/api/resources/edges-tls/) resource. This is a first class CRD that you can manage to control these edges in your account. See the [TCP and TLS Edges guide](/docs/k8s/user-guide#tcp-tls-edges) for more details.

| Field      | Type                                                                                    | Required | Description                                                                                                                                                                                                                   |
| ---------- | --------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| apiVersion | string                                                                                  | Yes      | The API version for this custom resource.                                                                                                                                                                                     |
| kind       | string                                                                                  | Yes      | The kind of the custom resource.                                                                                                                                                                                              |
| metadata   | [metav1.ObjectMeta](https://pkg.go.dev/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta) | No       | Standard object's metadata. More info: [https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions#metadata](https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions#metadata) |
| spec       | [TLSEdgeSpec](#tlsedgespec)                                                             | Yes      | Specification of the TCP edge.                                                                                                                                                                                                |
| status     | [TLSEdgeStatus](#tlsedgestatus)                                                         | No       | Observed status of the TCP edge.                                                                                                                                                                                              |

### TLSEdgeSpec

| Field          | Type                                                                                                | Required | Description                                                                    |
| -------------- | --------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------ |
| description    | string                                                                                              | No       | A human-readable description of the edge.                                      |
| metadata       | string                                                                                              | No       | Metadata for the edge.                                                         |
| backend        | [TunnelGroupBackend](#tunnelgroupbackend)                                                           | Yes      | The definition for the tunnel group backend that serves traffic for this edge. |
| hostports      | []string                                                                                            | Yes      | A list of hostports served by this edge.                                       |
| ipRestriction  | [EndpointIPPolicy](https://ngrok.com/docs/api/resources/tls-edge-ip-restriction-module/)            | No       | An IPRestriction to apply to this edge.                                        |
| tlsTermination | [TLSTermination](https://ngrok.com/docs/api/resources/edges-tls/#endpointtlstermination-parameters) | No       | TLS Termination behaviour for this edge.                                       |
| mutualTls      | [MutualTLS](https://ngrok.com/docs/api/resources/edges-tls/#endpointmutualtlsmutate-parameters)     | No       | Mutual TLS validation for this edge.                                           |

### TLSEdgeStatus

| Field     | Type                                                  | Required | Description                                                                  |
| --------- | ----------------------------------------------------- | -------- | ---------------------------------------------------------------------------- |
| id        | string                                                | No       | The unique identifier for this edge.                                         |
| uri       | string                                                | No       | The URI of the edge.                                                         |
| hostports | []string                                              | No       | Hostports served by this edge.                                               |
| backend   | [TunnelGroupBackendStatus](#tunnelgroupbackendstatus) | No       | Stores the status of the tunnel group backend, mainly the ID of the backend. |

## Domains

Domains are automatically created by the controller based on the ingress objects host values. Standard ngrok subdomains will automatically be created and reserved for you. Custom domains will also be created and reserved, but will be up to you to configure the DNS records for them. See the [custom domain](/docs/k8s/custom-domain) guide for more details.

If you delete all the ingress objects for a particular host, as a safety precaution, the Operator does _NOT_ delete the domains and thus does not unregister them. This ensures you don't lose domains while modifying or recreating ingress objects. You can still manually delete a domain CRD via `kubectl delete domain <name>` if you want to unregister it.

If using a [TCP](#tcp-edges) or [TLS](#tls-edges) CRD directly, a Domain will not be created for you automatically, so you will need to create and manage it yourself. See the [TCP and TLS Edges](/docs/k8s/user-guide#tcp-tls-edges) guide for details.

| Field      | Type                                                                                    | Required | Description                                                                                                                                                                                                                   |
| ---------- | --------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| apiVersion | string                                                                                  | Yes      | The API version for this custom resource.                                                                                                                                                                                     |
| kind       | string                                                                                  | Yes      | The kind of the custom resource.                                                                                                                                                                                              |
| metadata   | [metav1.ObjectMeta](https://pkg.go.dev/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta) | No       | Standard object's metadata. More info: [https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions#metadata](https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions#metadata) |
| spec       | [DomainSpec](#domainspec)                                                               | Yes      | Specification of the domain.                                                                                                                                                                                                  |
| status     | [DomainStatus](#domainstatus)                                                           | No       | Observed status of the domain.                                                                                                                                                                                                |

### DomainSpec

| Field       | Type   | Required | Description                                 |
| ----------- | ------ | -------- | ------------------------------------------- |
| description | string | No       | A human-readable description of the domain. |
| metadata    | string | No       | Metadata for the domain.                    |
| domain      | string | Yes      | The domain name to reserve.                 |
| region      | string | Yes      | The region in which to reserve the domain.  |

### DomainStatus

| Field       | Type   | Required | Description                                  |
| ----------- | ------ | -------- | -------------------------------------------- |
| id          | string | No       | The unique identifier of the domain.         |
| domain      | string | No       | The domain that was reserved.                |
| region      | string | No       | The region in which the domain was created.  |
| uri         | string | No       | The URI of the reserved domain API resource. |
| cnameTarget | string | No       | The CNAME target for the domain.             |

## Tunnels

Tunnels are automatically created by the controller based on the ingress objects' rules' backends. A tunnel will be created for each backend service name and port combination. This results in tunnels being created with those labels which can be matched by various edge backends. Automatically-created are useful to inspect but are fully managed by the controller and should not be edited directly.

If using a [TCP](#tcp-edges) or [TLS](#tls-edges) CRD, you may need to create and manage a Tunnel yourself. See the [TCP and TLS Edges](/docs/k8s/user-guide#tcp-tls-edges) guide for details.

| Field      | Type                                                                                    | Required | Description                                                                                                                                                                                                                   |
| ---------- | --------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| apiVersion | string                                                                                  | Yes      | The API version for this custom resource.                                                                                                                                                                                     |
| kind       | string                                                                                  | Yes      | The kind of the custom resource.                                                                                                                                                                                              |
| metadata   | [metav1.ObjectMeta](https://pkg.go.dev/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta) | No       | Standard object's metadata. More info: [https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions#metadata](https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions#metadata) |
| spec       | [TunnelSpec](#tunnelspec)                                                               | Yes      | Specification of the tunnel.                                                                                                                                                                                                  |
| status     | [TunnelStatus](#tunnelstatus)                                                           | No       | Observed status of the tunnel.                                                                                                                                                                                                |

### TunnelSpec

| Field      | Type                            | Required | Description                                             |
| ---------- | ------------------------------- | -------- | ------------------------------------------------------- |
| forwardsTo | string                          | Yes      | The name and port of the service to forward traffic to. |
| backend    | [TunnelBackend](#tunnelbackend) | Yes      | The type of backend this tunnel forwards to.            |
| labels     | map[string]string               | No       | Key/value pairs that are attached to the tunnel.        |

### TunnelBackend

| Field    | Type   | Required | Description                                                 |
| -------- | ------ | -------- | ----------------------------------------------------------- |
| protocol | string | Yes      | The protocol understood by this backend. Either TCP or TLS. |

### TunnelStatus

| Field              | Type | Required | Description |
| ------------------ | ---- | -------- | ----------- |
| No fields defined. |      |          |             |

## Agent Endpoints

Agent endpoints are ephemeral endpoints tied to the lifetime of the agent. When used with the ngrok Kubernetes operator, this means that the Agent Endpoints are tied to the operator's `operator-agent` pod (which is deployed by default when installing the operator). The operator will manage, create, and delete
agent endpoints for you according to the configuration of the `AgentEndpoint` custom resources you create. So long as at least one instance of the `operator-agent` pod is running, your agent endpoints will be available. You may occasionally notice
the IDs of Agent Endpoints managed by the operator change if the operator pods restart, this will not halt traffic through your agent endpoints unless all of the operator pods have stopped.

See the [ngrok agent CLI configuration page](https://ngrok.com/docs/agent/config/v3/#endpoint-definitions), for more information about using the CLI to start agent endpoints outside of Kubernetes.

**Note:** Agent Endpoints are currently in feature-preview for the ngrok Kubernetes operator. You will need to use `--version 0.17.0-rc.1` (or newer) when using
`helm` to install or update the operator. See [the deployment guide](https://ngrok-docs-git-alicewasko-agent-endpoint-k8s-ngrok-dev.vercel.app/docs/k8s/deployment-guide/) for information about installing
the ngrok Kubernetes operator.

| Field      | Type                                                                                    | Required | Description                                                                                                                                                                                                                   |
| ---------- | --------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| apiVersion | string                                                                                  | Yes      | The API version for this custom resource.                                                                                                                                                                                     |
| kind       | string                                                                                  | Yes      | The kind of the custom resource.                                                                                                                                                                                              |
| metadata   | [metav1.ObjectMeta](https://pkg.go.dev/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta) | No       | Standard object's metadata. More info: [https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions#metadata](https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions#metadata) |
| spec       | [AgentEndpointSpec](#agentendpointspec)                                                 | Yes      | Specification of the agent endpoint.                                                                                                                                                                                          |

### AgentEndpointSpec

| Field         | Type                                  | Required | Description                                                                                                                                                                       |
| ------------- | ------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url           | string                                | Yes      | The unique URL for this agent endpoint. This URL is the public address                                                                                                            |
| upstream      | [EndpointUpstream](#endpointupstream) | Yes      | Defines the destination for traffic to this agent endpoint                                                                                                                        |
| trafficPolicy | [TrafficPolicyCfg](#trafficpolicycfg) | No       | Allows configuring a TrafficPolicy to be used with this AgentEndpoint. When configured, the traffic policy is provided inline or as a reference to an NgrokTrafficPolicy resource |
| description   | string                                | No       | Human-readable description of this agent endpoint                                                                                                                                 |
| metadata      | string                                | No       | String of arbitrary data associated with the object in the ngrok API/Dashboard                                                                                                    |
| bindings      | []string                              | No       | List of Binding IDs to associate with the endpoint. Accepted values are `"public"`, `"internal"`, or strings matching the pattern `"k8s/*"`                                       |

#### `url` notes

The following formats are accepted:

**Domain** - `example.org`

- When using the domain format you are only defining the domain. The scheme and port will be inferred.

**Origin** - `https://example.ngrok.app` or `https://example.ngrok.app:443` or `tcp://1.tcp.ngrok.io:12345` or `tls://example.ngrok.app`

- When using the origin format you are defining the protocol, domain and port. HTTP endpoints accept ports 80 or 443 with respective protocol.

**Scheme** (shorthand) - `https://` or `tcp://` or `tls://` or `http://`

- When using scheme you are defining the protocol and will receive back a randomly assigned ngrok address.

**Internal** - `some.domain.internal`

- When ending your url with .internal, an internal endpoint will be created.
- Internal Endpoints cannot be accessed directly, but rather can only be accessed using the forward-internal traffic policy action.

### EndpointUpstream

| Field                | Type         | Required | Description                                                                                                                                            |
| -------------------- | ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| url                  | string       | Yes      | The local or remote address you would like to incoming traffic to be forwarded to                                                                      |
| protocol             | enum(string) | No       | Specifies the protocol to use when connecting to the upstream. Currently only http1 and http2 are supported with prior knowledge (defaulting to http1) |
| proxyProtocolVersion | enum(string) | No       | Optionally specify the version of proxy protocol to use if the upstream requires it                                                                    |

#### `upstream.url` notes

The following formats are supported:

**Origin** - `https://example.org` or `http://example.org:80` or `tcp://127.0.0.1:80`

- When using the origin format you are defining the protocol, domain and port
- When no port is present and scheme is https or http the port will be inferred
  - For `https` port will be `443`
  - For `http` port will be `80`

**Domain** - `example.org`

- This is only allowed for https and http endpoints. For tcp and tls endpoints host and port is required
- When using the domain format you are only defining the host
- Scheme will default to `http`
- Port will default to `80`

**Scheme** (shorthand) - `https://`

- This only works for `https` and `http`
- For `tcp` and `tls` host and port is required
- When using scheme you are defining the protocol and the port will be inferred on the local host
  - For `https` port will be `443`
  - For `http` port will be `80`
  - Host will be localhost

**Port** (shorthand) - `8080`

- When using port you are defining the port on the local host that will receive traffic
- Scheme will default to `http`
- Host will default to `localhost`

### TrafficPolicyCfg

Configuration for a traffic policy that may be provided inline or via a reference to an `NgrokTrafficPolicy` resource in the
Kubernetes cluster. See [policy configuration](https://ngrok.com/docs/traffic-policy/) for traffic policy configuration options

| Field     | Type                          | Required | Description                                                                                                         |
| --------- | ----------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| inline    | json.RawMessage               | No       | Provides an inline traffic policy for the agent endpoint                                                            |
| targetRef | [K8sObjectRef](#k8sobjectref) | No       | Identifies an NgrokTrafficPolicy custom resource by name to use as the traffic policy config for the agent endpoint |

### K8sObjectRef

| Field | Type   | Required | Description                                                                                                        |
| ----- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------ |
| name  | string | Yes      | Identifies a kubernetes resource by name. This resource and the referenced resource must be in the same namespace. |
