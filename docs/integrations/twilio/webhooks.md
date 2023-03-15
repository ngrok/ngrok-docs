# Twilio SMS Webhooks
------------

:::tip TL;DR

To integrate Twilio webhooks with ngrok:
1. [Start your local twillio webhook app.](#start-your-app) `npm start`
1. [Start ngrok.](#start-ngrok) `ngrok http 3000`
1. [Configure Twilio with your ngrok url and start testing.](#setup-twilio)

:::

This guide covers how to use ngrok to integrate your localhost app with [Twilio SMS Webhooks](https://www.twilio.com/docs/usage/webhooks/sms-webhooks). By integrating ngrok with Twilio, you can:

- **Develop and test Twilio webhooks locally**, eliminating the time in deploying your development code to a public environment
- **Secure your app by validating Twilio webhook using ngrok**, letting ngrok handle security leaving more time for developing what really matters
- **Inspect and troubleshoot requests from Twilio** in real-time via the inspection UI and API
- **Modify and Replay Twilio Webhook requests** with a single click and without spending time reproducing events manually in Twilio

## **Step 1**: Start your app {#start-your-app}
An example express app can be found on Github here: [https://github.com/thomas-ngrok/ngrok-example-twilio-sms-webhook](https://github.com/thomas-ngrok/ngrok-example-twilio-sms-webhook). 

```js
var MessagingResponse = require('twilio').twiml.MessagingResponse;

/*** POST /sms listing. ***/
router.post('/', function(req, res, next) {
  const twiml = new MessagingResponse();
  twiml.message('The Robots are coming! Head for the hills!');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});
```

Start your app on port 3000. You can validate it is up and running by visiting [http://localhost:3000](http://localhost:3000). 

The part we are going to focus on is http://localhost:3000/sms found under /routes/sms.js in the Express example code.

More information on using Twilio webhooks can be found here: [https://www.twilio.com/blog/parsing-an-incoming-twilio-sms-webhook-with-node-js](https://www.twilio.com/blog/parsing-an-incoming-twilio-sms-webhook-with-node-js)

## **Step 2**: Launch ngrok {#start-ngrok}

Once your app is running successfully on localhost, let's get it on the internet securely using ngrok! 

1. If you're not an ngrok user yet, just [sign up to ngrok for free](https://ngrok.com/signup).

2. [Download the ngrok agent](https://ngrok.com/download).

3. Go to the [ngrok dashboard](https://dashboard.ngrok.com) and copy your Authtoken. <br />
    **Tip:** The ngrok agent uses the authtoken to log into your account when you start a tunnel.
    
4. Start ngrok by running the following command:
    ```bash
    ngrok http 3000
    ```

5. ngrok will display a url where your example applicaiton is exposed to the internet (copy this URL for use with Twilio).
    ![ngrok agent running](img/launch_ngrok_tunnel.png)


## **Step 3**: Integrate  Twilio SMS Webhook {#setup-twilio}
Now that you have your local environment on the internet, let's configure Twilio to call your code.

1. Sign in to your Twilio account.
2. From the Twilio Console, go to **Develop** > **# Phone Numbers** > **Manage** > **Active Numbers** and select a number to add a webhook to.
3. At the bottom of the page, under Messaging, (1) add your ngrok url (don't forget to append /sms) under Webhook and (2) change the type to HTTP Post.
    ![Twilio SMS Webhook Config Screen](img/add_ngrok_url_to_Twilio.png)
4. Save the phone number configuration.

Congrats, everything is configured! Now it's time to test.

### Run Webhooks with Twilio and ngrok

1. Send an SMS message to your Twilio Phone number that was configured in the steps above. 
2. Get excited (and maybe a little scared) when you get a text back saying, **"The Robots are coming! Head for the hills!"**

Congrats! You got an end-to-end example working but there's even more you can do with ngrok that will make development even easier. Check out how to inspect and replay your requests without having to send an SMS. Trust me, you won't regret it.

## Optional next steps {#optional}

### Add additional security using ngrok's signature webhook verification
The webhook verification module allows ngrok to assert requests to your endpoint originate from Twillio. This is a quick step to add extra protection to your setup. 

**Note:** This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise.

1. Login to [Twilio Console](https://console.twilio.com/) and copy your Auth Token value.<br />
    **Note:** ngrok Webhook Verification ensures traffic from your Twilio account is the **only traffic allowed** to make calls to your app. Because Twilio signs all Webhooks using the Primary Auth Token, ngrok can verifies the signature of every request and only authorizing requests originating from your Twilio account. 
2. Restart ngrok by running the command, replacing {your auth token} with your Twilio Auth Token:
    ```bash
    ngrok http 3000 --verify-webhook twilio --verify-webhook-secret {your auth token}
    ```

### Inspecting requests

When you launch ngrok, you can see two links: One for the tunnel to your app (it ends up in ngrok.io unless you're using custom domains) and a local URL (http://localhost:4040) for the Request Inspector.

The Request Inspector shows all the requests made through your tunnel. When you click a request, you can see details of both requests and responses.

Seeing requests are an excellent way for validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect.

To inspect the Twilio SMS Webhook request, launch the ngrok inspection interface (`http://localhost:4040`), and then click the request sent by Twilio.

From the results, review the response body, header, and other details:

![ngrok agent introspection](img/ngrok_introspection_twilio_sms_webhooks.png)

### Replaying requests

The ngrok inspection interface provides a replay function that you can use to test your code without having to send an SMS to your Twilio number andthen waiting for Twilio to call your Webhook. You can even modify the replays to change the message to whatever message you are expecting.

To replay your call:

1. In the ngrok inspection interface (`http://localhost:4040`), select an Webhook Call from Twilio.
1. Click **Replay** > **Replay with modifications:**
1. Optionally, modify the request body with a different content. For example: `Body=Hello+from+the+replay+at+ngrok%21`
1. Click **Replay**.
1. Your local application receives the modified request to process and provide a response.