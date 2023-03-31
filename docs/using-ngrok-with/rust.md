---
title: Rust
---

# Using ngrok with the ngrok-rs crate
------------

## Introduction

ngrok-rs is an idiomatic Rust crate for embedding secure ingress directly into your Rust applications. If you’ve used the ngrok agent before, you can think of ngrok-rs as the agent packaged as a Rust crate. [ngrok-rs is open source](http://github.com/ngrok/ngrok-rs) with [API reference available on docs.rs](https://docs.rs/ngrok).

ngrok-rs lets developers serve Rust services on the internet in a single line of code without setting up low-level network primitives like IPs, certificates, load balancers, and even ports. Applications using ngrok-rs listen on ngrok’s global ingress network using an incoming stream with tokio’s `AsyncRead` and `AsyncWrite` traits — compatible with `axium::Server::builder()` and `hyper::Server::builder()`. This makes it easy to add ngrok-rs into any application that uses axium or hyper — the most beloved Web Framework and HTTP implementations in Rust. 

In this tutorial, you will build a Rust app with ingress access and security provided by ngrok.

**Note**: This tutorial assumes you have Rust already installed.

## Get started with ngrok-rs

Getting started with ngrok and the ngrok-rs crate is simple: 

1. To start, [sign up for ngrok](https://ngrok.com/signup).
1. In the [ngrok Dashboard](https://dashboard.ngrok.com), copy your Authtoken.
1. Launch a terminal and create a Rust application:

    ```bash
    mkdir hello-ngrok
    cd hello-ngrok
    cargo init
    ```

1. Add the tokio, axum, and ngrok crates:
    
    ```bash
    cargo add ngrok -F axum
    cargo add axum
    cargo add tokio -F rt-multi-thread -F macros
    ```

1. Edit the main.rs file and add the following code:

    ```rust showLineNumbers
    use axum::{routing::get, Router};
    use ngrok::prelude::*;
    use std::error::Error;

    #[tokio::main]
    async fn main() -> Result<(), Box<dyn Error>> {
        // build our application with a route
        let app = Router::new().route("/", get(|| async { "Hello from ngrok-rs!" }));

        // listen on localhost:8000
        // axum::Server::bind(&"0.0.0.0:8000".parse().unwrap())
        //  .serve(app.into_make_service())
        //  .await?;
        // Ok(())

        // listen on ngrok ingress (i.e. https://myapp.ngrok.io)
        let listener = ngrok::Session::builder()
            .authtoken_from_env()
            .connect()
            .await?
            .http_endpoint()
            .listen()
            .await?;
        println!("Ingress URL: {:?}", listener.url());
        axum::Server::builder(listener)
            .serve(app.into_make_service())
            .await?;
        Ok(())
    }
    ```

    :::note In this code:
    - **Lines 16-22**: create a listener object with the ngrok ingress
    - **Line 23**: print your ngrok ingress url
    - **Line 24-26**: start axum with the ngrok ingress
    :::

1. Save and close the file.
1. Launch your tunnel replacing `TOKEN` with your Authtoken from above:

    ```bash
    NGROK_AUTHTOKEN="TOKEN" cargo r
    ```

1. The terminal will display an ngrok URL. 
    
    Access it to confirm you see the message `Hello from ngrok-rs`.
    Your Rust application is now live on the internet, with a public url that anyone in the world can access.

## Add edge functionality to your app

The ngrok-rs library provides functions and configuration for all features available in ngrok. Everything you can do with the ngrok agent is available using our library. In this example, you can modify main.rs to:

- **Line 21**: Use my-rust-app.ngrok.io as a custom subdomain
- **Line 22**: Apply a circuit breaker if the Rust app returns errors over 50% of the time
- **Line 23**: Compress http responses
- **Line 24**: Deny requests from the CIDR range `200.2.0.0/16`
- **Lines 25-28**: Use Google OAuth for authentication and allow access only from users with the email `@acme.com`


```rust showLineNumbers
use axum::{routing::get, Router};
use ngrok::prelude::*;
use ngrok::config::*;
use std::error::Error;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    // build our application with a route
    let app = Router::new().route("/", get(|| async { "Hello World!" }));

    // listen on localhost:8000
    // axum::Server::bind(&"0.0.0.0:8000".parse().unwrap())
    //  .serve(app.into_make_service())
    //  .await?;
    // Ok(())

    // listen on ngrok ingress (i.e. https://my-rust-app.ngrok.io)
    let listener = ngrok::Session::builder()
        .authtoken_from_env()
        .connect()
        .await?
        .http_endpoint()
        .domain("my-rust-app.ngrok.io")
        .circuit_breaker(0.5)
        .compression()
        .deny_cidr("200.2.0.0/16")
        .oauth(OauthOptions::new("google").allow_domain("acme.com"))
        .listen()
        .await?;
    println!("Ingress URL: {:?}", listener.url());
    axum::Server::builder(listener)
        .serve(app.into_make_service())
        .await?;
    Ok(())
}
```

Launch the app just as you did before, again replacing TOKEN with our Authtoken:

```bash
NGROK_AUTHTOKEN="TOKEN" cargo r
```

You should have your Rust app served on the internet with OAuth authentication, circuit breaker, network restrictions, and a custom subdomain.
