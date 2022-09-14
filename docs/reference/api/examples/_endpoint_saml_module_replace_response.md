
###### Example Response
```
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
  "entity_id": "https://idp.local-ngrok.com/saml/ec_2EmMPUGTsPInk72L0EfZQO5dDmS",
  "assertion_consumer_service_url": "https://idp.local-ngrok.com/saml/ec_2EmMPUGTsPInk72L0EfZQO5dDmS/acs",
  "single_logout_url": "https://idp.local-ngrok.com/saml/ec_2EmMPUGTsPInk72L0EfZQO5dDmS/slo",
  "request_signing_certificate_pem": "-----BEGIN CERTIFICATE-----\nMIID7DCCAtSgAwIBAgIRANArKxMpJxTbHLLA0aOTx/UwDQYJKoZIhvcNAQELBQAw\ngZQxSDBGBgNVBAoMP2h0dHBzOi8vaWRwLmxvY2FsLW5ncm9rLmNvbS9zYW1sL2Vj\nXzJFbU1QVUdUc1BJbms3MkwwRWZaUU81ZERtUzFIMEYGA1UEAww/aHR0cHM6Ly9p\nZHAubG9jYWwtbmdyb2suY29tL3NhbWwvZWNfMkVtTVBVR1RzUEluazcyTDBFZlpR\nTzVkRG1TMCAXDTIyMDkxNDIyNTgwMloYDzIwNTcwOTA1MjI1ODAyWjCBlDFIMEYG\nA1UECgw/aHR0cHM6Ly9pZHAubG9jYWwtbmdyb2suY29tL3NhbWwvZWNfMkVtTVBV\nR1RzUEluazcyTDBFZlpRTzVkRG1TMUgwRgYDVQQDDD9odHRwczovL2lkcC5sb2Nh\nbC1uZ3Jvay5jb20vc2FtbC9lY18yRW1NUFVHVHNQSW5rNzJMMEVmWlFPNWREbVMw\nggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC/lSBjLSmvQ+ykU1l46ROF\nV1+PWn5rbWyZ6S/+CtK4E1gtA7Rmu5JIGXKXYuwHQKYGJQT/xRZC2Pl6VYExgyf6\nfAS8+FtLfqDmLs6kMWA8ZfP3S6F1sgVspqFasTvP2T/wX17G6OGT2hJgl/fuqSpm\nVt5B0PqV9dRtCMiY8xY26pi6Wh9X1aC/kHTnMuBjUUuF8b+VrFQ34JfE2/bpfp1s\nEJLVIDCgLuZ+j107vIFNO2vPtppPUupbdfg7XAkvwGQu240+zws8HqM16qtQvx0h\nXuwxyqV2qAYU0AFJ+PZ5P96SaAHzlZ362iHGhwreAr0ERF/OOwgnTZpbWb1JYvir\nAgMBAAGjNTAzMA4GA1UdDwEB/wQEAwIHgDATBgNVHSUEDDAKBggrBgEFBQcDATAM\nBgNVHRMBAf8EAjAAMA0GCSqGSIb3DQEBCwUAA4IBAQAWlnvJOP2F7BtNrO5igQS3\nt8UKydDBf2xVULsBRxNO5+1nf46dCheNL25HQatH1ux5HiQyBX0dNCdGG8UCpw+O\nKXBICeUXLviH4dkdURPqsbaX71D0EBOL9Nm4qUrxsbS+ZUn5TM5KmBVodoMFCtZs\nqP8Cnmw4lXFp56DiwVmfyeoh8hnOpwPRv0zXRMwNWOspna1VK3XcKonVVuBaQrFx\nlNybc+KOVXAM+LoTV4ZYue+vZCoQmzQZVut+/QLFft5124E9loyuVtNAIOj+pjFh\nVOpvLM+4YyVsXV4t3OXH6sRRKZarw3tG2KjmUJyCSSKe3sIMHEhboXeBw5mdlZ/Y\n-----END CERTIFICATE-----\n",
  "metadata_url": "https://idp.local-ngrok.com/saml/ec_2EmMPUGTsPInk72L0EfZQO5dDmS",
  "nameid_format": "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"
}