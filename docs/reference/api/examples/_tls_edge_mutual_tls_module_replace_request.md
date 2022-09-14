
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"certificate_authority_ids":["ca_2ElyGu6zq9N3mZlHOsaLeLWvBC8"]}' \
https://api.ngrok.com/edges/tls/edgtls_2ElyGp5tBtYbZjGFfTbeb2Y7T17/mutual_tls
