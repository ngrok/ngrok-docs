
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{}' \
https://api.ngrok.com/event_subscriptions/esb_2Ggv0YVjkncIlRXKDu1h2yptfTZ/sources/ip_policy_updated.v0
