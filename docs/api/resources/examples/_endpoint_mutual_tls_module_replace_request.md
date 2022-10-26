
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"certificate_authority_ids":["ca_2Ggv0RPYUi5ksBUDmwrxJkiXj6H"]}' \
https://api.ngrok.com/endpoint_configurations/ec_2Ggv0QjGkcQpC961Gzio77eENhG/mutual_tls
