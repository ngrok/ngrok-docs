
#### Example Request
```bash
curl \
-X PATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"my dev machine","metadata":"{\"hostname\": \"macbook.local\"}"}' \
https://api.ngrok.com/ssh_credentials/sshcr_2NTVHM2umzHcbpQqQ9XeDWHwGfU
