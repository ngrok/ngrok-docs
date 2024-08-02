<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"acme edge route","match":"/","match_type":"path_prefix","metadata":"{\"environment\": \"staging\"}"}' \
https://api.ngrok.com/edges/https/edghts_2k5okS9TpJaHYHL8wRCBEq5av1n/routes
```
