<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp;           | &nbsp;             | &nbsp;                                                                                                                                                                                      |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name             | string             | the name by which endpoints can be bound to this Kubernetes Operator. starts with "k8s/"                                                                                                    |
| allowed_urls     | List&lt;string&gt; | the regexes for urls allowed to be bound to this operator                                                                                                                                   |
| csr              | string             | CSR is supplied during initial creation to enable creating a mutual TLS secured connection between ngrok and the operator. This is an internal implementation detail and subject to change. |
| ingress_endpoint | string             | the public ingress endpoint for this Kubernetes Operator                                                                                                                                    |
