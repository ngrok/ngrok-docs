
#### Example Request
```bash
curl \
-X PATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"environment\": \"production\"}"}' \
https://api.ngrok.com/edges/https/edghts_2NTVHZS1sVc6bragxNUzpdg46vD
