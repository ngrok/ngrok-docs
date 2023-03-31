
#### Example Request
```bash
curl \
-X PATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"environment\": \"production\"}"}' \
https://api.ngrok.com/edges/https/edghts_2NTVHVP15KjqmYQ9zneCgN1g6jt/routes/edghtsrt_2NTVHZDzqhegMQLdvEDJgDTvuiG
