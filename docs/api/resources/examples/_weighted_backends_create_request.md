<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"backends":{"bkdhr_33HIkNpL88LHpwPlUJbscwK0b4Y":1,"bkdhr_33HIkQLGtPTFDOLJgO8CkvLom3M":0},"description":"acme weighted","metadata":"{\"environment\": \"staging\"}"}' \
https://api.ngrok.com/backends/weighted
```
