---
description: TK
---

# Ingress to services managed by Rancher in Kubernetes

---

:::tip TL;DR

To use the ngrok Ingress Controller for Kubernetes with Rancher in a local cluster:

1. [Set up Rancher on a local cluster](#install-rancher-via-docker)
2. [Install the ngrok Ingress Controller](#install-the-ngrok-ingress-controller)

:::

***INTRODUCTION TK***

:::caution This tutorial requires:

1. An [ngrok account](https://ngrok.com/signup).
2. One or more Linux hosts that meet Rancher's
   [requirements](https://ranchermanager.docs.rancher.com/v2.5/pages-for-subheaders/installation-requirements) for
   operating as Kubernetes nodes. Your hosts can local/on-prem virtual machines, cloud-based virtual machines, or bare
   metal servers.
3. [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) installed locally.
4. [Helm 3.0.0+](https://helm.sh/docs/intro/install/) installed locally.
:::

## **Step 1**: Install Rancher via Docker {#install-rancher-via-docker}

To follow along with this guide, you need Rancher installed on a local or remote Kubernetes cluster. If you have an existing cluster with Rancher already set up, you can skip this step and proceed to [Step 2: Install the ngrok Ingress
Controller](#install-the-ngrok-ingress-controller).

In the following steps, you'll run Rancher, and create the Kubernetes cluster it runs on, within a Docker container.
This is a simple, local-only installation option that should be used only for [test and demonstration
purposes](https://ranchermanager.docs.rancher.com/pages-for-subheaders/installation-and-upgrade#docker-install). You
can, however, use the Rancher backup operator to
[migrate](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster)
this Docker container-based installation to a production-ready, high-availability Kubernetes cluster.

The following steps also assume you have already provisioned one or more Linux hosts that will operate as nodes for the
new Kubernetes cluster managed by Rancher.

:::note
Another viable option is to launch a single Linux virtual machine, whether on your local workstation or with a cloud provider, to host a K3s cluster for [installing Rancher with Helm](https://ranchermanager.docs.rancher.com/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli). If you choose that option, you can skip ahead to [Step 2: Install the ngrok Ingress
Controller](#install-the-ngrok-ingress-controller) once finalizing your K3s cluster.
:::

1. Launch Rancher server in a detached, privileged Docker container. With this configuration, you'll access Rancher at
   `https://localhost:444`, but you can edit the `-p 81:80 444:443` portion to forward different ports based on your
   local development environment.

  ```bash
  docker run --privileged --restart=unless-stopped -d -p 81:80 -p 444:443 rancher/rancher:latest 
  ```

1. Once Docker finishes running, check to ensure your Rancher container is running properly.

  ```bash
  docker ps
  CONTAINER ID   IMAGE                    COMMAND           CREATED        STATUS             PORTS                                                                      NAMES
  d43eceb2e5b2   rancher/rancher:latest   "entrypoint.sh"   About a minute ago   Up About a minute   0.0.0.0:81->80/tcp, :::81->80/tcp, 0.0.0.0:444->443/tcp, :::444->443/tcp   vigilant_clarke
  ```

1. Navigate to `https://localhost:444` in your browser, which will warn you about self-signed SSL certificates. Pass
   through that warning, which will show you a prompt from Rancher asking for your **bootstrap password**, which you
   need to initialize Rancher. Copy and paste that command into your terminal, replacing `DOCKER_NAME` with the name
   output using `docker ps`.

  ```bash
  docker logs DOCKER_NAME 2>&1 | grep "Bootstrap Password:"
  ```

1. Copy the terminal output into the password input and click **Log in with Local User**. Next, choose between a
   randomly-generated password or one of your choosing to initialize the **admin** user.
   
1. The **Server URL** field will default to `https://localhost:444`, but in this configuration, your worker nodes won't
   be able to connect to Rancher. Find your local IP address, which will likely look similar to `192.168.1.123`, and
   replace `localhost` with it, similar to the following: `https://192.168.1.107:444`.
   
   When the Rancher dashboard loads, Rancher should have already deployed a single K3s-based cluster named `local`&mdash;click on the cluster's name to explore. Rancher recommends that its server management and your workloads run on separate clusters, which is what you'll do next.

1. Create a new cluster by kicking **Create** in your Rancher dashboard home, then **Custom** to deploy a custom
   cluster. Give your cluster a name, and under the **System Services** heading, uncheck **NGINX Ingress**. Click
   **Create** to initialize the cluster.

1. Register your Linux node(s) with your new cluster. Leave the **Node Role** options at their defaults, and under the
   **Registration Command** heading and command example, click the **Insecure** checkbox. Once you copy-paste the
   command into your Linux node and execute it, your new cluster will begin bootstrapping the node. When Rancher
   finishes bootstrapping your node(s), navigate to the **Cluster Dashboard** for your new cluster.

1. Set up `kubectl` to manage your new cluster. At the top of the Cluster Dashboard, click the **Copy KubeConfig to
   Clipboard** option, then paste that content into your `~/.kube/config` file.

1. Ensure your new local cluster is running properly by getting the namespaces for your instance. Your list of
   namespaces should look like the following:

  ```bash
  kubectl get namespaces

  NAME                          STATUS   AGE
  calico-system                 Active   4m
  cattle-impersonation-system   Active   29s
  cattle-system                 Active   5m
  default                       Active   5m4s
  kube-node-lease               Active   5m6s
  kube-public                   Active   5m6s
  kube-system                   Active   5m6s
  local                         Active   23s
  tigera-operator               Active   4m10s
  ```

At this point, you have installed Rancher in a Docker container, created a new Kubernetes cluster for your applications,
and have connected one or more Linux nodes to Rancher for handling the workload.

## **Step 2**: Install the ngrok Ingress Controller {#install-the-ngrok-ingress-controller}

**TK**

1. Add the ngrok Helm repository.

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


---
---
---
---


PASSWORD: lEwX7tWpsfImRJjO


https://ranchermanager.docs.rancher.com/v2.5/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli#1-provision-a-linux-host
https://ranchermanager.docs.rancher.com/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli
https://ranchermanager.docs.rancher.com/pages-for-subheaders/rancher-on-a-single-node-with-docker

https://kwonghung-yip.medium.com/setup-local-kubernetes-multi-node-cluster-with-rancher-server-fdb7a0669b5c

https://medium.com/@gurayy/set-up-rancher-2-6-lab-environment-in-a-ubuntu-vm-on-cloud-or-your-computer-f78e55218786

https://medium.com/@mhshahin/provision-minikube-using-rancher-811bc39c122b
