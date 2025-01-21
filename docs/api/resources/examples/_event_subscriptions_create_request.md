<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"ip policy creations","destination_ids":["ed_2rwwl4mEOlub2S8fwJGZTF25Dex"],"metadata":"{\"environment\": \"staging\"}","sources":[{"type":"ip_policy_created.v0"}]}' \
https://api.ngrok.com/event_subscriptions
```
