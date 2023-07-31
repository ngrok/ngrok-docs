<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| name | string | the domain name to reserve. It may be a full domain name like app.example.com. If the name does not contain a '.' it will reserve that subdomain on ngrok.io. |
| domain | string | hostname of the reserved domain |
| region | string | reserve the domain in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) |
| description | string | human-readable description of what this reserved domain will be used for |
| metadata | string | arbitrary user-defined machine-readable data of this reserved domain. Optional, max 4096 bytes. |
| certificate_id | string | ID of a user-uploaded TLS certificate to use for connections to targeting this domain. Optional, mutually exclusive with `certificate_management_policy`. |
| authority | string | certificate authority to request certificates from. The only supported value is letsencrypt. |
| private_key_type | string | type of private key to use when requesting certificates. Defaults to rsa, can be either rsa or ecdsa. |