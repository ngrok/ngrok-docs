
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
  "entity_id": "https://idp.local-ngrok.com/saml/ec_2NTVHQ1xMowcpl8kiarmEcuGQ2y",
  "assertion_consumer_service_url": "https://idp.local-ngrok.com/saml/ec_2NTVHQ1xMowcpl8kiarmEcuGQ2y/acs",
  "single_logout_url": "https://idp.local-ngrok.com/saml/ec_2NTVHQ1xMowcpl8kiarmEcuGQ2y/slo",
  "request_signing_certificate_pem": "-----BEGIN CERTIFICATE-----\nMIID6zCCAtOgAwIBAgIQTYzrmsnK5cDIVB/31eU5XjANBgkqhkiG9w0BAQsFADCB\nlDFIMEYGA1UECgw/aHR0cHM6Ly9pZHAubG9jYWwtbmdyb2suY29tL3NhbWwvZWNf\nMk5UVkhRMXhNb3djcGw4a2lhcm1FY3VHUTJ5MUgwRgYDVQQDDD9odHRwczovL2lk\ncC5sb2NhbC1uZ3Jvay5jb20vc2FtbC9lY18yTlRWSFExeE1vd2NwbDhraWFybUVj\ndUdRMnkwIBcNMjMwMzI0MTk1OTMwWhgPMjA1ODAzMTUxOTU5MzBaMIGUMUgwRgYD\nVQQKDD9odHRwczovL2lkcC5sb2NhbC1uZ3Jvay5jb20vc2FtbC9lY18yTlRWSFEx\neE1vd2NwbDhraWFybUVjdUdRMnkxSDBGBgNVBAMMP2h0dHBzOi8vaWRwLmxvY2Fs\nLW5ncm9rLmNvbS9zYW1sL2VjXzJOVFZIUTF4TW93Y3BsOGtpYXJtRWN1R1EyeTCC\nASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJnMhDMrurOkR50S++B5Vyfa\n6pG8DK87z4J7kxCl9IqSmRekETHvi+LIYcflMgNr/GRvDoR1lfvwGC/RmLSQC5M8\n2J5DEnv3TDGBUR7a7t+9a3UDNZXhImQh+8lzakj+Y9Ocm1AOXl4Y7zIcLnaQDq+L\n/qeTZQ33L+S0Lo17kE/IOJqjHiTr58bzaHeaLP5pLsCn5MMXRABO5XFuQTu8Wt7Z\nMmhBgIMHvihh8ld1p7kAThpnz4XZoRnh0UI7PYdAQLebIpawND5ynraH9SuWpCA/\nzR9ivY3pdEhPvfU0VIS115SjVrNBZxvlsrScO937sZ6+616D58IiVJY4g1OJvEkC\nAwEAAaM1MDMwDgYDVR0PAQH/BAQDAgeAMBMGA1UdJQQMMAoGCCsGAQUFBwMBMAwG\nA1UdEwEB/wQCMAAwDQYJKoZIhvcNAQELBQADggEBAI9+7eOtHunJbP+uhgGgy0yf\nbuwSOFzrwcthGvRMLdrxBFVpl6p8WV1OdbBBg/RWpvAGZWKjKJ9wGjr6tg0BPeh2\n6vu0l1CXrr47Ze5arC0ohLkAOofnWnHsPTMKTt24pwPSOUUHWAJNF37xyk8uttwg\nNN/l0UbN9JiZUpv+VJgZzDBWj8I2wuhBjU7od4BgqJfSpu8Rlrefmv8lbX8CQybq\nKHlBQSLqealDGxnb6DPBIzja2g5omnXug8ZeNUbVbjg6lepGzdIeNcspvjtjHNP+\n6a+QipsF/9ozB9A5ZHbZy8jjpYWgnjFIj9tf9tNWckfSnQruFFtFfJSdiWPJvvU=\n-----END CERTIFICATE-----\n",
  "metadata_url": "https://idp.local-ngrok.com/saml/ec_2NTVHQ1xMowcpl8kiarmEcuGQ2y",
  "nameid_format": "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"
}