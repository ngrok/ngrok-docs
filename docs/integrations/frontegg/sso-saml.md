---
description: Use Frontegg SAML to secure access to ngrok endpoints
---

# Frontegg SSO (SAML)

---

:::tip TL;DR

To secure access to ngrok with Frontegg Single Sign-On using SAML:

1. [Download the IDP metadata](#idp-metadata)
1. [Configure ngrok](#configure-ngrok)
1. [Configure Frontegg](#configure-frontegg)
1. [Update Frontegg Login Method](#frontegg-login)
1. [Test access to ngrok with Frontegg SSO](#test-sso)

:::

This article details how to configure Frontegg as the primary Identity Provider for ngrok endpoints.
By integrating Frontegg SSO with ngrok, you can:

- **Restrict access to ngrok endpoints** only to users authenticated via Frontegg
- **Use Frontegg security policies and MFA authenticators**.
- **Use Frontegg's Dashboard to facilitate access to ngrok apps**.

## Requirements

To configure ngrok tunnels with Frontegg, you must have:

- A Frontegg account with administrative rights to create apps
- An [ngrok Enterprise Account](https://ngrok.com/pricing) with an authtoken or admin access to configure edges with SAML.

## Configuration Steps

To integrate ngrok with Frontegg SSO, you will need to:

1. Configure Frontegg with the ngrok app
1. Configure ngrok with the SSO settings provided by Frontegg

### **Step 1**: Download the IDP metadata {#idp-metadata}

1. Access the [Frontegg Portal](https://portal.Frontegg.com/) and sign in using your Frontegg administrator account.

1. On the left menu, click your environment under **Environments** and then click **Env settings**.

1. On the **General Settings** page, copy both the **Client ID** and **API Key** values.

1. Open a terminal window and run the following command to get an access token:

   ```bash
   curl --request POST \
     --url https://api.frontegg.com/auth/vendor/ \
     --header 'accept: application/json' \
     --header 'content-type: application/json' \
     --data '{"clientId": "CLIENT_ID","secret": "API_KEY"}'
   ```

   **Note**: Replace the following with values:

   - CLIENT_ID: The client ID value you copied before.
   - API_KEY: The API key value you copied before.

1. Copy the value of the **token** attribute from the response.

1. In the same terminal window, run the following command to download the metadata XML file from Frontegg:

   ```bash
   curl --location --request POST 'https://api.frontegg.com/oauth/resources/configurations/saml/v1/https%3A%2F%2Ftemporary' \
   --header 'frontegg-vendor-host: YOUR_FRONTEGG_HOST_URL' \
   --header 'Authorization: Bearer TOKEN' \
   --header 'Content-Type: application/json' \
   --data-raw '{
      "acsUrl": "https://temporary",
      "entityId": "https://temporary"
   }'
   ```

   **Note**: Replace the following with values copied on previous steps:

   - YOUR_FRONTEGG_HOST_URL: The value of the **Domain name** from the **Env settings** > **Domains** tab.
   - TOKEN: The token you copied before.

1. Copy the response and save it as the `idp_metadata.xml` file locally on your desktop.
   **Note**: The response starts with `<EntityDescriptor` and ends with `</EntityDescriptor>`. Anything different may be an error.

### **Step 2**: Configure ngrok {#configure-ngrok}

To configure an edge with Frontegg:

1. Access the [ngrok Dashboard](https://dashboard.ngrok.com/) and sign in using your ngrok account.

1. On the left menu, click **Cloud Edge** and then click **Edges**.

1. If you don't have an edge already set to add Frontegg SSO, create a test edge:

   - Click **+ New Edge**.
   - Click **Create HTTPS Edge**.
   - Click the **pencil icon** next to "no description", enter `Frontegg SSO SAML` as the edge name, and click **Save**.

1. On the edge settings menu, click **SAML**.

1. On the **SAML** page, click **Begin setup**, click **Upload XML**, and then open the XML metadata file you downloaded from Frontegg (See [Download the IdP metadata](#idp-metadata)).
   ![Frontegg config in ngrok](img/frontegg-5.png)

1. Click **Save** at the top.

1. Copy both the **Entity ID** and the **ACS URL** values for later use.

### **Step 3**: Configure Frontegg {#configure-frontegg}

1. In the same terminal window in which you ran the previous commands, run the following command to create a SAML configuration related to your ngrok SAML edge:

   ```bash
   curl --location --request POST 'https://api.frontegg.com/oauth/resources/configurations/saml/v1/URL-ENCODED-NGROK-ENTITY-ID' \
   --header 'frontegg-vendor-host: YOUR_FRONTEGG_HOST_URL' \
   --header 'Authorization: Bearer TOKEN' \
   --header 'Content-Type: application/json' \
   --data-raw '{
      "acsUrl": "NGROK_ACS_URL",
      "entityId": "NGROK_ENTITY_ID_URL"
   }'
   ```

   **Note**: Replace the following with the values copied on previous steps:

   - URL_ENCODED_NGROK_ENTITY_ID: URL-Encoded value of the ngrok **Entity ID\*** copied from the edge SAML configuration.
   - YOUR_FRONTEGG_HOST_URL: The value of the **Domain name** from the **Env settings** > **Domains** tab.
   - TOKEN: The Frontegg token you copied before.
   - NGROK_ACS_URL: The value of the ngrok **Entity ID** copied from the edge SAML configuration.
   - NGROK_ENTITY_ID_URL: The value of the ngrok **ACS URL** copied from the edge SAML configuration.

### **Step 4**: Update Frontegg Login Method {#frontegg-login}

1. Access the [Frontegg Portal](https://portal.Frontegg.com/) and sign in using your Frontegg administrator account.

1. On the left menu, click your environment under **Environments**, click **Authentication**, and then click **Login method**.

1. On the **Select your login method** page, make sure **Hosted login** is selected, and click **Add new** twice.

1. In the first empty field, enter the endpoint URL from your ngrok edge (i.e., `https://123456789.ngrok.app/`). In the second field, enter the **ACS URL** from your Edge SAML configuration.
   ![Frontegg config in ngrok](img/frontegg-6.png)

1. Click **Save**.

### **Step 5**: Start a Tunnel {#start-tunnel}

1. Access the [ngrok edges page](https://dashboard.ngrok.com/cloud-edge/edges), click your edge, and then click **Start a tunnel**.

:::tip Note
For this step, we assume you have an app running locally (i.e. on localhost:3000) with the ngrok client installed.
:::

1. Click the **copy icon** next to the tunnel command.
   ![tunnel config](img/frontegg-2.png)

1. Launch a tunnel:

   - Launch a terminal.
   - Paste the command but replace `http://localhost:80` with your localhost app address (i.e., `http://localhost:3000`).
   - Click **Enter** and an ngrok tunnel associated with your edge configuration will launch.

1. To confirm that the tunnel is connected to your edge:

   - Return to the ngrok dashboard
   - Close the **Start a tunnel** and the **Tunnel group** tabs
   - Refresh the test edge page. Under traffic, You will see the message _You have 1 tunnel online. Start additional tunnels to begin load balancing._
     ![tunnel confirmed](img/frontegg-3.png)

1. In the test edge, copy the **endpoint URL**. (you use this URL to test the Frontegg Authentication)
   ![tunnel url](img/frontegg-7.png)

## Grant access to Frontegg users

Create a Frontegg user:

1. On the left menu of the [Frontegg Portal](https://portal.frontegg.com/), click your environment, click **Backoffice**, click **Accounts**, and then click **Add New**.

1. On the **Add new account** popup, enter a name for the account, `ngrok.com` in the **Domain** field, and then click **Save**.

1. On the left menu, click **Backoffice**, click **Users**, and then click **Add New**.

1. On the **Add new user** popup, enter a name and email, select the account you have created, and then click **Save**.
   **Note**: by default value to assign the **Admin** role to the user

## Test the integration {#test-sso}

1. In your browser, launch an incognito window.

1. Access your ngrok tunnel (i.e., `https://frontegg-sso-test.ngrok.app`. Use the copied endpoint URL).

1. You should be prompted to log in with your Frontegg credentials.

1. After logging in, you should be able to see your web app.
