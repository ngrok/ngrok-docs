
#### Example Request
```bash
curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"environment\": \"production\"}"}' \
https://api.ngrok.com/edges/https/edghts_2Ggv0c15pi2kWstJ1rsbAZbghYE/routes/edghtsrt_2Ggv0h4Zd58wqtfRkJEHXu6dbIM
