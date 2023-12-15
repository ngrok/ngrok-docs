<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"allow":["(Pingdom\\.com_bot_version_)(\\d+)\\.(\\d+)"],"deny":["(made_up_bot)/(\\d+)\\.(\\d+)"]}' \
https://api.ngrok.com/edges/https/edghts_2ZGowvZOoS6JpRI9DiwSqkaatwK/routes/edghtsrt_2ZGowwu7RzsNVEpAk8IgXFlfO6v/user_agent_filter
```
