<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"error_threshold_percentage":0.2,"num_buckets":5,"rolling_window":300,"tripped_duration":120,"volume_threshold":20}' \
https://api.ngrok.com/edges/https/edghts_334Afx3GIBMuT4Y9ZlL89LygR6c/routes/edghtsrt_334Ag0MYadZT0EP92jt8AAk06iF/circuit_breaker
```
