
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"my dev machine","metadata":"{\"hostname\": \"macbook.local\"}"}' \
https://api.ngrok.com/ssh_credentials/sshcr_2GjCRRG1FJc4Jq2axr0lbnuV0QN
