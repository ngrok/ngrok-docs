
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"example\": true}"}' \
https://api.ngrok.com/tls_certificates/cert_2GjCRcHjCCIiM0Xt0I9e1n1WK2H
