<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"acme failover","metadata":"{\"environment\": \"staging\"}","backends":["bkdhr_2XH3sbIZGWemELRkRhKnEUCnE3m"]}' \
https://api.ngrok.com/backends/failover
```
