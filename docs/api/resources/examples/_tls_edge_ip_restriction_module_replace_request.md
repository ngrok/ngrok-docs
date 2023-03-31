
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2NTVHzzXty28mJVhQG47JjVneHA","ipp_2NTVI09fA5I9wEaYYcE7Q1SxhZc"]}' \
https://api.ngrok.com/edges/tls/edgtls_2NTVI0w8PFpsZoUfKKTrDWA0e80/ip_restriction
