
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"ip_policy_ids":["ipp_2GjCRZFqNAoIqB1dPbBJLYPV8Om","ipp_2GjCRfJ8UUy2zOHBMw3013qakq6"]}' \
https://api.ngrok.com/ip_restrictions/ipx_2GjCRXxmWUshyQQZz9TgZifPJMT
