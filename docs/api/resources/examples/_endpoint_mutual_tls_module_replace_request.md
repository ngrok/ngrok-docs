
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"certificate_authority_ids":["ca_2GjCRY7re0DVYjOi7B2MjiQc8Qp"]}' \
https://api.ngrok.com/endpoint_configurations/ec_2GjCRYrx4kjpz4br7N8WEEV30Y6/mutual_tls
