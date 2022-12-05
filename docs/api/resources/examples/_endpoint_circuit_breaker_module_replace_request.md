
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"tripped_duration":120,"rolling_window":300,"num_buckets":5,"volume_threshold":20,"error_threshold_percentage":0.2}' \
https://api.ngrok.com/endpoint_configurations/ec_2GjEzJ2fskcBbTAjCRt6hDxAONG/circuit_breaker
