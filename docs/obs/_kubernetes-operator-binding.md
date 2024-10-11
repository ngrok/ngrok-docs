<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp;           | &nbsp;             | &nbsp;                                                                                                                        |
| ---------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| name             | string             | the name by which endpoints can be bound to this Kubernetes Operator. starts with "k8s/"                                      |
| allowed_urls     | List&lt;string&gt; | the regexes for urls allowed to be bound to this operator                                                                     |
| cert             | string             | the public client certificate generated for this Kubernetes Operator from the CSR supplied when enabling the Bindings feature |
| not_before       | string             | timestamp when the certificate becomes valid. RFC 3339 format                                                                 |
| not_after        | string             | timestamp when the certificate becomes invalid. RFC 3339 format                                                               |
| ingress_endpoint | string             | the public ingress endpoint for this Kubernetes Operator                                                                      |
