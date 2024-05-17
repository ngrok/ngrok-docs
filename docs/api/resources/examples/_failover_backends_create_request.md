<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"backends":["bkdhr_2fmnyqDjoo5HmRwJ9gx1GLLyKuS"],"description":"acme failover","metadata":"{\"environment\": \"staging\"}"}' \
https://api.ngrok.com/backends/failover
```
