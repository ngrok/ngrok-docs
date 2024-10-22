---
sidebar_position: 4
title: Free Plan Limits
---

# Limits in ngrok's free plan

Below are the limits enforced in the ngrok free plan. For more details on increasing or removing these limits, refer to the [ngrok paid plans](https://ngrok.com/pricing?ref=limits-docs).

# What are ngrok's limits?

This table shows ngrok's plan and overall platform limits. For pricing for on-demand resources or specific development plan features, check out our [pricing](https://ngrok.com/pricing?ref=docs).

| Feature                                       | Free Users          | Development Plans (Personal, Pro, Enterprise)  | Production Pay-as-You-Go Plans                                   |
| --------------------------------------------- | ------------------- | ---------------------------------------------- | ---------------------------------------------------------------- |
| **Domains**                                   | 1 static domain     | 1 per license                                  | No limit, priced on-demand                                       |
| **Endpoints**                                 | 3                   | 3 per license                                  | No limit, priced on-demand                                       |
| **Edges**                                     | 1                   | 20 per license                                 | Priced on-demand, platform limit of 100. Contact us to increase. |
| **TCP Addresses**                             | 1 with verification | 1 per license                                  | Priced on-demand, platform limit of 100. Contact us to increase. |
| **Endpoint Hours**                            | No limit            | No limit                                       | No limit, can be priced on-demand, contact us                    |
| **HTTP Requests**                             | 20,000              | Count of requests used (no limits)             | 100,000 and then on-demand pricing                               |
| **TCP Connections**                           | 2,000 connections   | No limit                                       | 10,000 and then on-demand pricing                                |
| **TLS Connections**                           | Not Available       | Count of conns used (no limit)                 | 10,000 and then on-demand pricing                                |
| **Data Transfer In**                          | No limit            | No limit                                       | No limit                                                         |
| **Data Transfer Out**                         | 1 GB                | Refer to our pricing page for limits by plan   | 10 GB and then on-demand pricing                                 |
| **Request Rate limit HTTP**                   | 4k per min          | 20k per min                                    | 20k per Min. Contact us to increase.                             |
| **TCP Connection Rate Limit**                 | 120 per min         | 20k per min                                    | 20k per Min. Contact us to increase.                             |
| **Requests with basic policy actions**        | 2,000               | 2,000                                          | 2,000 then an add-on is required                                 |
| **TCP Connections with basic policy actions** | 500                 | 500                                            | 500 then an add-on is required                                   |
| **TLS Connections with basic policy actions** | Not Available       | 500                                            | 500 then an add-on is required                                   |
| **Requests with advanced policy actions**     | 2,000               | 2,000                                          | 2,000 then an add-on is required                                 |
| **TCP Connections with adv policy actions**   | 500                 | 500                                            | 500 then an add-on is required                                   |
| **TLS Connections with adv policy actions**   | Not Available       | 500                                            | 500 then an add-on is required                                   |
| **Requests with ent policy actions**          | 2,000               | 2,000                                          | 2,000 then an add-on is required                                 |
| **TCP Connections with ent policy actions**   | 500                 | 500                                            | 500 then an add-on is required                                   |
| **TLS Connections with ent policy actions**   | Not Available       | 500                                            | 500 then an add-on is required                                   |
| **Agents**                                    | 1                   | 1 per license                                  | Platform limit of 1000. Contact us to increase.                  |
| **Users**                                     | 1                   | 1 per license                                  | Platform limit of 100. Contact us to increase.                   |
| **Tunnel Authtokens**                         | 10                  | Platform limit of 100. Contact us to increase. | Platform limit of 100. Contact us to increase.                   |
| **API Keys**                                  | 10                  | Platform limit of 20. Contact us to increase.  | Platform limit of 20. Contact us to increase.                    |

To see current pricing, click here [ngrok pricing](https://ngrok.com/pricing?ref=docs)

# How can I see how my account stacks up against my limits?

The ngrok usage page at dashboard.ngrok.com/usage

# How often do limits refresh?

Your count of resources against a limit refreshes on the first day of each month.

### How does ngrok calculate endpoints for limits?

ngrok uses a combination of unique host:port combinations to calculate endpoints. You cannot have one of more than one of these in use at a time. Unlike other limits, this limit does not refresh at the end of each calendar month, you must simply stop using one endpoint in order to get another.

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
