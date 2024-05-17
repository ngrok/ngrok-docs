<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"error_threshold_percentage":0.2,"num_buckets":5,"rolling_window":300,"tripped_duration":120,"volume_threshold":20}' \
https://api.ngrok.com/edges/https/edghts_2fmnytChbJsBhjrzFhFpbi6ZVbC/routes/edghtsrt_2fmnytMrNfxwDhCYs72yZlwB9Ai/circuit_breaker
```
