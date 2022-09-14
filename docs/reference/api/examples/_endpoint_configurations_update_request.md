
###### Example Request
```curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"ip_policy":{"ip_policy_ids":["ipp_2EmMOixLQ6LRQwA53ANzplQXB8p"]}}' \
https://api.ngrok.com/endpoint_configurations/ec_2EmMOVrSBgqkpG8TQI6eAoK0vxs
