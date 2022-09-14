
###### Example Request
```curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"environment\": \"production\"}"}' \
https://api.ngrok.com/backends/http_response/bkdhr_2ElyFYOsSAAe3Q9kObM2DEwtO5F
