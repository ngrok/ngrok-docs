<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| endpoint_selectors | List&lt;string&gt; | the list of cel expressions that filter the k8s bound endpoints for this operator |
| cert | string | the public client certificate generated for this Kubernetes Operator from the CSR supplied when enabling the Bindings feature |
| not_before | string | timestamp when the certificate becomes valid. RFC 3339 format |
| not_after | string | timestamp when the certificate becomes invalid. RFC 3339 format |
| ingress_endpoint | string | the public ingress endpoint for this Kubernetes Operator |