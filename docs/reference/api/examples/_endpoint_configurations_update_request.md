
###### Example Request
```curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"ip_policy":{"ip_policy_ids":["ipp_2E8b1ol6Fy7l3BkewGneuLMQ5dP"]}}' \
https://api.ngrok.com/endpoint_configurations/ec_2E8b1jMtxgc2cKSLpDSz95Sa6Aq
