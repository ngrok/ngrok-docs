
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"ip_policy_ids":["ipp_2Ggv0XFuJf5O8WbGZUXPFr7qqpG","ipp_2Ggv0alTJzUMOVHpBD76HgfEUSd"]}' \
https://api.ngrok.com/ip_restrictions/ipx_2Ggv0XO1iGFw7Yf5RaEjTP6lqxg
