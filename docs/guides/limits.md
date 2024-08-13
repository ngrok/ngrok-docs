---
sidebar_position: 4
title: Free Plan Limits
---

# Limits in ngrok's free plan

Below are the limits enforced in the ngrok free plan. For more details on increasing or removing these limits, refer to the [ngrok paid plans](https://ngrok.com/pricing?ref=limits-docs).

## TCP Endpoints

In an effort to reduce abuse on the ngrok platform, we now require a valid payment method be [added to your account](https://dashboard.ngrok.com/settings#id-verification) before you can start TCP endpoints. This card will not be charged as long as you remain on the free plan.

## ​Endpoints

As a free user of ngrok you can define up to 3 endpoints in a [configuration](https://ngrok.com/docs/agent/config/) served by the same agent at the same time.

### What is an endpoint?

An endpoint is any device, app, or API that connects to a computer network. When you put an app online at foo.ngrok-free.app (using your free static domain), that’s one endpoint. If you connect to a device using a TCP protocol at 9.67. 1.100, that’s another endpoint.

### How does ngrok calculate endpoints for limits?

ngrok uses a combination of unique host:port combinations to calculate endpoints. You cannot have one of more than one of these in use at a time. Unlike other limits, this limit does not refresh at the end of each calendar month, you must simply stop using one endpoint in order to get another.

## Data transfer out

Inbound traffic: Unlimited
Outbound traffic: 1gb per month for users on Free Tier

### What is data transfer out?

This is the number of bytes you are transmitting out of your endpoints.

### Where can I view my data transfer out usage?

You can view your data transfer out for the month as well as the remainder amount at in the [ngrok Dashboard usage page](https://dashboard.ngrok.com/usage).

### When do data transfer limits refresh?

Limits refresh every calendar month. This means you reset to zero on the first of each month.

## Requests

Free ngrok users get 20,000 requests per month.

### What are requests?

A request is made by a client, to a named host, which is located on a server. Requests are made to a HTTP and HTTPS endpoints.

### Where can I view my requests usage?

You can review your requests for the month as well as the remainder amount at [ngrok Dashboard usage page](https://dashboard.ngrok.com/usage).

### When do request limits refresh?

Limits refresh every calendar month. This means you reset to zero on the first of each month.

## Users

Free accounts can only have a single user in the account.

For unlimited users, upgrade to the [pay-as-you go plan](https://ngrok.com/pricing?ref=limits-docs).
​

## Need to Increase your ngrok limits?

Request adjustments to limits that conflict with your project by contacting ngrok. To request an increase to a limit, complete the [Limit Increase Request Form](https://tally.so/r/mKlYOK) and we will reach out with next steps.

## Why is there an interstitial in front of my HTML content?

ngrok is committed to combating internet abuse. One common abuse of tools like ngrok is the hosting of phishing pages to steal user credentials. To counteract phishing on the platform, we inject an interstitial page in front of all HTML browser traffic on the free tier. Once a user agrees to the page, we set a cookie valid for 7 days for that domain.

If the interstitial interferes with your project, you can bypass it in a few ways.

- From the client accessing the ngrok endpoint, add a header value of `ngrok-skip-browser-warning` and set it to any value. These requests will bypass the interstitial.
- Change your user agent by setting the `User-Agent` header to something non-standard, such as `MyApp/0.0.1`, to bypass the warning.
- Upgrading to any of our paid plans will also bypass the warning.

### Code Examples

Axios

```
axios.get(url, { 'headers': { 'ngrok-skip-browser-warning': '1' } })
  .then((response => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
```

Fetch

```
const response = await fetch(URL, {
  headers: {
    "ngrok-skip-browser-warning": "1",
  },
  // ...
});
```

SuperAgent

```
 request
       .get('/endpoint')
       .set('ngrok-skip-browser-warning', '1')
       .then(callback);
```

JQuery

```
 request
       .get('/endpoint')
       .set('ngrok-skip-browser-warning', '1')
       .then(callback);
```

If you are a developer trying to access your own endpoint, you can use a browser extension to customize your browser's user agent value. Here is an [example for Chrome](https://chromewebstore.google.com/detail/requestly-intercept-modif/mdnleldcmiljblolnjhpnblkcekpdkpa?hl=en-US).
