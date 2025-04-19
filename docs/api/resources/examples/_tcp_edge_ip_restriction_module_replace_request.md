<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2vwXiulYeQeIz3xcWrqDRrKCQwM"]}' \
https://api.ngrok.com/edges/tcp/edgtcp_2vwXiyZzjBdCAHgVsbIJkEgrFUu/ip_restriction
