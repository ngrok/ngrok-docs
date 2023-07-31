<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| description | string | human-readable description of this SSH Certificate Authority. optional, max 255 bytes. |
| metadata | string | arbitrary user-defined machine-readable data of this SSH Certificate Authority. optional, max 4096 bytes. |
| private_key_type | string | the type of private key to generate. one of `rsa`, `ecdsa`, `ed25519` |
| elliptic_curve | string | the type of elliptic curve to use when creating an ECDSA key |
| key_size | int64 | the key size to use when creating an RSA key. one of `2048` or `4096` |