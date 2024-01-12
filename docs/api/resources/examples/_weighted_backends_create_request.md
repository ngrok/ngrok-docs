<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"description":"acme weighted","metadata":"{\"environment\": \"staging\"}","backends":{"bkdhr_2arwbXJEsJw0QmeX3jSGBmWnr5f":1,"bkdhr_2arwba15fxjdAhTEKlsmZzyI84q":0}}' \
https://api.ngrok.com/backends/weighted
```
