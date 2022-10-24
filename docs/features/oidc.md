---
description: Add Single Sign-On at the edge before users even reach your service
---

# OpenID Connect

Add Single Sign-On at the edge before users even reach your service

---



```mdx-code-block
import ReactPlayer from 'react-player/lazy'

<div className='player-wrapper'>
  <ReactPlayer
    className='react-player'
    url='https://www.youtube.com/watch?v=JIKm4P41xWQ-U'
    width='100%'
    height='100%'
  />
</div>
```


## Benefits

- Restrict access to ngrok tunnels with Single Sign-On in one command
- Unauthorized access is blocked even before reaching your apps
- No OpenID Connect skills required!

## Use it!

1. [Sign up for ngrok](https://ngrok.com/signup)
2. Launch a tunnel with OpenID Connect. For example:

    ```bash
    ngrok http 80 --oidc=https://{tenant_id}.okta.com \
    --oidc-client-id={client_id} \
    --oidc-client-secret={client_secret}
    ```

3. Add custom scopes:

    ```bash
    ngrok http 80 --oidc=https://{tenant_id}.okta.com \
    --oidc-client-id={client_id} \
    --oidc-client-secret={client_secret} \
    --oidc-scope=openid,email,profile 
    ```

3. Filter access by email, or user identity:

    ```bash
    ngrok http 80 --oidc=https://{tenant_id}.okta.com \
    --oidc-client-id={client_id} \
    --oidc-client-secret={client_secret} \
    --oidc-scope=openid,email,profile \
    --oauth-allow-domain=ngrok.com
    ```

3. Send information about the logged user via headers:

    ```bash
    ngrok http 80 --oidc=https://{tenant_id}.okta.com \
    --oidc-client-id={client_id} \
    --oidc-client-secret={client_secret} \
    --oidc-scope=openid,email,profile \
    --oauth-allow-domain=ngrok.com \
    --request-header-add "userEmail: \${.oauth.user.email}"
    ```

Learn more:

- [OpenID Connect module](cloud-edge/modules/oidc)
- [HTTP Header Templates](http-header-templates#oauth)

