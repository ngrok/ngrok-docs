<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"ip_policy_ids":["ipp_2vwXj1HwNb3UyRO4qvl1Xxg0lzy","ipp_2vwXj5psJqttUKrgQ4WTRZ0epFM"]}' \
https://api.ngrok.com/edges/tls/edgtls_2vwXj5phktuJmr24ZE6geG7OmYx/ip_restriction
