
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"certificate_authority_ids":["ca_2NTVI4vq0nA7tvODk1uXIco2lJU"]}' \
https://api.ngrok.com/edges/tls/edgtls_2NTVI6wrLBCXP2rJlyAtvIMfIfP/mutual_tls
