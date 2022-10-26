
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"ip_policy_ids":["ipp_2Ggv0N8r1Cm2gNmLsozxSLBHbPL"]}' \
https://api.ngrok.com/endpoint_configurations/ec_2Ggv0QjGkcQpC961Gzio77eENhG/ip_policy
