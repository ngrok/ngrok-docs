
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
  "entity_id": "https://idp.local-ngrok.com/saml/edghtsrt_2EmMQ4vrnOR9VawX6MrNGCu8H61",
  "assertion_consumer_service_url": "https://idp.local-ngrok.com/saml/edghtsrt_2EmMQ4vrnOR9VawX6MrNGCu8H61/acs",
  "single_logout_url": "https://idp.local-ngrok.com/saml/edghtsrt_2EmMQ4vrnOR9VawX6MrNGCu8H61/slo",
  "request_signing_certificate_pem": "-----BEGIN CERTIFICATE-----\nMIIEBDCCAuygAwIBAgIRAKkObZP6w+hfMv2+DSWvcPcwDQYJKoZIhvcNAQELBQAw\ngaAxTjBMBgNVBAoMRWh0dHBzOi8vaWRwLmxvY2FsLW5ncm9rLmNvbS9zYW1sL2Vk\nZ2h0c3J0XzJFbU1RNHZybk9SOVZhd1g2TXJOR0N1OEg2MTFOMEwGA1UEAwxFaHR0\ncHM6Ly9pZHAubG9jYWwtbmdyb2suY29tL3NhbWwvZWRnaHRzcnRfMkVtTVE0dnJu\nT1I5VmF3WDZNck5HQ3U4SDYxMCAXDTIyMDkxNDIyNTgwNloYDzIwNTcwOTA1MjI1\nODA2WjCBoDFOMEwGA1UECgxFaHR0cHM6Ly9pZHAubG9jYWwtbmdyb2suY29tL3Nh\nbWwvZWRnaHRzcnRfMkVtTVE0dnJuT1I5VmF3WDZNck5HQ3U4SDYxMU4wTAYDVQQD\nDEVodHRwczovL2lkcC5sb2NhbC1uZ3Jvay5jb20vc2FtbC9lZGdodHNydF8yRW1N\nUTR2cm5PUjlWYXdYNk1yTkdDdThINjEwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw\nggEKAoIBAQDRg3yejDhskIbL0CwIu8CbaJvASx5a1LsJrq0OWB0nYg/P66caR1Ku\nRhpt0r8dVbGdAmk95L3VFWsARuNVzAVNkR05rIVcxImJHquksKEDRDW1Hoha6YB0\nkDXW/JR3VtXK7n+tJfhESh2wKHx11/Bt/U0u5oud2yaOEk7X+x0Bf9iGud49tOEw\ni5DJx0DcDxRvUzwU1yeKBwb7E9s0SAih1DSn2IJeFTX8ryLGaT9OHYq+VU/+U+St\nunNUzAG1ezY9OETb5kPhCGvZjRHZ3vfa/Jy0ergrmEZ0yUSZi1qe52mL+jWakCJy\n7Ic5lDfYvCfynYJ8wlyIWVYukukzsGOFAgMBAAGjNTAzMA4GA1UdDwEB/wQEAwIH\ngDATBgNVHSUEDDAKBggrBgEFBQcDATAMBgNVHRMBAf8EAjAAMA0GCSqGSIb3DQEB\nCwUAA4IBAQCunqfU+RCzNy0KadsrUuFX2QYPtVjv3hAcvSkVLkqkT0RnNXl+f40k\nRF67qGSdOHhezB3op+6iuxzwGbqIwGD/zo9bO5g3OJiDQvlmdJS1ryLUAlP1bFfb\nz3KqclxmdjsBRuaM8JitocJerNBlJMEQETv8ZY27GPKhhFRziDUNcTIkPy/eAFb7\n0J7lKoKc/NeLGjRVfgXYvtaHboZqRT6SLYT3X9nOZ+bPVh7BJ6kO32UQuTvCjLfD\n6bFj/SZU0FkOwIIlVaoc/mVFbGXvjyUD/rLG2fQxvLI5TpbpL3nCFq0fLevs9IN4\n3lu2iShPMJQiJFTBc73IV3A4CntR4tqT\n-----END CERTIFICATE-----\n",
  "metadata_url": "https://idp.local-ngrok.com/saml/edghtsrt_2EmMQ4vrnOR9VawX6MrNGCu8H61",
  "nameid_format": "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"
}