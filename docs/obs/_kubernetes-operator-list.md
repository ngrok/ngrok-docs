<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | unique identifier for this Kubernetes Operator |
| uri | string | URI of this Kubernetes Operator API resource |
| created_at | string | timestamp when the Kubernetes Operator was created. RFC 3339 format |
| updated_at | string | timestamp when the Kubernetes Operator was last updated. RFC 3339 format |
| description | string | human-readable description of this Kubernetes Operator. optional, max 255 bytes. |
| metadata | string | arbitrary user-defined machine-readable data of this Kubernetes Operator. optional, max 4096 bytes. |
| id | string | a resource identifier |
| uri | string | a uri for locating a resource |
| enabled_features | List&lt;string&gt; | features enabled for this Kubernetes Operator. a subset of "bindings", "ingress", and "gateway" |
| region | string | the ngrok region in which the ingress for this operator is served. defaults to "global" |
| name | string | the deployment name |
| namespace | string | the namespace this Kubernetes Operator is deployed to |
| version | string | the version of this Kubernetes Operator |
| cluster_name | string | user-given name for the cluster the Kubernetes Operator is deployed to |
| endpoint_selectors | List&lt;string&gt; | the list of cel expressions that filter the k8s bound endpoints for this operator |
| cert | string | the public client certificate generated for this Kubernetes Operator from the CSR supplied when enabling the Bindings feature |
| not_before | string | timestamp when the certificate becomes valid. RFC 3339 format |
| not_after | string | timestamp when the certificate becomes invalid. RFC 3339 format |
| ingress_endpoint | string | the public ingress endpoint for this Kubernetes Operator |
| uri | string |  |
| next_page_uri | string | URI of the next page, or null if there is no next page |