
#### Example Request
```bash
curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"type":"dashboard","ip_policy_ids":["ipp_2Ggv0XFuJf5O8WbGZUXPFr7qqpG"]}' \
https://api.ngrok.com/ip_restrictions
