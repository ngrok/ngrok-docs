
###### Example Request
```curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"device alpha-2","metadata":"{\"device_id\": \"d5111ba7-0cc5-4ba3-8398-e6c79e4e89c2\"}"}' \
https://api.ngrok.com/credentials/cr_2E8b1yaHfxTtd6J1g0ZmxLF6gox
