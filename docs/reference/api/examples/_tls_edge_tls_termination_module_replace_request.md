
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"terminate_at":"edge","min_version":"1.3"}' \
https://api.ngrok.com/edges/tls/edgtls_2ElyGtJrV61Wu5hH2IndnVoIuM6/tls_termination
