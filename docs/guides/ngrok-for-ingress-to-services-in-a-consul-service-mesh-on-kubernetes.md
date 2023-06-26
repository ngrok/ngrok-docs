---
title: ngrok for Ingress to Services in a Consul Service Mesh on Kubernetes
---

# Using ngrok Ingress Controller with Hashicorp's Consul Service Mesh

## Introduction

The [ngrok Ingress Controller for Kubernetes](https://github.com/ngrok/kubernetes-ingress-controller) is our official open-source controller for adding public and secure ingress traffic to your k8s services. It works any Cloud, local, or On-Prem Kubernetes cluster to provide ingress to your services no matter what the network configurations are, as long as it has outbound access to the ngrok service. This allows ngrok to be portable and work seamlessly across any different type of infrastructure.

Consul is a secure and resilient service mesh that provides service discovery, configuration, and segmentation functionality. Consul Connect provides service-to-service connection authorization and encryption using mutual TLS, automatically enabling TLS for all Connect services. Consul can be used with Kubernetes to provide a service mesh for your Kubernetes cluster.

Together, Consul can provide a robust and secure way for Services within a cluster to communicate, while ngrok can seamlessly and securely provide public ingress to them. This guide will walk you through setting up a Consul Service Mesh on Kubernetes and then using the ngrok Ingress Controller to provide ingress to your services to illustrate how they can work together.

TODO: Add links for these
:::caution This tutorial requires:
1. A Kubernetes cluster with Consul installed. If you don't have one, we'll follow Consul's guides to set it up locally with [minikube](https://minikube.sigs.k8s.io/docs/start/).
1. A [free ngrok account](https://ngrok.com/signup).
1. Helm 3.0.0+
1. consul 1.14.0+
:::

## Setup a Consul Service Mesh on Kubernetes

For this guide, we'll need access to a Kubernetes cluster with Consul installed. If you don't have one, you can follow Consul's guide to set it up locally with [minikube](https://minikube.sigs.k8s.io/docs/start/). Below are the steps from the doc we'll run.

1. Create a local cluster with minikube

```bash
minikube start --profile dc1 --memory 4096 --kubernetes-version=v1.22.0
```

1. Create a file called `values.yaml` with the following contents:

```yaml
# Contains values that affect multiple components of the chart.
global:
 # The main enabled/disabled setting.
 # If true, servers, clients, Consul DNS and the Consul UI will be enabled.
 enabled: true
 # The prefix used for all resources created in the Helm chart.
 name: consul
 # The name of the datacenter that the agents should register as.
 datacenter: dc1
 # Enables TLS across the cluster to verify authenticity of the Consul servers and clients.
 tls:
   enabled: true
 # Enables ACLs across the cluster to secure access to data and APIs.
 acls:
   # If true, automatically manage ACL tokens and policies for all Consul components.
   manageSystemACLs: true
# Configures values that configure the Consul server cluster.
server:
 enabled: true
 # The number of server agents to run. This determines the fault tolerance of the cluster.
 replicas: 1
# Contains values that configure the Consul UI.
ui:
 enabled: true
 # Registers a Kubernetes Service for the Consul UI as a NodePort.
 service:
   type: NodePort
# Configures and installs the automatic Consul Connect sidecar injector.
connectInject:
 enabled: true

```

1. Install the Consul Helm chart

```bash
helm repo add hashicorp https://helm.releases.hashicorp.com

helm install --values values.yaml consul hashicorp/consul --create-namespace --namespace consul --version "1.0.0"
```

1. Verify consul is installed and all its pods are healthy

```bash
kubectl get pods --namespace consul
NAME                                           READY   STATUS    RESTARTS        AGE
consul-connect-injector-6f67d58f8d-2lw6l       1/1     Running   0               17m
consul-server-0                                1/1     Running   0               17m
consul-webhook-cert-manager-5bb6f965c8-pjqms   1/1     Running   0               17m

```

We should now have a Kubernetes cluster with a Consul service mesh installed.


## Install the ngrok Ingress Controller

Now that we have a Kubernetes cluster with Consul installed, we can install the ngrok Ingress Controller to provide ingress to our services. We'll use Helm to install the ngrok Ingress Controller into our cluster and use pod annotations to enable the Consul Connect sidecar injector. This will allow us to use Consul Connect to secure the traffic between the ngrok Ingress Controller and our services.

First though, we need to create a Kubernetes Service for the ngrok Ingress Controller. Consul relies on this to name our services to declare Service Intention `source` and `destination` values. We'll create a Kubernetes Service for the ngrok Ingress Controller in the `consul` namespace.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: ngrok-ingress-controller
  namespace: consul
spec:
  ports:
  - name: http
    port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app.kubernetes.io/name: kubernetes-ingress-controller
```

1. Next, we begin installing the controller using `helm`. Add the ngrok repo:

    ```bash
    helm repo add ngrok https://ngrok.github.io/kubernetes-ingress-controller
    ```

1. Set your environment variables with your ngrok credentials. Replace `[AUTHTOKEN]` and `[API_KEY]` with your Authtoken and API key from above.

    ```bash
    export NGROK_AUTHTOKEN=[AUTHTOKEN]
    export NGROK_API_KEY=[API_KEY]
    ```

1. Install the ngrok Ingress Controller

Next we'll install the ngrok Ingress controller into our cluster. We want the controller pods to be in the consul service mesh in order to proxy traffic to our other services. We'll use pod annotations to enable the Consul Connect sidecar injector and allow outbound traffic to use the consul mesh. Consul documents to set these 2 annotations [here](https://developer.hashicorp.com/consul/docs/k8s/connect/ingress-controllers).

```bash
# This annotation is required to enable the Consul Connect sidecar injector
consul.hashicorp.com/connect-inject: "true"
# This is the CIDR of your Kubernetes API: `kubectl get svc kubernetes --output jsonpath='{.spec.clusterIP}'
consul.hashicorp.com/transparent-proxy-exclude-outbound-cidrs: "10.96.0.1/32"
```

We'll install the ingress controller using typical setting and include these annotations in the list below.

```bash
helm install ngrok-ingress-controller ngrok/kubernetes-ingress-controller \
  --namespace consul \
  --set fullnameOverride=ngrok-ingress-controller \
  --set credentials.apiKey=$NGROK_API_KEY \
  --set credentials.authtoken=$NGROK_AUTHTOKEN \
  --set-string podAnnotations.consul\\.hashicorp\\.com/connect-inject=true \
  --set podAnnotations."consul\.hashicorp\.com/transparent-proxy-exclude-outbound-cidrs"="10.96.0.1/32"
```


1. Verify the ngrok Ingress Controller is installed and all its pods are healthy

```bash
kubectl get pods -l 'app.kubernetes.io/name=kubernetes-ingress-controller' -n consul
NAME                                                READY   STATUS    RESTARTS      AGE
ngrok-ingress-controller-manager-5b796c88f7-k7v6z   2/2     Running   1 (64s ago)   67s
```


## Install Sample App

Now lets install a sample application to try out our service mesh and ingress controller combination. We'll use the HashiCups sample application from the HashiCorp Learn Consul Kubernetes guide. This application is a simple e-commerce application that allows users to order coffee cups.
The application has a frontend and public API services that are also backed by a private api and database. These communicate with each other through the consul service mesh. This comes with nginx installed as a proxy for the frontend and Public api services. We'll replace this with ngrok to provide public access and other features.

TODO: Make Diagram

We'll install the sample application into the `consul` namespace.

:::tip
The ngrok Ingress Controller can send traffic to services across different namespaces, but Consul Service Intentions across namespaces require an enterprise account. For now, we'll keep everything in the same namespace.
:::

1. Clone the hashicorp learning repo

This hashicorp repository has multiple great example applications for learning about Consul and Kubernetes. We'll use the HashiCups application for this guide.

```bash
git clone https://github.com/hashicorp/learn-consul-kubernetes
```

1. Install the sample app

The Hashicups app consists of multiple services and Deployments that make a tiered application. We'll install all of them from this folder and then modify things from there.

```bash
kubectl apply -f learn-consul-kubernetes/service-mesh/deploy/hashicups -n consul
```

Consul has the concept of Service Intentions. In short, they are a programatic way config the Consul Service mesh to allow or deny traffic between services. More information on them can be found [here](https://developer.hashicorp.com/consul/docs/connect/intentions).

Hashicups comes with `nginx` installed with intentions to the frontend and public-api services. We'll remove these and add our own intentions to allow traffic from the ngrok Ingress Controller to the frontend and public-api services.

1. Remove the existing Service Intentions for the public-api and frontend services and add our own.
```bash
kubectl delete serviceintentions public-api -n consul
kubectl delete serviceintentions frontend -n consul
```

1. Create Service Intention from ngrok to hashicups and the public-api

```yaml
apiVersion: consul.hashicorp.com/v1alpha1
kind: ServiceIntentions
metadata:
  name: ngrok-consul-frontend
  namespace: consul
spec:
  destination:
    name: frontend
  sources:
  - action: allow
    name: ngrok-ingress-controller
```

```yaml
apiVersion: consul.hashicorp.com/v1alpha1
kind: ServiceIntentions
metadata:
  name: ngrok-consul-api
  namespace: consul
spec:
  sources:
    - name: frontend
      action: allow
    - name: ngrok-ingress-controller
      action: allow
  destination:
    name: public-api
```

1. Create ingress to your app

Now that the ngrok Ingress Controller can communicate with the `frontend` service and `public-api` service through the Consul Service Mesh vis Service Intentions, we can create an ingress to route traffic to the app. We'll create an ingress to route traffic to the frontend service and the public-api service.

:::caution Update This First!
Update the line `host: $NGROK_DOMAIN_NAME` in the ingress object below to your ngrok domain name. For a free account, select something unique that is a subdomain of `ngrok.app`. For example, `my-unique-hashicups.ngrok.app`.
:::


```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-consul
  namespace: consul
spec:
  ingressClassName: ngrok
  rules:
  # - host: $NGROK_DOMAIN_NAME
  - host: bezek-hashicups-test.ngrok.app
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: frontend
            port:
              number: 3000
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: public-api
            port:
              number: 8080
```

This ingress object:
- Uses the `ngrok` ingress class
- The host is the ngrok domain name you selected that is static
- There is a route for `/` that routes to the frontend service on port 3000
- There is a route for `/api` that routes to the public-api service on port 8080

Open your `NGROK_DOMAIN_NAME` domain in your browser and see the Hashicups application!

TODO: Picture of Hashicups App


## Add Oauth Protection to the App

Now that we have the Hashicups application running, we can add oauth protection to it. We'll use the oauth module of the ngrok Ingress Controller to add oauth protection to the app. This will allow us to use Google oauth to protect the app.

1. Create an NgrokModuleSet

The NgrokModuleSet is a custom resource that allows you to configure the modules of the ngrok Ingress Controller. We'll create one to configure the oauth module.

```yaml
kind: NgrokModuleSet
apiVersion: ingress.k8s.ngrok.com/v1alpha1
metadata:
  name: oauth-module
  namespace: consul
modules:
  oauth:
    google:
      emailDomains:
        - acme.com
        - ngrok.com
```
TODO: Notes for non-ngrok domains.

1. Add the module to the ingress

Now that we have the module set created, we can add it to the ingress. We'll add an annotation to the ingress to add the module set to it.

```bash
kubectl annotate ingress ingress-consul k8s.ngrok.com/modules=oauth-module -n consul
```

This applies the oauth module to each route on our ingress object. Navigate to your Hashicups app at $NGROK_DOMAIN_NAME and you'll see the Google oauth screen.

TODO: Link to final manifests somewhere