---
title: Adding OpenID Connect to Your App
description: Simplest way to add OpenID Connect (OIDC) to you application without code changes
tags:
    - guides
    - authentication
    - authn
    - openid connect
    - oidc
---

ngrok provides a variety of authentication options such as Basic Authentication, OpenID Connect, and SAML.

This guide will walk you through how to quickly add OpenID Connect to your application without code changes by using ngrok tunnels.
 

## OpenID Connect (OIDC)

OpenID Connect (OIDC) is an open identity layer protocol built on top of the OAuth 2.0 framework. It provides a secure and scalable identity layer for authentication and authorization. It leverages industry-standard encryption algorithms and token-based authentication, enhancing the overall security of the application.

OIDC brings to the table the concept of an **Identity Provider**, i.e. an external application that provides authentication services to relying applications. Applications can then benefit from identity provider's features such as social login, multi-factor authentication, and other security-enchanced measures, to expand their options for user authentication.

ngrok integrates with a variety of them. For example, [Auth0](/integrations/auth0/), [Curity](/integrations/curity/), Facebook, [FusionAuth](/integrations/fusionauth/), Google, [JumpCloud](/integrations/jumpcloud/), LinkedIn, [MiniOrange](/integrations/miniorange/), [Okta](/integrations/okta/), [Wallix Trustelem](/integrations/trustelem/), and others. See [ngrok partners](https://ngrok.com/partners).

By adding OIDC to your application you also enable the application to participate in the Single Sign-On (SSO) provided by the identity provider: users authenticate once and access multiple applications seamlessly.

The OIDC widespread adoption and active developer community ensure continued support, updates, and security improvements, providing a standardized, secure, and flexible solution for protecting your application. 

### Using Command Line Configuration 

Use the `--oidc`, `--oidc-client-id`, and `--oidc-client-secret` flags with your ngrok agent to enable an identity provider for your application with no code changes.

For example, if you want to enable OIDC with Google run the following command:

```bash
ngrok http --oidc=https://accounts.google.com --oidc-client-id=GOOGLE_OAUTH2_CLIENT_ID --oidc-client-secret=GOOGLE_OAUTH2_CLIENT_SECRET 3000
```

**Note**: The **oidc** URL is the base URL where the identity provider exposes the well-known configuration endpoint (i.e. `https://accounts.google.com/.well-known/openid-configuration`).

**Note**: Replace the **GOOGLE_OAUTH2_CLIENT_ID** and **GOOGLE_OAUTH2_CLIENT_SECRET** values with the ones you get from the [Google Cloud Credentials](https://console.developers.google.com/apis/credentials) page after setting up an **OAuth consent screen** and creating an **OAuth Client ID Credential**.

**Note**: The identity provider requires **Authorized redirect URIs**. ngrok's OIDC redirect URI is `https://idp.ngrok.com/oauth2/callback`.

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

### Using ngrok Edges

Another option to set OIDC to your ngrok tunnel is via [ngrok Edges](/cloud-edge/).

**Note**: This feature requires a ngrok PRO or Enteprise account. See [ngrok pricing](https://ngrok.com/pricing).

  1. Sign in to the [ngrok Dashboard](https://dashboard.ngrok.com/), click **Cloud Edge** on the left menu and then click **Edges**.

  1. On the **Edges** page, click **+ New Edge**, select **HTTPS Edge** on the left side of the popup screen, and then click **Create HTTPS Edge**.

  1. Click the **pencil icon** next to `no description`, enter `OIDC Edge` as the edge name, and click **Save**.

  1. Down in the **OIDC Edge** page, click **Add OIDC**, and then click **Begin setup**.

  1. On the **OpenID Connect** page, enter `https://accounts.google.com` in the **Issuer URL** field.

  1. In the **Client ID** and **Client Secret** fields the respective values from the [Google Cloud Credentials](https://console.developers.google.com/apis/credentials) page after setting up an **OAuth consent screen** and creating an **OAuth Client ID Credential**.

  **Note**: In this example, we used Google as the identity provider. Follow the documentation of your preferred OIDC identity provider to collect the valid values for **issuer_url**, **client_id**, **client_secret**, and **OAuth Scopes**.
    
  1. Click **Save** at the top and then click **Start a tunnel**.

  1. On the **Start a Tunnel** popup, click the **copy icon** next to the tunnel command.

  1. Launch a terminal or command prompt, paste the copied command line, replace `http://localhost:80` with your localhost app address (i.e., `http://localhost:3000`), and then hit enter. For example:
  ```bash
  ngrok tunnel --label edge=<edge_id> http://localhost:3000
  ```

  **Note**: To confirm that the tunnel is connected to your edge, return to the ngrok dashboard, close the **Start a tunnel** and the **Tunnel group** popups, and refresh the test edge page.
  Under traffic, you will see the message _You have 1 tunnel online. Start additional tunnels to begin load balancing._

  1. Make note of the **Endpoints** URL that appears in the page.


## Test the Authentication

Test the integration.

**Note**: Make sure you have a localhost application running on port `3000`. Use the [sample NodeJS app available on GitHub](https://github.com/ngrok/ngrok-webhook-nodejs-sample). 

### Test the application access in a browser:

  1. Open the **Forwarding** URL provided by the ngrok agent in a web browser and the **Sign in with Google** page appears.

  **Note**: If you used **Edges**, the URL appears in the **Edge page** as one of the **Endpoints**.

  1. Provide your Google credentials and after successfully logging into Google the browser will be redirected to your application.

### Programmatically access the application.

  1. Execute the following command line to access the application:
  ```bash
  curl --location 'NGROK_AGENT_FORWARDING_URL' --header 'Authorization: Bearer TOKEN'
  ```

  **Note**: Replace the `TOKEN` value with a valid access token from Google.

  Verify that the application responds correctly.


## After Authentication

After the credentials are validated by the ngrok tunnel, the agent forwards to the application some headers containing information about the logged-in user. Therefore the application can use the information inside these headers (this may require some application code changes).

```bash
"ngrok-auth-user-email": "myuser@gmail.com"
"ngrok-auth-user-id": "1234567890"
"ngrok-auth-user-name": "My User"
```
