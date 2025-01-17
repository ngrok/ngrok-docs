<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | unique reserved domain resource identifier |
| uri | string | URI of the reserved domain API resource |
| created_at | string | timestamp when the reserved domain was created, RFC 3339 format |
| description | string | human-readable description of what this reserved domain will be used for |
| metadata | string | arbitrary user-defined machine-readable data of this reserved domain. Optional, max 4096 bytes. |
| domain | string | hostname of the reserved domain |
| region | string | deprecated: With the launch of the ngrok Global Network domains traffic is now handled globally. This field applied only to endpoints. Note that agents may still connect to specific regions. Optional, null by default. (au, eu, ap, us, jp, in, sa) |
| cname_target | string | DNS CNAME target for a custom hostname, or null if the reserved domain is a subdomain of an ngrok owned domain (e.g. *.ngrok.app) |
| id | string | a resource identifier |
| uri | string | a uri for locating a resource |
| authority | string | certificate authority to request certificates from. The only supported value is letsencrypt. |
| private_key_type | string | type of private key to use when requesting certificates. Defaults to ecdsa, can be either rsa or ecdsa. |
| renews_at | string | timestamp when the next renewal will be requested, RFC 3339 format |
| error_code | string | if present, an error code indicating why provisioning is failing. It may be either a temporary condition (INTERNAL_ERROR), or a permanent one the user must correct (DNS_ERROR). |
| msg | string | a message describing the current status or error |
| started_at | string | timestamp when the provisioning job started, RFC 3339 format |
| retries_at | string | timestamp when the provisioning job will be retried |
| acme_challenge_cname_target | string | DNS CNAME target for the host _acme-challenge.example.com, where example.com is your reserved domain name. This is required to issue certificates for wildcard, non-ngrok reserved domains. Must be null for non-wildcard domains and ngrok subdomains. |