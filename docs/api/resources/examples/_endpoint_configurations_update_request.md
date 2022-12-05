
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"ip_policy":{"ip_policy_ids":["ipp_2IEh2AzQ4m5x8DDhBi3JlSdwwRE"]}}' \
https://api.ngrok.com/endpoint_configurations/ec_2IEh24HHGq0DLtZyVy0mxtgt23k
