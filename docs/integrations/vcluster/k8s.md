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
1. [Configure Public Ingress for the sample application](#configure-public-ingress-for-the-sample-application)
1. [Secure the app with OAuth](#secure-the-app-with-oauth)
:::

***INTRODUCTION TK***

:::caution This tutorial requires:
1. An [ngrok account](https://ngrok.com/signup).
1. [vcluster CLI](https://www.vcluster.com/docs/quickstart) installed locally.
1. [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) installed locally.
1. [Helm 3.0.0+](https://helm.sh/docs/intro/install/) installed locally.
1. An existing remote or local Kubernetes cluster _OR_ [minikube](https://minikube.sigs.k8s.io/docs/start/) to create a new demo cluster locally.
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
1. Create a new vcluster on minikube.
  ```bash
  vcluster create my-vcluster --expose
  ```
1. Double check that your new vcluster is running.
  ```bash
  kubectl get ns
  ```

:::note
These steps are based the guide [Using the ngrok Ingress Controller to create Preview Environments with vcluster](https://loft.sh/blog/using-the-ngrok-ingress-controller-to-create-preview-environments-with-vcluster/) from [Loft](https://loft.sh/), the maintainers of vcluster.
:::

## **Step 2**: Install the ngrok Ingress Controller {#install-the-ngrok-ingress-controller}

