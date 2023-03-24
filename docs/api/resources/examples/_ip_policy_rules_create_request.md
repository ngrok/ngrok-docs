
#### Example Request
```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"nyc office","cidr":"212.3.14.0/24","ip_policy_id":"ipp_2NTVHO7WnQtkGuRQR2cHQl9Fw0m","action":"allow"}' \
https://api.ngrok.com/ip_policy_rules
