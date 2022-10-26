
#### Example Response
```json
{
  "enabled": true,
  "options_passthrough": false,
  "cookie_prefix": "",
  "inactivity_timeout": 0,
  "maximum_duration": 0,
  "idp_metadata_url": "",
  "idp_metadata": "\n\u003cEntityDescriptor xmlns=\"urn:oasis:names:tc:SAML:2.0:metadata\" validUntil=\"2020-09-14T12:53:23.691Z\" cacheDuration=\"PT1M\" entityID=\"http://127.0.0.1:12345/metadata\"\u003e\u003cIDPSSODescriptor xmlns=\"urn:oasis:names:tc:SAML:2.0:metadata\" protocolSupportEnumeration=\"urn:oasis:names:tc:SAML:2.0:protocol\"\u003e\u003cNameIDFormat\u003eurn:oasis:names:tc:SAML:2.0:nameid-format:transient\u003c/NameIDFormat\u003e\u003cSingleSignOnService Binding=\"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect\" Location=\"http://127.0.0.1:12345/sso\"\u003e\u003c/SingleSignOnService\u003e\u003cSingleSignOnService Binding=\"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST\" Location=\"http://127.0.0.1:12345/sso\"\u003e\u003c/SingleSignOnService\u003e\u003c/IDPSSODescriptor\u003e\u003c/EntityDescriptor\u003e\n",
  "force_authn": false,
  "allow_idp_initiated": true,
  "authorized_groups": [],
  "entity_id": "https://idp.local-ngrok.com/saml/ec_2Ggv0QjGkcQpC961Gzio77eENhG",
  "assertion_consumer_service_url": "https://idp.local-ngrok.com/saml/ec_2Ggv0QjGkcQpC961Gzio77eENhG/acs",
  "single_logout_url": "https://idp.local-ngrok.com/saml/ec_2Ggv0QjGkcQpC961Gzio77eENhG/slo",
  "request_signing_certificate_pem": "-----BEGIN CERTIFICATE-----\nMIID6zCCAtOgAwIBAgIQLXtIZ7e5R6TiuoqHMSO16zANBgkqhkiG9w0BAQsFADCB\nlDFIMEYGA1UECgw/aHR0cHM6Ly9pZHAubG9jYWwtbmdyb2suY29tL3NhbWwvZWNf\nMkdndjBRakdrY1FwQzk2MUd6aW83N2VFTmhHMUgwRgYDVQQDDD9odHRwczovL2lk\ncC5sb2NhbC1uZ3Jvay5jb20vc2FtbC9lY18yR2d2MFFqR2tjUXBDOTYxR3ppbzc3\nZUVOaEcwIBcNMjIxMDI2MjIyMDE4WhgPMjA1NzEwMTcyMjIwMThaMIGUMUgwRgYD\nVQQKDD9odHRwczovL2lkcC5sb2NhbC1uZ3Jvay5jb20vc2FtbC9lY18yR2d2MFFq\nR2tjUXBDOTYxR3ppbzc3ZUVOaEcxSDBGBgNVBAMMP2h0dHBzOi8vaWRwLmxvY2Fs\nLW5ncm9rLmNvbS9zYW1sL2VjXzJHZ3YwUWpHa2NRcEM5NjFHemlvNzdlRU5oRzCC\nASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALCNxZMwqavceyqE+lQbMH2c\nkCPM8q282va8kQDJpB6xYDBa6An/Smulh2jfsDpR1HF9MNUB/NDDFJGbu1LYQn9g\nhCUaLiX+2Y8+1SnrZgHBqcvnsjhBDJ+34w2BU4F09CpEZh9dsIP2F2Rl1D0qTkvj\nd5zI46vgg0GNIXMx+mbqqnR/1mJal75kxOnw0mH0ApjVguK51p5wW4Qjfl7ZUpC9\nGsgb4h7EbWYGPUcVyXLAI59TeF7INHDnOfUHR2tfEB0vAqPMAgcVA7xWv69EU+4o\nNJWInC966IHVq+/O8inKwA5s+ZOMSmoWcmUdlEsg/GaMLHj8+XXUKEC1CImqQ78C\nAwEAAaM1MDMwDgYDVR0PAQH/BAQDAgeAMBMGA1UdJQQMMAoGCCsGAQUFBwMBMAwG\nA1UdEwEB/wQCMAAwDQYJKoZIhvcNAQELBQADggEBAJ1rLuLsroT1+5QSsEdmh54d\nBPIjSMy4FChiBs6wuzF58WIH89J3DHwHcYJQvK0vJd9l7aQi4+Jxy1hzIMb6u/7T\nqH3uO7nxT/JMwXzcFuNTTmwVE9Bx0kPHlapm8OrTmSAoRyAuxuWufDHTIP24+5/X\nVTLrBrSxgjzF/AFp8QOI/zBty7NlEvwhK/Q4l0NXi6KawrEE7tG9EfoaEggTfCA4\n07uhdGRxCOLPe+dkwK/WvYO+raAUn0NQgbSWB2qWQH0FT0PBkzDYPkbgnCLa5VnO\nLCSqRcwF2nPGW7+qgA+qs5Fubj8CcTzBC89YFDc7FnDigRYWRo4lYXJpoLkSiIU=\n-----END CERTIFICATE-----\n",
  "metadata_url": "https://idp.local-ngrok.com/saml/ec_2Ggv0QjGkcQpC961Gzio77eENhG",
  "nameid_format": "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"
}