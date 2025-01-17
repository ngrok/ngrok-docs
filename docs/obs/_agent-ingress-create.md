<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| description | string | human-readable description of the use of this Agent Ingress. optional, max 255 bytes. |
| metadata | string | arbitrary user-defined machine-readable data of this Agent Ingress. optional, max 4096 bytes |
| domain | string | the domain that you own to be used as the base domain name to generate regional agent ingress domains. |
| authority | string | certificate authority to request certificates from. The only supported value is letsencrypt. |
| private_key_type | string | type of private key to use when requesting certificates. Defaults to rsa, can be either rsa or ecdsa. |