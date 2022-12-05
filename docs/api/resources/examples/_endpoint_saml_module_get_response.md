
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
  "entity_id": "https://idp.local-ngrok.com/saml/ec_2GjEzJ2fskcBbTAjCRt6hDxAONG",
  "assertion_consumer_service_url": "https://idp.local-ngrok.com/saml/ec_2GjEzJ2fskcBbTAjCRt6hDxAONG/acs",
  "single_logout_url": "https://idp.local-ngrok.com/saml/ec_2GjEzJ2fskcBbTAjCRt6hDxAONG/slo",
  "request_signing_certificate_pem": "-----BEGIN CERTIFICATE-----\nMIID6zCCAtOgAwIBAgIQadKKg+B4K+gXI3mHz/uhUDANBgkqhkiG9w0BAQsFADCB\nlDFIMEYGA1UECgw/aHR0cHM6Ly9pZHAubG9jYWwtbmdyb2suY29tL3NhbWwvZWNf\nMkdqRXpKMmZza2NCYlRBakNSdDZoRHhBT05HMUgwRgYDVQQDDD9odHRwczovL2lk\ncC5sb2NhbC1uZ3Jvay5jb20vc2FtbC9lY18yR2pFekoyZnNrY0JiVEFqQ1J0NmhE\neEFPTkcwIBcNMjIxMDI3MTgwNDE0WhgPMjA1NzEwMTgxODA0MTRaMIGUMUgwRgYD\nVQQKDD9odHRwczovL2lkcC5sb2NhbC1uZ3Jvay5jb20vc2FtbC9lY18yR2pFekoy\nZnNrY0JiVEFqQ1J0NmhEeEFPTkcxSDBGBgNVBAMMP2h0dHBzOi8vaWRwLmxvY2Fs\nLW5ncm9rLmNvbS9zYW1sL2VjXzJHakV6SjJmc2tjQmJUQWpDUnQ2aER4QU9ORzCC\nASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMYiUbZO8Htl4IcDD8auHkjS\nA43jD6PGJDwM9D3iSDawd/qWCUF54szK8qrf+LLaAfWd/qAqto/P2eKtfJfpmQeQ\nz7o9czprS17Bgh0/9QWI+Aa5Qti0xFWERzQTUt2dy2Kg7ckQo+KRWQ6WGtoXv/bW\n811xA2FGEn+LZtb95KpGW40Q/8VPf5tmN6Bx8yE2zdLLvrcPN8mXYMz5OZzLOGDX\neGXqL30SkdjZNTltH9C/ZT7StkwyWTnzzeqmorQ+CaiIPqPwiPaBdYyqZJcdCeOd\nHNcRBSdSO4uDoOlU/aQ9L19b47I/VPIziiOfPwx3YyidgAWNKWnalDxMbQsVdLMC\nAwEAAaM1MDMwDgYDVR0PAQH/BAQDAgeAMBMGA1UdJQQMMAoGCCsGAQUFBwMBMAwG\nA1UdEwEB/wQCMAAwDQYJKoZIhvcNAQELBQADggEBAEWr0rNZy68BbCix4UZhVY8Z\n3k2MKVEka0tXM/9MY+fiie4iQXWrbzYI+D71AjSRoS5VKMampWfSmTXidki5zB9f\ntYUzr5gnDHkPymdqsOhOGeaKfkFgwCJdT717aJJuvEUM4UwROUyl4S6LfbR1T+M3\nHDvBZkMAXMKNci8ppQiEzkuAV6Zv98Wm8w3VlEJ/6oeJNjx4XjKCREYER1Dku1Or\nGCJjm28dShQXYGy7pDDO3aKxIx9gwoYfIcvi7nqjEmRTY3VpIKufjXg5vbOa7ZLF\ny5WmBmwGaF2N0SsaR0BYIDBBEeQbtu9VePrRhE7PNp0ksK+WTJvFKrwnTBCYcnA=\n-----END CERTIFICATE-----\n",
  "metadata_url": "https://idp.local-ngrok.com/saml/ec_2GjEzJ2fskcBbTAjCRt6hDxAONG",
  "nameid_format": "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"
}