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

Let's use the managed Google OAuth flow as our example for this guide. For each http request made against your endpoint, this ['oauth' traffic policy action](https://ngrok.com/docs/traffic-policy/actions/oauth/) will take effect. Save the `oauth.yml` code snippet below in the directory where you launch the agent:

```yaml
# oauth.yml
on_http_request:
  - actions:
      - type: oauth
        config:
          provider: google  # change google to github, microsoft, etc as needed
          # auth_id: "my-login"  # optional cookie/URL namespace
          # client_id: "..."     # only if you're using a custom OAuth app
          # client_secret: "..."
```

That’s the entire policy for the managed Google flow. 

### 3. Restart your endpoint with the policy attached

#### Option 3.1. If you're using a separate traffic policy file

If you started your ngrok agent with a command like:

```bash
ngrok http 3000 --domain myapp.ngrok.app
```

and you saved the `oauth.yml` code snippet in the directory where you launch the agent, then your `oauth.yml` is the file that contains the traffic policy. So from the same machine that already runs your agent endpoint, just add one flag:

```bash
ngrok http 3000 \
  --domain myapp.ngrok.app \
  --traffic-policy-file oauth.yml
```

The `--traffic-policy-file` flag tells ngrok to apply the YAML you just wrote to this endpoint

#### Option 3.2. If you're using an `ngrok.yml` config file

If you start endpoints from an `ngrok.yml` config file instead, locate the specific endpoint configuration and add or modify the `traffic_policy` section as in the example below:

```yaml
tunnels:
  myapp:
    proto: http
    addr: 3000
    domain: myapp.ngrok.app
    traffic_policy:
      on_http_request:
        - actions:
            - type: oauth
              config:
                provider: google
								# Additional examples below are optional:
								# auth_id: "my-login"
                # client_id: "your-client-id"
                # client_secret: "your-client-secret"
                # scopes:
                #  - email
                #  - profile
                # idle_session_timeout: "15m"
                # max_session_duration: "1h"
                # userinfo_refresh_interval: "10m"
```

Once you've pasted the `on_http_request:` block under the `traffic_policy:` key inside that endpoint, then run:

```bash
ngrok start myapp
# ngrok start <endpoint-name>
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

<table
  cellPadding="8"
  cellSpacing="0"
  border="1"
  style={{ borderCollapse: 'collapse', width: '100%' }}
>
  <thead>
    <tr>
      <th style={{ backgroundColor: '#f2f2f2', textAlign: 'left' }}>Need</th>
      <th style={{ backgroundColor: '#f2f2f2', textAlign: 'left' }}>What to change</th>
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

Note: When configuring a custom oauth app, while specifying `client_id` and `client_secret`, ensure that the redirect URI https://idp.ngrok.com/oauth2/callback is registered with your OAuth provider. This is essential for the OAuth flow to function correctly.

Below are two examples of how to apply these auth lifecycle options, depending on your traffic policy setup.

What these examples do:

- If a user visits `/ngrok/logout`, ngrok first destroys their session (built-in behavior), then your redirect action sends them straight to the login URL.
- Any session inactive for 15 minutes or longer will auto-expire and trigger a re-login flow when the user returns.
- After an hour (regardless of activity), users are forced to re-authenticate (`max_session_duration`).

#### Option 6.1. If you're using a separate `oauth.yml` traffic policy file

If you started your ngrok agent with a command like:

```bash
ngrok http 3000 --domain myapp.ngrok.app --traffic-policy-file oauth.yml
```

Then your oauth.yml file contains the traffic policy. To adjust settings such as session timeouts, scopes, or client credentials, edit this file directly. To force users to re-login after a timeout, and redirect them to logout to explicitly expire their session, add the following to your `oauth.yml` file under the `on_http_request` clause:

```yaml
# oauth.yml
on_http_request:
  - match:
      path: "/ngrok/logout"
    actions:
      - type: redirect
        config:
          location: "/ngrok/login?auth_id=my-login"
  - actions:
      - type: oauth
        config:
          provider: google
          auth_id: "my-login"
          idle_session_timeout: "15m"
          max_session_duration: "1h"
```

#### Option 6.2. If you're using an `ngrok.yml` config file

If your setup involves an ngrok.yml file, locate the specific endpoint configuration and add or modify the traffic_policy section:

```yaml
tunnels:
  myapp:
    proto: http
    addr: 3000
    domain: myapp.ngrok.app
    traffic_policy:
      on_http_request:
        - match:
            path: "/ngrok/logout"
          actions:
            - type: redirect
              config:
                location: "/ngrok/login?auth_id=my-login"
        - actions:
            - type: oauth
              config:
                provider: google
                auth_id: "my-login"
                idle_session_timeout: "15m"
                max_session_duration: "1h"
```

Apply the changes by restarting the specific tunnel:

```bash
ngrok start myapp
```

If you need assistance with specific configurations or further customization, feel free to ask our Support team at [support@ngrok.com](mailto:support@ngrok.com)!
