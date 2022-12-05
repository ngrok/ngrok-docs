
#### Example Request
```bash
curl \
-XPUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"tripped_duration":120,"rolling_window":300,"num_buckets":5,"volume_threshold":20,"error_threshold_percentage":0.2}' \
https://api.ngrok.com/edges/https/edghts_2GjEzerix6mg8Ep5mryN1P6GXi1/routes/edghtsrt_2GjEzhBlw27bMgEKIFBylH7iLsi/circuit_breaker
