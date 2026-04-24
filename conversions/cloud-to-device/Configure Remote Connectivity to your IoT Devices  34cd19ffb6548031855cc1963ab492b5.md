# Configure Remote Connectivity to your IoT Devices in the Field (1)

Learn how to use ngrok to remotely access IoT devices and services. Connect remotely without a VPN.

ngrok is a universal gateway, which means it allows you to connect to any app, IoT device, or service without networking expertise.

This guide will walk you through an example scenario using ngrok to set up a secure, controlled remote access solution for IoT devices. The solution will enable you to grant trusted parties access to critical systems without exposing those systems to the public internet or relying on complex VPN setups.

## **Example scenario**

Consider a situation where a network of smart factories is coming online, each with IoT-connected controllers, security cameras, and machine sensors. In this scenario, each factory’s network blocks inbound connections. However, your technicians need to do remote maintenance on these cameras via SSH, and your SaaS platform’s cloud software needs access to device data via a web app for mission critical operations. 

## Architectural Reference

![Device GW Arch (1).png](Configure%20Remote%20Connectivity%20to%20your%20IoT%20Devices%20/Device_GW_Arch_(1).png)

### **Why only one ngrok Agent per factory?**

Traditionally, you might assume that every device inside the factory needs its own ngrok agent, but this isn’t necessary. A single ngrok agent is installed on a network-accessible machine inside the factory. The agent acts as a central gateway (jumpbox) that can reach any machine on the local network, eliminating the need for multiple agents.

## **What you’ll need**

