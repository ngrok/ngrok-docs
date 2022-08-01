
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| id | string | | unique reserved domain resource identifier |
| uri | string | | URI of the reserved domain API resource |
| created_at | string | | timestamp when the reserved domain was created, RFC 3339 format |
| description | string | | human-readable description of what this reserved domain will be used for |
| metadata | string | | arbitrary user-defined machine-readable data of this reserved domain. Optional, max 4096 bytes. |
| domain | string | | hostname of the reserved domain |
| region | string | | reserve the domain in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) |
| cname_target | string | | DNS CNAME target for a custom hostname, or null if the reserved domain is a subdomain of *.ngrok.io |
| certificate.id | string | | a resource identifier |
| certificate.uri | string | | a uri for locating a resource |
| certificate_management_policy.authority | string | | certificate authority to request certificates from. The only supported value is letsencrypt. |
| certificate_management_policy.private_key_type | string | | type of private key to use when requesting certificates. Defaults to rsa, can be either rsa or ecdsa. |
| certificate_management_status.renews_at | string | | timestamp when the next renewal will be requested, RFC 3339 format |
| certificate_management_status.provisioning_job.error_code | string | | if present, an error code indicating why provisioning is failing. It may be either a temporary condition (INTERNAL_ERROR), or a permanent one the user must correct (DNS_ERROR). |
| certificate_management_status.provisioning_job.msg | string | | a message describing the current status or error |
| certificate_management_status.provisioning_job.started_at | string | | timestamp when the provisioning job started, RFC 3339 format |
| certificate_management_status.provisioning_job.retries_at | string | | timestamp when the provisioning job will be retried |
| acme_challenge_cname_target | string | | DNS CNAME target for the host _acme-challenge.example.com, where example.com is your reserved domain name. This is required to issue certificates for wildcard, non-ngrok reserved domains. Must be null for non-wildcard domains and ngrok subdomains. |