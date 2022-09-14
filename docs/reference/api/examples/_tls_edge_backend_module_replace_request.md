
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"backend_id":"bkdtg_2EmMQMI6tmY44GSetxogpAZkrNz"}' \
https://api.ngrok.com/edges/tls/edgtls_2EmMQGFKJC3HkX6tJw7U5TcRhiJ/backend
