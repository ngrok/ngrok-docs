---
title: Overview
---

# Errors

## Philosophy

When you encounter an error while using ngrok, we report a globally unique
error code. Each error code corresponds to a specific location in ngrok's code
which helps us quickly identify where something went wrong and help you know
exactly how to fix it.

When your report a bug or email us about a support issue, please include the
unique error code if you have encountered one. It will help us diagnose and
solve your issue much more quickly.

ngrok's error codes were also designed so that you can paste them into your
favorite search engine and immediately find a dedicated page with instructions
on how to fix your problem.

## Programmatic Error Handling

When working with ngrok's programmatically, we return these unique error codes
in a structured way so that you can write software which appropriately handles
different error conditions.

- [API Error Handling](/api/#errors)

## Common Errors

You're more likely to run into some errors than others. The most common are
listed here to help make your troubleshooting easier.

| Code | Message |
| --- | --- |
| [ERR\_NGROK\_100](/docs/errors/err_ngrok_100) | Invalid metadata length |
| [ERR\_NGROK\_108](/docs/errors/err_ngrok_108) | You've hit your account limit for simultaneous ngrok agent sessions. Try stopping an existing agent or upgrading your account. |
| [ERR\_NGROK\_1226](/docs/errors/err_ngrok_1226) | You are disallowed from creating an ngrok account due to violation of the terms of service. |
| [ERR\_NGROK\_4100](/docs/errors/err_ngrok_4100) | The email or password you entered is not valid. |
| [ERR\_NGROK\_1205](/docs/errors/err_ngrok_1205) | You failed to solve the catpcha, please try again. |
| [ERR\_NGROK\_3004](/docs/errors/err_ngrok_3004) | ngrok gateway error. The server returned an invalid or incomplete HTTP response. Try starting ngrok with the full upstream service URL (e.g. ngrok http https://localhost:8081) |
| [ERR\_NGROK\_3200](/docs/errors/err_ngrok_3200) | Tunnel not found. This could be because your agent is not online or your tunnel has been flagged by our automated moderation system. |
| [ERR\_NGROK\_4101](/docs/errors/err_ngrok_4101) | A user with the email address already exists. |
| [ERR\_NGROK\_4011](/docs/errors/err_ngrok_4011) | Your password must be at least 10 characters. |
| [ERR\_NGROK\_4013](/docs/errors/err_ngrok_4013) | You may not create a new account because you are already a member of a free account. Upgrade or delete that account first before creating a new account. |
| [ERR\_NGROK\_4108](/docs/errors/err_ngrok_4108) | Sign ups are disallowed for the email provider. Please sign up with a different email provider. |


## All Errors

Consult the [Errors Reference Documentation](/docs/errors/reference) for a
complete list of all of ngrok's error codes.
