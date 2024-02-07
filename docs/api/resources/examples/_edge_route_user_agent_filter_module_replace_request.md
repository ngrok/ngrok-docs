<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"allow":["(Pingdom\\.com_bot_version_)(\\d+)\\.(\\d+)"],"deny":["(made_up_bot)/(\\d+)\\.(\\d+)"],"enabled":true}' \
https://api.ngrok.com/edges/https/edghts_2c35VrnvhgEHc6v2Yqn7SThLCXA/routes/edghtsrt_2c35VqrjVa1yvCaLDJNgVzjY0jb/user_agent_filter
```
