---
title: Adding authentication support to your app
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

Basic Authentication is a simple authentication mechanism built into the HTTP protocol. To access an app protected by Basic Authentication the user must provide a username and password. 

By adding the `--basic-auth` flag to your ngrok tunnel you enforce the very basic access control to your application without changing anything in your application. The credential you pass as value to this flag can be used by the end-user to log into the app through ngrok.

For example:
```bash
ngrok http --basic-auth="USERNAME:PASSWORD" 3000
```

You can add the `--basic-auth` flag multiple times to create a list of authorized credentials.

For example:
```bash
ngrok http --basic-auth="user1:pass1" --basic-auth="user2:pass2" 3000
```

Once the credentials is validate by the ngrok tunnel the application receives the authorization header in every request. Therefore the application can use it for futher validation.

```bash
"authorization": "Basic VVNFUk5BTUU6UEFTU1dPUkQ="
```


## OpenID Connect (OIDC) {#oidc}

OpenID Connect (OIDC) is an identity layer built on top of the OAuth 2.0. It allows applications to verify the identity of the end-user and to obtain basic user profile information.



## SAML {#saml}


