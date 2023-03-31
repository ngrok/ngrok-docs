
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2NTVHfsAe0RwGMd2f1V0Kg6nJcS","ipp_2NTVHiiPOhvA6FyU3EcG7mauomN"]}' \
https://api.ngrok.com/edges/https/edghts_2NTVHdHnxWG4DKM1etjSzuv5lTL/routes/edghtsrt_2NTVHiffef0QKZ42EhgQi31MZbW/ip_restriction
