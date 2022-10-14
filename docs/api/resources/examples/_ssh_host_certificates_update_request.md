
#### Example Request

```bash 
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"region\": \"us-west-2\"}"}' \
https://api.ngrok.com/ssh_host_certificates/shcrt_2EmMPgsNm1gnk518GHSfPoKOao4
