<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2rmHB0pwuJwzte8kQE6j2FWEsfI","ipp_2rmHAyozSpVAWIZfObtPRaZYeFN"]}' \
https://api.ngrok.com/edges/tls/edgtls_2rmHAzDafji431o0IDJBStrAEOZ/ip_restriction
