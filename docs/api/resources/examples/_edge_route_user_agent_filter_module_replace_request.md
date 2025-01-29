<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"allow":["(Pingdom\\.com_bot_version_)(\\d+)\\.(\\d+)"],"deny":["(made_up_bot)/(\\d+)\\.(\\d+)"],"enabled":true}' \
https://api.ngrok.com/edges/https/edghts_2sJsT8zKsAGXqw0WP49M3Z5awK1/routes/edghtsrt_2sJsT4DKGxzSsoRZGeN2uDSlvCM/user_agent_filter
```
