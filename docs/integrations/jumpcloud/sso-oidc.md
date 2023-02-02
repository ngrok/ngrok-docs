# JumpCloud SSO (OpenID Connect)
------------

:::tip TL;DR

To secure access to ngrok with JumpCloud Single Sign-On using OpenID Connect:
1. [Configure JumpCloud SSO](#configure-JumpCloud)
1. [Configure ngrok](#configure-ngrok)
1. [Test access to ngrok with JumpCloud SSO](#test-sso)

:::

This article details how to configure JumpCloud as the primary Identity Provider for ngrok tunnels.
By integrating JumpCloud SSO with ngrok, you can:

- **Restrict access to ngrok tunnels** only to users authenticated via JumpCloud
- **Use JumpCloud security policies and MFA authenticators**.
- **Use JumpCloud's Dashboard to facilitate access to ngrok apps**.

## Supported Features

The ngrok integration with JumpCloud supports:

- **SP-Initiated SSO**: In this mode, users access ngrok edges and tunnels and are redirected to JumpCloud for authentication.

## Requirements

To configure ngrok tunnels with JumpCloud, you must have:

- an JumpCloud account with administrative rights to create apps
- an ngrok enterprise account with an access token or admin access to configure edges with OpenID Connect.


## Configuration Steps

To integrate ngrok with JumpCloud SSO, you will need to:

1. Configure JumpCloud with the ngrok app
1. Configure ngrok with the SSO settings provided by JumpCloud

## **Step 1**: Configure JumpCloud {#configure-JumpCloud}

### Add the ngrok App in JumpCloud

1. Access the [JumpCloud Console](https://console.jumpcloud.com/), and sign in using your JumpCloud administrator account.

1. On the left menu, click **SSO**, click **Get Started**, and then click **Custom OIDC App**.

1. On the **New Application** popup, enter `ngrok` in the **Display Label** field.

1. Click the **SSO** tab, enter `https://idp.ngrok.com/oauth2/callback` in the **Redirect URIs** field, select **Client Secret Basic** as the **Client Authentication Type**, and enter the URL provided by the ngrok agent to expose your application to the internet in the **Login URL** (i.e. `https://myexample.ngrok.io/webhooks`). 

1. Click **Activate**. 

1. On the **Application Saved** popup, copy the value of the **Client ID** and the **Client Secret** fields, and then click **Got It**.

88e7bb39-6f72-4ef8-bf2a-fc8c932088a5
gq-ldnj4Ve23da-iaqwTXsH9aa


1. Select **OpenID Connect**, and then enter the following:
    1. **Sign-in redirect URI**: https://idp.ngrok.com/oauth2/callback
    1. **Login initiated by**: Login initiated by app
1. Click **Done**. 
1. Under the **Sign On** tab of the ngrok application, **copy the Client ID and Client Secret**. These values will be used at ngrok to complete the configuration.

### Grant access to JumpCloud people and groups

JumpCloud allows administrators to restrict access to SSO apps — such as ngrok — via assignments. By default, apps created in JumpCloud have no assignments — in other words, nobody can use JumpCloud SSO to access ngrok until you assign them to the app. To assign JumpCloud users and groups to the ngrok app:

1. Click **Application** > **Applications** .
1. Search for and click the **ngrok app**.
1. Click **Assignments**.
1. Use the **Assign** button to associate groups and users with the ngrok app. **To test the SSO with ngrok, make sure you're assigned to the app**.

## **Step 2**: Configure ngrok {#configure-ngrok}

ngrok can leverage JumpCloud SSO in two ways:

- From the ngrok CLI (using the `--oidc` parameter)
- From the ngrok dashboard

### **Option 1**: ngrok CLI

> **Note:** For this tutorial, we assume you have an app running locally (i.e., on localhost:3000) with the ngrok client installed.

1. Launch a terminal
1. Enter the following command to launch an ngrok tunnel with JumpCloud SSO. Replace `<JumpCloud_url>` with your JumpCloud org address (i.e., https://acme.JumpCloud.com) and the `<JumpCloud_client_id>` and `<JumpCloud_client_secret>` with the respective values copied from the ngrok app registered at JumpCloud. Optionally, add the `--subdomain <subdomain>` argument to get your own subdomain.ngrok.io url, replacing `<subdomain>` with your URL of preference:

    ```bash
    ngrok http 3000 --oidc=<JumpCloud_url> \
    --oidc-client-id=<JumpCloud_client_id> \
    --oidc-client-secret=<JumpCloud_client_secret> \
    --subdomain=<subdomain>
    ```
1. Copy the url available next to **Forwarding** (for example, `https://JumpCloud-sso-test.ngrok.io`).

1. Skip to **Step 3**

### **Option 2**: ngrok Edge

To configure an edge with JumpCloud:

1. Go to dashboard.ngrok.com.
1. Click **Cloud Edge** > **Edges**
1. If you don't have an edge already set to add JumpCloud SSO, create a test edge:
    * Click **New Edge**
    * Click **HTTPS Edge**
    * Click the **pencil icon** next to "no description". Enter `Edge with JumpCloud SSO` as the edge name and click **Save**.
1. On the edge settings, click **OIDC**. 
1. Click **Begin setup** and enter the following:

    ![JumpCloud config in ngrok](img/jumpcloud-1.png)

    * **Issuer URL**: Your JumpCloud OIDC base url (i.e. `https://oauth.id.jumpcloud.com/`). 
    * **Client ID**: The client id copied from JumpCloud.
    * **Client Secret**: The client secret copied from JumpCloud.

1. Click **Save**.

1. Launch a tunnel connected to your JumpCloud edge:

    :::tip Note 
    For this step, we assume you have an app running locally (i.e. on localhost:3000) with the ngrok client installed.
    :::

    1. Click **Start a tunnel**.
    1. Click the **copy icon** next to the tunnel command.

        ![tunnel config](img/jumpcloud-2.png)

    1. Launch a tunnel:
        * Launch a terminal 
        * Paste the command. Replace http://localhost:80 with your local web app addess (i.e., http://localhost:3000)
        * hit **Enter**. an ngrok tunnel associated to your edge configuration is launched.
    1. To confirm that the tunnel is connected to your edge:
        * Return to the ngrok dashboard
        * Close the **Start a tunnel** and the **Tunnel group** tabs
        * Refresh the test edge page. Under traffic, You will see the message _You have 1 tunnel online. Start additional tunnels to begin load balancing_

        ![tunnel confirmed](img/jumpcloud-3.png)

1. In the test edge, copy the **endpoint URL**. (you will use this url to test the JumpCloud Authentication)
    ![tunnel url](img/jumpcloud-4.png)

## Step 3: Test the integration {#test-sso}

1. In your browser, launch an incognito window.
1. Access your ngrok tunnel (i.e., https://jumpcloud-sso-test.ngrok.io or using a copied URL).
1. You should be prompted to log in with your JumpCloud credentials.
1. After login, you should be able to see your web app.

