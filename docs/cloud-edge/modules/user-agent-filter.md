# User Agent Filter

---

## Overview

With the User Agent Filter module, you can allow or deny traffic through regular expression-based rules that are matched against the incoming `User-Agent` header. The `User-Agent` header contains information about the requesting browser or application, including its name, version, and operating system.

Since rules are processed at the ngrok Cloud Edge, you can bolster your application’s security by blocking unwanted or unauthorized requests from known bots and malicious actors before it ever reaches your network.

## Quickstart

### Agent CLI

```bash
ngrok http 80 \
  --ua-filter-allow="(foo/(\d)+.(\d)+)","(bar/(\d)+.(\d)+)" \
  --ua-filter-deny="(buz/(\d)+.(\d)+)"
```

### Agent Configuration File

```yaml
tunnels:
  example:
    proto: http
    addr: 80
    user_agent_filter:
      allow: ["(foo/(\d)+.(\d)+)", "(bar/(\d)+.(\d)+)"]
      deny: ["(buzz/(\d)+.(\d)+)"]
```

### Go SDK

Here is an example using the [ngrok-go](https://github.com/ngrok/ngrok-go) library

```go
package main

import (
        "context"
        "fmt"
        "log"
        "net/http"

        "golang.ngrok.com/ngrok"
        "golang.ngrok.com/ngrok/config"
)

func main() {
        if err := run(context.Background()); err != nil {
                log.Fatal(err)
        }
}

func run(ctx context.Context) error {
        tun, err := ngrok.Listen(ctx,
                config.HTTPEndpoint(
                        config.WithAllowUserAgent(`(foo)/(\d)+.(\d)+`),
                        config.WithDenyUserAgent(`(bar)/(\d)+.(\d)+`),
                ),
                ngrok.WithAuthtokenFromEnv(),
        )
        if err != nil {
                return err
        }

        log.Println("tunnel created:", tun.URL())

        return http.Serve(tun, http.HandlerFunc(handler))
}

func handler(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintln(w, "<h1>Hello from ngrok-go.</h1>")
}
```

### Rust SDK

Here is an example using the [ngrok-rust](https://github.com/ngrok/ngrok-rust) library

```rust
use axum::{routing::get, Router};
use ngrok::prelude::*;
use std::error::Error;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let app = Router::new().route("/", get(|| async { "Hello from ngrok-rust!" }));

    let listener = ngrok::Session::builder()
        .authtoken_from_env()
        .connect()
        .await?
        .http_endpoint()
        .allow_user_agent(r"foo/(\d)+")
        .allow_user_agent(r"bar/(\d)+")
        .deny_ua(r"buz/(\d)+")
        .listen()
        .await?;
    println!("Ingress URL: {:?}", listener.url());
    axum::Server::builder(listener)
        .serve(app.into_make_service())
        .await?;
    Ok(())
}
```

## Behavior

### Rule Evaluation

On request, the User Agent Filter module will check the incoming `User-Agent` header value against the list of defined allow and deny regular expression rules.

- Requests without the `User-Agent` header will be denied by default. To allow these requests, you can add an `allow` rule for empty strings: `^$`
- Requests with multiple `User-Agent` headers will only match the first header.

### Match Behavior

Requests are allowed if they match any allow rule or fail to match all deny rules.

You can override `deny` rules by defining an `allow` rule that is more specific, for instance blocking all Google bots except Google Images:

```json
{
	"allow": ["(?i)google-images"]
	"deny": ["(?i)google", "[Bb]ing"]
}
```

## Reference

### Configuration

###### **Agent Configuration**

| Parameter                   | Description                                                                  |
| --------------------------- | ---------------------------------------------------------------------------- |
| **User Agent Filter Allow** | A set of regular expressions used to match User-Agents that will be allowed. |
| **User Agent Filter Deny**  | A set of regular expressions used to match User-Agents that will be denied.  |

### Upstream Headers {#upstream-headers}

This module does not add any upstream headers.

### Errors

| Code                                      | HTTP Status | Error                                                       |
| ----------------------------------------- | ----------- | ----------------------------------------------------------- |
| [ERR_NGROK_3211](/errors/err_ngrok_3211/) | `403`       | The server does not authorize requests from your user-agent |

### Events

When the User Agent Filter module is enabled, it populates the following
fields in the
[http_request_complete.v0](/obs/reference/#http-request-complete) event:

| Fields                       |
| ---------------------------- |
| `user_agent_filter.decision` |

### Limits

This module is available on all plans.

## Try it out

Run ngrok with User Agent Filter's `allow` and `deny` set to the following:

```bash
ngrok http 80 \
  --domain your-domain.ngrok.app \
  --ua-filter-allow="(GoingMerry/(\d)+.(\d)+)","(GomuGomu/(\d)+.(\d)+)" \
  --ua-filter-deny="(Xebec/(\d)+.(\d)+)"
```

Then make requests to your ngrok domain with the following:

```bash
curl --location https://your-domain.ngrok.app -H 'Content-Type: text/plain' -A 'GoingMerry/1.1' --data 'https://www.youtube.com/watch?v=djyTG19Achg' -k -v
curl --location https://your-domain.ngrok.app -H 'Content-Type: text/plain' -A 'GomuGomu/1.1' --data 'https://www.youtube.com/watch?v=djyTG19Achg' -k -v
curl --location https://your-domain.ngrok.app -H 'Content-Type: text/plain' -A 'Xebec/1.1' --data 'https://www.youtube.com/watch?v=djyTG19Achg' -k -v
curl --location https://your-domain.ngrok.app -H 'Content-Type: text/plain' -A '' --data 'https://www.youtube.com/watch?v=djyTG19Achg' -k -v
curl --location https://your-domain.ngrok.app -H 'Content-Type: text/plain' -A 'TwitterBot/1.1' --data 'https://www.youtube.com/watch?v=djyTG19Achg' -k -v
```
