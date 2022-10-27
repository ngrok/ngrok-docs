
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
  "entity_id": "https://idp.local-ngrok.com/saml/ec_2GjCRYrx4kjpz4br7N8WEEV30Y6",
  "assertion_consumer_service_url": "https://idp.local-ngrok.com/saml/ec_2GjCRYrx4kjpz4br7N8WEEV30Y6/acs",
  "single_logout_url": "https://idp.local-ngrok.com/saml/ec_2GjCRYrx4kjpz4br7N8WEEV30Y6/slo",
  "request_signing_certificate_pem": "-----BEGIN CERTIFICATE-----\nMIID7DCCAtSgAwIBAgIRAPpb5dVkycMkE2YsIVaV0YswDQYJKoZIhvcNAQELBQAw\ngZQxSDBGBgNVBAoMP2h0dHBzOi8vaWRwLmxvY2FsLW5ncm9rLmNvbS9zYW1sL2Vj\nXzJHakNSWXJ4NGtqcHo0YnI3TjhXRUVWMzBZNjFIMEYGA1UEAww/aHR0cHM6Ly9p\nZHAubG9jYWwtbmdyb2suY29tL3NhbWwvZWNfMkdqQ1JZcng0a2pwejRicjdOOFdF\nRVYzMFk2MCAXDTIyMTAyNzE3NDMxOFoYDzIwNTcxMDE4MTc0MzE4WjCBlDFIMEYG\nA1UECgw/aHR0cHM6Ly9pZHAubG9jYWwtbmdyb2suY29tL3NhbWwvZWNfMkdqQ1JZ\ncng0a2pwejRicjdOOFdFRVYzMFk2MUgwRgYDVQQDDD9odHRwczovL2lkcC5sb2Nh\nbC1uZ3Jvay5jb20vc2FtbC9lY18yR2pDUllyeDRranB6NGJyN044V0VFVjMwWTYw\nggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCmHdeZl5RWQOOu3Bk3cT2Z\nDsZqaYtKlHg4ACCUeTcdYmqpH/FJYbzG6LFCcNMQhbYHwiugq3F6XpuYL1MAzul+\n9kZ0i0pzWe4cbQVtgJ7/gk94QZ9wlYMswMIxmaaBv/Bokr2Hm2Cx5/rLOBBjnidG\n/yoVhZ7FZpPsfdskBtj0RNlF9Jq5TBd9OH0Q0Qg7rNkI+MXH98lN0+LbRzVHPZMl\n+vjBwP5BLkO4sbdkZ/ME4d4fmONvwsxo4fg3z2y9NzKKUTx6SIMa1FB2mLjMPEPL\nTZzd4UplsFlp6bg/Y6UaR1WXNI1rTkobuoW2Mu7+GVaa3+SgTV2a84JN6UJGqf91\nAgMBAAGjNTAzMA4GA1UdDwEB/wQEAwIHgDATBgNVHSUEDDAKBggrBgEFBQcDATAM\nBgNVHRMBAf8EAjAAMA0GCSqGSIb3DQEBCwUAA4IBAQCH4+NC3OoINYeNaTZew/u8\nrNH78YQqoBKMIBk5b0rwRg00K3z4MhATG/WDTjLvaX3CHEa900Uh6JfaFRmhYxjN\nOOH0vkhKmHRfhmIvw7N9+ZohlEDSNz770uPOyjKJ9ET0psNmXJpdNKnPJ9+tVowM\n8PCSb1x3mB3zhTDgly5BqiqoQijxm8T1/+MGniMx9pAssHDd25ZBrXeArZFUSde6\nMOVmP5jojvrkG+dMnaViabnClPv0jAKLzWO3Ggfu6j0PKp69XAlxjbnvSnGfneXy\nYHb/dKtl20MiRP/ZFbGzFIasH0jxxu4x5n6oh9zDY7eIwWLRuSuYmc6CfZzV8Ivq\n-----END CERTIFICATE-----\n",
  "metadata_url": "https://idp.local-ngrok.com/saml/ec_2GjCRYrx4kjpz4br7N8WEEV30Y6",
  "nameid_format": "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"
}