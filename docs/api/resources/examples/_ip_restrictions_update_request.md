
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"ip_policy_ids":["ipp_2GjEzPZRDj5IDJxtZKvcogPCugW","ipp_2GjEzQ2zEhNUqgnSvqmYIXvPrFf"]}' \
https://api.ngrok.com/ip_restrictions/ipx_2GjEzQLokhdmTHfAKg6ultsD0FJ
