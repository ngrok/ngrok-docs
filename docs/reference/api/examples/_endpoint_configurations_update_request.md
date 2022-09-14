
###### Example Request
```curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"ip_policy":{"ip_policy_ids":["ipp_2ElyEKgvqhLG8FgV4C1CaJxpQbu"]}}' \
https://api.ngrok.com/endpoint_configurations/ec_2ElyEMA08F8ZYSG5xY5mIMAAq66
