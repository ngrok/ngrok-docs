---
title: OAuth Traffic Policy on Endpoints
---

# How to add authentication to your ngrok endpoint using Traffic Policy

You may have already configured your first endpoint, or you're about to put your endpoint online - congrats!

 
You may not want everyone to be able to access your app/service. Did you know you can restrict access to authorized users for free by adding authentication to your endpoint? 

You don’t even have to leave the ngrok agent CLI to do it. Below you'll find a couple of ways to protect your traffic using ngrok [Traffic Policy](https://ngrok.com/docs/traffic-policy/).

### About ngrok Traffic Policy

[Traffic Policy](https://ngrok.com/docs/traffic-policy/) is a configuration language that offers you the flexibility to filter, match, manage and orchestrate traffic to your endpoints. With Traffic Policy, you can:

- [Block unwanted requests by IP](https://ngrok.com/docs/traffic-policy/examples/block-unwanted-requests/), geo, and more. 
- [Add Authentication](https://ngrok.com/docs/traffic-policy/examples/add-authentication/) like OAuth (see below), SAML, JWT or OIDC. 
- [Rate limit requests](https://ngrok.com/docs/traffic-policy/examples/rate-limit-requests/) by different variables so your service is protected.

## Add OAuth to your endpoint using Traffic Policy in 6 quick CLI-only steps:

 

### 1. Pick your provider

Decide which identity provider you want. If you only need a quick dev gate, use one of the managed apps that ngrok ships with (no client-id/secret required).

Managed providers today: [google](https://ngrok.com/docs/integrations/google/oauth/), [github](https://ngrok.com/docs/integrations/github/oauth/), [gitlab](https://ngrok.com/docs/integrations/gitlab/oauth/), [linkedin](https://ngrok.com/docs/integrations/linkedin/oauth/), [microsoft](https://ngrok.com/docs/integrations/microsoft/oauth/), [twitch](https://ngrok.com/docs/integrations/twitch/oauth/)

### 2. Create a traffic policy YAML file

Let's use the managed Google OAuth flow as our guide example. Save the `oauth.yml` code snippet below in the directory where you launch the agent:

```yaml
# oauth.yml
on_http_request:
  - actions:
      - type: oauth
        config:
          provider: google        # change to github, microsoft, …
          # auth_id: "my-login"   # optional cookie/URL namespace
          # client_id: ""         # only if you bring your own OAuth app
          # client_secret: ""     # only if you bring your own OAuth app
```

That’s the entire policy for the managed Google flow. 

### 3. Restart your endpoint with the policy attached

From the same machine that already runs your agent endpoint, just add one flag:

```bash
ngrok http 3000 \
  --domain myapp.ngrok.app \
  --traffic-policy-file oauth.yml
```

The --traffic-policy-file flag tells ngrok to apply the YAML you just wrote to this endpoint

If you start endpoints from an ngrok.yml config file instead, paste the on_http_request: block under the traffic_policy: key inside that endpoint, then run

```bash
ngrok start <endpoint-name>
```

### 4. Verify in a browser

Open your app's URL (https://myapp.ngrok.app) 

You should be immediately redirected to the Google sign-in page, and after authenticating you’ll land back on your app

### 5. Ship it

And that's it! Your existing agent endpoint is now identity-aware using Traffic Policy. 

That’s all you need — edit one small YAML file and pass a single extra flag when you start the agent.

### 6. Explore more and fine-tune with Traffic Policy 

As mentioned, [Traffic Policy](https://ngrok.com/docs/traffic-policy/) is a composable CEL-based configuration language that lets you match, filter, and control traffic to your endpoints without touching your app code. [Click here](https://ngrok.com/docs/traffic-policy/#traffic-policy-building-blocks) to learn more about the building blocks of Traffic Policy.

Now that you've added auth to your endpoint, here are some optional ways to fine tune other parts of your auth setup aside from strictly how to handle logins:

<table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr>
      <th style="background-color: #f2f2f2; text-align: left;">Need</th>
      <th style="background-color: #f2f2f2; text-align: left;">What to change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Shorten sessions</td>
      <td>add <code>idle_session_timeout: "15m"</code></td>
    </tr>
    <tr>
      <td>Force re-login</td>
      <td>hit <code>/ngrok/login?auth_id=&lt;auth_id&gt;</code></td>
    </tr>
    <tr>
      <td>Log users out</td>
      <td>redirect them to <code>/ngrok/logout?auth_id=&lt;auth_id&gt;</code></td>
    </tr>
    <tr>
      <td>Bring your own OAuth app</td>
      <td>fill in <code>client_id</code>, <code>client_secret</code>, <code>scopes</code> and add the callback URL <code>https://idp.ngrok.com/oauth2/callback</code> at your provider</td>
    </tr>
  </tbody>
</table>
