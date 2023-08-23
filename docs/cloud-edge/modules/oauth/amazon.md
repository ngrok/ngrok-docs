# Amazon

---

## Configure Login with Amazon

The step-by-step instructions below follow Amazon's documentation on [Register for Login with Amazon](https://developer.amazon.com/docs/login-with-amazon/register-web.html) for websites.

### Create a Security Profile for ngrok

1.  Navigate to the [Login with Amazon](https://developer.amazon.com/loginwithamazon/console/site/lwa/overview.html) portal, and sign in with your Amazon Developer credentials.

    **Note**: If you don't have a developer account, you'll need to sign up for a new one.

2.  Click **Create a New Security Profile**, provide a **Name** and a **Description** for your security profile, enter the privacy URL provided by your application (i.e. `https://ngrok.com/privacy`) in the **Consent Privacy Notice URL**, and then click **Save**.
    [![](/img/howto/oauth/1-amazon-register.png)](/img/howto/oauth/1-amazon-register.png)

3.  Click **Show Client ID and Client Secret** to reveal your **Client ID** and **Client Secret** values and make a note of both of them.

4.  Hover over the gear icon of the **Security Profile** you created and then click **Web Settings**.

5.  On the **Security Profile** page, click **Edit**, enter `https://idp.ngrok.com/oauth2/callback` in the **Allowed Return URLs** field, and then click **Save**.
    [![](/img/howto/oauth/2-amazon-register.png)](/img/howto/oauth/2-amazon-register.png)

### Update your ngrok edge configuration

1.  Access the [ngrok Dashboard](https://dashboard.ngrok.com/), sign in, create or edit an edge, and click **OAuth** to enable the OAuth configuration.
2.  Select **Amazon** in the **Identity Provider** selector and then enter the **Client ID** and **Client Secret** values you copied previously in the corresponding fields.
3.  Click **Save**.

### Additional application setup information

- [Login with Amazon Documentation](https://developer.amazon.com/docs/login-with-amazon/documentation-overview.html)
- [Login with Amazon for Websites Overview](https://developer.amazon.com/docs/login-with-amazon/web-docs.html)
