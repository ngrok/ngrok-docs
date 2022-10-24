---
description: Add Google, GitHub and other authN providers in front of your services with a single command
---

# OAuth

Add Google, GitHub and other authN providers in front of your services with a single command

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

- Restrict access to ngrok tunnels with OAuth with one command
- Unauthorized access is blocked even before reaching your apps
- No OAuth skills required!

## Use it!

1. [Sign up for ngrok](https://ngrok.com/signup)
2. Launch a tunnel with one of our OAuth providers. For example:

    ```bash
    ngrok http 80 --oauth=github
    ```

3. Filter access by email, or user identity:

    ```bash
    ngrok http 80 --oauth=github \
    --oauth-allow-domain=ngrok.com
    ```

3. Send information about the logged user via headers:

    ```bash
    ngrok http 80 --oauth=github \
    --oauth-allow-domain=ngrok.com \
    --request-header-add "userEmail: \${.oauth.user.email}"
    ```


Learn more:

- [OAuth module](cloud-edge/modules/oauth)
- [HTTP Header Templates](http-header-templates#oauth)

## FAQ

### What providers ngrok supports?

Github, Microsoft, Google, Twitch, and Amazon.