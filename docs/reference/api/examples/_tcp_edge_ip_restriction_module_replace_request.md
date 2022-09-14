
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2ElyGgWvo6azfU8BtVx1jZ1icFf"]}' \
https://api.ngrok.com/edges/tcp/edgtcp_2ElyGmRVIzUd9CwQUZLe9O9E17h/ip_restriction
