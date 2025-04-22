<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | unique Agent Ingress resource identifier |
| uri | string | URI to the API resource of this Agent ingress |
| description | string | human-readable description of the use of this Agent Ingress. optional, max 255 bytes. |
| metadata | string | arbitrary user-defined machine-readable data of this Agent Ingress. optional, max 4096 bytes |
| domain | string | the domain that you own to be used as the base domain name to generate regional agent ingress domains. |
| ns_targets | List&lt;string&gt; | a list of target values to use as the values of NS records for the domain property these values will delegate control over the domain to ngrok |
| region_domains | List&lt;string&gt; | a list of regional agent ingress domains that are subdomains of the value of domain this value may increase over time as ngrok adds more regions |
| created_at | string | timestamp when the Agent Ingress was created, RFC 3339 format |
| authority | string | certificate authority to request certificates from. The only supported value is letsencrypt. |
| private_key_type | string | type of private key to use when requesting certificates. Defaults to rsa, can be either rsa or ecdsa. |
| renews_at | string | timestamp when the next renewal will be requested, RFC 3339 format |
| error_code | string | if present, an error code indicating why provisioning is failing. It may be either a temporary condition (INTERNAL_ERROR), or a permanent one the user must correct (DNS_ERROR). |
| msg | string | a message describing the current status or error |
| started_at | string | timestamp when the provisioning job started, RFC 3339 format |
| retries_at | string | timestamp when the provisioning job will be retried |