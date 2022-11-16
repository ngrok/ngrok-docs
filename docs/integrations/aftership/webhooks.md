# Aftership Webhooks
------------

:::tip TL;DR

To integrate Aftership webhooks with ngrok:
1. [Launch your local webhook.](#start-your-app) `npm start`
1. [Launch ngrok.](#start-ngrok) `ngrok http 3000`
1. [Configure Aftership webhooks with your ngrok URL.](#setup-webhook)
1. **Bonus!** [Use ngrok like a PRO.](#security)

:::


This guide covers how to use ngrok to integrate your localhost app with Aftership by using Webhooks.
Aftership webhooks can be used to notify an external application whenever specific events occur in your Aftership account. 

By integrating ngrok with Aftership, you can:

- **Develop and test Aftership webhooks locally**, eliminating the time in deploying your development code to a public environment and setting it up in HTTPS.
- **Inspect and troubleshoot requests from Aftership** in real-time via the inspection UI and API.
- **Modify and Replay Aftership Webhook requests** with a single click and without spending time reproducing events manually in your Aftership account.
- **Secure your app with Aftership validation provided by ngrok**. Invalid requests are blocked by ngrok before reaching your app.


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

1. ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with Aftership).
    ![ngrok agent running](/img/integrations/launch_ngrok_tunnel.png)


## **Step 3**: Integrate  Aftership {#setup-webhook}

To register a webhook on your Aftership account follow the instructions below:

1. Access [Aftership](https://www.aftership.com/) and sign in using your Aftership account.

1. On the left menu, click **Notifications** and then click **Webhooks**.

1. On the **Webhooks** page, click **Add webhook URL**.

1. On the **Add webhook URL** popup, enter the URL provided by the ngrok agent to expose your application to the internet in the **Webhook URL** field (i.e. `https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io`).
    ![aftership URL to Publish](img/ngrok_url_configuration_aftership.png)

1. Click **Save**.

    Confirm your localhost app receives a notification and logs both headers and body in the terminal.


### Run Webhooks with Aftership and ngrok

Aftership sends different request body contents depending on the status of the shipments created in your account.
You can trigger new calls from Aftership to your application by following the instructions below.

1. On the [Aftership console](https://admin.aftership.com/), click **Shipments** on the left menu and then click **Add shipment**.

1. On the **Add new shipment** page, enter a tracking number in the **Tracking no.** field and then click **Save shipment**. Optionally, you can fill all fields in this page.

    Confirm your localhost app receives a event notification and logs both headers and body in the terminal.


### Inspecting requests

When you launch the ngrok agent on your local machine, you can see two links: one for the tunnel to your app (it ends up in `ngrok.io` unless you're using custom domains) and a local URL for the Web Interface (a.k.a **Request Inspector**).

The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response.

Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect.

To inspect Aftership's webhooks call, launch the ngrok web interface (i.e. `http://127.0.0.1:4040`), and then click one of the requests sent by Aftership.

From the results, review the response body, header, and other details:

![ngrok Request Inspector](img/ngrok_introspection_aftership_webhooks.png)


### Replaying requests

The ngrok Request Inspector provides a replay function that you can use to test your code without the need to trigger new events from Aftership. To replay a request:

1. In the ngrok inspection interface (i.e. `http://localhost:4040`), select a request from Aftership.

1. Click **Replay** to execute the same request to your application or select **Replay with modifications** to modify the content of the original request before sending the request.

1. If you choose to **Replay with modifications**, you can modify any content from the original request. For example, you can modify the **tracking_number** field inside the body of the request.

1. Click **Replay**.

Verify that your local application receives the request and logs the corresponding information to the terminal.


## **Bonus**: Secure webhook requests {#security}

The ngrok signature webhook verification feature allows ngrok to assert that requests from your Aftership webhook are the only traffic allowed to make calls to your localhost app.

**Note:** This ngrok feature requires a Pro or Enterprise license.

This is a quick step to add extra protection to your application.

1. Access [Aftership](https://www.aftership.com/) and sign in using your Aftership account.

1. On the left menu, click **Notifications** and then click **Webhooks**.

1. On the **Webhooks** page, copy the value of the **Webhook secret**.

1. Restart your ngrok agent by running the command, replacing `{your webhook secret}` with the value you have copied before (See [Integrate ngrok and Aftership.](#setup-webhook)):
    ```bash
    ngrok http 3000 --verify-webhook aftership --verify-webhook-secret {your webhook secret}
    ```

1. Access [Aftership](https://www.aftership.com/) and create a new shipment.

Verify that your local application receives the request and logs information to the terminal.
