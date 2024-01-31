<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"tripped_duration":120,"rolling_window":300,"num_buckets":5,"volume_threshold":20,"error_threshold_percentage":0.2}' \
https://api.ngrok.com/edges/https/edghts_2bMmWq9YUbSHY0WzF4Antx0qNDS/routes/edghtsrt_2bMmWqITr9h6Y1v6W78wOBibqq7/circuit_breaker
```
