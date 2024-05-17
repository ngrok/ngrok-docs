<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"error_threshold_percentage":0.2,"num_buckets":5,"rolling_window":300,"tripped_duration":120,"volume_threshold":20}' \
https://api.ngrok.com/endpoint_configurations/ec_2fmnydmDQhhlCTehESQeu2Q0pcY/circuit_breaker
```
