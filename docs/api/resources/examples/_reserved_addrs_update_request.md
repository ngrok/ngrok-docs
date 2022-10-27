
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"proto\": \"ssh\"}","endpoint_configuration_id":"ec_2Gj44leXzK5eBVsrPIoxQzkn3VB"}' \
https://api.ngrok.com/reserved_addrs/ra_2Gj41llnOhjzdiM4l6yIeRkGeLE
