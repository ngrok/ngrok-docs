
###### Example Request
```curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"ip_policy":{"ip_policy_ids":["ipp_2EPdukiT6De3P5W0YRazRkid093"]}}' \
https://api.ngrok.com/endpoint_configurations/ec_2EPdufhRTpsNACM166DOr407BY1
