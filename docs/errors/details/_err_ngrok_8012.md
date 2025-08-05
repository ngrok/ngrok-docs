### Overview

This error occurs when the ngrok agent successfully receives traffic but fails to establish a connection with your local service (the "upstream" service). While the tunnel is created successfully, ngrok cannot forward the traffic to your application. This can happen with a Agent Endpoint or when using a Cloud Endpoint that forwards traffic to an agent.

### Common Issues and Solutions

1. **Local Service Not Running or Inaccessible**

   **Cause:** The web service or application on your local machine is not active or cannot be reached.

   **Resolution:**

   - Start your local service.
   - Confirm you can access it directly (e.g., http://localhost:8080).
   - Restart ngrok with the correct port number.

2. **Incorrect Port Specified**

   **Cause:** The port in your ngrok command doesn't match your local service's port.

   **Resolution:**

   - Verify the port your local service is using.
   - Update your ngrok command to use the correct port.
   - Example: Use `ngrok http 3000` if your service runs on port 3000.

### General Troubleshooting Steps

1. Verify local service accessibility without ngrok.
2. Ensure the latest ngrok version is installed.
3. Restart the ngrok agent.

### Preventing Downtime

1. Use a Cloud Endpoint with a Traffic Policy to provide a better user experience. Instead of showing an error, you can detect the connection failure and serve a custom maintenance page. [Learn more about Cloud Endpoints and Traffic Policy](/docs/universal-gateway/cloud-endpoints/)

2. Use Endpoint Pooling to achieve high availability. By load balancing across multiple agents, traffic is automatically routed away from any agent experiencing this error, preventing any impact on your users. [Learn more about Endpoint Pooling](/docs/universal-gateway/endpoint-pooling/)
