# IP Restrictions
----------------

## Overview

IP Restrictions allows you to allow or deny traffic based on the source IP of
the connection that was initiated to your ngrok endpoints. You may define allow
and deny rules that apply to CIDR blocks of IP addresses.

Rules may be set for both IPv4 and IPv6 addresses.

A connection is allowed only if its source IP matches at least one rule with an
'allow' action and does not match any rule with a 'deny' action.

The IP Restrictions module is supported on HTTP, TCP and TLS endpoints.

## Quickstart

### Agent CLI

```
ngrok http --allow-cidr 110.0.0.0/8 --allow-cidr 220.12.0.0/16 --deny-cidr 110.2.3.4/32 80
```

### Agent Configuration File

```
tunnels:
  example:
    proto: http
    addr: 80
    allow_cidrs: [110.0.0.0/8, 220.12.0.0/16]
    deny_cidrs: [110.2.3.4/32]
```

### Go SDK

```
import (
	"context"
	"net"

	"golang.ngrok.com/ngrok"
	"golang.ngrok.com/ngrok/config"
)

func listenIPRestrictions(ctx context.Context) net.Listener {
	listener, _ := ngrok.Listen(ctx,
		config.HTTPEndpoint(
			config.WithAllowCIDRString("110.0.0.0/8", "220.12.0.0/16"),
			config.WithDenyCIDRString("110.2.3.4/32"),
		),
		ngrok.WithAuthtokenFromEnv(),
	)
	return listener
}
```

### Rust SDK

```
use ngrok::prelude::*;

async fn start_tunnel() -> anyhow::Result<impl Tunnel> {
    let sess = ngrok::Session::builder()
        .authtoken_from_env()
        .connect()
        .await?;
    let tun = sess
        .http_endpoint()
        .allow_cidr("110.0.0.0/8"),
        .allow_cidr("220.12.0.0/16"),
        .deny_cidr("110.2.3.4/32"),
        .listen()
        .await?;
    println!("Listening on URL: {:?}", tun.url());
    Ok(tun)
}
```

### Kubernetes Ingress Controller

```yaml
kind: IPPolicy
apiVersion: ingress.k8s.ngrok.com/v1alpha1
metadata:
  name: policy-1
spec:
  description: "My Trusted IPs"
  rules:
  - action: "allow"
    cidr: "110.0.0.0/8"
  - action: "allow"
    cidr: "220.12.0.0/16"
  - action: "deny"
    cidr: "110.2.3.4/32"
---
kind: NgrokModuleSet
apiVersion: ingress.k8s.ngrok.com/v1alpha1
metadata:
  name: ip-restrictions
modules:
  ipRestriction:
    policies:
    - "policy-1" # Reference to the `ippolicy.ingress.k8s.ngrok.com` Custom Resource above
    - "ipp_1234567890" # Reference to an IP Policy by its ngrok API ID
```


### Edges

IP Restrictions is a supported module for HTTPS, TLS and TCP edges. The IP
When using IP Restrictions via Edges, you specify a set of
references to one or more IP Policy objects, each of which contains a list of
IP Policy Rule objects.

IP Restrictions and the IP Policy and IP Policy Rule objects they reference can
be configured via the ngrok dashboard and via API.

- [HTTPS Edge IP Restrictions Module API Resource](/api/resources/https-edge-route-ip-restriction-module/)
- [TLS Edge IP Restrictions Module API Resource](/api/resources/tls-edge-ip-restriction-module/)
- [TCP Edge IP Restrictions Module API Resource](/api/resources/tcp-edge-ip-restriction-module/)
- [IP Policy API Resource](/api/resources/ip-policies/)
- [IP Policy Rule API Resource](/api/resources/ip-policy-rules/)

## Behavior

### Upstream Headers {#upstream-headers}

No additional upstream headers are injected when IP Restrictions are enforced.

### Events

When the IP Restrictions module is enforced, it populates the following fields
in both the
[http\_request\_complete.v0](/events/reference/#http-request-complete) and the
[tcp\_connection\_closed.v0](/events/reference/#tcp-connection-closed) events.

| Fields |
| ------ |
| `ip_policy.decision` |

### Rule Evaluation

A connection is allowed only if its source IP matches at least one rule with an
'allow' action and does not match any rule with a 'deny' action.

When using Edges and the Kubernetes Ingress Controller, if the IP Restrictions
module references multiple IP Policies, then the rules of all referenced IP
Policies are unioned together for evaluation.

### IPv6

ngrok supports IPv6 addresses for all IP rules. You may use stanard abbreviated
notations.

```
ngrok http --allow-cidr "::/0" --deny-cidr "2600:1f16:d83:1202::6e:2/128" 80
```

Don't forget to create IPv6 rules. It's easy to test only with IPv4 and then
suddenly things don't work when your software starts using IPv6 because you've
forgotten to create rules to allow traffic from your IPv6 addresses.

### Source IP

The IP Restrictions module always evaluates the true source IP of a connection.
IPs in HTTP headers like `forwarded-for` are never evaluated by this module.

### Errors

For TCP and TLS endpoints, if a connection is disallowed by IP Restrictions
then the connection will simply be closed.

For HTTP endpoints, an HTTP response will return
[ERR\_NGROK\_3205](/errors/err_ngrok_3205/) with a 403 Forbidden status.

## Try it out

First, grab your IPv4 and IPv6 addresses:

```
curl -4 icanhazip.com
curl -6 icanhazip.com
```

Then run ngrok with IP Restrictions with the IPv4 and IPv6 addresses you got in the previous step:

```
ngrok http 80 \
  --domain your-domain.ngrok.app \
  --allow-cidr 2600:8c00::a03c:91ee:fe69:9695/32 \
  --allow-cidr 78.227.75.230/32
```

Then make requests to your ngrok domain using the `-4` and `-6` flags to test both IPv4 and IPv6:

```
curl -4 https://your-domain.ngrok.app
curl -6 https://your-domain.ngrok.app
```

## Licensing

IP Restrictions is available on the Pro or Enterprise plans.
