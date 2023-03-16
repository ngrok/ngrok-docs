---
description: Develop and test Okta webhooks from localhost
---

# Okta Event Hooks
------------

:::tip TL;DR

To integrate Okta Event Hooks with ngrok:
1. [Download and launch ngrok](#start-ngrok) `ngrok http 3000`
1. [Configure Okta Event Hooks with your ngrok URL](#setup-webhook)
1. [Inspect and replay requests from Okta](#inspect-replay)

:::

This guide covers how to use ngrok to integrate your localhost app with Okta Event Hooks. By integrating ngrok with Okta Event Hooks, you can:

- **Develop and test Okta Event Hooks locally**, eliminating the time in deploying your development code to a public environment
- **Inspect and troubleshoot requests from Okta** in real-time via the inspection UI and API
- **Modify and Replay Okta Event Hook requests** with a single click and without spending time reproducing events manually in Okta


## **Step 1**: Download and Launch ngrok {#start-ngrok}

1. Launch your localhost app. Record the port where the app is running (i.e. for `http://localhost:3000`, the port is `3000`).

1. If you're not an ngrok user yet, just [sign up to ngrok for free](https://ngrok.com/signup).

1. [Download the ngrok agent](https://ngrok.com/download).

1. Go to the [ngrok dashboard](https://dashboard.ngrok.com) and copy your Authtoken. 
    **Tip:** The ngrok agent uses the authtoken to log into your account when you start a tunnel.

1. Start ngrok by running the command: `ngrok http <port>`, replacing port with your app running port (i.e. `3000`).

1. ngrok will display a url where your application is exposed to the internet (copy this URL for use with Okta).
    ![ngrok agent running](/img/integrations/launch_ngrok_tunnel.png)


## **Step 2**: Integrate Okta {#setup-webhook}

1. Sign in to your Okta tenant.
1. From the Admin Console, go to **Workflow** > **Event Hooks**.
1. Follow the UI instructions for creating or updating an existing event hook. In the **URL** field, enter the ngrok URL to your service with your localhost app path. (i.e. `https://2d20-142-126-163-77.ngrok.io/userCreated`)
1. Save the event hook.
1. Follow the Okta steps to verify the Event webhook.

### Run Event Hooks with Okta and ngrok

To run a preview call of your Event Hook:

1. Select the Event Hook you validated.
1. Click **Actions** > **Preview**.
1. Select an event and click **Deliver Request**.
1. Okta displays the result of the Event Hook request delivered via ngrok:
     `The user john.doe@example.com has been added to the Okta org!`


## **Step 3**: Inspect and Replay Requests {#inspect-replay}

### Inspecting requests

When you launch ngrok, you can see two links: One for the tunnel to your app (it ends up in ngrok.io unless you're using custom domains) and a local URL (http://localhost:4040) for the Request Inspector.

The Request Inspector shows all the requests made through your tunnel. When you click a request, you can see details of both requests and responses.

Seeing requests are an excellent way for validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect.

To inspect the Okta Event Hook request, launch the ngrok inspection interface (`http://localhost:4040`), and then click the request sent by Okta.

From the results, review the response body, header, and other details:

![ngrok agent introspection](img/ngrok_introspection_okta_hooks.png)

### Replaying requests

The ngrok inspection interface provides a replay function that you can use to test your code without reproducing test conditions in Okta. To replay your call:

1. In the ngrok inspection interface (`http://localhost:4040`), select an Event Hook from Okta.
1. Click **Replay** > **Replay with modifications:**
1. Optionally, modify the request body with a different content. For example: `"target": [{ "alternateId": "jane.doe@example.com"}]`
1. Click **Replay**.
1. Your local application receives the modified request to process and provide a response.
