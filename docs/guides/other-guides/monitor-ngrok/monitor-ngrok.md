---
title: Monitor ngrok APIs with DataDog
sidebar_label: Monitor ngrok APIs
sidebar_position: 1
toc_max_heading_level: 3
---

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Create an example API to monitor](#create-an-example-api-to-monitor)
- [Publish your app with ngrok](#publish-your-app-with-ngrok)
- [Ways to monitor your app](#ways-to-monitor-your-app)
- [Traffic inspector](#traffic-inspector)
  - [Traffic policy example](#traffic-policy-example)
- [Monitor events](#monitor-events)
- [Create a dashboard](#create-a-dashboard)
- [Create a notification](#create-a-notification)
- [Further reading](#further-reading)
- [TODO](#todo)

## Introduction

This tutorial demonstrates how to monitor your API or web app with ngrok - including traffic reports, error request replay, and exporting logs and events to an external dashboard. (We'll use the terms API and app interchangeably in this article as ngrok can monitor any web server).

Whether you're an existing ngrok user looking to make your API more robust, or a new user wondering if ngrok can do what you need, this guide will talk you through monitoring in detail.

## Prerequisites

You'll need a ngrok account if you want to follow along with this tutorial. A free account is fine. If you don't have one, [sign up here](https://dashboard.ngrok.com/signup).

You'll also run a simple app locally using [Docker](https://docs.docker.com/get-started/get-docker). Even if you have an existing API you want to monitor, you can use the sample app in this guide to avoid making changes to your real one.

## Create an example API to monitor

Let's create the simplest possible app to monitor. (If you already have an app running on ngrok, you can skip this section and the next one and start at [Traffic inspector](#traffic-inspector).)

The TypeScript code below runs a web server that randomly returns success or failure to any request it receives.

- Save the code to a file called `server.ts`.

```js
const randomServerName = Math.floor(Math.random() * 900 + 100).toString();

Deno.serve({'hostname': '0.0.0.0', 'port': 80 }, handler);

async function handler(request: Request): Promise<Response> {
  if (Math.random() > 0.5) {
    const msg = 'Server ' + randomServerName + ' at time ' + Date.now() + ' has success response to request at ' + request.url;
    console.log(msg);
    return new Response(msg, { status: 200 });
  }
  const msg = 'Server ' + randomServerName + ' at time ' + Date.now() + ' has error response to request at ' + request.url;
  console.log(msg);
  return new Response(msg, { status: 500 });
}
```

- Open a terminal where you saved the file and run the command below to start the API.

```sh
docker network create ngrokTest

docker run --platform=linux/amd64 --rm -p 7777:80 --network=ngrokTest -v ".:/app" -w "/app" --name="api" denoland/deno:alpine-2.1.3 sh -c  "deno run --allow-net --unstable-detect-cjs ./server.ts"
```

This command runs the Docker image for Deno, exposing the API locally on port 7777, names the container `api`, and removes the container (`--rm`) upon exiting. You can now browse to http://localhost:7777 to test the app.

(The app uses a named network, `ngrokTest`, so that in the next section you can start the ngrok agent on the same network as the app. The [ngrok docs](https://dashboard.ngrok.com/get-started/setup/docker) suggest using the host network for Docker instead, but this probably won't work if you're using a Mac).

![Simple web app](./img/appConsole.webp)

## Publish your app with ngrok

Now that the app is running locally, you can expose it on a public URL with ngrok. To do that, you'll use the [Docker image for ngrok agent](https://hub.docker.com/r/ngrok/ngrok).

- Replace the authentication token in the command below with your token from the [ngrok dashboard](https://dashboard.ngrok.com/get-started/your-authtoken), and run the command in a new terminal.

```sh
docker run -it --rm --platform=linux/amd64 --network=ngrokTest -e NGROK_AUTHTOKEN=Y0urS3cr3tK3y ngrok/ngrok:3.22.0-alpine-amd64 http http://api
```

This command starts the ngrok agent locally and connects it to the app running on container `api`.

- Browse to the URL shown in the terminal labelled `Forwarding`, which should look like `https://eb45-79-127-145-72.ngrok-free.app`.

You can now see your request going from the browser, to the ngrok agent in the terminal, to the Deno API in the other terminal window.

![Published API](./img/ngrokAgent.webp)

## Ways to monitor your app

There are two ways to perform monitoring in ngrok: the Traffic Inspector and Events.

The traffic inspector is a filterable list of requests and responses to your API, available in the ngrok dashboard.  It's a useful place to view details if errors occur, or replay requests to test new policies and bugfixes. The inspector is a manual way to monitor your app. Request data is kept for three days (ninety days as a paid extra).

Events are data about your requests provided by ngrok that have to be exported to a dedicated monitoring platform. Events are an automated way to monitor your app. Events are also the only way for your team to get automatic alerts (notifications), instead of constantly checking for errors on a dashboard.

At the time of writing, ngrok allows you to export events only to AWS, Azure, and DataDog. OpenTelemetry is not supported. Exporting events to a custom URL, such as a self-hosted server, is not supported, so you have to use a paid cloud service. You can't perform custom processing, or use Elastic, Prometheus, Splunk, or alternative monitoring or notification apps.

You'll learn about both the inspector and exporting events in the next two sections.

## Traffic inspector

- Browse to the ngrok [Traffic Inspector](https://dashboard.ngrok.com/traffic-inspector).

This list of recent requests will show you simple information, like the time, origin, destination, duration, and response code of calls to your app. You can filter requests by these fields — for instance to show only server error responses.

![Traffic inspector](./img/trafficInspector.webp)

Note that making a request to the app at http://localhost:7777 will not be displayed in the inspector. Only requests that pass through the ngrok endpoint, and therefore the ngrok agent running in Docker, will be known to ngrok.

In order to see more details about a request, or replay it, you need to enable full capture, which permits ngrok to store up to 10 KB of your request data.

- Click a request in the traffic inspector list, then click **Enable full capture** in the sidebar.

![Enable full capture](./img/enableFullCapture.webp)

This button will take you to your account settings where you can enable full capture.

![Enable full capture settings](./img/enableFullCaptureAccount.webp)

- Return to your published API URL and refresh the browser page a few times to send fresh requests through ngrok.
- In the traffic inspector in ngrok click the top event in the list.

The event should now show all the request and response details and content. You may need to restart your ngrok agent in the terminal if full capture details don't appear.

- Click the replay button and notice the request will be resent from the ngrok host.

Unfortunately, replaying a request with a free ngrok account does not work currently, even though the feature appears available. Replay will work only with a paid account. This [bug](https://github.com/ngrok/ngrok-docs/issues/1247) may be fixed by the time you read this guide.

![Replay request](./img/replayError.webp)

You can also replay a request with changes, to alter any of the headers or POST data.

![Replay with changes](./img/replayChanges2.webp)

Replaying requests is useful for debugging. For example, you can find a request that caused an error in yojeremjur app, deploy a fix for the app, and replay the request to confirm you’ve fixed the issue.

### Traffic policy example

Replaying requests is also a way to test new [traffic policies](https://ngrok.com/docs/traffic-policy). ngrok applies the traffic policy rules in effect at the current time of replay, which could be quite different from those in effect in the past when the original request was received.

Policies can be used to request passwords, block malicious traffic, route requests, rewrite URLs, and respond with custom content. If you use a permanent domain name (called a [cloud endpoint](https://ngrok.com/docs/universal-gateway/cloud-endpoints)) on ngrok, you can set a policy for every agent that uses that domain. Otherwise, for temporary [agent points](https://ngrok.com/docs/universal-gateway/agent-endpoints), you can set a traffic policy inside each agent individually.

Let's look at a policy example: rate limiting. This is one of the many [actions](https://ngrok.com/docs/traffic-policy/actions/rate-limit) available. So far in this guide, unlimited requests could be sent to the test app. You'll change that to allow only one request a minute.

In order to test policies, you need to be able to reuse the same URL, which is not possible if you keep using temporary URLs that ngrok generates for you each time you restart an agent. So you'll create a permanent URL.

- Browse to **Domains** page in the ngrok sidebar. If you're using a free account, register for your free domain, like `massive-pelican-arguably.ngrok-free.app`. If you're using a paid account, create a new domain for this test.

Next, you'll stop and restart the ngrok container, now using a traffic policy.

- Stop the ngrok Docker container in the terminal with <kbd>ctrl+c</kbd>.
- Create the file `policy.yml` with the code below.
```yml
on_http_request:
  - actions:
      - type: rate-limit
        config:
          name: 1 request per minute
          algorithm: sliding_window
          capacity: 1
          rate: 1m
          bucket_key:
            - req.headers['host']
```
- Run the agent again with the command below. Replace the authentication token and the URL with yours (note the URL must be `https`, not `http`).
```sh
docker run -it --rm --platform=linux/amd64 --network=ngrokTest -v ".:/app" -w "/app" -e NGROK_AUTHTOKEN=Y0urS3cr3t ngrok/ngrok:3.22.0-alpine-amd64 http http://api --traffic-policy-file policy.yml --url https://massive-pelican-arguably.ngrok-free.app
```

- Browse to the app URL and refresh the page a few times. Notice that the page stops responding.

- On the ngrok traffic inspector page, note that error code 429 (rate limit) was returned. The duration of the request is also instant, and causes no load on your app.

![Rate limit](./img/rateLimit.webp)

- Edit the `policy.yml` file and change `capacity` to `10`.
- In the traffic inspector, click on one of the `429` events, then click **Replay**. Note that the request now responds without error as the rate limit has been increased.

![Replay after rate limit adjustment](./img/replayLimit.webp)

## Monitor events

In this section you'll learn how to export ngrok [events](https://ngrok.com/docs/obs/events) to a monitoring service, DataDog.

There are two [types of events](https://ngrok.com/docs/obs/events/reference/): standard traffic events (requests to your API) and audit events (changes to secret keys and URLs). For this simple example, you'll monitor a traffic event.

Before adding an event subscription, you'll need somewhere to send events.

- Sign up for a free trial account at [DataDog](https://www.datadoghq.com).

You can enter anonymous nonsense for all the fields except your email address, which you need to confirm. You also can't skip step three in the sign up process — creating a DataDog agent somewhere.

- In step three of the DataDog signup, click on **Docker** in the sidebar. Copy and paste the given command into a terminal.

![Join DataDog](./img/joinDatadog.webp)

- In the DataDog site, click **Finish** at the bottom of the page once the site notices your agent is running.

You no longer need the agent running locally and can remove the DataDog container with the command below if you want.

```sh
docker stop dd-agent
docker remove dd-agent
docker image rm gcr.io/datadoghq/agent:7
```

- Note which DataDog site you are using by following this [documentation](https://docs.datadoghq.com/getting_started/site/#access-the-datadog-site).

- Note your DataDog API key from the menu at the bottom left of the sidebar where your username is.

![DataDog API key](./img/datadogKey.webp)

- In the ngrok navigation panel, browse to the [**Events Stream**](https://dashboard.ngrok.com/event-subscriptions) and add a new subscription.

![Add event subscription](./img/makeSubscription.webp)

- In the sidebar that opens, name the subscription `traffic`, and a new source (event type). Choose `http_request_complete`.

![Add source](./img/addEventType.webp)

- Add a destination. Choose DataDog.
- Add your site and API key that you noted earlier.
- Send a test event.
- In the DataDog site, browse the **Logs — Explorer** page in the navigation panel. Enable logs. You should see the event from ngrok has appeared.

![DataDog logs](./img/datadogLog.webp)

- In ngrok, click **Done** and **Save**.
- Refresh your ngrok app page a few times so that new request are logged in DataDog, some with OK responses and some with errors.

## Create a dashboard

Now that events are being sent to DataDog, you can set up visualizations and notifications, to allow your support team to monitor your API's performance.

- In the DataDog site, browse the **Dashboards — Dashboard List** page in the navigation panel. Click the **ngrok HTTP Events** item to view the default dashboard.

![DataDog dashboard list](./img/datadogDashboardList.webp)

To add a new widget to the dashboard, you need to clone the default one.

- Click **Clone** at the top right.

![DataDog default dashboard](./img/datadogDefaultDashboard.webp)

- In the cloned dashboard, click **Add widget** and choose **Query value**.

![DataDog add widget](./img/datadogAddWidget.webp)

- In the widget details — **Graph data**, change **metrics** to **logs**. (ngrok does not export metrics.)
- Enter the log filter `@http.status_code:500` so only errors will be counted.
- Set the time preference to the last hour.
- Name the widget `Errors in the last hour`.

![DataDog edit widget](./img/datadogWidgetDetails.webp)

Your new widget will be available in the dashboard, allowing your support staff to see instantly if any errors occurred in your API.

![DataDog custom dashboard](./img/datadogCustomDashboard.webp)

If you want to create widgets for other log information, you can see what fields are available by reading the JSON of any event you click on in the log inspector

## Create a notification

The final part of the monitoring system is setting up an alert that is pushed to your email or mobile app if an error occurs. You'll first add an integration to DataDog called a webhook. This webhook is merely a way of sending a POST request to https://ntfy.sh, a free notification service (that also has a mobile app available).

- In DataDog, browse to **Integrations — Add integration — webhooks**.

![DataDog add integration](./img/datadogAddIntegration.webp)

- In the configuration page, under **Webhooks** at the bottom, click **New**. Set the name to `ntfy`, the URL to `https://ntfy.sh/ngrokTest` and the payload to `Blank`. Save.

![DataDog add webhook](./img/datadogAddWebhook.webp)

- In the ngrok navigation panel, browse to the **Monitors — New monitor**. Choose **Logs**.
- In the monitor configuration, set the search query to `@http.status_code:500 `, the time to the last hour, and the notification message to `@webhook-ntfy Your API has errors. Investigate at https://app.datadoghq.eu/dashboard.`.

![DataDog add webhook](./img/datadogConfigureMonitor.webp)

It's important that the `@webhook` name matches the webhook integration you created earlier, or the notification won't arrive.

- Browse to the [ntfy website at the ngrok test channel](https://ntfy.sh/ngrokTest).
- Click **Test notifications** at the bottom of the DataDog page and send an alert with **Run tests**.
- Notice that the alert appears in the ntfy page. You can install ntfy as a mobile app so that you are always aware if your API has errors.

![DataDog notify](./img/datadogNotify.webp)

- Save the monitor. Now, after a delay, if you refresh the ngrok endpoint for your app and errors occur, a notification will be sent.

## Further reading

- [Gettings started with Docker for ngrok](https://dashboard.ngrok.com/get-started/setup/docker)
- [Complete Docker ngrok agent documentation](https://ngrok.com/docs/using-ngrok-with/docker)
- [ngrok traffic policies](https://ngrok.com/docs/traffic-policy)
- [ngrok traffic policy actions](https://ngrok.com/docs/traffic-policy/actions/rate-limit)
- [ngrok cloud endpoints](https://ngrok.com/docs/universal-gateway/cloud-endpoints)
- [ngrok agent endpoints](https://ngrok.com/docs/universal-gateway/agent-endpoints)
- [ngrok events](https://ngrok.com/docs/obs/events)

## TODO

- log a documentation bug for host network on mac or windows for this page https://dashboard.ngrok.com/get-started/setup/docker in github here https://github.com/ngrok/ngrok-docs/issues. `host.docker.internal` works on mac and windows (test if it works on linux too).
- update further reading with all links in this guide
- read all docs and update this guide with info therein
- domain vs cloud endpoint?
- put guide into fork of https://github.com/ngrok/ngrok-docs and use docusaurus formatting, especially for code snippets. add docker instructions to docs readme file.
- copy metadata details from adjacent article





- Article -
- Brief - https://docs.google.com/document/d/1pHGp3QFcpfyxWb-_jnZM84gW8lp8r8n2DRAC_q5FTjY/edit?tab=t.ueah339ii4w1
- Build the docs:
```sh
docker run --rm -p 3000:3000 -it --name=ngrokDocs -v "./:/app" -w "/app" --platform=linux/amd64 guergeiro/pnpm:current-latest-alpine sh -c "apk add direnv; direnv allow; pnpm install; pnpm run start"
```
- Style guide - https://drafts.cc.ritza.co/s/bo-MDE3LO#
  - capitalize first use, then lower case afterwards
  - sentence case
  - use you first, we if necessary is fine
  - bold ui elements
  - variables in <> in YAML
- I logged some other issues with ngrok too in the process of writing this guide:
  - https://github.com/ngrok/ngrok-docs/pull/1255
  - https://github.com/ngrok/ngrok-docs/issues/1247
  - https://github.com/ngrok/ngrok-docs/pull/1261