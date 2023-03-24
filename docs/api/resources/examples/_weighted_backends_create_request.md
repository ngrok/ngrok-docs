
#### Example Request
```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"acme weighted","metadata":"{\"environment\": \"staging\"}","backends":{"bkdhr_2NTVHXMhdfoxxpr9RvzhWEzRjkI":0,"bkdhr_2NTVHZ1EFqA7UkmtdjwnP4ND4NI":1}}' \
https://api.ngrok.com/backends/weighted
