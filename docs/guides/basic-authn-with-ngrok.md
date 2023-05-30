---
title: Adding Basic Authentication to Your App
description: Simplest way to add basic authentication to you application without code changes
tags:
    - guides
    - authentication
    - authn
    - basic authentication
---

This guide will walk you through how to quickly add Basic authentication to your application without code changes by using ngrok tunnels.

ngrok provides a variety of authentication options such as Basic Authentication, OpenID Connect, and SAML.
 

## HTTP Basic Authentication {#basic}

Basic Authentication is an authentication mechanism built into the HTTP protocol. It offers basic access control  that relies on user authentication, such as username and password, to verify the identity of users before granting them access to the system or application.

The basic authentication method serves as a practical and simple solution for protecting application access in many scenarios. This ease of implementation allows for quick integration with a wide range of platforms, operating systems, and web browsers, making it accessible for developers and users. 

Although it may lack the advanced security features of more complex authentication methods, its ubiquity and ease of use make it a valuable option for securing applications with lower security requirements, communication between modules of an application, or where additional security measures are in place.


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

After the credentials are validated by the ngrok tunnel, the agent forwards the authorization header to the application. Therefore the application can use the information inside this header (this may require some application code changes).

```bash
"authorization": "Basic VVNFUk5BTUU6UEFTU1dPUkQ="
```

