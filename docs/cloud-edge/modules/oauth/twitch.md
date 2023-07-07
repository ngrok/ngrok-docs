# Twitch
-------------

## Creating a custom Twitch OAuth application

The step-by-step instructions below follow Twitch's documentation on [Use OAuth 2.0](https://dev.twitch.tv/docs/authentication/) for authentication.


### Create credentials for ngrok

1.  Navigate to the [Twitch developer console](https://dev.twitch.tv/console), sign in, click **Applications** on the left menu and then click **Register Your Application**.

2. On the **Register Your Application** page, provide a **Name** for your application, enter `https://idp.ngrok.com/oauth2/callback` in the **OAuth Redirect URLs** field, select **Website Integration** in the **Category** selector, and then click **Create**.

    **Note**: Make sure you have two factor authentication enabled for you Twitch account.

3. On the **Developer Applications** page, click **Manage** for your application.

4. On the application page, click **New Secret**, and make note of the **Client ID** and **Client Secret** values.
[![](/img/howto/oauth/1-twitch-register.png)](/img/howto/oauth/1-twitch-register.png)


### Update your endpoint configuration

1.  Return to the ngrok dashboard and create or edit an OAuth endpoint configuration module for your edge.
2.  Choose to use your own application with Google as the provider.
3.  Include the client ID, secret, and scopes configured in your application.
4.  Add the following scopes to your application if they are not already present:
    *   `https://www.googleapis.com/auth/userinfo.profile`
    *   `https://www.googleapis.com/auth/userinfo.email`

### Additional application setup information

*   [Google OAuth 2.0 Web Server](https://developers.google.com/identity/protocols/oauth2/web-server) (prerequisite steps)
*   [GCP Help: Setting up OAuth 2.0](https://support.google.com/cloud/answer/6158849?hl=en)
*   [Google OAuth 2.0 workflow](https://developers.google.com/identity/protocols/oauth2)
