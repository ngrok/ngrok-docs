<!-- Code generated for API Clients. DO NOT EDIT. -->
#### Example Request
```bash
curl \
-X POST \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"deployment":{"name":"ngrok-operator","namespace":"ngrok-operator"},"description":"Example Kubernetes Operator","enabled_features":["Ingress"],"metadata":"{\"environment\": \"staging\"}","region":"global"}' \
https://api.ngrok.com/kubernetes_operators
