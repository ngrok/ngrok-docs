
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
  "entity_id": "https://idp.local-ngrok.com/saml/ec_2ElyFEHXjiHIjrFN4ozEQutRdv3",
  "assertion_consumer_service_url": "https://idp.local-ngrok.com/saml/ec_2ElyFEHXjiHIjrFN4ozEQutRdv3/acs",
  "single_logout_url": "https://idp.local-ngrok.com/saml/ec_2ElyFEHXjiHIjrFN4ozEQutRdv3/slo",
  "request_signing_certificate_pem": "-----BEGIN CERTIFICATE-----\nMIID7DCCAtSgAwIBAgIRAL3E/yV+P1djgZjEdhKTS9MwDQYJKoZIhvcNAQELBQAw\ngZQxSDBGBgNVBAoMP2h0dHBzOi8vaWRwLmxvY2FsLW5ncm9rLmNvbS9zYW1sL2Vj\nXzJFbHlGRUhYamlISWpyRk40b3pFUXV0UmR2MzFIMEYGA1UEAww/aHR0cHM6Ly9p\nZHAubG9jYWwtbmdyb2suY29tL3NhbWwvZWNfMkVseUZFSFhqaUhJanJGTjRvekVR\ndXRSZHYzMCAXDTIyMDkxNDE5MzkyMFoYDzIwNTcwOTA1MTkzOTIwWjCBlDFIMEYG\nA1UECgw/aHR0cHM6Ly9pZHAubG9jYWwtbmdyb2suY29tL3NhbWwvZWNfMkVseUZF\nSFhqaUhJanJGTjRvekVRdXRSZHYzMUgwRgYDVQQDDD9odHRwczovL2lkcC5sb2Nh\nbC1uZ3Jvay5jb20vc2FtbC9lY18yRWx5RkVIWGppSElqckZONG96RVF1dFJkdjMw\nggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCjJFSQIBzYgER3yznR4E/k\n4HDCwNVmk8zsYURlXA26U65oFXW93RV7JHvRLe2xS8NrASTAW/diN+Mm9FTtRz09\n6VKw0RJEDfPu4yG7wPYX8PQlGrJh0w9dlPrK2zDHEHVjBIn2KTPLH9oH3Ndqhr69\n4t0if/+ICVZznPja+NN3Bl3sd6DMprdXS1rZq4ROj7XlzLbQgL/HhGBq+/5O6+5G\nQ2oUuvivE4igBYt1lrQsEHzbmFNIgKvc5GVOy9WSBRnWilg2UnAZ+VZ9HKji5Art\n71na4Dqkn8YmtdpgeX5NOb2fdMcY62vgv/z+P0FZ8Jfo3yZoZfbYToKTYDkmiDHt\nAgMBAAGjNTAzMA4GA1UdDwEB/wQEAwIHgDATBgNVHSUEDDAKBggrBgEFBQcDATAM\nBgNVHRMBAf8EAjAAMA0GCSqGSIb3DQEBCwUAA4IBAQA5wpnhyCMKVarzpUVfzrOx\nsMgvH8wZbYUD8Zefl/+1/1u7tCZh9T8bsUrs91hHk/m7KKmnrU+YJzeqMCF+gY4w\nsBCdarMvDhMtf+FWb/kgJuBz/U1ZNWf95XqEkZdMiWJE+Pg4M3aSUGBcMXum/CJg\nLJ954zt5hvSSXr2kEGTLPnss0J6F2wskSaPzIdzM2ycdO8zuMf+npz4mBwSthdsg\nRMhRDHR1+03WmoYLxTUH2rJi51k9ocReb8ZqOC7L41xoqDd3I4nnpEPxk2RqGy1L\nEc3TM8UzCCbBdWJNUg6GNip53UzVh3juEJSgH5P4Cmfo7WMrf8gfbpCLlI0MiCT/\n-----END CERTIFICATE-----\n",
  "metadata_url": "https://idp.local-ngrok.com/saml/ec_2ElyFEHXjiHIjrFN4ozEQutRdv3",
  "nameid_format": "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"
}