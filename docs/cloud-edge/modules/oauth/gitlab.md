# GitLab
-------------

## Configure GitLab as an OAuth 2.0 authentication identity provider

he step-by-step instructions below follow GitLab's documentation on [setting up OAuth 2.0](https://docs.gitlab.com/ee/integration/oauth_provider.html) for a web application.

### Create an Applications

1.  Access your [GitLab profile page](https://gitlab.com/-/profile) and select **Applications** on the left menu.

2. Provide a **Name** for your application and enter `https://idp.ngrok.com/oauth2/callback` in the **Redirect URI** field.
[![](/img/howto/oauth/1-gitlab-register.png)](/img/howto/oauth/1-gitlab-register.png)

3. In the **Scopes** section, mark the **openid**, **profile**, and **email** fields, and then click **Save application**.
[![](/img/howto/oauth/2-gitlab-scopes.png)](/img/howto/oauth/2-gitlab-scopes.png)


### Update your ngrok edge configuration

1. Access the [ngrok Dashboard](https://dashboard.ngrok.com/), sign in, create or edit an edge, and click **OAuth** to enable the OAuth configuration.

2. Select **GitLab** in the **Identity Provider** selector and then enter the **Client ID** and **Client Secret** values you copied previously in the corresponding fields.

3. Click **Save**.

### Additional application setup information

*   [Configure GitLab as an OAuth 2.0 authentication identity provider](https://docs.gitlab.com/ee/integration/oauth_provider.html)
*   [OAuth 2.0 identity provider API](https://docs.gitlab.com/ee/api/oauth2.html)
