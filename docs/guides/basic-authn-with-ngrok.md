---
title: Adding Basic Authentication to Your App
description: Simplest way to add basic authentication to you application without code change
tags:
    - guides
    - authentication
    - authn
    - basic authentication
---

Modifying legacy applications to add support to a minimum of security such as authentication may be 

This guide will walk you through how to quickly add authentication to your application without code change.

ngrok provides a variety of authentication options such as [Basic Authentication](/guides/basic-authn-with-ngrok/), [OpenID Connect](/guides/oidc-with-ngrok/), or [SAML](/guides/saml-with-ngrok/).
 

## HTTP Basic Authentication {#basic}

Basic Authentication is a simple authentication mechanism built into the HTTP protocol. To access an application protected by Basic Authentication the user must provide credentials in the form of an authorization basic header for every request.

### Command line configuration 

By adding the `--basic-auth` flag to your ngrok tunnel you enforce this access control mechanism to your application without changing anything in your application. The credential you pass as value to this flag must be used by the end-user to access the application resources through ngrok. For example:
```bash
ngrok http --basic-auth="USERNAME:PASSWORD" 3000
```

If you need a list of authorized credentials, add the `--basic-auth` flag multiple times in the command line.
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

  1. Run the following command to create and edit a configuration file:
  ```bash
  ngrok config edit
  ```

  1. Add a tunnel definition at the end of the configuration file as follows:
  ```yaml
  tunnels:
    mytunnel:
      proto: http
      addr: 3000
      basic_auth: ['USERNAME:PASSWORD']
  ```

  1. Run the ngrok agent using the following command:
  ```bash
  ngrok start mytunnel
  ```

The ngrok agent provides a **Forwarding** URL to expose your application to the internet (i.e. `https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io`).


## Test the Authentication

### Test the application access in a browser:

  1. Open the **Forwarding** URL provided by the ngrok agent in a web browser and verify the **Basic Authentication** popup appears.

  1. Enter the **Login** and **Password** of the credentials you set up in the ngrok agent. After successfully logging the browser will redirect to your application.

  **Note**: Make sure you have a localhost application running on port `3000`. Use the [sample NodeJS app available on GitHub](https://github.com/ngrok/ngrok-webhook-nodejs-sample). 


### Programmatically access the application.

  1. Execute the following command line to access the application:
  ```bash
  curl --location 'NGROK_AGENT_FORWARDING_URL' --header 'Authorization: Basic VVNFUk5BTUU6UEFTU1dPUkQ='
  ```

  **Note**: The `VVNFUk5BTUU6UEFTU1dPUkQ=` value corresponds to the base64 encoding of the `USERNAME:PASSWORD` value.

Verify that the application responds correctly.


## After Authentication

After the credentials are validated by the ngrok tunnel, the agent forwards the authorization header to the application. Therefore the application can use the information inside this header (this may require some application code change).

```bash
"authorization": "Basic VVNFUk5BTUU6UEFTU1dPUkQ="
```

