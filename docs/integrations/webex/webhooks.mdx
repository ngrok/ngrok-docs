---
description: Develop and test Webex webhooks from localhost
---

# Cisco Webex Webhooks

---

:::tip TL;DR

To integrate Cisco Webex webhooks with ngrok:

1. [Launch your local webhook.](#start-your-app) `npm start`
1. [Launch ngrok.](#start-ngrok) `ngrok http 3000`
1. [Configure Cisco Webex webhooks with your ngrok URL.](#setup-webhook)
1. [Secure your webhook requests with verification.](#security)

:::

This guide covers how to use ngrok to integrate your localhost app with Cisco Webex by using Webhooks.
Cisco Webex webhooks can be used to notify an external application whenever specific events occur in your Cisco Webex account.

By integrating ngrok with Cisco Webex, you can:

- **Develop and test Cisco Webex webhooks locally**, eliminating the time in deploying your development code to a public environment and setting it up in HTTPS.
- **Inspect and troubleshoot requests from Cisco Webex** in real-time via the inspection UI and API.
- **Modify and Replay Cisco Webex Webhook requests** with a single click and without spending time reproducing events manually in your Cisco Webex account.
- **Secure your app with Cisco Webex validation provided by ngrok**. Invalid requests are blocked by ngrok before reaching your app.

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

1. ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with Cisco Webex).
   ![ngrok agent running](/img/integrations/launch_ngrok_tunnel.png)

## **Step 3**: Integrate Cisco Webex {#setup-webhook}

To register a webhook on your Cisco Webex account follow the instructions below:

1. Access [Cisco Webex Developer Portal](https://developer.webex.com/), sign in using your Cisco Webex account, and then open the (Personal Access Token documentation)[https://developer.webex.com/docs/getting-started#accounts-and-authentication] in the same browser tab.

1. Click the copy icon in the **Your Personal Access Token** field.

1. Open a terminal window and run the following command to register your webhook:

   ```bash
   curl --location 'https://webexapis.com/v1/webhooks' \
   --header 'Authorization: Bearer TOKEN' \
   --header 'Content-Type: application/json' --data '{
   "name": "localhost app via ngrok webhook", \
   "targetUrl": "URL", \
   "resource": "meetings", \
   "event": "started",
   "secret":"SECRET_KEY"
   }'
   ```

   **Note**: Replace the following with values copied on previous steps:

   - TOKEN: **Your Personal Access Token**.
   - URL: the URL provided by the ngrok agent to expose your application to the internet (i.e. `https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io`).
   - SECRET_KEY: A value to sign each request sent to your application.

   ![URL to Publish](img/ngrok_url_configuration_webex.png)

### Run Webhooks with Cisco Webex and ngrok

In the previous section, you registered a webhook to trigger calls to your application whenever you create a meeting.
You can trigger new calls from Cisco Webex to your application by following the instructions below.

1. Access [Cisco Webex](https://www.webex.com), sign in, and then click **Start a meeting**.

   Confirm your localhost app receives the create-project event notification and logs both headers and body in the terminal.

### Inspecting requests

When you launch the ngrok agent on your local machine, you can see two links:

- The URL to your app (it ends with `ngrok-free.app` for free accounts or `ngrok.app` for paid accounts when not using custom domains)
- A local URL for the Web Interface (a.k.a **Request Inspector**).

The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response.

Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect.

To inspect Cisco Webex's webhooks call, launch the ngrok web interface (i.e. `http://127.0.0.1:4040`), and then click one of the requests sent by Cisco Webex.

From the results, review the response body, header, and other details:

![ngrok Request Inspector](img/ngrok_introspection_webex_webhooks.png)

### Replaying requests

The ngrok Request Inspector provides a replay function that you can use to test your code without the need to trigger new events from Cisco Webex. To replay a request:

1. In the ngrok inspection interface (i.e. `http://localhost:4040`), select a request from Cisco Webex.

1. Click **Replay** to execute the same request to your application or select **Replay with modifications** to modify the content of the original request before sending the request.

1. If you choose to **Replay with modifications**, you can modify any content from the original request. For example, you can modify the **id** field inside the body of the request.

1. Click **Replay**.

Verify that your local application receives the request and logs the corresponding information to the terminal.

## Secure webhook requests {#security}

The ngrok signature webhook verification feature allows ngrok to assert that requests from your Cisco Webex webhook are the only traffic allowed to make calls to your localhost app.

**Note:** This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise.

This is a quick step to add extra protection to your application.

1. Restart your ngrok agent by running the command, replacing `{your webhook secret}` the **SECRET_KEY** value you provided during the webhook registration (See [Integrate ngrok and Cisco Webex.](#setup-webhook)):

   ```bash
   ngrok http 3000 --verify-webhook webex --verify-webhook-secret {your webhook secret}
   ```

1. Access [Cisco Webex](https://www.webex.com), sign in, and then click **Start a meeting**.

Verify that your local application receives the request and logs information to the terminal.
