
###### Example Request
```curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"metadata={\"pod-id\": \"b3d9c464-4f48-4783-a741-d7d7d5db310f\"}"}' \
https://api.ngrok.com/ip_policies/ipp_2EPdugUxB4p7pAP9C9PNuMpmmwO
