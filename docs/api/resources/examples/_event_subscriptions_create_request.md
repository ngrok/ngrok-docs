
#### Example Request
```bash
curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"environment\": \"staging\"}","description":"ip policy creations","sources":[{"type":"ip_policy_created.v0"}],"destination_ids":["ed_2Ggv0Vxr6Lr7L8GGoG3dQ9DxQW8"]}' \
https://api.ngrok.com/event_subscriptions
