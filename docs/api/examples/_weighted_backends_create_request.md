<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"backends":{"bkdhr_2rcCv42M49sznEmtykY1uXBWIvq":1,"bkdhr_2rcCv6vGnWzvPWGryyNzP5CE4SI":0},"description":"acme weighted","metadata":"{\"environment\": \"staging\"}"}' \
https://api.ngrok.com/backends/weighted
```
