---
title: Errors
---

import AllErrors from './_err_list_manual.md';

# Error Codes

When something goes wrong with ngrok, we report a unique error code. Each error code points to a specific location in our codebase and our engineers can use that to triage or give you specific instructions about what happened and the steps you can take to fix it. These codes were also designed so that you could quickly search your favorite search engine to find more information. Adding this code to your issue, comment, or support message will help everyone else trying to fix this issue.


## Common Error Codes

Some error codes occur more frequently than others. Here is a list of the common error codes.

| Code | Message |
| --- | --- |
| [ERR\_NGROK\_100](/docs/errors/err_ngrok_100) | Invalid metadata length |
| [ERR\_NGROK\_108](/docs/errors/err_ngrok_108) | You've hit your account limit for simultaneous ngrok agent sessions. Try stopping an existing agent or upgrading your account. |
| [ERR\_NGROK\_120](/docs/errors/err_ngrok_120) | Your ngrok agent version "<VERSION>" is no longer supported. Only the most recent version of the ngrok agent is supported without an account. Update to a newer version with `ngrok update` or by downloading from https://ngrok.com/download. Sign up for an account to avoid forced version upgrades: https://ngrok.com/signup. |
| [ERR\_NGROK\_1205](/docs/errors/err_ngrok_1205) | You failed to solve the catpcha, please try again. |
| [ERR\_NGROK\_1226](/docs/errors/err_ngrok_1226) | You are disallowed from creating an ngrok account due to violation of the terms of service. |
| [ERR\_NGROK\_3004](/docs/errors/err_ngrok_3004) | ngrok gateway error. The server returned an invalid or incomplete HTTP response. Try starting ngrok with the full upstream service URL (e.g. ngrok http https://localhost:8081) |
| [ERR\_NGROK\_3200](/docs/errors/err_ngrok_3200) | Tunnel not found. This could be because your agent is not online or your tunnel has been flagged by our automated moderation system. |
| [ERR\_NGROK\_3208](/docs/errors/err_ngrok_3208) | The account associated with this hostname has been banned.We've determined this account to be in violation of ngrok's terms of service.If you are the account owner and believe this is a mistake, please contact support@ngrok.com.|
| [ERR\_NGROK\_4011](/docs/errors/err_ngrok_4011) | Your password must be at least 10 characters. |
| [ERR\_NGROK\_4013](/docs/errors/err_ngrok_4013) | You may not create a new account because you are already a member of a free account. Upgrade or delete that account first before creating a new account. |
| [ERR\_NGROK\_4100](/docs/errors/err_ngrok_4100) | The email or password you entered is not valid. |
| [ERR\_NGROK\_4101](/docs/errors/err_ngrok_4101) | A user with the email address already exists. |
| [ERR\_NGROK\_4108](/docs/errors/err_ngrok_4108) | Sign ups are disallowed for the email provider. Please sign up with a different email provider. |
| [ERR\_NGROK\_6022](/docs/errors/err_ngrok_6022) | Before you can serve HTML content, you must sign up for an ngrok account and install your authtoken. |
| [ERR\_NGROK\_6024](/docs/errors/err_ngrok_6024) | You are about to visit <HOSTPORT>, served by <SERVINGIP>. This website is served for free through ngrok.com. You should only visit this website if you trust whoever sent the link to you. |
| [ERR\_NGROK\_8012](/docs/errors/err_ngrok_8012) | Traffic was successfully tunneled to the ngrok agent, but the agent failed to establish a connection to the upstream web service |


## All Error Codes

Use this table to find more information about the error code you received.

<AllErrors />
