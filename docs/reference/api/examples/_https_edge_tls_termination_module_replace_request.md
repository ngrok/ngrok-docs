
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"min_version":"1.3"}' \
https://api.ngrok.com/edges/https/edghts_2ElyGeqM3lT5BxYVXmk0qILbVj6/tls_termination
