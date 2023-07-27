# Circuit Breaker
-----------------

## Overview

The Circuit Breaker module protects your upstream applications by rejecting
traffic to your endpoints when the upstreams become overloaded, allowing them
time to recover to a steady operational state.

When your upstream application's 5XX responses exceed a percentage threshold of
the total, the circuit breaker 'opens' or 'breaks' the circuit. When the
circuit is open, the ngrok edge rejects requests to your endpoint with a [503
error response](#errors) and does not forward them through to your upstream
server.

When the circuit is open, ngrok will allow a small set of requests through to
the upstream server to determine whether it has recovered. If those requests
are successful, it will close the circuit permitting traffic to flow to your
upstream application once again.

## Quickstart

### Agent CLI

```
ngrok http 80 --circuit-breaker 0.5
```

### Agent Configuration File

```
tunnels:
  example:
    proto: http
    addr: 80
    circuit_breaker: 0.5
```

### Go SDK

```
import (
	"context"
	"net"

	"golang.ngrok.com/ngrok"
	"golang.ngrok.com/ngrok/config"
)

func listenCircuitBreaker(ctx context.Context) net.Listener {
	listener, _ := ngrok.Listen(ctx,
		config.HTTPEndpoint(
			config.WithCircuitBreaker(0.5),
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
        .circuit_breaker(0.5)
        .listen()
        .await?;

    println!("Listening on URL: {:?}", tun.url());

    Ok(tun)
}
```

### Kubernetes Ingress Controller

```yaml
kind: NgrokModuleSet
apiVersion: ingress.k8s.ngrok.com/v1alpha1
metadata:
  name: ngrok-module-set
modules:
  circuit_breaker:
    errorThresholdPercentage: "0.50"
    trippedDuration: 10s
    rollingWindow: 10s
    numBuckets: 10
    volumeThreshold: 10
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
  annotations:
    k8s.ngrok.com/modules: ngrok-module-set
spec:
  ingressClassName: ngrok
  rules:
    - host: your-domain.ngrok.app
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: example-service
                port:
                  number: 80
```

### Edges

Circuit Breaker is a supported Edge module which can be applied to routes.

- [Circuit Breaker Edge Module API Resource](/api/resources/https-edge-route-circuit-breaker-module/)

## Try it out

This short Go program below that demonstrates Circuit Breaker behavior. Create
the file `example.go` with the Go code below and then run the following commands.

```
export NGROK_AUTHTOKEN="<your authtoken>"
go mod init example.com/ngrok-circuit-breaker
go get golang.ngrok.com/ngrok
go run example.go
```

##### `example.go`
```
package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"net/http"
	"net/url"
	"os"

	"golang.ngrok.com/ngrok"
	"golang.ngrok.com/ngrok/config"
)

func main() {
	l, err := ngrok.Listen(context.Background(),
		config.HTTPEndpoint(
			config.WithCircuitBreaker(0.1),
		),
		ngrok.WithAuthtokenFromEnv(),
	)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Running at", l.URL())
	go makeRequests(l.URL())
	http.Serve(l, http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path == "/500" {
			w.WriteHeader(500)
			fmt.Fprintln(w, "Hello error!")
		} else {
			w.WriteHeader(200)
			fmt.Fprintln(w, "Hello world!")
		}
	}))
}

func makeRequests(appURL string) {
	// make sure we always dial the same IP addresss for testing purposes because
	// circuit breaker state is applied on each ngrok edge server individually
	u, _ := url.Parse(appURL)
	addrs, err := net.LookupHost(u.Host)
	if err != nil {
		log.Fatal(err)
	}
	httpClient := http.Client{Transport: &http.Transport{
		Dial: func(network, _ string) (net.Conn, error) {
			return net.Dial(network, addrs[0]+":443")
		},
	}}

	// make requests that return a 500 until the circuit opens
	for {
		resp, err := httpClient.Get(appURL + "/500")
		if err != nil {
			log.Fatal(err)
		}
		fmt.Printf("Status Code %d\n", resp.StatusCode)
		if resp.StatusCode == 503 {
			fmt.Println("Circuit opened")
			break
		}
	}

	// make requests that will eventually return a 200 which will close the circuit
	for {
		resp, err := httpClient.Get(appURL)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Printf("Status Code %d\n", resp.StatusCode)
		if resp.StatusCode != 503 {
			fmt.Println("Circuit closed")
			os.Exit(0)
		}
	}
}
```

## Behavior

If the upstream server responds with more than the threshold percentage of
requests with 5XX status codes, the circuit breaker preemptively reject all
subsequent requests at the ngrok edge with a 503 until the upstream server's
error rate drops below the threshold percentage.

The Circuit Breaker module is an implementation of [Netflix's Hystrix circuit
breaker specification](https://github.com/Netflix/Hystrix/wiki/How-it-Works).

### What contributes to the threshold?

ngrok defines any HTTP response with a status code greater than or equal to 500
as an error response that counts toward the circuit breaker threshold.

### Parameters

Circuit Breaker behavior can be cutomized. Defaults will be chosen for you for some values in two cases.

- If you enable the module via the Agent or Agent SDK. They don't allow you to
  customize a number of the module's parameters.
- If you enable the module via the Edge API and don't explicitly set values for
  all parameters.

| Parameter | Default | Description |
| --------- | ------- | ----------- |
| **Error Threshold** | - |  The threshold percentage of upstream requests that must fail before the circuit is opened. |
| **Tripped Duration** | 10 seconds | The number of seconds to reject requests, once the circuit is opened, before rechecking if the circuit should again be closed. |
| **Rolling Window** | 10 seconds | The window of time we keep metrics for the circuit breaker, the error threshold only considers successes and errors that fall within this window. |
| **Number of Buckets** | 10 buckets | The number of discrete time intervals the rolling window duration is divided into. Along with the rolling window duration, this defines the granularity at which requests expire out of the rolling window. |
| **Volume Threshold** | 20 requests | The minimum number of requests required in a rolling window that will trip the circuit. |

### Circuit Breaker State {#state}

At the time of writing, circuit breaker state is kept on each ngrok edge server
individually. There are many ngrok edge servers which means that your upstream
server may observe requests even after you would expect the circuit breaker to
open. All of ngrok's edge servers will eventually open their circuits to
protect an overloaded upstream but the behavior you observe may not exactly
match the parameters you've set because those parameters are applied
individually on each of ngrok's edge servers.

## Reference

### Upstream Headers {#upstream-headers}

No additional upstream headers are added by the Circuit Breaker module.

### Events

When the Circuit Breaker module is enabled, it populates the following fields in
[http\_request\_complete.v0](/events/reference/#http-request-complete) events.

| Fields |
| ------ |
| `circuit_breaker.decision` |

### Errors

If the Circuit Breaker is open because the upstream service is failing, the
ngrok edge will return [ERR\_NGROK\_3202](/errors/err_ngrok_3202/) with a 503
Service Unavailable HTTP status code.

### Licensing

The Circuit Breaker module is available on the Free tier.
