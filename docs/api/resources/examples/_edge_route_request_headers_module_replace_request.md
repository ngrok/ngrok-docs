<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"add":{"x-frontend":"ngrok"},"remove":["cache-control"]}' \
https://api.ngrok.com/edges/https/edghts_2XH3svuHzMzn0Xk4RZdr5aq5GyX/routes/edghtsrt_2XH3sr01pqNvzQf7WcfWuWpKoxB/request_headers
```
