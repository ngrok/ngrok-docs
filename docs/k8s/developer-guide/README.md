# Developer Guide

While this project is new and we don't have full contribution guidelines yet, we are open to any PRs and or issues raised. Feel free to reach out to us on slack as well!

## In the weeds architecture

Have a look at the architecture guide on the internal workings of the ingress controller [here](./architecture)

## Local Development

- [Go 1.20](https://go.dev/dl/)
- [Helm](https://helm.sh/docs/intro/install/)

Both of these can be obtained via [nix-direnv](https://github.com/nix-community/nix-direnv), which will automatically configure your shell for you.

- A k8s cluster is available via your kubectl client. This can be a remote cluster or a local cluster like [minikube](https://minikube.sigs.k8s.io/docs/start/)
  - NOTE: Depending on your cluster, you may have to take additional steps to make the image available. For example with minikube, you may need to run `eval $(minikube docker-env)` in each terminal session to make the image from `make deploy` available to the cluster.

### Setup

```sh
export NGROK_API_KEY=<YOUR Secret API KEY>
export NGROK_AUTHTOKEN=<YOUR Secret Auth Token>
# kubectl can connect to your cluster and images built locally are available to the cluster
kubectl create namespace ngrok-ingress-controller
kubectl config set-context --current --namespace=ngrok-ingress-controller

make deploy
```

### Using the E2E Fixtures

Several examples are provided in the [`e2e-fixtures` folder](https://github.com/ngrok/kubernetes-ingress-controller/tree/main/e2e-fixtures). To use an example, make a copy of the included `EXAMPLE*config.yaml` in the same directory, like this:

- `cp e2e-fixtures/hello-world-ingress/EXAMPLE-config.yaml e2e-fixtures/hello-world-ingress/config.yaml`
- `cp e2e-fixtures/ingress-class/EXAMPLE-config-different.yaml e2e-fixtures/ingress-class/config-different.yaml`

Then, you need to update the `value` field in that new file.

You can then apply the given example via `kubectl apply -k e2e-fixtures/<example in question>`, i.e.
`kubectl apply -k e2e-fixtures/hello-world-ingress`.

### E2E Tests

If you run the script `./scripts/e2e.sh` it will run the e2e tests against your current kubectl context. These tests tear down any existing ingress controller and examples, re-installs them, and then runs the tests. It creates a set of different ingresses and verifies that they all behave as expected

## Releasing

Please see the [release guide](./releasing) for more information on how to release a new version of the ingress controller.
