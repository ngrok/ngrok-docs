
#### Example Request
```bash
curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"nyc office","cidr":"212.3.14.0/24","ip_policy_id":"ipp_2GjCRVFIed4zgWfyvOBzLPDU4Gu","action":"allow"}' \
https://api.ngrok.com/ip_policy_rules
