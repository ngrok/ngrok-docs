---
description: Develop and test Modern Treasury webhooks from localhost
---

# Modern Treasury Webhooks

---

:::tip TL;DR

To integrate Modern Treasury webhooks with ngrok:

1. [Launch your local webhook.](#start-your-app) `npm start`
1. [Launch ngrok.](#start-ngrok) `ngrok http 3000`
1. [Configure Modern Treasury webhooks with your ngrok URL.](#setup-webhook)
1. [Secure your webhook requests with verification.](#security)

:::

This guide covers how to use ngrok to integrate your localhost app with Modern Treasury by using Webhooks.
Modern Treasury webhooks can be used to notify an external application whenever specific events occur in your Modern Treasury account.

By integrating ngrok with Modern Treasury, you can:

- **Develop and test Modern Treasury webhooks locally**, eliminating the time in deploying your development code to a public environment and setting it up in HTTPS.
- **Inspect and troubleshoot requests from Modern Treasury** in real-time via the inspection UI and API.
- **Modify and Replay Modern Treasury Webhook requests** with a single click and without spending time reproducing events manually in your Modern Treasury account.
- **Secure your app with Modern Treasury validation provided by ngrok**. Invalid requests are blocked by ngrok before reaching your app.

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

1. ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with Modern Treasury).
   ![ngrok agent running](/img/integrations/launch_ngrok_tunnel.png)

## **Step 3**: Integrate Modern Treasury {#setup-webhook}

To register a webhook on your Modern Treasury account follow the instructions below:

1. Access the [Modern Treasury site](https://app.moderntreasury.com/) and sign in using your Modern Treasury account.

1. On the left menu, click **View Sandbox** to switch to Sandbox mode.
   **Note**: The Sandbox view provides you with example accounts that allow you to test Modern Treasury functions. If you have an active Modern Treasury account you can follow these steps without switching to Sandbox mode.

1. On the left menu, click **Developers**, click the **Webhooks** tab, and then click **Create New Webhook Endpoint**.

1. On the **New webhook** page, enter the URL provided by the ngrok agent to expose your application to the internet in the **Webhook URL** field (i.e. `https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io`).
   ![Webhook URL](img/ngrok_url_configuration_moderntreasury.png)

1. Make sure **Receive all events** is selected as the **Events to send** option and then click **Save**.

### Run Webhooks with Modern Treasury and ngrok

Modern Treasury sends different request body contents depending on the event that is being triggered.
You can trigger new calls from Modern Treasury to your application by following the instructions below.

1. Access the [Modern Treasury site](https://app.moderntreasury.com/) and sign in using your Modern Treasury account.

1. On the left menu, click **View Sandbox** to switch to Sandbox.
   **Note**: The Sandbox view provides you with example accounts that allow you to test Modern Treasury functions. If you have an active Modern Treasury account you can follow these steps without switching to Sandbox view.

1. On the left menu, click **Payments** and then click **Payments Overview**.

1. On the **Payments Overview** page, click **Create New** and then click **Payment Order**.

1. On the **Create Payment Order** page, click **Pay**, select one of the revenue accounts in the **From** field, select one of the counterparties accounts in the **To** field, select **ACH** as the **Payment Method**, enter **$10.00** as the **Amount**, and then click **Create Payment Order**.

   Confirm your localhost app receives event notifications every time the payment gets updated and logs both headers and body in the terminal.

Optionally, you can verify the log of the webhook call in Modern Treasury:

1. On the left menu, click **Developers**, click the **Events** tab, and then click the corresponding event received by the localhost application.
   ![Events](img/ngrok_logs_moderntreasury.png)

### Inspecting requests

When you launch the ngrok agent on your local machine, you can see two links:

- The URL to your app (it ends with `ngrok-free.app` for free accounts or `ngrok.app` for paid accounts when not using custom domains)
- A local URL for the Web Interface (a.k.a **Request Inspector**).

The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response.

Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect.

To inspect Modern Treasury's webhooks call, launch the ngrok web interface (i.e. `http://127.0.0.1:4040`), and then click one of the requests sent by Modern Treasury.

From the results, review the response body, header, and other details:

![ngrok Request Inspector](img/ngrok_introspection_moderntreasury_webhooks.png)

### Replaying requests

The ngrok Request Inspector provides a replay function that you can use to test your code without the need to trigger new events from Modern Treasury. To replay a request:

1. In the ngrok inspection interface (i.e. `http://localhost:4040`), select a request from Modern Treasury.

1. Click **Replay** to execute the same request to your application or select **Replay with modifications** to modify the content of the original request before sending the request.

1. If you choose to **Replay with modifications**, you can modify any content from the original request. For example, you can modify the **amount** field inside the body of the request.

1. Click **Replay**.

Verify that your local application receives the request and logs the corresponding information to the terminal.

## Secure webhook requests {#security}

The ngrok signature webhook verification feature allows ngrok to assert that requests from your Modern Treasury webhook are the only traffic allowed to make calls to your localhost app.

**Note:** This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise.

This is a quick step to add extra protection to your application.

1. Access the [Modern Treasury site](https://app.moderntreasury.com/) and sign in using your Modern Treasury account.

1. On the left menu, click **View Sandbox** to switch to Sandbox mode.
   **Note**: The Sandbox view provides you with example accounts that allow you to test Modern Treasury functions. If you have an active Modern Treasury account you can follow these steps without switching to Sandbox mode.

1. On the left menu, click **Developers**, click the **Webhooks** tab, and then click the URL of your webhook.

1. On your webhook page, copy the value of the **Webhook Key** field.

1. Restart your ngrok agent by running the command, replacing `{your webhook key}` with the value you have copied before (See [Integrate ngrok and Modern Treasury.](#setup-webhook)):

   ```bash
   ngrok http 3000 --verify-webhook MODERN_TREASURY --verify-webhook-secret {your webhook key}
   ```

1. Access the [Modern Treasury site](https://app.moderntreasury.com/) and create a new payment order.

Verify that your local application receives the request and logs information to the terminal.
