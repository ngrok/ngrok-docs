<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"environment\": \"staging\"}","description":"ip policy creations","sources":[{"type":"ip_policy_created.v0"}],"destination_ids":["ed_2XGwDbfIhKbwtjdRqqEb29FUUEg"]}' \
https://api.ngrok.com/event_subscriptions
```
