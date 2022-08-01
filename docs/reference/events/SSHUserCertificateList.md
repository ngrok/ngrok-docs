
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| ssh_user_certificates.id | string | | unique identifier for this SSH User Certificate |
| ssh_user_certificates.uri | string | | URI of the SSH User Certificate API resource |
| ssh_user_certificates.created_at | string | | timestamp when the SSH User Certificate API resource was created, RFC 3339 format |
| ssh_user_certificates.description | string | | human-readable description of this SSH User Certificate. optional, max 255 bytes. |
| ssh_user_certificates.metadata | string | | arbitrary user-defined machine-readable data of this SSH User Certificate. optional, max 4096 bytes. |
| ssh_user_certificates.public_key | string | | a public key in OpenSSH Authorized Keys format that this certificate signs |
| ssh_user_certificates.key_type | string | | the key type of the `public_key`, one of `rsa`, `ecdsa` or `ed25519` |
| ssh_user_certificates.ssh_certificate_authority_id | string | | the ssh certificate authority that is used to sign this ssh user certificate |
| ssh_user_certificates.principals | List&lt;string&gt; | | the list of principals included in the ssh user certificate. This is the list of usernames that the certificate holder may sign in as on a machine authorizing the signing certificate authority. Dangerously, if no principals are specified, this certificate may be used to log in as any user. |
| ssh_user_certificates.critical_options | Map&lt;string, string&gt; | | A map of critical options included in the certificate. Only two critical options are currently defined by OpenSSH: `force-command` and `source-address`. See [the OpenSSH certificate protocol spec](https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys) for additional details. |
| ssh_user_certificates.extensions | Map&lt;string, string&gt; | | A map of extensions included in the certificate. Extensions are additional metadata that can be interpreted by the SSH server for any purpose. These can be used to permit or deny the ability to open a terminal, do port forwarding, x11 forwarding, and more. If unspecified, the certificate will include limited permissions with the following extension map: `{"permit-pty": "", "permit-user-rc": ""}` OpenSSH understands a number of predefined extensions. See [the OpenSSH certificate protocol spec](https://github.com/openssh/openssh-portable/blob/master/PROTOCOL.certkeys) for additional details. |
| ssh_user_certificates.valid_after | string | | the time when the ssh host certificate becomes valid, in RFC 3339 format. |
| ssh_user_certificates.valid_until | string | | the time after which the ssh host certificate becomes invalid, in RFC 3339 format. the OpenSSH certificates RFC calls this `valid_before`. |
| ssh_user_certificates.certificate | string | | the signed SSH certificate in OpenSSH Authorized Keys Format. this value should be placed in a `-cert.pub` certificate file on disk that should be referenced in your `sshd_config` configuration file with a `HostCertificate` directive |
| uri | string | | URI of the ssh user certificates list API resource |
| next_page_uri | string | | URI of the next page, or null if there is no next page |