---
description: Develop and test Orbit webhooks from localhost
---

# Orbit Webhooks

---

:::tip TL;DR

To integrate Orbit webhooks with ngrok:

1. [Launch your local webhook.](#start-your-app) `npm start`
1. [Launch ngrok.](#start-ngrok) `ngrok http 3000`
1. [Configure Orbit webhooks with your ngrok URL.](#setup-webhook)
1. [Secure your webhook requests with verification.](#security)

:::

This guide covers how to use ngrok to integrate your localhost app with Orbit by using Webhooks.
Orbit webhooks can be used to notify an external application whenever specific events occur in your Orbit account.

By integrating ngrok with Orbit, you can:

- **Develop and test Orbit webhooks locally**, eliminating the time in deploying your development code to a public environment and setting it up in HTTPS.
- **Inspect and troubleshoot requests from Orbit** in real-time via the inspection UI and API.
- **Modify and Replay Orbit Webhook requests** with a single click and without spending time reproducing events manually in your Orbit account.
- **Secure your app with Orbit validation provided by ngrok**. Invalid requests are blocked by ngrok before reaching your app.

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

1. ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with Orbit).
   ![ngrok agent running](/img/integrations/launch_ngrok_tunnel.png)

## **Step 3**: Integrate Orbit {#setup-webhook}

To register a webhook on your Orbit account follow the instructions below:

1. Access the [Orbit Home](https://app.orbit.love/) page and sign in using your Orbit account.

1. On the **Home** page, click **Workspace Settings** at the left menu and then click **Webhooks**.

1. On the **Webhooks** page, click **+ New Webhook**.

1. On the **New webhook** page, enter a name in the **Webhook Name** field, select **a new activity is added to a member** in the **Event Subscription** field, and then enter the URL provided by the ngrok agent to expose your application to the internet in the **Webhook URL** field (i.e. `https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io`).
   ![orbit URL to Publish](img/ngrok_url_configuration_orbit.png)

1. Click **Create Webhook**.

### Run Webhooks with Orbit and ngrok

Orbit sends different request body contents depending on the event that is being triggered.

You can trigger new calls from Orbit to your application by following the instructions below.

1. Access the [Orbit Home](https://app.orbit.love/) page, sign in, click **Members** at the left menu, and click one of your members.

1. On the **Member** popup, click **Actions** and then click **Add Activity**.

1. On the **Add activity** popup, select an activity in the **Activity Type** field, enter `Test` in the **Title** field, and then click **Submit**.

Confirm your localhost app receives an event notification and logs both headers and body in the terminal.

### Inspecting requests

When you launch the ngrok agent on your local machine, you can see two links:

- The URL to your app (it ends with `ngrok-free.app` for free accounts or `ngrok.app` for paid accounts when not using custom domains)
- A local URL for the Web Interface (a.k.a **Request Inspector**).

The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response.

Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect.

To inspect Orbit's webhooks call, launch the ngrok web interface (i.e. `http://127.0.0.1:4040`), and then click one of the requests sent by Orbit.

From the results, review the response body, header, and other details:

![ngrok Request Inspector](img/ngrok_introspection_orbit_webhooks.png)

### Replaying requests

The ngrok Request Inspector provides a replay function that you can use to test your code without the need to trigger new events from Orbit. To replay a request:

1. In the ngrok inspection interface (i.e. `http://localhost:4040`), select a request from Orbit.

1. Click **Replay** to execute the same request to your application or select **Replay with modifications** to modify the content of the original request before sending the request.

1. If you choose to **Replay with modifications**, you can modify any content from the original request. For example, you can modify the **id** field inside the body of the request.

1. Click **Replay**.

Verify that your local application receives the request and logs the corresponding information to the terminal.

## Secure webhook requests {#security}

The ngrok signature webhook verification feature allows ngrok to assert that requests from your Orbit webhook are the only traffic allowed to make calls to your localhost app.

**Note:** This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise.

This is a quick step to add extra protection to your application.

1. Access the [Orbit Home](https://app.orbit.love/) page, sign in, click **Workspace Settings** at the left menu, and then click **Webhooks**.

1. Click **Action** (represented by the three dots icon) for your webhook and click **Update**.

1. On the **Update Webhook** page, enter `12345` in the **Webhook Secret** field and click **Save Changes**.

1. Restart your ngrok agent by running the command, replacing `{your webhook secret}` with the value from the previous step:

   ```bash
   ngrok http 3000 --verify-webhook orbit --verify-webhook-secret {your webhook secret}
   ```

1. Access [Orbit Home](https://app.orbit.love/) page, sign in, and add a new activity to a member.

Verify that your local application receives the request and logs information to the terminal.
