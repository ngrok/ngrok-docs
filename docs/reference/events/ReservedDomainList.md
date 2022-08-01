
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| reserved_domains.id | string | | unique reserved domain resource identifier |
| reserved_domains.uri | string | | URI of the reserved domain API resource |
| reserved_domains.created_at | string | | timestamp when the reserved domain was created, RFC 3339 format |
| reserved_domains.description | string | | human-readable description of what this reserved domain will be used for |
| reserved_domains.metadata | string | | arbitrary user-defined machine-readable data of this reserved domain. Optional, max 4096 bytes. |
| reserved_domains.domain | string | | hostname of the reserved domain |
| reserved_domains.region | string | | reserve the domain in this geographic ngrok datacenter. Optional, default is us. (au, eu, ap, us, jp, in, sa) |
| reserved_domains.cname_target | string | | DNS CNAME target for a custom hostname, or null if the reserved domain is a subdomain of *.ngrok.io |
| reserved_domains.certificate.id | string | | a resource identifier |
| reserved_domains.certificate.uri | string | | a uri for locating a resource |
| reserved_domains.certificate_management_policy.authority | string | | certificate authority to request certificates from. The only supported value is letsencrypt. |
| reserved_domains.certificate_management_policy.private_key_type | string | | type of private key to use when requesting certificates. Defaults to rsa, can be either rsa or ecdsa. |
| reserved_domains.certificate_management_status.renews_at | string | | timestamp when the next renewal will be requested, RFC 3339 format |
| reserved_domains.certificate_management_status.provisioning_job.error_code | string | | if present, an error code indicating why provisioning is failing. It may be either a temporary condition (INTERNAL_ERROR), or a permanent one the user must correct (DNS_ERROR). |
| reserved_domains.certificate_management_status.provisioning_job.msg | string | | a message describing the current status or error |
| reserved_domains.certificate_management_status.provisioning_job.started_at | string | | timestamp when the provisioning job started, RFC 3339 format |
| reserved_domains.certificate_management_status.provisioning_job.retries_at | string | | timestamp when the provisioning job will be retried |
| reserved_domains.acme_challenge_cname_target | string | | DNS CNAME target for the host _acme-challenge.example.com, where example.com is your reserved domain name. This is required to issue certificates for wildcard, non-ngrok reserved domains. Must be null for non-wildcard domains and ngrok subdomains. |
| uri | string | | URI of the reserved domain list API resource |
| next_page_uri | string | | URI of the next page, or null if there is no next page |