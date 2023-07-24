# LinkedIn
-------------

## Creating a custom LinkedIn OAuth application

The step-by-step instructions below follow LinkedIn's documentation on [setting up OAuth 2.0](https://learn.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?tabs=HTTPS1#step-1-configure-your-application) for a web application.


### Create credentials for ngrok

1.  Navigate to the [LinkedIn Developer Portal](https://developer.linkedin.com/), sign in, click **My apps** on the top menu, and then click **Create app**.

2. Enter **App name**, select a **LinkedIn Page**, enter the **Privacy policy URL** in the corresponding fields, and then click **Create app**.

3. On the app page, click the **Auth** tab and make note of both the **Client ID** and **Client Secret** values.

4. Click the pencil icon for the **Authorized redirect URLs** in the **OAuth 2.0 settings** section, add the ngrok oauth callback URL (i.e. `https://idp.ngrok.com/oauth2/callback`), and then click **Update**.
[![](/img/howto/oauth/1-linkedin-register.png)](/img/howto/oauth/1-linkedin-register.png)

5. Click the **Products** tab, and then click **Request access** for **Sign In with LinkedIn using OpenID Connect**.
[![](/img/howto/oauth/2-linkedin-add-products.png)](/img/howto/oauth/2-linkedin-add-products.png)


### Update your endpoint configuration

1.  Access the [ngrok Dashboard](https://dashboard.ngrok.com/), sign in, create or edit an edge, and click **OAuth** to enable the OAuth configuration.

2.  Select **LinkedIn** in the **Identity Provider** selector, and select **Use my own OAuth application** in the **OAuth Application** field.

    **Note**: Alternatively, you can select **Use an ngrok-managed OAuth application**. If so, there is no need to create an application in the LinkedIn developer portal.

3.  Enter the **Client ID** and **Client Secret** values you copied previously in the corresponding fields and then click **Save** to save the edge configuration.

4. Access your application using the link provided by the **Endpoints** URL of your edge.


### Additional application setup information

*   [Authorization Code Flow](https://learn.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow)
