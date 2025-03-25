---
description: Setup a local virtual cluster to demonstrate how to use the ngrok Kubernetes Operator with vcluster.
---

# Ingress to services in a vcluster on Kubernetes

:::tip TL;DR

To use the ngrok Kubernetes Operator with vcluster in a local cluster:

1. [Set up a local virtual cluster](#set-up-a-consul-service-mesh-on-kubernetes)
2. [Install the ngrok Kubernetes Operator](#install-the-ngrok-ingress-controller)
3. [Install a sample application](#install-a-sample-application)
4. [Add OAuth protection to your demo app](#add-oauth-protection)

:::

The ngrok [Operator for Kubernetes](https://ngrok.com/blog-post/ngrok-k8s) is the official controller for
adding public and secure ingress traffic to your k8s services. This open source Operator works with any cloud,
locally-hosted, or on-premises Kubernetes cluster to provide ingress to your applications, APIs, or other services while
also offloading network ingress and middleware execution to ngrok's platform.

[vcluster](https://www.vcluster.com/) is an open source project for creating virtual clusters that run inside regular
namespaces, which provides strong isolation and easy access for multiple tenants with low cost and overhead. The pods
you deploy on a vcluster are scheduled inside of the underlying cluster, while other resources, like deployments and
CRDs, exist only inside the virtual cluster.

Together, the ngrok Kubernetes Operator and vcluster work to provide secure and load-balanced ingress for services
running on a virtual cluster, which lets you isolate development environments, create an internal developer platform
(IDP) in cloud native environments, and run experiments or simulations virtually while properly routing external
traffic.

With this guide, you'll use an existing Kubernetes cluster, or set up a local development cluster with minikube, to
launch a virtual cluster, and deploy a demo application. You'll then deploy the ngrok Kubernetes Operator to connect your
demo application to the ngrok platform to route traffic to your vcluster.

:::caution This tutorial requires:

1. An [ngrok account](https://ngrok.com/signup).
2. The [vcluster CLI](https://www.vcluster.com/docs/get-started/#deploy-vcluster) installed locally.
3. [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) installed locally.
4. [Helm 3.0.0+](https://helm.sh/docs/intro/install/) installed locally.
5. An existing remote or local Kubernetes cluster _OR_ [minikube](https://minikube.sigs.k8s.io/docs/start/) to create a
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
   kubectl get namespaces

   NAME              STATUS   AGE
   default           Active   5m55s
   kube-node-lease   Active   5m55s
   kube-public       Active   5m55s
   kube-system       Active   5m55s
   ```

1. Create a new vcluster with the name `my-vcluster`, which creates a new namespace called `vcluster-my-cluster` and automatically switches the active kube context to use your new vcluster.

   ```bash
   vcluster create my-vcluster --expose-local
   ```

1. To ensure your new local cluster is running properly get the namespaces for your instance. Your list of namespaces in the `my-vcluster` context should look something like this.

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

   These steps are partially based the guide [Using the ngrok Kubernetes Operator to create Preview Environments with vcluster](https://loft.sh/blog/using-the-ngrok-ingress-controller-to-create-preview-environments-with-vcluster/) from [Loft](https://loft.sh/), the maintainers of vcluster.

   :::

## **Step 2**: Install the ngrok Kubernetes Operator {#install-the-ngrok-ingress-controller}

Now that you have a Kubernetes cluster integrated with vcluster, you can install
the ngrok Kubernetes Operator to get traffic to your Kubernetes workloads.

Check out our [Operator installation doc](/docs/k8s/installation/install/) for
details on how to use Helm to install with your ngrok credentials.

## **Step 3**: Install a sample application {#install-a-sample-application}

At this point, you have a functional vcluster with the ngrok Kubernetes Operator running and authenticated with your
ngrok credentials. To demonstrate how the Operator simplifies routing external traffic to your primary
cluster, virtual cluster, and ultimately an exposed service or endpoint, you can install a sample application.

1. Reserve a domain for ingress if you don't have one already. Navigate to the [**Domains**
   section](https://dashboard.ngrok.com/domains) of the ngrok dashboard and click **Create Domain** or **New
   Domain**. We'll refer to this as `<NGROK_DOMAIN>` for the remainder of this guide.

   By creating a subdomain on the ngrok network, you provide a public route to accept HTTP, HTTPS, and TLS traffic.

1. Create a new Kubernetes manifest (`2048.yaml`) with the below contents. This manifest defines the 2048 application
   service and deployment, then configures the ngrok Kubernetes Operator to connect the `game-2048` service to the ngrok
   network. Be sure to replace `<NGROK_DOMAIN>` with the domain you reserved a
	 moment ago.

   ```yaml 
   apiVersion: v1
   kind: Service
   metadata:
     name: game-2048
     namespace: default
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
     namespace: default
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
   # ngrok Kubernetes Operator Configuration
   apiVersion: networking.k8s.io/v1
   kind: Ingress
   metadata:
     name: game-2048-ingress
     namespace: default
   spec:
     ingressClassName: ngrok
     rules:
       - host: <NGROK_DOMAIN>
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

   :::tip

   **Note:** If you get an error when applying the manifest, double check that you've updated the `NGROK_DOMAIN` value
   and try again.

   :::

1. Access your 2048 demo app by navigating to the your domain, e.g. `https://one-two-three.ngrok.app`. ngrok's edge
   and your Operator will route traffic to your app from any device or external network as long as your
   vcluster remains operational.

   !["Navigating directly to the https://one-two-three.ngrok.app domain to see the 2048 application"](img/ngrok-k8s-vcluster_2048.png)

## **Step 4**: Add OAuth protection to your demo app {#add-oauth-protection}

Let's take your ingress needs a little further by assuming you want to add edge security, in the form of Google OAuth,
to the endpoint where your 2048 application is humming along.

With our [Traffic Policy system](/docs/traffic-policy/) and the [`oauth`
action](/docs/traffic-policy/actions/oauth), ngrok manages OAuth protection
entirely at the cloud edge, which means you don't need to add any
additional services to your cluster, or alter routes, to ensure ngrok's edge
authenticates and authorizes all requests before allowing ingress and access to
your endpoint.

To enable the `oauth` action, you'll create a new `NgrokTrafficPolicy` custom
resource and apply it to your entire `Ingress` with an annotation. You can also
apply the policy to just a specific backend or as the default backend for an
`Ingress`—see our doc on using the [Operator with
Ingresses](/docs/k8s/guides/using-ingresses/#using-ngroktrafficpolicy-with-ingress).

1. Edit your existing `2048.yaml` manifest with the following, leaving the
	 `Service` and `Deployment` as they were. Note the new `annotations` field and
	 the `NgrokTrafficPolicy` CR.

   ```yaml
	 ...
   ---
   # Configuration for ngrok's Kubernetes Operator
   apiVersion: networking.k8s.io/v1
   kind: Ingress
   metadata:
     name: game-2048-ingress
     namespace: default
     annotations:
       k8s.ngrok.com/traffic-policy: oauth
   spec:
     ingressClassName: ngrok
     rules:
       - host: <NGROK_DOMAIN>
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
   # Traffic Policy configuration for OAuth
   apiVersion: ngrok.k8s.ngrok.com/v1alpha1
   kind: NgrokTrafficPolicy
   metadata:
     name: oauth
     namespace: default
   spec:
     policy:
		   on_http_request:
			   - type: oauth
				   config:
				     provider: google
   ```

1. Re-apply your `2048.yaml` configuration.

   ```bash
   kubectl apply -f 2048.yaml
   ```

1. When you open your demo app again, you'll be asked to log in via Google.
	 That's a start, but what if you want to authenticate only yourself or colleagues?

1. You can use [expressions](/docs/traffic-policy/concepts/expressions) and [CEL
	 interpolation](/docs/traffic-policy/concepts/cel-interpolation) to filter out
	 and reject OAuth logins that don't contain `example.com`. Update the
	 `NgrokTrafficPolicy` portion of your manifest after changing `example.com` to
	 your domain.

   ```yaml 
   ---
   # Traffic Policy configuration for OAuth
   apiVersion: ngrok.k8s.ngrok.com/v1alpha1
   kind: NgrokTrafficPolicy
   metadata:
     name: oauth
     namespace: default
   spec:
     policy:
		   on_http_request:
			   - type: oauth
				   config:
				     provider: google
				 - expressions:
				     - "!actions.ngrok.oauth.identity.email.endsWith('example.com')"
           actions:
             - type: custom-response
               config:
                 content: Hey, no auth for you ${actions.ngrok.oauth.identity.name}!
                 status_code: 400
   ```

1. Check out your deployed 2048 app once again. If you log in with an email that
	 doesn't match your domain, ngrok rejects your request. Authentication... done!

## What's next?

You've now used the open source ngrok Kubernetes Operator to add secure access to your endpoint without
worrying about IPs, network interfaces, or VPC routing. Because ngrok offloads ingress and middleware execution to its
global edge, you can follow the same procedure listed above for any Kubernetes environment, like EKS, GKE, and
OpenShift, with similar results.

If you want to clean up the work you did for this demo application, the easiest way (and the advantage of virtual
clusters in the first place) is to disconnect from your vcluster and then delete it with the `vcluster` CLI. That will remove the namespace and all its resources, returning your primary cluster to its initial state.

```bash
vcluster disconnect
vcluster delete my-vcluster
```

For next steps, explore our [Kubernetes docs](/docs/k8s/) for more details on
how the Operator works, different ways you can integrate ngrok with an existing
production cluster, or use more advanced features like
[bindings](docs/k8s/guides/bindings/) or [endpoint
pooling](/docs/k8s/guides/pooling/).

