<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"acme weighted","metadata":"{\"environment\": \"staging\"}","backends":{"bkdhr_2bMmWkytm4EreHjdQ0SUEtHjyop":0,"bkdhr_2bMmWodVFZlIoyCmhtRsHTOaT5v":1}}' \
https://api.ngrok.com/backends/weighted
```
