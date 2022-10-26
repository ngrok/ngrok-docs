
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2Ggv0jZdY1djRolhLGiAWq3hpFY","ipp_2Ggv0rADdWtJHAZeZiEViI3HQ5V"]}' \
https://api.ngrok.com/edges/https/edghts_2Ggv0q0DGAmTtVMwcUtCwjXRPe2/routes/edghtsrt_2Ggv0jgULlas2KQZdmTJGPL7cLT/ip_restriction
