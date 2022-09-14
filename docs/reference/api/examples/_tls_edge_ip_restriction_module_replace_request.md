
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2EmMQKhLdabKpLzdS3Nlcw0rKMl","ipp_2EmMQNCXn91tb32dxPaDSDkZmip"]}' \
https://api.ngrok.com/edges/tls/edgtls_2EmMQGw0oHFC9xDEf8o5Sap7iPJ/ip_restriction
