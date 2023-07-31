<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| error_code | string | if present, an error code indicating why provisioning is failing. It may be either a temporary condition (INTERNAL_ERROR), or a permanent one the user must correct (DNS_ERROR). |
| msg | string | a message describing the current status or error |
| started_at | string | timestamp when the provisioning job started, RFC 3339 format |
| retries_at | string | timestamp when the provisioning job will be retried |