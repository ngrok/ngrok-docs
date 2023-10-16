# OpenID Connect

---

This module restricts endpoint access to only users authorized by a OpenID Identity Provider. Upstream servers behind an OIDC-protected endpoint can safely assume that requests are from users authorized by the OIDC IdP to access the protected resource.

### Go SDK

See [WithOIDC](https://pkg.go.dev/golang.ngrok.com/ngrok/config#WithOIDC) in the Go SDK docs.

### NodeJS SDK

See [oidc_issuer_url](https://ngrok.github.io/ngrok-nodejs/interfaces/Config.html#oidc_issuer_url) in the NodeJS SDK docs.

### Python SDK

See [oidc](https://ngrok.github.io/ngrok-python/http_listener_builder.html#ngrok.HttpListenerBuilder.oidc) in the Python SDK docs.

### Rust SDK

See [oidc](https://docs.rs/ngrok/latest/ngrok/config/struct.HttpTunnelBuilder.html#method.oidc) in the Rust SDK docs.
