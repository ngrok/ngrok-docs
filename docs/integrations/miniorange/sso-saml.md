# MiniOrange SSO (SAML)
------------

:::tip TL;DR

To secure access to ngrok with MiniOrange Single Sign-On using SAML:
1. [Configure MiniOrange SSO](#configure-MiniOrange)
1. [Configure ngrok](#configure-ngrok)
1. [Test access to ngrok with MiniOrange SSO](#test-sso)

:::

This article details how to configure MiniOrange as the primary Identity Provider for ngrok tunnels.
By integrating MiniOrange SSO with ngrok, you can:

- **Restrict access to ngrok tunnels** only to users authenticated via MiniOrange
- **Use MiniOrange security policies and MFA authenticators**.
- **Use MiniOrange's Dashboard to facilitate access to ngrok apps**.

## Requirements

To configure ngrok tunnels with MiniOrange, you must have:

- an MiniOrange account with administrative rights to create apps
- an ngrok enterprise account with an access token or admin access to configure edges with SAML.


## Configuration Steps

To integrate ngrok with MiniOrange SSO, you will need to:

1. Configure MiniOrange with the ngrok app
1. Configure ngrok with the SSO settings provided by MiniOrange

## **Step 1**: Configure MiniOrange {#configure-miniorange}

1. Access the [MiniOrange Console](https://www.miniorange.com/), and sign in using your MiniOrange administrator account.

1. On the **Dashboard** page, click **Apps** on the left menu, click **Add Application**, click the **OAUTH/OIDC** tile, and then click the **OAuth2/OpenID Connect** tile.

1. On the **Add App** page, enter `ngrok` in the **Client Name** field, 



### **Step 2**: Download the IdP metadata {#idp-metadata}

1. On the **SSO** page of the [MiniOrange Console](https://console.MiniOrange.com/), click your **Custom SAML App**, click the **SSO** tab, click **Export Metadata**, and then save the XML file on your desktop.


### **Step 3**: Configure ngrok {#configure-ngrok}

To configure an edge with MiniOrange:

1. Access the [ngrok Dashboard](https://dashboard.ngrok.com/) and sign in using your ngrok account.

1. On the left menu, click **Cloud Edge** and then click **Edges**.

1. If you don't have an edge already set to add MiniOrange SSO, create a test edge:
    * Click **+ New Edge**.
    * Click **Create HTTPS Edge**.
    * Click the **pencil icon** next to "no description", enter `Edge with MiniOrange SSO SAML` as the edge name, and click **Save**.

1. On the edge settings menu, click **SAML**.

1. On the **SAML** page, click **Begin setup**, click **Upload XML**, and then open the XML metadata file you downloaded from MiniOrange (See [Download the IdP metadata](#idp-metadata)).
    ![MiniOrange config in ngrok](img/MiniOrange-5.png)

1. Click **Save** at the top.


### **Step 4**: Download the SP metadata {#sp-metadata}

1. On the **SAML** page of your [ngrok edge](https://dashboard.ngrok.com/cloud-edge/edges), click the three dots close to the **SP Metadata** field, click **Download XML File**, and then save the XML file on your desktop.


### **Step 5**: Link MiniOrange with ngrok {#sp-metadata}

1. Access the [MiniOrange Console](https://console.MiniOrange.com/), click **SSO**, click your **Custom SAML App**, click the **SSO** tab, click **Upload Metadata**, and then open the XML metadata file you downloaded from ngrok (See [Download the SP metadata](#sp-metadata)).
    ![MiniOrange config in ngrok](img/MiniOrange-6.png)

1. Click **Save**.


### **Step 6**: Start a Tunnel {#start-tunnel}

1. Access the [ngrok edges page](https://dashboard.ngrok.com/cloud-edge/edges), click your edge, and then click **Start a tunnel**.

    :::tip Note 
    For this step, we assume you have an app running locally (i.e. on localhost:3000) with the ngrok client installed.
    :::


1. Click the **copy icon** next to the tunnel command.
    ![tunnel config](img/MiniOrange-2.png)

1. Launch a tunnel:
    * Launch a terminal.
    * Paste the command but replace `http://localhost:80` with your localhost app address (i.e., `http://localhost:3000`).
    * Click **Enter** and an ngrok tunnel associated with your edge configuration will launch.

1. To confirm that the tunnel is connected to your edge:
    * Return to the ngrok dashboard
    * Close the **Start a tunnel** and the **Tunnel group** tabs
    * Refresh the test edge page. Under traffic, You will see the message _You have 1 tunnel online. Start additional tunnels to begin load balancing._
    ![tunnel confirmed](img/MiniOrange-3.png)

1. In the test edge, copy the **endpoint URL**. (You use this URL to test the MiniOrange Authentication)
    ![tunnel url](img/MiniOrange-4.png)


## Grant access to MiniOrange users {#users}

MiniOrange allows administrators to restrict access to SSO apps — such as ngrok — via user group assignments. By default, apps created in MiniOrange have no group assignments — in other words, nobody can use MiniOrange SSO to access ngrok until you assign a group to the app.

To assign MiniOrange groups to the ngrok app:

1. On the left menu of the [MiniOrange Console](https://console.MiniOrange.com/), click **SOO** and click the ngrok custom SAML app you created.

1. On the app popup, click the **User Groups** tab, click the checkbox of the **All Users** group, and then click **Save**.
    **Tip**: Make sure to add MiniOrange users to this group when you create or manage users that need access to the ngrok app.


## Test the integration {#test-sso}

1. In your browser, launch an incognito window.

1. Access your ngrok tunnel (i.e., `https://MiniOrange-sso-test.ngrok.io` or using the copied endpoint URL).

1. You should be prompted to log in with your MiniOrange credentials.

1. After logging in, you should be able to see your web app.

