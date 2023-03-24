
#### Example Request
```bash
curl \
-X PATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"ip_policy_ids":["ipp_2NTVHSYfQ6ITNb17CepXiR8H2HW","ipp_2NTVHOrbiTaUsltMjsiI2poQYgv"]}' \
https://api.ngrok.com/ip_restrictions/ipx_2NTVHSLZcy5kYxZpD4KqvzTkwaC
