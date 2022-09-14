
###### Example Request
```curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"tripped_duration":120,"rolling_window":300,"num_buckets":5,"volume_threshold":20,"error_threshold_percentage":0.2}' \
https://api.ngrok.com/edges/https/edghts_2ElyFqGaoQvi9cOLy9hE9LCP4ga/routes/edghtsrt_2ElyFrfiUAg7AdpJvfOcaL7zwB1/circuit_breaker
