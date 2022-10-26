
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"Internal Corporate Services Authority (Legacy)"}' \
https://api.ngrok.com/certificate_authorities/ca_2Ggv0Ua1yvGbu7xN0U4uBRKyrNX
