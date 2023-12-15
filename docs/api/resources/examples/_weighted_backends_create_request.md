<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"acme weighted","metadata":"{\"environment\": \"staging\"}","backends":{"bkdhr_2ZGowEaj4CCcL8Qzq1FcrjvpZDU":0,"bkdhr_2ZGowGr4B6RgEOgPsx17ke0iWmo":1}}' \
https://api.ngrok.com/backends/weighted
```
