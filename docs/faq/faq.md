---
title: FAQ
---

# FAQ

---

## Does ngrok have an official Status page? {#status-page}

Yes. The official ngrok status page is [status.ngrok.com](https://status.ngrok.com).

## Can I choose a different port to receive traffic on my ngrok domains? {#non-standard-ports}

No. ngrok accepts traffic on port 80 for HTTP endpoints, 443 for HTTPS endpoints
and port 443 as well for TLS endpoints. This behavior is not configurable.

TCP endpoints use the port of the TCP address that was assigned when you
acquires the TCP address. [This port is assigned and not
configurable](/tcp/#customization).

## Will the ngrok agent work if my network changes? {#network-changes}

Yes. The ngrok agent is robust to all network changes. If you switch wifi
networks or your modem restarts and you have a dynamic IP that changes, the
ngrok agent will automatically detect this condition and re-establish
connectivity with the ngrok cloud service. You don't need to take any manual
action to restart or reconfigure the agent.

## What information is stored about my use of ngrok? {#data-usage}

Please see our [Terms of Service](https://ngrok.com/tos) and [Data Processing
Agreement](https://ngrok.com/dpa) for more information.

## Can I forward to upstream services on different machines? {#non-local}

Yes, specify the full network address. For example:

```bash
ngrok http 192.168.1.1:8080
```

```bash
ngrok tcp my-db.my-network:3306
```

## Does ngrok support CORS? {#cors}

Yes, applications exposed via ngrok's HTTP endpoints will work with CORS.

Your application must serve the appropriate CORS headers, or you may use
ngrok's [response headers module](/http/response-headers/) to add the
appropriate CORS headers. Setting the correct CORS headers is non-trivial, but
for very simple examples you may try:

```
ngrok http 80 --response-header-add "Access-Control-Allow-Origin: *"
```

If you use any of ngrok's authentication modules, CORS preflight options
requests are blocked by default. You may override this behavior for
[OAuth](/http/oauth), [OpenID Connect](/http/openid-connect), and
[SAML](/http/saml) modules by setting the "options passthrough" parameter to
true.

Basic Auth (`--basic-auth`) does not yet support configuring options
passthrough.

## What's the status of ngrok v1? {#v1}

The original open source ngrok agent 1.x is [available on
GitHub](https://github.com/inconshreveable/ngrok) but is no longer developed,
supported or maintained. The latest ngrok agent is available on our [ngrok
downloads page](https://ngrok.com/download).

## How do I pronounce ngrok? {#pronunciation}

_en-grok_

## How long has ngrok been around? {#first-commit}

The first prototype for ngrok was committed on [March 20th,
2013](https://github.com/inconshreveable/ngrok/commit/8f4795ecac7f92c6b5a8c8970c65f26e5315fe4e).
