
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"environment\": \"production\"}"}' \
https://api.ngrok.com/edges/https/edghts_2GjEzauDT9HwwcMwJ1zoDnv7A1t/routes/edghtsrt_2GjEzZDctNIzVHa5Dcjxk25rM1x
