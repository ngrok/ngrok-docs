---
title: Adding OpenID Connect to Your App
description: Simplest way to add OpenID Connect (OIDC) to you application without code change
tags:
    - guides
    - authentication
    - authn
    - openid connect
    - oidc
---

Modifying legacy applications to add support to a minimum of security such as authentication may be 

This guide will walk you through how to quickly add authentication to your application without code change.

ngrok provides a variety of authentication options such as Basic Authentication, OpenID Connect, or SAML.
 

## OpenID Connect (OIDC) {#oidc}

OpenID Connect (OIDC) is an open identity layer protocol built on top of OAuth 2.0. It allows applications to verify the identity of the end user and to obtain basic user profile information.

OpenID Connect brings to the table the concept of an **Identity Provider**, i.e. an external application that provides authentication services to relying applications.

By adding OIDC support to your application you also enable the application to participate in the Single Sign-On provided by the identity provider.


### Command line configuration 

Use the `--oidc`, `--oidc-client-id`, and `--oidc-client-secret` flags with your ngrok agent to enable an identity provider for your application with no code change.

For example, if you want to enable OIDC with Google run the following command:

```bash
ngrok http --oidc=https://accounts.google.com --oidc-client-id=GOOGLE_OAUTH2_CLIENT_ID --oidc-client-secret=GOOGLE_OAUTH2_CLIENT_SECRET 3000
```

**Note**: The **oidc** URL is the base URL where the identity provider exposes the well-known configuration endpoint (i.e. `https://accounts.google.com/.well-known/openid-configuration`).

**Note**: Replace the **GOOGLE_OAUTH2_CLIENT_ID** and **GOOGLE_OAUTH2_CLIENT_SECRET** values with the ones you get from the [Google Cloud Credentials](https://console.developers.google.com/apis/credentials) page after setting up an **OAuth consent screen** and creating an **OAuth Client ID Credential**.


### Using Configuration File

Instead of passing the values as arguments to the ngrok agent, you can set up the [Agent Configuration File](/ngrok-agent/config/#tunnel-definitions).

  1. Set up the ngrok authtoken and run the following command to create and edit a configuration file:
  ```bash
  ngrok authtoken NGROK_AUTHTOKEN
  ngrok config edit
  ```

  1. Add a tunnel definition at the end of the configuration file as follows:
  ```yaml
  tunnels:
    mytunnel: 
      proto: http
      addr: 3000
      oidc:
          issuer_url: https://accounts.google.com
          client_id: GOOGLE_OAUTH2_CLIENT_ID
          client_secret: GOOGLE_OAUTH2_CLIENT_SECRET
          scopes: []
  ```

  **Note**: In this example, we used Google as the identity provider. Follow the documentation of your preferred OIDC identity provider to collect the valid values for **issuer_url**, **client_id**, **client_secret**, and **scopes**.
  
  1. Run the ngrok agent using the following command:
  ```bash
  ngrok start mytunnel
  ```

  The ngrok agent provides a **Forwarding** URL to expose your application to the internet (i.e. `https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io`).


## Test the Authentication

Test the integration.

### Test the application access in a browser:

  1. Open the **Forwarding** URL provided by the ngrok agent in a web browser and the **Sign in with Google** page appears.

  1. Provide your Google credentials and after successfully logging into Google the browser will be redirected to your application.

  **Note**: Make sure you have a localhost application running on port `3000`. Use the [sample NodeJS app available on GitHub](https://github.com/ngrok/ngrok-webhook-nodejs-sample). 


### Programmatically access the application.

  1. Execute the following command line to access the application:
  ```bash
  curl --location 'NGROK_AGENT_FORWARDING_URL' --header 'Authorization: Bearer TOKEN'
  ```

  **Note**: Replace the `TOKEN` value with a valid access token from Google.

  Verify that the application responds correctly.


## After Authentication

After the credentials are validated by the ngrok tunnel, the agent forwards to the application some headers containing information about the logged-in user. Therefore the application can use the information inside these headers (this may require some application code change).

```bash
"ngrok-auth-user-email": "myuser@gmail.com"
"ngrok-auth-user-id": "1234567890"
"ngrok-auth-user-name": "My User"
```
