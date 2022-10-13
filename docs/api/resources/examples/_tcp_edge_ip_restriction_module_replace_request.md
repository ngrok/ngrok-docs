
#### Example Request

```bash 
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2EmMQJMSI6Ul0lQEj5f4fJDXVgI"]}' \
https://api.ngrok.com/edges/tcp/edgtcp_2EmMQHThbMY9cKvjLHfnv3sg1xZ/ip_restriction
