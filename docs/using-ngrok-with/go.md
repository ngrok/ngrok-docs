---
title: Go
---

# Using ngrok with the ngrok-go Library
------------

:::tip
This tutorial assumes you have Go already installed.
:::

## Get started with ngrok-go

Getting started with ngrok and the ngrok-go library is simple: 

1. To start, [sign up for ngrok](/signup)
1. In the [ngrok Dashboard](https://dashboard.ngrok.com), copy your Authtoken
1. Launch a terminal and create a go app and file:

    ```bash
    go mod init sudobinbash/hello-ngrok
    cd hello-ngrok
    touch main.go
    ```

1. Edit the main.go file and add the following code:

    ```go
    package main

    import (
        "context"
        "fmt"
        "log"
        "net/http"

        "github.com/ngrok/ngrok-go"
        "github.com/ngrok/ngrok-go/config"
    )

    func main() {
        if err := run(context.Background()); err != nil {
            log.Fatal(err)
        }
    }

    func run(ctx context.Context) error {
        tun, err := ngrok.StartTunnel(ctx,
            config.HTTPEndpoint(),
            ngrok.WithAuthtokenFromEnv(),
        )
        if err != nil {
            return err
        }

        log.Println("tunnel created:", tun.URL())

        return tun.AsHTTP().Serve(ctx, http.HandlerFunc(handler))
    }

    func handler(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintln(w, "<h1>Hello from ngrok-go.</h1>")
    }
    ```

    :::note In this code:
    - **Lines 20-23**: start the ngrok tunnel with a preset configuration 
    - **Line 22**: fetch your the ngrok auth token from your environment variable
    - **Line 34**: serve a static page with a hello.
    :::

1. Save and close the file
1. Launch your tunnel replacing `TOKEN` with your Authtoken from above:

    ```bash
    NGROK_AUTHTOKEN="TOKEN" go run main.go
    ```

1. The terminal will display an ngrok URL. 
    
    Access it to confirm you see the message `Hello from ngrok-go`.
    Your Go app is on the internet, without network pain or agents.

## Add edge functionality to your app

The ngrok-go library provides functions and config for all features available in ngrok. So everything you can do with an ngrok command is available using our library. In this example, I modified main.go to:

- **Line 22**: Use Google’s  OAuth and limit access to users with email @ngrok.com 
- **Line 23**: Use my-domain.ngrok.io as a custom subdomain
- **Line 24**: Upon a successful authentication, send the user email in the email header
- **Line 38**: Print the email header.

```go
package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"github.com/ngrok/ngrok-go"
	"github.com/ngrok/ngrok-go/config"
)

func main() {
	if err := run(context.Background()); err != nil {
		log.Fatal(err)
	}
}

func run(ctx context.Context) error {
	tun, err := ngrok.StartTunnel(ctx,
		config.HTTPEndpoint(
			config.WithOAuth("google", config.WithAllowOAuthDomain("ngrok.com"), ),
			config.WithDomain("my-domain.ngrok.io"),
			config.WithRequestHeader("email", "${.oauth.user.email}"),
		),
		ngrok.WithAuthtokenFromEnv(),
	)
	if err != nil {
		return err
	}

	log.Println("tunnel created:", tun.URL())

	return tun.AsHTTP().Serve(ctx, http.HandlerFunc(handler))
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "<h1>Hello from ngrok-go, ", r.Header.Values("email"), ".</h1>")
}
```

And we run the app just as we did before, again replacing TOKEN with our Authtoken:

`NGROK_AUTHTOKEN="TOKEN" go run main.go`

And this is our result:

![ngrok go in action](/img/howto/ngrok-go/ngrok-go-small.gif)