---
description: Setup a local virtual cluster to demonstrate how to use the ngrok Ingress Controller with vcluster.
---

# Ingress to services in a vcluster on Kubernetes
------------

:::tip TL;DR
To use the ngrok Ingress Controller with vcluster in a local demo environment:
1. [Set up a local virtual cluster with vcluster](#set-up-a-consul-service-mesh-on-kubernetes)
1. [Install the ngrok Ingress Controller](#install-the-ngrok-ingress-controller)
1. [Install a sample application](#install-a-sample-application)
1. [Add OAuth protection to your demo app](#add-oauth-protection)
1. ***TK***
:::

***INTRODUCTION TK***

:::caution This tutorial requires:
1. An [ngrok account](https://ngrok.com/signup).
1. [vcluster CLI](https://www.vcluster.com/docs/quickstart) installed locally.
1. [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) installed locally.
1. [Helm 3.0.0+](https://helm.sh/docs/intro/install/) installed locally.
1. An existing remote or local Kubernetes cluster _OR_ [minikube](https://minikube.sigs.k8s.io/docs/start/) to create a 
   new demo cluster locally.
:::

## **Step 1**: Set up a local virtual cluster with vcluster {#set-up-a-consul-service-mesh-on-kubernetes}

To follow along with this guide, you need a remote or local Kubernetes cluster with vcluster installed. If you have an
existing cluster with vcluster set up, you can skip this step and proceed to [Step 2: Install the ngrok Ingress
Controller](#install-the-ngrok-ingress-controller).

If you don't have a cluster already, create one locally with minikube and install vcluster.

1. Create a local Kubernetes cluster with minikube.

  ```bash
  minikube start --profile dc1 --memory 4096
  ```

1. Use the `minikube` CLI to ensure your new local cluster is running properly.

  ```bash
  minikube kubectl -- get namespaces

  NAME              STATUS   AGE
  default           Active   5m55s
  kube-node-lease   Active   5m55s
  kube-public       Active   5m55s
  kube-system       Active   5m55s
  ```

1. Create a new vcluster with the name `my-vcluster`, which will also create a new namespace called
   `vcluster-my-cluster` and automatically switch the active kube context to use your new vcluster.

  ```bash
  vcluster create my-vcluster --expose-local
  ```

1. Double check that you're connected to the vcluster context by viewing the namespaces again.
  ```bash
  kubectl get namespaces

  NAME              STATUS   AGE
  default           Active   19s
  kube-system       Active   19s
  kube-public       Active   19s
  kube-node-lease   Active   19s
  ```

  If you are not connected to your new vcluster and its kube context, you can run `vcluster connect my-vcluster` to try
  again.

You know have a vcluster installed on your local minikube cluster.

:::note
These steps are partially based the guide [Using the ngrok Ingress Controller to create Preview Environments with vcluster](https://loft.sh/blog/using-the-ngrok-ingress-controller-to-create-preview-environments-with-vcluster/) from [Loft](https://loft.sh/), the maintainers of vcluster.
:::

## **Step 2**: Install the ngrok Ingress Controller {#install-the-ngrok-ingress-controller}

Now that you now have a Kubernetes cluster integrated with vcluster, you can install the [ngrok Kubernetes Ingress
Controller](https://github.com/ngrok/kubernetes-ingress-controller) to provide ingress to any services you want to run
on your virtual cluster. 

1. Add the ngrok Helm repository if you haven't already.
  ```bash
  helm repo add ngrok https://ngrok.github.io/kubernetes-ingress-controller
  ```

1. Set up the `AUTHTOKEN` and `API_KEY` exports, which allows Helm to install the Ingress Controller using your ngrok
   credentials. Find your `AUTHTOKEN` under [**Your Authtoken**](https://dashboard.ngrok.com/get-started/your-authtoken)
   in the ngrok dashboard.
   
  To create a new API key, navigate to the [**API** section](https://dashboard.ngrok.com/api) of the ngrok dashboard,
  click the **New API Key** button, change the description or owner, and click the **Add API Key** button. Copy the API
  key token shown in the modal window before closing it, as the ngrok dashboard will not show you the token again.

  ```bash
  export NGROK_AUTHTOKEN=[YOUR-AUTHTOKEN]
  export NGROK_API_KEY=[YOUR-API-KEY]
  ```

1. Install the ngrok Ingress Controller with Helm under a new `ngrok-ingress-controller` namespace.
  ```bash
  helm install ngrok-ingress-controller ngrok/kubernetes-ingress-controller \
    --namespace ngrok-ingress-controller \
    --create-namespace \
    --set credentials.apiKey=$NGROK_API_KEY \
    --set credentials.authtoken=$NGROK_AUTHTOKEN
  ```

1. Verify you have installed the ngrok Ingress Controller successfully and that pods are healthy.
  ```bash
  kubectl get pods -l 'app.kubernetes.io/name=kubernetes-ingress-controller' --namespace ngrok-ingress-controller

  NAME                                                              READY   STATUS    RESTARTS   AGE
  ngrok-ingress-controller-kubernetes-ingress-controller-man2fg5p   1/1     Running   0          2m23s
  ```

## **Step 3**: Install a sample application {#install-a-sample-application}

At this point, you have a functional vcluster with the ngrok Ingress Controller running and authenticated with your
ngrok credentials. To demonstrate how the Ingress Controller simplifies routing external traffic to your primary
cluster, virtual cluster, and ultimately an exposed service or endpoint, you can install a sample application.

1. Create a ngrok static subdomain for ingress if you don't have one already done. Navigate to the [**Domains**
   section](https://dashboard.ngrok.com/cloud-edge/domains) of the ngrok dashboard and click **Create Domain** or **New
   Domain**. 
  
  By creating a subdomain on the ngrok network, you provide a public route to accept HTTP, HTTPS, and TLS traffic.

1. Create a new Kubernetes manifest (`2048.yaml`) with the below contents. This manifest defines the 2048 application
   service and deployment, then configures the ngrok Ingress Controller to connect the `game-2048` service 

  :::tip Notes:
    - Make sure you edit line 45 of the below contents, which contains the `NGROK_DOMAIN` variable, with the ngrok    
      subdomain you created in the previous step. It should look something like `one-two-three.ngrok-free.app`.
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
  # ngrok Ingress Controller Configuration
  apiVersion: networking.k8s.io/v1
  kind: Ingress
  metadata:
    name: game-2048-ingress
    namespace: ngrok-ingress-controller
  spec:
    ingressClassName: ngrok
    rules:
      # highlight-start
      - host: NGROK_DOMAIN
      # highlight-end
        http:
          paths:
            - path: /
              pathType: Prefix
              backend:
                service:
                  name: game-2048
                  port:
                    number: 80
  ```

1. Apply the `2048.yaml` manifest to your vcluster.

  ```bash
  kubectl apply -f 2048.yaml
  ```

  **Note:** If you get an error when applying the manifest, double check that you've updated the `NGROK_DOMAIN` value
  and try again.

1. Confirm your 2048 application was deployed successfully by going to the [**Edge Configurations**
   dashboard](https://dashboard.ngrok.com/cloud-edge/edges). An edge connects your 2048 application, running in your
   vcluster, to the rest of the world through the ngrok Ingress Controller. You should see a new edge configuration
   created by `kubernetes-ingress-controller` that matches the domain name you entered on L45 of your `2048.yaml`
   manifest.

  Under the **Backend** section of your edge configuration, you can also see cluster details as annotations, like the
  namespace and connected service, to validate that your demo application is accessible to external traffic via the
  Ingress Controller.

  !["Looking at existing Edge configurations in the ngrok dashboard"](./img/ngrok-k8s-vcluster_edges.png)

  Click on your edge configuration to see additional details and options for advanced ingress needs, like creating
  multiple tunnels for load balancing, enabling the [Mutual TLS module](/cloud-edge/modules/mutual-tls/), add
  compression, and more.

1. Access your 2048 demo app by navigating to the ingress domain, e.g. `https://one-two-three.ngrok.app`. As long as
   your vcluster remains operational, you can access your 2048 game from any device or network.

  !["Navigating directly to the https://one-two-three.ngrok.app domain to see the 2048 application"](./img/ngrok-k8s-vcluster_2048.png)

## Step 4: Add OAuth protection to your demo app {#add-oauth-protection}

**TK**
