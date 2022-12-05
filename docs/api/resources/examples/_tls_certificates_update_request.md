
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"example\": true}"}' \
https://api.ngrok.com/tls_certificates/cert_2GjEzSTPfMChuOG99Vt2vR8bbI6
