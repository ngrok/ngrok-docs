
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"ip_policy_ids":["ipp_2GjCRZdDIAi7e6tv25puahmGGFm"]}' \
https://api.ngrok.com/endpoint_configurations/ec_2GjCRYrx4kjpz4br7N8WEEV30Y6/ip_policy
