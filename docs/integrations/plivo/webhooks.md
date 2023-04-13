# Plivo Webhooks
------------

:::tip TL;DR

To integrate Plivo webhooks with ngrok:
1. [Launch your local webhook.](#start-your-app) `npm start`
1. [Launch ngrok.](#start-ngrok) `ngrok http 3000`
1. [Configure Plivo webhooks with your ngrok URL.](#setup-webhook)
1. **Bonus!** [Use ngrok like a PRO.](#security)

:::


This guide covers how to use ngrok to integrate your localhost app with Plivo by using Webhooks.
Plivo webhooks can be used to notify an external application whenever specific events occur in your Plivo account. 

By integrating ngrok with Plivo, you can:

- **Develop and test Plivo webhooks locally**, eliminating the time in deploying your development code to a public environment and setting it up in HTTPS.
- **Inspect and troubleshoot requests from Plivo** in real-time via the inspection UI and API.
- **Modify and Replay Plivo Webhook requests** with a single click and without spending time reproducing events manually in your Plivo account.
- **Secure your app with Plivo validation provided by ngrok**. Invalid requests are blocked by ngrok before reaching your app.


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

1. ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with Plivo).
    ![ngrok agent running](/img/integrations/launch_ngrok_tunnel.png)


## **Step 3**: Integrate Plivo {#setup-webhook}

To register a webhook on your Plivo account follow the instructions below:

1. Access [Plivo Console](https://console.plivo.com/) and sign in using your Plivo account.

1. On the **Overview** page, click **Messaging** at the left menu, and then click **PHLO** under **Applications**.

1. On the **Your PHLOs** page, click **Create New PHLO** and then click **Build My Own** on the **Choose your use case** popup.

1. On the PHLO page, click the **pencil icon** next to `untitled PHLO` at the top left, replace the text with `Webhook PHLO`, and then click **Save**.

1. Drag the function **HTTP Request** to the right side of the screen, select **POST** instead of **GET** as the HTTP Method, and enter the URL provided by the ngrok agent to expose your application to the internet in the field next to **POST** (i.e. `https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io`).
    ![Plivo URL to Publish](img/ngrok_url_configuration_plivo.png)

1. Click **VALIDATE**.

1. On the PHLO page, drag a line from the **API Request** of the **Start** tile to the HTTP Request component you created, and then click **Save**.


### Run Webhooks with Plivo and ngrok

Plivo sends different request body contents depending on the event that is being triggered.
You can trigger new calls from Plivo to your application by following the instructions below.

1. Access [Plivo Console](https://console.plivo.com/) and sign in using your Plivo account.

1. On the **Overview** page, copy the value of both the **Auth ID** and **Auth Token** fields.

1. On the left menu, click **PHLO** and then copy the **PHLO URL** of your PHLO.

1. Open a terminal window and run the following command:
    ```bash
    curl  --request POST '<YOUR_PHLO_URL>' \
    --header 'Authorization: Basic <AUTH_ID>:<AUTH_TOKEN>' \
    --header 'Content-Type: application/json' \
    --data 'My message'
    ```

    Confirm your localhost app receives a notification and logs both headers and body in the terminal.


### Inspecting requests

When you launch the ngrok agent on your local machine, you can see two links: one for the tunnel to your app (it ends up in `ngrok.io` unless you're using custom domains) and a local URL for the Web Interface (a.k.a **Request Inspector**).

The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response.

Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect.

To inspect Plivo's webhooks call, launch the ngrok web interface (i.e. `http://127.0.0.1:4040`), and then click one of the requests sent by Plivo.

From the results, review the response body, header, and other details:

![ngrok Request Inspector](img/ngrok_introspection_plivo_webhooks.png)


### Replaying requests

The ngrok Request Inspector provides a replay function that you can use to test your code without the need to trigger new events from Plivo. To replay a request:

1. In the ngrok inspection interface (i.e. `http://localhost:4040`), select a request from Plivo.

1. Click **Replay** to execute the same request to your application or select **Replay with modifications** to modify the content of the original request before sending the request.

1. If you choose to **Replay with modifications**, you can modify any content from the original request. For example, you can modify the **id** field inside the body of the request.

1. Click **Replay**.

Verify that your local application receives the request and logs the corresponding information to the terminal.


## **Bonus**: Secure webhook requests {#security}

The ngrok signature webhook verification feature allows ngrok to assert that requests from your Plivo webhook are the only traffic allowed to make calls to your localhost app.

**Note:** This ngrok feature requires a Pro or Enterprise license.

This is a quick step to add extra protection to your application.

1. Access [Plivo Console](https://console.plivo.com/) and sign in using your Plivo account.

1. On the **Overview** page, click the eye icon next to **Auth Token** and then copy the value that appears.

1. Restart your ngrok agent by running the command, replacing `{your auth token}` with the value you copied before:
    ```bash
    ngrok http 3000 --verify-webhook plivo --verify-webhook-secret {your auth token}
    ```

1. Run a call to your PHLO.

Verify that your local application receives the request and logs information to the terminal.
