<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"allow":["(Pingdom\\.com_bot_version_)(\\d+)\\.(\\d+)"],"deny":["(made_up_bot)/(\\d+)\\.(\\d+)"],"enabled":true}' \
https://api.ngrok.com/edges/https/edghts_30j7n7RCt1mFMNeIJriXxdZhDRg/routes/edghtsrt_30j7n4xvkSPTTP4AKWaIJtd0kCG/user_agent_filter
```
