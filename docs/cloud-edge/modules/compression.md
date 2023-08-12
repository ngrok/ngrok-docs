# Compression

---

## Overview

This module improves the performance of your web applications by compressing
HTTP response bodies returned by your upstream application.

If an HTTP request includes an `Accept-Encoding` header, HTTP responses will be
automatically compressed and a `Content-Encoding` response header will be
added. If the response was already compressed by your upstream application,
ngrok takes no action.

## Quickstart

### Agent CLI

```
ngrok http 80 --compression
```

### Agent Configuration File

```
tunnels:
  example:
    proto: http
    addr: 80
    compression: true
```

### SSH

```
ssh -R 443:localhost:80 connect.ngrok-agent.com http --compression
```

### Go SDK

```
import (
	"context"
	"net"

	"golang.ngrok.com/ngrok"
	"golang.ngrok.com/ngrok/config"
)

func listenCompressed(ctx context.Context) net.Listener {
	listener, _ := ngrok.Listen(ctx,
		config.HTTPEndpoint(
			config.WithCompression(),
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
        .compression()
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
  compression:
    enabled: true
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

Compression is a supported Edge module. Unlike most edge modules, Compression
has no configuration parameters. It is either enabled or disabled.

- [Compression Edge Module API Resource](/api/resources/https-edge-route-compression-module/)

## Try it out

For testing purposes, create a directory with a file in it and then enter that
directory.

```
mkdir test-dir
cd test-dir
echo "hello world" > t.txt
```

ngrok can serve files from any directory (just like Python's Simple HTTP
Server) by forwarding to a `file://` URL. We're going to use that capability
for our compression testing.

First let's see what this looks like without using compression by running the
following in your `test-dir` directory:

```
ngrok http file://`pwd` --domain your-domain.ngrok.app
```

Then in another terminal while ngrok is still running:

```
curl --compressed -D - https://your-domain.ngrok.app/
```

- `--compressed` instructs curl to set the `Accept-Encoding` header to request
  compressed content
- `-D -` instructs curl to show the HTTP response headers

You should get a response that looks like:

```
HTTP/2 200
content-type: text/html; charset=utf-8
date: Tue, 18 Jul 2023 09:52:49 GMT
last-modified: Tue, 18 Jul 2023 09:52:34 GMT
ngrok-agent-ips: 71.227.75.230
ngrok-trace-id: 24e925dd0f348c1040d7ff62b06606cd
content-length: 39

<pre>
<a href="t.txt">t.txt</a>
</pre>
```

Now let's try it again with compression. Stop your ngrok agent and restart it
by changing the command to:

```
ngrok http file://`pwd` --domain your-domain.ngrok.app --compression
```

Rerun the same curl command:

```
curl --compressed -D - https://your-domain.ngrok.app/
```

This time you should see that HTTP response headers include `content-encoding:
deflate` indicating that the response was compressed.

```
HTTP/2 200
content-encoding: deflate
content-type: text/html; charset=utf-8
date: Tue, 18 Jul 2023 10:03:22 GMT
last-modified: Tue, 18 Jul 2023 09:52:34 GMT
ngrok-agent-ips: 71.227.75.230
ngrok-trace-id: b6b6cdce029e94123188ce53c0febee4
vary: Accept-Encoding

<pre>
<a href="t.txt">t.txt</a>
</pre>
```

## Behavior

### Streaming Compression

When ngrok performs compression, the response body is not buffered; the
response body is compressed as it is streamed through the ngrok edge.

### Algorithm Choice

If a request specifies `Accept-Encoding` but no requested values are supported,
ngrok takes no action and the upstream response is returned without
modification.

ngrok negotiates the encoding type as defined by the RFC for `Accept-Encoding`.
It respects q-values and chooses the `Accept-Encoding` supported algorithm with
the highest q-value.

ngrok supports the following compression algorithms in the `Accept-Encoding`
header.

| Algorithm  | Supported |
| ---------- | --------- |
| `br`       | no        |
| `compress` | no        |
| `deflate`  | yes       |
| `gzip`     | yes       |

### Response Headers

When ngrok performs compression, the following changes are made to
the HTTP response header:

- The `Content-Length` header is removed
- A `Content-Encoding` header is added with the negotiated algorithm
- A `Vary: Accept-Encoding` header is added

### Compression Level

The compression level is a value which indicates whether the compression
algorithm should prefer to save more space at the expense of being slower and
using more compute. This value is not currently configurable. ngrok
automatically chooses a value that provides a reasonable tradeoff.

## Reference

### Upstream Headers {#upstream-headers}

No additional upstream headers are added by the Compression module.

### Events

When the compression module is enabled, it populates the following fields in
[http_request_complete.v0](/events/reference/#http-request-complete) events.

| Fields                    |
| ------------------------- |
| `compression.algorithm`   |
| `compression.bytes_saved` |

### Errors

The compression module does not return any errors.

### Licensing

The compression module is available on the Free tier.
