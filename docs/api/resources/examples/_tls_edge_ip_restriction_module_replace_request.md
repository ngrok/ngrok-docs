<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2TMGJo693AyKky2HOTWLhLT8TFQ","ipp_2TMGJo83W4EW93unJ4Rhv0Lvc3z"]}' \
https://api.ngrok.com/edges/tls/edgtls_2TMGJoe82PQgEU6hfVj6GZQxHJ5/ip_restriction
