<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | unique identifier for this Kubernetes Operator |
| description | string | human-readable description of this Kubernetes Operator. optional, max 255 bytes. |
| metadata | string | arbitrary user-defined machine-readable data of this Kubernetes Operator. optional, max 4096 bytes. |
| enabled_features | List&lt;string&gt; | features enabled for this Kubernetes Operator. a subset of "bindings", "ingress", and "gateway" |
| region | string | the ngrok region in which the ingress for this operator is served. defaults to "global" |
| endpoint_selectors | List&lt;string&gt; | the list of cel expressions that filter the k8s bound endpoints for this operator |
| csr | string | CSR is supplied during initial creation to enable creating a mutual TLS secured connection between ngrok and the operator. This is an internal implementation detail and subject to change. |
| ingress_endpoint | string | the public ingress endpoint for this Kubernetes Operator |
| name | string | the deployment name |
| version | string | the version of this Kubernetes Operator |