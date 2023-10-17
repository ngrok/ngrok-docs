---
description: Develop and test HubSpot webhooks from localhost
---

# HubSpot Webhooks

---

:::tip TL;DR

To integrate HubsSpot webhooks with ngrok:

1. [Launch your local webhook.](#start-your-app) `npm start`
1. [Launch ngrok.](#start-ngrok) `ngrok http 3000`
1. [Configure HubSpot webhooks with your ngrok URL.](#setup-webhook)
1. [Secure your webhook requests with verification.](#security)

:::

This guide covers how to use ngrok to integrate your localhost app with HubSpot by using Webhooks.
HubSpot webhooks can be used to notify an external application whenever specific events occur in your HubSpot account.

By integrating ngrok with HubSpot, you can:

- **Develop and test HubSpot webhooks locally**, eliminating the time in deploying your development code to a public environment and setting it up in HTTPS.
- **Inspect and troubleshoot requests from HubSpot** in real-time via the inspection UI and API.
- **Modify and Replay HubSpot Webhook requests** with a single click and without spending time reproducing events manually in your HubSpot account.
- **Secure your app with HubSpot validation provided by ngrok**. Invalid requests are blocked by ngrok before reaching your app.

## **Step 1**: Start your app {#start-your-app}

For this tutorial, we'll use the [sample NodeJS app available on GitHub](https://github.com/ngrok/ngrok-webhook-nodejs-sample).

To install this sample, run the following commands in a terminal:

```bash
git clone https://github.com/ngrok/ngrok-webhook-nodejs-sample.git
cd ngrok-webhook-nodejs-sample
npm install
```

This will get the project installed locally.

Now you can launch the app by running the following command:

```bash
npm start
```

The app runs by default on port 3000.

You can validate that the app is up and running by visiting http://localhost:3000. The application logs request headers and body in the terminal and responds with a message in the browser.

## **Step 2**: Launch ngrok {#start-ngrok}

Once your app is running successfully on localhost, let's get it on the internet securely using ngrok!

1. If you're not an ngrok user yet, just [sign up for ngrok for free](https://ngrok.com/signup).

1. [Download the ngrok agent](https://ngrok.com/download).

1. Go to the [ngrok dashboard](https://dashboard.ngrok.com) and copy your Authtoken. <br />
   **Tip:** The ngrok agent uses the auth token to log into your account when you start a tunnel.
1. Start ngrok by running the following command:

   ```bash
   ngrok http 3000
   ```

1. ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with HubSpot).
   ![ngrok agent running](/img/integrations/launch_ngrok_tunnel.png)

## **Step 3**: Integrate HubSpot {#setup-webhook}

To trigger a webhook on a HubSpot account you can create an app in the [HubSpot Developers](https://developers.hubspot.com/) site and associate this app to your account or make use of automation workflows.

The following instructions explain how to configure an automation workflow on your HubSpot account.
**Note:** This automation workflow feature requires a HubSpot Pro or developer account.

1. Sign in to [HubSpot](https://app.hubspot.com/). If you have multiple HubSpot accounts click **open** for a pro account or an App test account.

1. On the dashboard page, click **Automation** on the top menu and then click **Workflows**.

1. On the **Workflows** page, click **Create workflow** and then click **From scratch**.

1. On the workflow page, enter `New Contacts` as the name of the workflow, select **Blank workflow**, and then click **Next**.

1. On the **New Contacts** workflow page, click **Set up triggers** to open the **Enrollment triggers** popup.

1. On the **Enrollment triggers** popup, select **Contact properties** as the **Filter type**, select **Contact owner** from the search list, select **is any of**, select your user from the list below, click **Apply filter**, and then click **Save**.

1. On the **New Contacts** workflow page, click **+** just after the **Contact enrollment** box to open the **Choose an action** popup.

1. On the **Choose an action** popup, click **Send a webhook**.

1. On the **Send a webhook** popup, select **POST** as the **Method**, and in the **Webhook URL** field enter the URL provided by the ngrok agent to expose your application to the internet (i.e., `https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io`).
   ![URL](img/ngrok_url_configuration_hubspot.png)

1. Select **None** as **Authentication type** and make sure **Include all contact properties** is selected.

1. Click **Test action**, search for a **Contact**, and then click **Test**.

   Confirm your localhost app receives the test event notification and logs both headers and body to the terminal.

1. Click **Review and publish** on the top right of the page.

1. On the **Review before you turn on** page, select **No** for the **Do you want to enroll them when this workflow turns on?** question, and then click **Turn on** on the top right of the page.

### Run Webhooks with HubSpot and ngrok

You can trigger new calls from HubSpot to your application by creating a contact on your HubSpot account.

1. Access your HubSpot account or, if you are on the workflow page, click **Back to Workflows** on the top left of the page.

1. On the top menu, click **Contacts** and then click **Contacts**.

1. On the **Contacts** page, click **Create contact** to open the **Create contact** popup.

1. On the **Create contact** popup, enter an **Email**, **First Name**, and **Last name** for your new contact.

1. Select your user as the **Contact owner**, and then click **Create**.
   **Tip**: This needs to be the same user you selected during your workflow trigger configuration.

After a few seconds, confirm your localhost app receives the contact-created event notification and logs both headers and body to the terminal.

### Inspecting requests

When you launch the ngrok agent on your local machine, you can see two links:

- The URL to your app (it ends with `ngrok-free.app` for free accounts or `ngrok.app` for paid accounts when not using custom domains)
- A local URL for the Web Interface (a.k.a **Request Inspector**).

The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response.

Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect.

To inspect HubSpot's webhooks call, launch the ngrok web interface (i.e. `http://127.0.0.1:4040`), and then click one of the requests sent by HubSpot.

From the results, review the response body, header, and other details:

![ngrok Request Inspector](img/ngrok_introspection_hubspot_webhooks.png)

### Replaying requests

The ngrok Request Inspector provides a replay function that you can use to test your code without the need to trigger new events from HubSpot. To replay a request:

1. In the ngrok inspection interface (i.e. `http://localhost:4040`), select a request from HubSpot.

1. Click **Replay** to execute the same request to your application or select **Replay with modifications** to modify the content of the original request before sending the request.

1. If you choose to **Replay with modifications**, you can modify any content from the original request. For example, you can modify the **summary** field inside the body of the request.

1. Click **Replay**.

Verify that your local application receives the request and logs the corresponding information to the terminal.

## Secure webhook requests {#security}

The ngrok signature webhook verification feature allows ngrok to assert that requests from your HubSpot webhook are the only traffic allowed to make calls to your localhost app.

**Note:** This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise.

This is a quick step to add extra protection to your application.

1. On the HubSpot dashboard page, click **Automation** on the top menu and then click **Workflows**.

1. In the **Workflows** list page, click the **New Contacts** workflow.

1. In the **New Contacts** workflow page, click **Actions** for the **Send a webhook** step and then click **Edit**.

1. In the **Send a webhook** popup, enter the ID of a custom app you created using your developer account, and then click **Save**.

1. On your developer account home page, click **Manage apps** and then click your app.

1. On your app page, click the **Auth** tab, click **Show** in the **Client secret** section, and then click **Copy**.

1. Restart your ngrok agent by running the command, replacing `{your client secret}` with the value you copied before:

   ```bash
   ngrok http 3000 --verify-webhook hubspot --verify-webhook-secret {your client secret}
   ```

1. Access your [HubSpot](https://hubspot.com) account and create a new contact (don't forget to Select your user as the **Contact owner**).

Verify that your local application receives the request and logs information to the terminal.
