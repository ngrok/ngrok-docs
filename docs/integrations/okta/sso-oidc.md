---
description: Use Okta OIDC to secure access to ngrok tunnels
---

# Okta SSO (OpenID Connect)
------------

:::tip TL;DR

To secure access to ngrok with Okta Single Sign-On using OpenID Connect:
1. [Configure Okta SSO](#configure-okta)
1. [Configure ngrok](#configure-ngrok)
1. [Test access to ngrok with Okta SSO](#test-sso)

:::

This article details how to configure Okta as the primary Identity Provider for ngrok tunnels.
By integrating Okta SSO with ngrok, you can:

- **Restrict access to ngrok tunnels** only to users authenticated via Okta
- **Use Okta security policies, MFA authenticators** — including Okta Verify,  FastPass, and FIDO2 — **and ThreatInsights to control access to ngrok tunnels**.
- **Use Okta's Dashboard to facilitate access to ngrok apps**.

## Supported Features

The ngrok integration with Okta supports:

- **SP-Initiated SSO**: In this mode, users access ngrok edges and tunnels and are redirected to Okta for authentication.

## Requirements

To configure ngrok tunnels with Okta, you must have:

- an Okta account with administrative rights to create apps
- an ngrok enterprise account with an access token or admin access to configure edges with OpenID Connect.


## Configuration Steps

To integrate ngrok with Okta SSO, you will need to:

1. Configure Okta with the ngrok app
1. Configure ngrok with the SSO settings provided by Okta

## **Step 1**: Configure Okta {#configure-okta}

### Add the ngrok App in Okta

1. Access your Okta Dashboard as an administrator and then click **Admin**.
1. Click **Application** > **Applications** .
1. Click **Browse App Catalog**, 
1. Search for _ngrok_, and then click **Add**. 
1. Enter the **Application label** — this is the app name that will be displayed in the okta dashboard for end users — and click **Next**. 
1. Select **OpenID Connect**, and then enter the following:
    1. **Sign-in redirect URI**: https://idp.ngrok.com/oauth2/callback
    1. **Login initiated by**: Login initiated by app
1. Click **Done**. 
1. Under the **Sign On** tab of the ngrok application, **copy the Client ID and Client Secret**. These values will be used at ngrok to complete the configuration.

### Grant access to Okta people and groups

Okta allows administrators to restrict access to SSO apps — such as ngrok — via assignments. By default, apps created in Okta have no assignments — in other words, nobody can use Okta SSO to access ngrok until you assign them to the app. To assign Okta users and groups to the ngrok app:

1. Click **Application** > **Applications** .
1. Search for and click the **ngrok app**.
1. Click **Assignments**.
1. Use the **Assign** button to associate groups and users with the ngrok app. **To test the SSO with ngrok, make sure you're assigned to the app**.

## **Step 2**: Configure ngrok {#configure-ngrok}

ngrok can leverage Okta SSO in two ways:

- From the ngrok CLI (using the `--oidc` parameter)
- From the ngrok dashboard

### **Option 1**: ngrok CLI

> **Note:** For this tutorial, we assume you have an app running locally (i.e., on localhost:3000) with the ngrok client installed.

1. Launch a terminal
1. Enter the following command to launch an ngrok tunnel with Okta SSO. Replace `<okta_url>` with your okta org address (i.e., https://acme.okta.com) and the `<okta_client_id>` and `<okta_client_secret>` with the respective values copied from the ngrok app registered at Okta. Optionally, add the `--subdomain <subdomain>` argument to get your own subdomain.ngrok.io url, replacing `<subdomain>` with your URL of preference:

    ```bash
    ngrok http 3000 --oidc=<okta_url> \
    --oidc-client-id=<okta_client_id> \
    --oidc-client-secret=<okta_client_secret> \
    --subdomain=<subdomain>
    ```
1. Copy the url available next to **Forwarding** (for example, `https://okta-sso-test.ngrok.io`).

1. Skip to **Step 3**

### **Option 2**: ngrok Edge

To configure an edge with Okta:

1. Go to dashboard.ngrok.com.
1. Click **Cloud Edge** > **Edges**
1. If you don't have an edge already set to add Okta SSO, create a test edge:
    * Click **New Edge**
    * Click **HTTPS Edge**
    * Click the **pencil icon** next to "no description". Enter _Edge with Okta SSO_ as the edge name and click **Save**.
1. On the edge settings, click **OIDC**. 
1. Click **Begin setup** and enter the following:

    ![Okta config in ngrok](img/okta-1.png)

    * **Issuer URL**: Your okta tenant url (i.e. https://acme.oktapreview.com). 
    * **Client ID**: The client id copied from Okta
    * **Client Secret**: The client secret copied from Okta

1. Click **Save**.

1. Launch a tunnel connected to your Okta edge:

    :::tip Note 
    For this step, we assume you have an app running locally (i.e. on localhost:3000) with the ngrok client installed.
    :::

    1. Click **Start a tunnel**.
    1. Click the **copy icon** next to the tunnel command.

        ![tunnel config](img/okta-2.png)

    1. Launch a tunnel:
        * Launch a terminal 
        * Paste the command. Replace http://localhost:80 with your local web app addess (i.e., http://localhost:3000)
        * hit **Enter**. an ngrok tunnel associated to your edge configuration will launch.
    1. To confirm that the tunnel is connected to your edge:
        * Return to the ngrok dashboard
        * Close the **Start a tunnel** and the **Tunnel group** tabs
        * Refresh the test edge page. Under traffic, You will see the message _You have 1 tunnel online. Start additional tunnels to begin load balancing_

        ![tunnel confirmed](img/okta-3.png)

1. In the test edge, copy the **endpoint URL**. (you will use this url to test the Okta Authentication)
    ![tunnel url](img/okta-4.png)

## Step 3: Test the integration {#test-sso}

1. In your browser, launch an incognito window.
1. Access your ngrok tunnel (i.e., https://okta-sso-test.ngrok.io or using a copied URL).
1. You should be prompted to log in with your Okta credentials.
1. After logging in, you should be able to see your web app.

