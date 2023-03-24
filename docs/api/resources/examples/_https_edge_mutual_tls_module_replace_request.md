
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"certificate_authority_ids":["ca_2NTVHyCM4Xh7WGW3MdJ2ORg6S7W"]}' \
https://api.ngrok.com/edges/https/edghts_2NTVHymCDGAJNHB6f8DF3M9jPCN/mutual_tls
