
###### Example Request
```curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"type":"dashboard","ip_policy_ids":["ipp_2ElyFL8laJVrQij3usUOCnuZbGT"]}' \
https://api.ngrok.com/ip_restrictions
