# Secure Remote Access with ngrok for SSH and RDP

By creating secure TCP endpoints, ngrok enables easy, centralized, access for technicians, engineers, and IT admins to maintain and update remote devices and services. This guide will help you to streamline connectivity without compromising security when it comes to remote access using SSH or RDP.

Examples where this is applicable include secure SSH into remote IoT devices or connecting to a Windows RDP server in a remote network. This guide demonstrates usability for a single remote network. 

## Architectural Reference

![ngrok SSH_RDP Arch (2).png](Secure%20Remote%20Access%20with%20ngrok%20for%20SSH%20and%20RDP/ngrok_SSH_RDP_Arch_(2).png)

### **Why only one ngrok agent per remote network?**

Traditionally, you might assume that every service/device inside the network needs its own ngrok agent, but this isn't necessary. A single ngrok agent is installed on a network-accessible server inside the remote network. The agent acts as a central gateway that can reach any service on the local network, eliminating the need for multiple agents.

## **What you'll need**

- An ngrok account. If you don't have one, [sign up](https://dashboard.ngrok.com/signup).
- An ngrok agent, configured in a remote network or remote device/service. See the [getting started guide](https://ngrok.com/docs/getting-started/) for instructions on how to install the ngrok agent.

### **Step 1. Create a Service User and authtoken for isolated network access**

First, you’ll create a service user and an associated authtoken for each of your customers.A Service User is intended for automated systems that programmatically interact with your ngrok account (other platforms sometimes call this concept a Service Account).Create a separate Service User + associated authtoken for each of your customers so that:

1. Their usage of your ngrok account is isolated and scoped with a specific permission set
2. If a customer is compromised you can revoke their access independently
3. Agent start/stop audit events are properly attributed to each customer
4. Your ngrok agents don’t stop working if the human user who set them up leaves your ngrok account.

Navigate to the [**Service Users](https://dashboard.ngrok.com/service-users)** section of your dashboard and click “new Service User”.

![Screenshot 2026-01-23 at 12.35.00 PM.png](Secure%20Remote%20Access%20with%20ngrok%20for%20SSH%20and%20RDP/Screenshot_2026-01-23_at_12.35.00_PM.png)

Next, create an authtoken assigned to this specific bot user. 

![Screenshot 2026-01-23 at 12.36.20 PM.png](Secure%20Remote%20Access%20with%20ngrok%20for%20SSH%20and%20RDP/Screenshot_2026-01-23_at_12.36.20_PM.png)

---

### **Step 2. Install the ngrok Agent within your remote network and configure internal Agent endpoints in ngrok.yml**

Configure the agent to create internal Agent Endpoints that point to the devices you want to remotely access. This will connect the devices to your ngrok account but nothing will be able to connect to them until completing the subsequent steps. The configuration to achieve this is shown below in the example agent configuration file.

Internal Endpoints ****are private endpoints that only receive traffic when forwarded through the

[**forward-internal Traffic Policy action**](https://ngrok.com/docs/traffic-policy/actions/forward-internal). This allows you to route traffic to an application through ngrok without making it publicly addressable. Internal endpoint URL hostnames must end with `.internal`. 

After installing the ngrok agent, define internal endpoints for each service you want to remotely access inside the ngrok configuration file. You can install ngrok and its configuration file in `/path/to/ngrok/ngrok.yml` and the executable in `/path/to/ngrok/ngrok` .

```yaml
version: 3

agent:
  authtoken: AUTHTOKEN_CREATED_IN_STEP_1

endpoints:
  - name: Internal Endpoint for Device 1
    url: tcp://device1.internal:22
    upstream:
      url: 22 
  - name: Internal Endpoint for Device 2
    url: tcp://device2.internal:22
    upstream:
      url: 22 
  - name: Internal Endpoint for RDP Server
    url: tcp://rdp-server.internal:3389
    upstream:
      url: 3389 
```

### **Step 3: Reserve a tcp address for each device/server**

Reserving a TCP address is required for creating a cloud endpoint which will be done in a later step. By reserving a TCP address, this address is held specifically for your ngrok account. You will do this for each device as well as for the rdp server.

![Screenshot 2026-01-23 at 12.37.00 PM.png](Secure%20Remote%20Access%20with%20ngrok%20for%20SSH%20and%20RDP/Screenshot_2026-01-23_at_12.37.00_PM.png)

---

### **Step 4: Create your TCP cloud endpoint and attach a Traffic Policy**

Cloud Endpoints are persistent, always-on endpoints whose creation, deletion, and configuration is managed centrally via the Dashboard or API. They exist permanently until they are explicitly deleted. Cloud Endpoints do not forward their traffic to an agent by default and instead only use their attached **Traffic Policy** to handle connections.

![Screenshot 2026-01-23 at 12.38.46 PM.png](Secure%20Remote%20Access%20with%20ngrok%20for%20SSH%20and%20RDP/Screenshot_2026-01-23_at_12.38.46_PM.png)

Click on your newly created Cloud Endpoint and replace the default Traffic Policy with:

```yaml
on_http_request:
  - actions:
      - type: forward-internal
        config:
          url: tcp://device1.internal:22
```

---

### **Step 5: Secure your cloud endpoint with IP Restrictions**

Navigate to your newly created cloud endpoint in the [endpoints](https://dashboard.ngrok.com/authtokens) tab on your ngrok dashboard, and apply a restrict-ips traffic policy action to enable a source IP whitelist. By enabling IP restrictions, we can directly filter who/what can use the endpoint and prevent port scanners or other malicious actors. You can add this action directly to the cloud endpoint’s YAML configuration. The properly formatted config for this action can be seen below:

```yaml
on_tcp_connect:
  - actions:
    - type: restrict-ips
	    config: 
	      enforce: true
	      allow: 
	        - e680:5791:be4c:5739:d959:7b94:6d54:d4b4/128
          - 203.0.113.42/32
          
    - type: forward-internal
      config:
        url: tcp://device1.internal:22
```

### **Step 6: Use your ngrok TCP endpoints with your SSH/RDP Clients**

Now that you have created and secured your tcp cloud endpoints and they forward to the correct upstream devices, you can use these TCP endpoints in your existing SSH/RDP client setups to test your remote connectivity. 

## What’s Next

- [Install ngrok as a background service](https://ngrok-device-gateway-ia.mintlify.app/guides/site-to-site-connectivity/background-service) to ensure the agent starts on boot and recovers from failures.
- [Eliminate single points of failure with redundant agents](https://ngrok-device-gateway-ia.mintlify.app/guides/site-to-site-connectivity/redundant-agents) to achieve high availability.