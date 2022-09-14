
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"certificate_authority_ids":["ca_2ElyGavdEg9hUgh1YX9UW7Ity8j"]}' \
https://api.ngrok.com/edges/https/edghts_2ElyGZZtOR4LbIHXAaBKTA9SV23/mutual_tls
