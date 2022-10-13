
#### Example Request

```bash 
curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"SSH for device #001","region":"us"}' \
https://api.ngrok.com/reserved_addrs
