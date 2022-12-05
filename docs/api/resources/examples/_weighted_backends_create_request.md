
#### Example Request
```bash
curl \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"acme weighted","metadata":"{\"environment\": \"staging\"}","backends":{"bkdhr_2GjEzc28my8MquX0l5Yuw30OdYK":0,"bkdhr_2GjEzd7SzXRVSx514XvXM3uM4r7":1}}' \
https://api.ngrok.com/backends/weighted
