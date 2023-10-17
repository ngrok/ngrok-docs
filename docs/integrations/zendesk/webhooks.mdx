---
description: Develop and test Zendesk webhooks from localhost
---

# Zendesk Webhooks

---

:::tip TL;DR

To integrate Zendesk webhooks with ngrok:

1. [Launch your local webhook.](#start-your-app) `npm start`
1. [Launch ngrok.](#start-ngrok) `ngrok http 3000`
1. [Configure Zendesk webhooks with your ngrok URL.](#setup-webhook)
1. [Secure your webhook requests with verification.](#security)

:::

This guide covers how to use ngrok to integrate your localhost app with Zendesk by using Webhooks.
Zendesk webhooks can be used to notify an external application whenever specific events occur in your Zendesk account.

By integrating ngrok with Zendesk, you can:

- **Develop and test Zendesk webhooks locally**, eliminating the time in deploying your development code to a public environment and setting it up in HTTPS.
- **Inspect and troubleshoot requests from Zendesk** in real-time via the inspection UI and API.
- **Modify and Replay Zendesk Webhook requests** with a single click and without spending time reproducing events manually in your Zendesk account.
- **Secure your app with Zendesk validation provided by ngrok**. Invalid requests are blocked by ngrok before reaching your app.

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

1. ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with Zendesk).
   ![ngrok agent running](/img/integrations/launch_ngrok_tunnel.png)

## **Step 3**: Integrate Zendesk {#setup-webhook}

To register a webhook on your Zendesk account follow the instructions below:

1. Access [Zendesk](https://www.zendesk.com), and sign in using your Zendesk account.

1. On the left menu, click the gear icon named **Admin** and then click **Go to Admin Center**.

1. On the **Admin Center** page, click **Apps and integrations** on the left menu, and then click **Webhooks**.

1. On the **Get started with webhooks** page, click **Create Webhooks**.

1. In the **Create webhook** page, provide your webhook with a **Name** and in the **Endpoint URL** field enter the URL provided by the ngrok agent to expose your application to the internet (i.e. `https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io`).
   ![Your endpoint URL](img/ngrok_url_configuration_zendesk.png)

1. On the same page, select **POST** for the **Request method** field and select **JSON** for the **Request format** field.
   **Tip**: For your production webhooks, it's recommended to implement your application with either **Basic Authentication** or **Bearer token** authentication method. For this tutorial, leave the **Authentication** field selected as **None** as the sample application doesn't require any sort of authentication.

1. Click **Test webhook** and then click **Send test**.

1. Confirm your localhost app receives the test event notification and logs both headers and body to the terminal, then click **Create** on the **Create webhook** page.

1. On the left menu, click **Objects and rules** and then click **Automations** under the **Business rules** section.

1. On the **Automations** page, click **Add automation** and configure the title, conditions, and actions as per the following image.
   ![Automation Rule](img/automation_rule_configuration_zendesk.png)

1. In the **Perform these actions**, enter a message like the following for the **JSON body**:
   `{"message":"{{ticket.requester.name}} we are setting your ticket {{ticket.title}} to urgent priority."}`

   In this automation example, a high-priority incident ticket will be set to urgent priority and Zendesk will call your sample application to communicate about this action.

1. Click **Create automation**.

### Run Webhooks with Zendesk and ngrok <a id="run-webhook"></a>

As per the previous configuration, you've selected to trigger your webhook anytime a high-priority incident ticket is created.
Zendesk sends different request body contents depending on the automation rules you create.
Follow the instructions below to test your webhook with a new ticket.

1. On the same browser, access [Zendesk](https://www.zendesk.com) and sign in using your Zendesk account.

1. On the top left corner of the home page, mouse over **+ Add**, and then click **Ticket** under the **New** section.

1. In the **New ticket** page, select a user for the **Requester** field, select **Incident** for the **Type** field, select **High** for the **Priority** field, enter a subject, and then click **Submit as New**.

   Zendesk evaluates automation rules every hour. You may need to wait about an hour until Zendesk makes the call to the webhook and your application receives the message about your ticket.

1. Optionally, on the **Admin Center** page, access the **Webhooks** link on the left menu, click your webhook, click the **Activity** tab, and then click the last log that appears on the page.
   ![Zendesk Webhook logs](img/zendesk_webhook_logs.png)

   Confirm the post request sent by Zendesk is the same as the request received by the localhost application.

### Inspecting requests

When you launch the ngrok agent on your local machine, you can see two links:

- The URL to your app (it ends with `ngrok-free.app` for free accounts or `ngrok.app` for paid accounts when not using custom domains)
- A local URL for the Web Interface (a.k.a **Request Inspector**).

The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response.

Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect.

To inspect Zendesk's webhooks call, launch the ngrok web interface (i.e. `http://127.0.0.1:4040`), and then click one of the requests sent by Zendesk.

From the results, review the response body, header, and other details:

![ngrok Request Inspector](img/ngrok_introspection_zendesk_hooks.png)

### Replaying requests

The ngrok Request Inspector provides a replay function that you can use to test your code without the need to trigger new events from Zendesk. To replay a request:

1. In the ngrok inspection interface (i.e. `http://localhost:4040`), select a request from Zendesk.

1. Click **Replay** to execute the same request to your application or select **Replay with modifications** to modify the content of the original request before sending the request.

1. If you choose to **Replay with modifications**, you can modify any content from the original request. For example, you can modify the **BODY** field and provide a different JSON message.

1. Click **Replay**.

   Verify that your local application receives the request and logs the corresponding information to the terminal.

## Secure webhook requests {#security}

The ngrok signature webhook verification feature allows ngrok to assert that requests from your Zendesk webhook are the only traffic allowed to make calls to your localhost app.

**Note:** This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise.

This is a quick step to add extra protection to your application.

1. Access [Zendesk](https://www.zendesk.com), and sign in using your Zendesk account.

1. On the left menu, click the gear icon named **Admin** and then click **Go to Admin Center**.

1. On the **Admin Center** page, click **Apps and integrations** on the left menu, and then click **Webhooks**.

1. On the **Webhooks** page, click your webhook.

1. In your webhook page, click **Reveal secret** and click **Copy** to copy the **Secret key** value.

1. Restart your ngrok agent by running the command, replacing `{your secret key}` with the value you copied before:

   ```bash
   ngrok http 3000 --verify-webhook zendesk --verify-webhook-secret {your secret key}
   ```

1. Execute the procedures in the [Run Webhooks with Zendesk and ngrok](#run-webhook) section to create a new ticket.

   Verify that your local application receives the request and logs information to the terminal.
