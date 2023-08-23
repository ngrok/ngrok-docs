<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp;         | &nbsp;             | &nbsp;                                                                                                                                           |
| -------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| id             | string             | unique Agent Ingress resource identifier                                                                                                         |
| uri            | string             | URI to the API resource of this Agent ingress                                                                                                    |
| description    | string             | human-readable description of the use of this Agent Ingress. optional, max 255 bytes.                                                            |
| metadata       | string             | arbitrary user-defined machine-readable data of this Agent Ingress. optional, max 4096 bytes                                                     |
| domain         | string             | the domain that you own to be used as the base domain name to generate regional agent ingress domains.                                           |
| ns_targets     | List&lt;string&gt; | a list of target values to use as the values of NS records for the domain property these values will delegate control over the domain to ngrok   |
| region_domains | List&lt;string&gt; | a list of regional agent ingress domains that are subdomains of the value of domain this value may increase over time as ngrok adds more regions |
| created_at     | string             | timestamp when the Agent Ingress was created, RFC 3339 format                                                                                    |
