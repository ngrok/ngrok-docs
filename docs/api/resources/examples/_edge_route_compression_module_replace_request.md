
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true}' \
https://api.ngrok.com/edges/https/edghts_2GjCRvEgcfsmGFT8aaVi1QNfOdN/routes/edghtsrt_2GjCRpgCo5WI7sbM0vYaoUIYtlQ/compression
