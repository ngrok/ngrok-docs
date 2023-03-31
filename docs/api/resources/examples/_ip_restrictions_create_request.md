
#### Example Request
```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"type":"dashboard","ip_policy_ids":["ipp_2NTVHSYfQ6ITNb17CepXiR8H2HW"]}' \
https://api.ngrok.com/ip_restrictions
