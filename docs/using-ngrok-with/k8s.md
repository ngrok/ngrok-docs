---
title: Kubernetes
---

# Using ngrok with Kubernetes

## Introduction

The [ngrok Ingress Controller for Kubernetes](https://github.com/ngrok/kubernetes-ingress-controller) is our official open-source controller for adding public and secure ingress traffic to your k8s services. You can think of the ngrok Ingress Controller as ngrok packaged as an idiomatic k8s controller — deployed via a simple helm chart, configurable via standard k8s Ingress object (using the `kind: Ingress` construct), and compatible with k8s best practices.

In this tutorial, you will install the ngrok Ingress Controller and run a sample 2048 app with public access and security provided by ngrok.

:::caution This tutorial requires:

1. A local environment with Kubernetes installed and configured. For this tutorial, we will use `k3d`, `kubectl`, and `helm`, but you can also use `minikube` if you'd like.
1. A [free ngrok account](https://ngrok.com/signup).

:::

## Get started with the ngrok Ingress Controller for Kubernetes

## Step 1: Get your ngrok authtoken and API key

:::tip
The ngrok Ingress Controller requires:

- An ngrok authtoken to launch connections between ngrok's points of presence and your k8s cluster. You can find your authtoken in the [ngrok dashboard under "Your Authtoken"](https://dashboard.ngrok.com/get-started/your-authtoken).
- An ngrok API key to create and configure the ngrok edges for your services. You can generate an API key in the [ngrok Dashboard under "API"](https://dashboard.ngrok.com/api).

:::

To started with the ngrok Ingress Controller for Kubernetes:

1. Access the [ngrok Dashboard](https://dashboard.ngrok.com)
1. Click [Your Authtoken](https://dashboard.ngrok.com/get-started/your-authtoken). Copy the Authtoken to a text editor.
1. Click [API](https://dashboard.ngrok.com/api) and follow the instructions to create a new API key. Copy the API key to a text editor.
1. Click [Cloud Edge > Domains](https://dashboard.ngrok.com/cloud-edge/domains) and register or claim a domain. Save this value, you will need it later. This is the URL you will use to access your service from anywhere.

## Step 2: Setup your Kubernetes cluster and install the ngrok Ingress Controller

1. In your terminal, create a k8s cluster:

   ```bash
   k3d cluster create ngrok
   ```

1. Using `helm`, add the ngrok repo:

   ```bash
   helm repo add ngrok https://charts.ngrok.com
   ```

1. Set your environment variables with your ngrok credentials. Replace `[AUTHTOKEN]` and `[API_KEY]` with your Authtoken and API key from above.

   ```bash
   export NGROK_AUTHTOKEN=[AUTHTOKEN]
   export NGROK_API_KEY=[API_KEY]
   ```

1. Install the ngrok Ingress Controller in your cluster, replacing `[AUTHTOKEN]` and `[API_KEY]` with your Authtoken and API key from above:

   **Note:** For this tutorial, we're creating and using the namespace `ngrok-ingress-controller`.

   ```bash
   helm install ngrok-ingress-controller ngrok/kubernetes-ingress-controller \
     --namespace ngrok-ingress-controller \
     --create-namespace \
     --set credentials.apiKey=$NGROK_API_KEY \
     --set credentials.authtoken=$NGROK_AUTHTOKEN
   ```

1. Create a manifest file (for example `ngrok-manifest.yaml`) with the following contents. You will need to replace the `NGROK_DOMAIN` on line 45 with the domain you registered in Step 1.

:::tip Notes:

- Lines 1-34: Create the 2048 app service and deployment
- Lines 35-54 (highlighted): Create the ngrok Ingress Controller. Line 45 determines the ingress URL for public requests.

:::

```yaml showLineNumbers
apiVersion: v1
kind: Service
metadata:
  name: game-2048
  namespace: ngrok-ingress-controller
spec:
  ports:
    - name: http
      port: 80
      targetPort: 80
  selector:
    app: game-2048
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: game-2048
  namespace: ngrok-ingress-controller
spec:
  replicas: 1
  selector:
    matchLabels:
      app: game-2048
  template:
    metadata:
      labels:
        app: game-2048
    spec:
      containers:
        - name: backend
          image: alexwhen/docker-2048
          ports:
            - name: http
              containerPort: 80
---
# highlight-start
# ngrok Ingress Controller Configuration
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: game-2048-ingress
  namespace: ngrok-ingress-controller
spec:
  ingressClassName: ngrok
  rules:
    - host: NGROK_DOMAIN
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: game-2048
                port:
                  number: 80
# highlight-end
```

1. Apply the manifest file to your k8s cluster.

   ```bash
   kubectl apply -f ngrok-manifest.yaml
   ```

   **Note:** If you get an error when applying the manifest, double check that you've updated the `NGROK_DOMAIN` value and try again.

1. To confirm the manifest is successfully applied, go to the [ngrok Dashboard](https://dashboard.ngrok.com) and click [Edge Configurations](https://dashboard.ngrok.com/cloud-edge/edges). You should see a new Edge Configuration for your cluster with the name matching your URL (1) — for example: `my-awesome-k8s-cluster.ngrok.app`. Also note that your some of your cluster configurations are presented int the dashboard as annotations (2).

   ![ingress created](/img/howto/ingress-controller/k8s-ingress-app-1.png)

1. Access your ingress URL using the subdomain you chose in the manifest file above (i.e. `https://my-awesome-k8s-cluster.ngrok.app`) to confirm the 2048 app is accessible from the internet. If you forgot what url you chose, you can always run `kubectl get ingresses --namespace=ngrok-ingress-controller` to see what it is.

   ![application public](/img/howto/ingress-controller/k8s-ingress-app-2.png)

## Step 3: Add edge security to your app

The ngrok Ingress Controller for Kubernetes provides custom resource definitions (CRDs) for additional edge features available in ngrok. In this example, we're expanding the Ingress Controller with Google OAuth to allow access only from users with the email domains `@acme.com` or `@ngrok.com` and to apply a circuit breaker to your app at 80% (requires a paid account). These features are enforced at the ngrok edge, ensuring only authorized users can access your app.

As before, you will need to update line 46 of this manifest with your `NGROK_DOMAIN` in the Ingress object.

:::tip Notes:
This example is very similar to the previous version, with the following changes:

- Lines 41-42: Associates your Ingress Controller with the configuration `oauth-and-circuit-breaking` via annotation
- Lines 57-75: Sets the edge configuration as a custom CRD (NgrokModuleSet).
- Lines 64-69: Sets the circuit breaker module over 50% threshold.
- Lines 70-74: Sets the OAuth module to allow access only for users with the email domains `@acme.com` or `@ngrok.com`.

:::

```yaml showLineNumbers
apiVersion: v1
kind: Service
metadata:
  name: game-2048
  namespace: ngrok-ingress-controller
spec:
  ports:
    - name: http
      port: 80
      targetPort: 80
  selector:
    app: game-2048
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: game-2048
  namespace: ngrok-ingress-controller
spec:
  replicas: 1
  selector:
    matchLabels:
      app: game-2048
  template:
    metadata:
      labels:
        app: game-2048
    spec:
      containers:
        - name: backend
          image: alexwhen/docker-2048
          ports:
            - name: http
              containerPort: 80
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: game-2048-ingress
  namespace: ngrok-ingress-controller
  # highlight-start
  annotations:
    k8s.ngrok.com/modules: oauth-and-circuit-breaking
  # highlight-end
spec:
  ingressClassName: ngrok
  rules:
    - host: NGROK_DOMAIN
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: game-2048
                port:
                  number: 80
---
# highlight-start
# Module configurations for Circuit Breaking and OAuth
kind: NgrokModuleSet
apiVersion: ingress.k8s.ngrok.com/v1alpha1
metadata:
  name: oauth-and-circuit-breaking
  namespace: ngrok-ingress-controller
modules:
  circuitBreaker:
    trippedDuration: 10s
    rollingWindow: 10s
    numBuckets: 10
    volumeThreshold: 20
    errorThresholdPercentage: "0.50"
  oauth:
    google:
      emailDomains:
        - acme.com
        - ngrok.com
---
# highlight-end
```

1. Save your file and reapply the manifest file:

   ```bash
   kubectl apply -f ngrok-manifest.yaml
   ```

   **Note:** Again, if you get an error when applying the manifest, double check that you've updated the `NGROK_DOMAIN` value and try again.

1. To confirm the circuit breaking configuration is successfully applied:

   1. Go to [ngrok Dashboard](https://dashboard.ngrok.com) > [Edge Configurations](https://dashboard.ngrok.com/cloud-edge/edges).
   1. Click the edge configuration that matches your URL.
   1. On the left hand side, click Circuit Breaker.
   1. Notice how the circuit breaker configuration matches your manifest file.

      ![circuit breaker](/img/howto/ingress-controller/k8s-ingress-app-3.png)

   1. Click OAuth and confirm how the oauth configuration matches your manifest file.

      ![circuit breaker](/img/howto/ingress-controller/k8s-ingress-app-4.png)

1. Access your App and confirm that you got the expect authentication behavior:

   ![ingress controller in action](/img/howto/ingress-controller/ingress-controller-in-action-2.gif)
