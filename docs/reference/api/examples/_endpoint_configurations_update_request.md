
###### Example Request
```curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"ip_policy":{"ip_policy_ids":["ipp_2CdYYUkFYOMjrOBqTojiSm2zJky"]}}' \
https://api.ngrok.com/endpoint_configurations/ec_2CdYYYlY53FO96bkMwEL6wc6W2z
