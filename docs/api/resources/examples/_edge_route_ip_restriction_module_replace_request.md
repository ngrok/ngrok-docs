<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2vwXikYwybjkWw77NXO7LHOgK6Q","ipp_2vwXig45wZ5Mlu6yILoCXbjTkWP"]}' \
https://api.ngrok.com/edges/https/edghts_2vwXidh4VlnYcn25qPxSHqEKqdu/routes/edghtsrt_2vwXigA3B7wUmVrsPS15V5BrgYP/ip_restriction
