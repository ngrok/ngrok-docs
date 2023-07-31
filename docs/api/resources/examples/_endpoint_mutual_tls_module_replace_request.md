<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"certificate_authority_ids":["ca_2TMGIrZT7CSS1IXfS3JT5cc0myM"]}' \
https://api.ngrok.com/endpoint_configurations/ec_2TMGIxNLkJwLhd5rsvtPAfCnaSV/mutual_tls
