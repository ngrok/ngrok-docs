<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | unique identifier for this SSH Host Certificate |
| uri | string | URI of the SSH Host Certificate API resource |
| created_at | string | timestamp when the SSH Host Certificate API resource was created, RFC 3339 format |
| description | string | human-readable description of this SSH Host Certificate. optional, max 255 bytes. |
| metadata | string | arbitrary user-defined machine-readable data of this SSH Host Certificate. optional, max 4096 bytes. |
| public_key | string | a public key in OpenSSH Authorized Keys format that this certificate signs |
| key_type | string | the key type of the `public_key`, one of `rsa`, `ecdsa` or `ed25519` |
| ssh_certificate_authority_id | string | the ssh certificate authority that is used to sign this ssh host certificate |
| principals | List&lt;string&gt; | the list of principals included in the ssh host certificate. This is the list of hostnames and/or IP addresses that are authorized to serve SSH traffic with this certificate. Dangerously, if no principals are specified, this certificate is considered valid for all hosts. |
| valid_after | string | the time when the ssh host certificate becomes valid, in RFC 3339 format. |
| valid_until | string | the time after which the ssh host certificate becomes invalid, in RFC 3339 format. the OpenSSH certificates RFC calls this `valid_before`. |
| certificate | string | the signed SSH certificate in OpenSSH Authorized Keys format. this value should be placed in a `-cert.pub` certificate file on disk that should be referenced in your `sshd_config` configuration file with a `HostCertificate` directive |
| uri | string | URI of the ssh host certificates list API resource |
| next_page_uri | string | URI of the next page, or null if there is no next page |