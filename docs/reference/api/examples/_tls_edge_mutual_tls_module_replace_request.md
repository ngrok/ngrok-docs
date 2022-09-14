
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"certificate_authority_ids":["ca_2EmMQGCGbggqHu3HjatGPdg7VW4"]}' \
https://api.ngrok.com/edges/tls/edgtls_2EmMQMarkSHIvESBJLx2piUW4Wy/mutual_tls
