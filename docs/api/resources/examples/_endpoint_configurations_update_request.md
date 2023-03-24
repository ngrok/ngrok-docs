
#### Example Request
```bash
curl \
-X PATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"ip_policy":{"ip_policy_ids":["ipp_2NTVGVyp0WSYFBew6YI3RTQGdAl"]}}' \
https://api.ngrok.com/endpoint_configurations/ec_2NTVGZPJYevUXrQf3NWongxLIVQ
