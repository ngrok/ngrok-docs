---
sidebar_position: 3
title: Free Plan Limits
---

# Limits in ngrok's free plan

Below are the limits enforced in the ngrok free plan. For more details on increasing or removing these limits, refer to the [ngrok paid plans](https://ngrok.com/pricing?ref=limits-docs).

## ​Endpoints

As a free user of ngrok, you can only have one live endpoint at a time.

That means you can’t simultaneously connect to a TCP address and host an app online at the same time in the free plan.

### What is an endpoint?

An endpoint is any device, app, or API that connects to a computer network. When you put an app online at foo.ngrok-free.app (using your free static domain), that’s one endpoint. If you put a device online using a TCP tunnel, that’s another endpoint.

### How does ngrok calculate endpoints for limits?

ngrok uses a combination of unique host:port combinations to calculate endpoints. You cannot have one of more than one of these in use at a time. Unlike other limits, this limit does not refresh at the end of each calendar month, you must simply stop using one endpoint in order to get another. For example, you can not have an open connection to a TCP endpoint if you want to serve your app on foo.ngrok.com.

## Data transfer out limits

Inbound traffic: Unlimited
Outbound traffic: 1gb per month for users on Free Tier

### What is data transfer out?

This is the number of bytes you are transmitting out of your endpoints.

### Where can I view my data transfer out usage?

You can view your data transfer out for the month as well as the remainder amount at in the [ngrok Dashboard usage page](https://dashboard.ngrok.com/usage).

### When do data transfer limits refresh?

Limits refresh every calendar month. This means you reset to zero on the first of each month.

## Requests

Free ngrok users get 10,000 requests per month.

### What are requests?

A request is made by a client to one of your endpoints. Examples would include loading a webpage or calling an API hosted with ngrok. These are only counted for HTTP and HTTPS endpoints and do not include connections made to TLS and TCP endpoints.

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
