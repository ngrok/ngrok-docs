
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"certificate_authority_ids":["ca_2NTVHNFub76GPUMlEMkyuVmzSdy"]}' \
https://api.ngrok.com/endpoint_configurations/ec_2NTVHQ1xMowcpl8kiarmEcuGQ2y/mutual_tls