- An ngrok account. If you don’t have one, [**sign up**](https://dashboard.ngrok.com/signup).
- An ngrok agent configured in a remote IoT based network. See the [**getting started guide**](https://ngrok.com/docs/getting-started) for instructions on how to install the ngrok agent.

### **Step 1. Create a Service User and authtoken for isolated network access**

First, you’ll create a service user and an associated authtoken for each of your factories. A Service User is intended for automated systems that programmatically interact with your ngrok account (other platforms sometimes call this concept a Service Account). Create a separate Service User + associated authtoken for each of your factories so that:

1. Their usage of your ngrok account is isolated and scoped with a specific permission set
2. If an agent is compromised you can revoke its access independently
3. Agent start/stop audit events are properly attributed to each customer
4. Your ngrok agents don’t stop working if the human user who set them up leaves your ngrok account.

Navigate to the [**Service Users](https://dashboard.ngrok.com/service-users)** section of your dashboard and click “new Service User”.

![Screenshot 2026-01-23 at 12.35.00 PM.png](Configure%20Remote%20Connectivity%20to%20your%20IoT%20Devices%20/Screenshot_2026-01-23_at_12.35.00_PM.png)

Next, create an authtoken assigned to this specific bot user. 

![image.png](Configure%20Remote%20Connectivity%20to%20your%20IoT%20Devices%20/image.png)

### **Step 2: Install the ngrok Agent within your remote network and configure internal Agent endpoints in ngrok.yml**

Configure the agent to create internal Agent Endpoints that point to the devices you want to remotely access. This will connect the devices to your ngrok account but nothing will be able to connect to them until completing the subsequent steps. The configuration to achieve this is shown below in the example agent configuration file.

Internal Endpoints ****are private endpoints that only receive traffic when forwarded through the

[**forward-internal Traffic Policy action**](https://ngrok.com/docs/traffic-policy/actions/forward-internal). This allows you to route traffic to an application through ngrok without making it publicly addressable. Internal endpoint URL hostnames must end with `.internal`. 

After installing the ngrok agent, define internal endpoints for each service you want to remotely access inside the ngrok configuration file. You can install ngrok and its configuration file in `/path/to/ngrok/ngrok.yml` and the executable in `/path/to/ngrok/ngrok` .

```yaml
version: 3

agent:
  authtoken: AUTHTOKEN_CREATED_IN_STEP_1

endpoints:
  - name: Internal Endpoint for Controller
    url: https://controller.internal
    upstream:
      url: 8080 
  - name: Internal Endpoint for Sensor
    url: https://sensor.internal
    upstream:
      url: 8081 
  - name: Internal Endpoint for Security Camera
    url: tcp://camera.internal:22
    upstream:
      url: 22 
```

### **Step 3: Reserve a tcp address for security camera connectivity**

Reserving a TCP address is required for creating a TCP cloud endpoint which will be done in a later step. By reserving a TCP address, this address is held specifically for your ngrok account. 

![Screenshot 2026-01-23 at 12.37.00 PM.png](Configure%20Remote%20Connectivity%20to%20your%20IoT%20Devices%20/Screenshot_2026-01-23_at_12.37.00_PM.png)

### **Step 4: Create your cloud endpoints and attach a Traffic Policy**

Cloud Endpoints are persistent, always-on endpoints whose creation, deletion, and configuration is managed centrally via the Dashboard or API. They exist permanently until they are explicitly deleted. Cloud Endpoints do not forward their traffic to an agent by default and instead only use their attached **Traffic Policy** to handle connections.

Create a public Cloud Endpoint in the ngrok dashboard by navigating to endpoints and clicking **new** as shown in the screenshot below:

![Screenshot 2026-02-10 at 1.54.24 PM.png](Configure%20Remote%20Connectivity%20to%20your%20IoT%20Devices%20/Screenshot_2026-02-10_at_1.54.24_PM.png)

Additionally, create Cloud Endpoints for the sensor and camera: “*https://sensor.acme.com” and “tcp://1.tcp.ngrok.io:12345“ (using your reserved TCP addr).*

Click on your newly created controller Cloud Endpoint and replace the default Traffic Policy with:

```yaml
on_http_request:
  - actions:
      - type: forward-internal
        config:
          url: https://controller.internal
```

Click on your newly created sensor Cloud Endpoint and replace the default Traffic Policy with:

```yaml
on_http_request:
  - actions:
      - type: forward-internal
        config:
          url: https://sensor.internal
```

Click on your newly created camera Cloud Endpoint and replace the default Traffic Policy with:

```yaml
on_tcp_connect:
  - actions:
      - type: forward-internal
        config:
          url: tcp://camera.internal:22
```

### **Step 5: Secure your cloud endpoints with OAuth, TLS version control, and IP Restrictions**

Navigate to your newly created cloud endpoints in the [endpoints](https://dashboard.ngrok.com/authtokens) tab on your ngrok dashboard, and apply a traffic policy action to each. For this example, we can apply OAuth to your controller endpoint, enforce a minimum TLS version for your sensor endpoint and, enable IP restrictions for your camera endpoint. Feel free to browse through the full list of traffic policy actions listed [here](https://ngrok.com/docs/traffic-policy/actions). You can add this action directly to the cloud endpoint’s YAML configuration. The properly final traffic policy config for each endpoint can be seen below:

*https://controller.acme.com*

```yaml
on_http_request:
  - actions:
      - type: oauth
        config:
          provider: google
          client_id: '{your app's oauth client id}'
          client_secret: '{your app's oauth client secret}'
          scopes:
            - https://www.googleapis.com/auth/userinfo.email
  - actions:
      - type: forward-internal
        config:
          url: https://controller.internal
```

*https://sensor.acme.com*

```yaml
on_tcp_connect:
  - actions:
      - type: terminate-tls
        config:
          min_version: '1.3'
on_http_request: 
  - actions:
      - type: forward-internal
        config:
          url: https://sensor.internal
```

*tcp://1.tcp.ngrok.io:12345*

```yaml
on_tcp_connect:
  - actions:
      - type: restrict-ips
        config:
          allow:
            - <your source IPs>
  - actions:
      - type: forward-internal
        config:
          url: tcp://camera.internal:22
```

## What’s Next

- [Install ngrok as a background service](https://ngrok-device-gateway-ia.mintlify.app/guides/site-to-site-connectivity/background-service) to ensure the agent starts on boot and recovers from failures.
- [Eliminate single points of failure with redundant agents](https://ngrok-device-gateway-ia.mintlify.app/guides/site-to-site-connectivity/redundant-agents) to achieve high availability.

##