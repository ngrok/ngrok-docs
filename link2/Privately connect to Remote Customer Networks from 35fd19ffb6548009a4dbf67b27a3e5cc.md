# Privately connect to Remote Customer Networks from your Local Environment

### Use ngrok to configure private, remote access to services in remote customer networks.

ngrok is a universal gateway, which means it allows you to connect to any app, IoT device, or service without networking expertise.

This guide walks you through how to configure `ngrokd`: An ngrok component meant to enable a private, end-to-end solution for accessing remote services in a customer’s private network. This solution lets you securely access critical systems remotely without exposing them through public, authenticated endpoints. Instead, it leverages private endpoints that are only reachable from your local environment, eliminating your external attack surface while maintaining full access.

## **Architectural reference**

![ngrokd s2s architecture (1).png](Privately%20connect%20to%20Remote%20Customer%20Networks%20from/ngrokd_s2s_architecture_(1).png)

## **What you’ll need**

- An ngrok account. If you don’t have one, [sign up](https://dashboard.ngrok.com/signup).
- An ngrok API key, you’ll need an account first.
- An ngrok agent configured in a remote IoT-based network. See the [getting started guide](https://ngrok.com/docs/getting-started) for instructions on how to install the ngrok agent.

## **1. Install ngrokd in your local environment, start it, and set your API Key**

`ngrokd` is a lightweight daemon that makes your ngrok endpoints privately accessible and locked down to your local services. It automatically discovers your endpoints, assigns them local addresses, and forwards traffic through ngrok's secure infrastructure — so your apps can reach remote services without any network configuration. Think of it as a local proxy that turns ngrok endpoints into services that feel like they're running on your machine.

Mac:

```bash
curl -fsSL https://raw.githubusercontent.com/ngrok/ngrokd/main/install.sh | sudo bash
sudo ngrokd install
sudo ngrokd start
ngrokctl set-api-key YOUR_NGROK_API_KEY
```

Linux: 

```bash
curl -fsSL https://raw.githubusercontent.com/ngrok/ngrokd/main/install.sh | sudo bash
sudo ngrokd install
sudo ngrokd start
ngrokctl set-api-key YOUR_NGROK_API_KEY
```

Windows:

```powershell
# Run as Administrator
iwr -useb https://raw.githubusercontent.com/ngrok/ngrokd/main/install.ps1 | iex
Start-Process ngrokd -ArgumentList '--config=C:\ProgramData\ngrokd\config.yml' -WindowStyle Hidden
ngrokctl set-api-key YOUR_NGROK_API_KEY
```

Docker: 

```bash
docker pull ngrok/ngrokd:latest
docker run -d \
  --name ngrokd \
  --cap-add=NET_ADMIN \
  -e NGROK_API_KEY=<YOUR_NGROK_API_KEY> \
  -v ngrokd-data:/etc/ngrokd \
  ngrok/ngrokd:latest
```

## **2. Create a service user and authtoken for isolated network access**

Create a service user and an associated authtoken for each of your factories. A service user is intended for automated systems that programmatically interact with your ngrok account (other platforms sometimes call this concept a Service Account). Create a separate service user and associated authtoken for each of your remote factories so that:

- Their usage of your ngrok account is isolated and scoped with a specific permission set
- If an agent is compromised, you can revoke its access independently
- Agent start/stop audit events are properly attributed to each customer
- Your ngrok agents don’t stop working if the human user who set them up leaves your ngrok account

Navigate to the [Service Users](https://dashboard.ngrok.com/service-users) section of your dashboard and click **New Service User.**

![Service Users page with New Service User button](https://mintcdn.com/ngrok/c863LGd_t0t_mhAA/guides/device-gateway/img/cloud-to-device/cloud-to-device-service-user.png?fit=max&auto=format&n=c863LGd_t0t_mhAA&q=85&s=e15aca062bebc7793ef89c558e37a8f2)

Next, create an authtoken assigned to this specific service user.

![Authtokens page showing a new authtoken assigned to a service user](https://mintcdn.com/ngrok/c863LGd_t0t_mhAA/guides/device-gateway/img/cloud-to-device/cloud-to-device-authtoken.png?fit=max&auto=format&n=c863LGd_t0t_mhAA&q=85&s=670335db33e42c396719e84811bb7259)

## **3. Reserve domains for your Private Agent Endpoints**

To create private agent endpoints in ngrok, you need to reserve the domains in your account. Navigate to the [Domains](https://dashboard.ngrok.com/domains) tab in your dashboard, and reserve domains for your HTTP and TCP endpoints.

![Screenshot 2026-05-08 at 3.50.07 PM.png](Privately%20connect%20to%20Remote%20Customer%20Networks%20from/Screenshot_2026-05-08_at_3.50.07_PM.png)

## **4. Install the ngrok agent within your remote network and configure private Agent Endpoints in ngrok.yml**

First, install the agent in your remote network either on a gateway or on a device directly. Follow instructions [here](https://ngrok.com/docs/getting-started) for how to do so. 

Then, configure the agent to create private Agent Endpoints that point to the devices you want to remotely access. This connects the devices to your ngrok account, and the configuration to achieve this is shown in the example agent configuration file below. 

Private Agent Endpoints are private endpoints that can **only** receive traffic from services on your local network where `ngrokd` is installed. These endpoints are not publicly addressable anywhere on the internet, and access is **completely locked down** to your local environment.

After installing the ngrok agent, define private Agent Endpoints for each service you want to remotely access inside the ngrok configuration file. You can install ngrok and its configuration file at

```
/path/to/ngrok/ngrok.yml
```

and the executable at

```
/path/to/ngrok/ngrok
```

```yaml
version: 3

agent:
  authtoken: AUTHTOKEN_CREATED_IN_STEP_2

endpoints:
  - name: Internal Endpoint for Controller
    url: http://controller.example.com
    upstream:
      url: 9080
    bindings:
      - kubernetes 
  - name: Internal Endpoint for Security Camera
    url: tcp://camera.example.com:5432
    upstream:
      url: 5432 
    bindings:
      - kubernetes
```

Once you’ve saved the configuration, activate your endpoints by running 

```bash
ngrok start --all
```

## **5. Test end-to-end connectivity from your local env to upstream devices**

From the machine where ngrokd is running, run the following command:

```yaml
ngrokctl list
```

You should see your private cloud endpoints listed out like this:

![Screenshot 2026-05-08 at 3.55.16 PM.png](Privately%20connect%20to%20Remote%20Customer%20Networks%20from/Screenshot_2026-05-08_at_3.55.16_PM.png)

From here, you can curl your HTTP endpoint and ensure you get the expected response. The same can be done for your TCP endpoint by connecting to it at the assigned hostname and port (e.g., `psql -h db.example.com -p 5432 -U myuser mydb`).

## **What’s next**

- [Install ngrok as a background service](https://ngrok.com/docs/guides/site-to-site-connectivity/background-service) to ensure the agent starts on boot and recovers from failures.
- [Eliminate single points of failure with redundant agents](https://ngrok.com/docs/guides/site-to-site-connectivity/redundant-agents) to achieve high availability.