
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"ACME Co. Device Ingress","metadata":"{\"device_sku\": \"824JS4RZ1F8X\"}"}' \
https://api.ngrok.com/agent_ingresses/agin_2Ggv0Wh8JeSecVT1hDWDWsnnflp
