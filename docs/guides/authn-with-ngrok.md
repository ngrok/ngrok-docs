---
title: Adding authentication to your app
description: Simplest way to add authentication to you application without code change
tags:
    - guides
    - authentication
    - authn
    - authentication
    - basic authentication
    - oidc
    - saml
---

Modifing lgacy applications to add suport to a minimum of security such as authentication may be 

This guide will walk you through how to quickly add authentication to your appication without code change.

ngrok provides a variety of authentication options such as [Basic Authentication](#basic), [OpenID Connect](#oidc), or [SAML](#saml).
 

## HTTP Basic Authentication {#basic}

Basic Authentication is a simple authentication mechanism built into the HTTP protocol. To access an application protected by Basic Authentication the user must provide credentials in the form of a authorization basic header for every request.

### Command line configuration 

By adding the `--basic-auth` flag to your ngrok tunnel you enforce this access control mechanism to your application without changing anything in your application. The credential you pass as value to this flag can be used by the end-user to access the application resources through ngrok.

For example:
```bash
ngrok http --basic-auth="USERNAME:PASSWORD" 3000
```

You can add the `--basic-auth` flag multiple times to create a list of authorized credentials.

For example:
```bash
ngrok http --basic-auth="user1:password1" --basic-auth="user2:password2" 3000
```

### Using Configuration File

The previous setup can also be done by using the [Agent Configuration File](/ngrok-agent/config/#tunnel-definitions).

1. Link your ngrok agent to your ngrok account by using your authtoken:
```bash
ngrok authtoken NGROK_AUTHTOKEN
```
**Note**: Replace `NGROK_AUTHTOKEN` with your unique ngrok authtoken found in the [ngrok dashboard](https://dashboard.ngrok.com/get-started/your-authtoken).

1. Run the following command to create an edit a configuration file:
```bash
ngrok config edit
```

1. Add a tunnel definition at the end of the configuration file as follows:
```yaml
tunnels:
  httpbin:
    proto: http
    addr: 3000
    basic_auth: ['USERNAME:PASSWORD']
```

1. Run the ngrok agent using the following command:
```bash
ngrok start httpbin
```

**Note**: After the credentials is validated by the ngrok tunnel, it forwards the authorization header to the application. Therefore the application can use the information inside this header (this may require some application code change).

```bash
"authorization": "Basic VVNFUk5BTUU6UEFTU1dPUkQ="
```

## OpenID Connect (OIDC) {#oidc}

OpenID Connect (OIDC) is an open identity layer protocol built on top of the OAuth 2.0. It allows applications to verify the identity of the end-user and to obtain basic user profile information.

OpenID Connect brings to the table the concept of an **Identity Provider**, i.e. an external application that provides authentication services to relying applications.


### Command line configuration 

Use the `--oidc`, `--oidc-client-id` and `--oidc-client-secret` flags with your ngrok tunnel to enable an identity provider for your application with no code change.
By adding OIDC support to your ngrok tunnel you also enable your application to participate in the Single Sign On provided by the identity provider.

For example, if you want to enable OIDC support with Google run the following command:

```bash
ngrok http --oidc=https://accounts.google.com/o/oauth2/v2/auth --oidc-client-id=806764744727-3j3t4n6s1m1hna6ahlq08q555a4j06t5.apps.googleusercontent.com --oidc-client-secret=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 3000
```

**Note**: In this example, the **oidc**, **oidc-client-id** and **oidc-client-secret** values can be copied from the [Google Cloud Credentials](https://console.developers.google.com/apis/credentials) page after setting up a **OAuth consent screen** and creating an **OAuth Client ID Credential**.

### Using Configuration File

Instead of passing the values as arguments to the ngrok agent, you can setup the [Agent Configuration File](/ngrok-agent/config/#tunnel-definitions).

1. Set up the ngrok authtoken and run the following command to create an edit a configuration file:
```bash
ngrok authtoken NGROK_AUTHTOKEN
ngrok config edit
```

1. Add a tunnel definition at the end of the configuration file as follows:
```yaml
tunnels:
  oidc:
    proto: http
    addr: 3000
    issuer_url: https://accounts.google.com/o/oauth2/v2/auth
    client_id: 806764744727-3j3t4n6s1m1hna6ahlq08q555a4j06t5.apps.googleusercontent.com
    client_secret: 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
    scopes: *
```

1. Run the ngrok agent using the following command:
```bash
ngrok start google
```

**Note**: Again we are using Google as an example of OIDC identity provider. See the documentation of your OIDC provider and follow the ngrok configuration procedure in this tutorial.

## SAML {#saml}


