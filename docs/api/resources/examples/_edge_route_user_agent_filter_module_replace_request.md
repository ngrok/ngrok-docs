<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"allow":["(Pingdom\\.com_bot_version_)(\\d+)\\.(\\d+)"],"deny":["(made_up_bot)/(\\d+)\\.(\\d+)"]}' \
https://api.ngrok.com/edges/https/edghts_2arwc7Twa4BbQqpK52an8EWLai3/routes/edghtsrt_2arwc2JqQoGdOceuL35jaoSQWdv/user_agent_filter
```
