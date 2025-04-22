<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string |  |
| description | string | human-readable description of what this reserved domain will be used for |
| metadata | string | arbitrary user-defined machine-readable data of this reserved domain. Optional, max 4096 bytes. |
| certificate_id | string | ID of a user-uploaded TLS certificate to use for connections to targeting this domain. Optional, mutually exclusive with `certificate_management_policy`. |
| authority | string | certificate authority to request certificates from. The only supported value is letsencrypt. |
| private_key_type | string | type of private key to use when requesting certificates. Defaults to ecdsa, can be either rsa or ecdsa. |