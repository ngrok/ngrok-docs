
#### Example Request

```bash 
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"temporary access to staging machine for alan","metadata":"{\"user_email\": \"alan@example.com\"}"}' \
https://api.ngrok.com/ssh_user_certificates/sucrt_2EmMPemoVPFPR166YciT5UY8ZeJ
