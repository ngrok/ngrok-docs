
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true}' \
https://api.ngrok.com/edges/https/edghts_2GjEzhfUDMNetzPQqBR3Xlbz7Di/routes/edghtsrt_2GjEzkBEQxPI8A6fldHEV7KBY28/compression
