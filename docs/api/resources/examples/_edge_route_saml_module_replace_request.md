<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Request

```bash
curl \
-X PUT \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"enabled":true,"idp_metadata":"\n<EntityDescriptor xmlns=\"urn:oasis:names:tc:SAML:2.0:metadata\" validUntil=\"2020-09-14T12:53:23.691Z\" cacheDuration=\"PT1M\" entityID=\"http://127.0.0.1:12345/metadata\"><IDPSSODescriptor xmlns=\"urn:oasis:names:tc:SAML:2.0:metadata\" protocolSupportEnumeration=\"urn:oasis:names:tc:SAML:2.0:protocol\"><NameIDFormat>urn:oasis:names:tc:SAML:2.0:nameid-format:transient</NameIDFormat><SingleSignOnService Binding=\"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect\" Location=\"http://127.0.0.1:12345/sso\"></SingleSignOnService><SingleSignOnService Binding=\"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST\" Location=\"http://127.0.0.1:12345/sso\"></SingleSignOnService></IDPSSODescriptor></EntityDescriptor>\n"}' \
https://api.ngrok.com/edges/https/edghts_2fmnzFnyDZXw33N9wSt302lXNmq/routes/edghtsrt_2fmnzBqS9YoMwCBzfNhSkdi4aLS/saml
```
