---
description: Develop and test GitLab webhooks from localhost
---

# GitLab Repository Webhooks

---

:::tip TL;DR

To integrate GitLab webhooks with ngrok:

1. [Launch your local webhook.](#start-your-app) `npm start`
1. [Launch ngrok.](#start-ngrok) `ngrok http 3000`
1. [Configure GitLab webhooks with your ngrok URL.](#setup-webhook)
1. [Secure your webhook requests with verification.](#security)

:::

This guide covers how to use ngrok to integrate your localhost app with GitLab to allow GitLab to send notifications to your app anytime an event takes place in a GitLab repository.

By integrating ngrok with GitLab, you can:

- **Develop and test GitLab webhooks locally**, eliminating the time in deploying your development code to a public environment and setting it up in HTTPS.
- **Inspect and troubleshoot requests from GitLab** in real-time via the inspection UI and API.
- **Modify and Replay GitLab Webhook requests** with a single click and without spending time reproducing events manually in your GitLab account.
- **Secure your app with GitLab validation provided by ngrok**. Invalid requests are blocked by ngrok before reaching your app.

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

1. ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with GitLab).
   ![ngrok agent running](/img/integrations/launch_ngrok_tunnel.png)

## **Step 3**: Integrate GitLab {#setup-webhook}

GitLab can trigger webhook calls to external applications whenever events happen in a repository. To register for such events, follow the instructions below:

1. Sign in to [GitLab](https://gitlab.com).

1. Select a repository from the **Your Repository** list.
   **Tip:** If you don't have a repository, create a new empty one.

1. In the repository page, click **Settings** from the left menu and then click **Webhooks**.

1. On the **Webhooks** page, in the **URL** field enter the URL provided by the ngrok agent to expose your application to the internet (i.e., `https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io`).
   ![URL](img/ngrok_url_configuration_gitlab.png)

1. Mark the **Push events** checkbox under the **Trigger** section and then click **Add webhook**.

1. On the **Webhooks** page, scroll down until the **Project Hooks** section appears.

1. In the webhook list for the **Project Hooks** section, click **Test** for the webhook you've just created and then click **Push events**.

   Confirm your localhost app receives the test event notification and logs both headers and body to the terminal.

1. Optionally, in the webhook list, click the **Edit** button for your webhook entry, scroll down the webhook page until the **Recent events** section appears, and then click **View details** for the **Push Hook** trigger line to verify information about the post request GitLab has sent to your localhost application.
   ![GitLab Recent events](img/review_gitlab_recent_events.png)

   Verify the content of the request is the same as the content received by your localhost app.

### Run Webhooks with GitLab and ngrok

Because you've selected the **Push event** as the trigger for your webhook, GitLab will submit a post request to your application through ngrok whenever you push content to your repository.
**Note:** Different messages are sent to your application depending on the trigger event you choose.

Follow the instructions below to add some content to your repository:

1. Click the name of your repository at the top of the left menu.

1. On the project's page, click **+** and then click **New file**.

1. In the **New file** page, enter a name for the file in the **File name** field, and enter the following content to the file in the textbox:
   `This is my file content`.

1. Click **Commit changes**.

   Confirm your localhost app receives the push event notification and logs both headers and body to the terminal.

Alternatively, clone your repository locally, add some content, commit, and then push the content to your repostiory on GitLab:
`git add .; git commit -m "my first commit"; git push`

### Inspecting requests

When you launch the ngrok agent on your local machine, you can see two links:

- The URL to your app (it ends with `ngrok-free.app` for free accounts or `ngrok.app` for paid accounts when not using custom domains)
- A local URL for the Web Interface (a.k.a **Request Inspector**).

The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response.

Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect.

To inspect GitLab's event requests, launch the ngrok web interface (i.e. `http://127.0.0.1:4040`), and then click one of the requests sent by GitLab.

From the results, review the response body, header, and other details:

![ngrok Request Inspector](img/ngrok_introspection_gitlab_hooks.png)

### Replaying requests

The ngrok Request Inspector provides a replay function that you can use to test your code without retriggering new events from GitLab. To replay a request:

1. In the ngrok inspection interface (i.e., `http://localhost:4040`), select a request from GitLab.

1. Click **Replay** to execute the same request to your application or select **Replay with modifications** to modify the content of the original request before sending the request.

1. If you choose to **Replay with modifications**, you can modify any content from the original request. Optionally, modify the request header with different content. For example, modify the **X-GitLab-Event** header with the value **MyCustomPush**.

1. If you choose to **Replay with modifications**, you can modify any content from the original request. For example, you can modify the **user_name** field in the body request.

1. Click **Replay**.

Verify that your local application receives the request and logs the corresponding information to the terminal.

## Secure webhook requests {#security}

The ngrok signature webhook verification feature allows ngrok to assert that requests from your Gitlab webhooks are the only traffic allowed to make calls to your localhost app.

**Note:** This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise.

This is a quick step to add extra protection to your application.

1. In the repository page, click **Settings** from the left menu and then click **Webhooks**.

1. In the **Webhooks** page, scroll down until the **Project Hooks** section appears, and then click **Edit** for your webhook.

1. Enter a text for the **Secret token** field and click **Save changes**.

1. Restart your ngrok agent by running the command, replacing `{your secret token}` with the value you have provided to the **Secret token** field (See [Integrate GitLab](#setup-webhook)):

   ```bash
   ngrok http 3000 --verify-webhook gitlab --verify-webhook-secret {your secret token}
   ```

1. In the **Project Hooks** section, click **Test** for your webhook, and then click **Push events**. Alternatively, push content to your repository.

Verify that your local application receives the request and logs information to the terminal.
