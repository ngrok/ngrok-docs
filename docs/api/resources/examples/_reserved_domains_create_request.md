
#### Example Request
```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"domain":"myapp.mydomain.com","region":"us","certificate_id":"cert_2NTVGhIqFHEVgSZx1oOtBvhMYus"}' \
https://api.ngrok.com/reserved_domains
