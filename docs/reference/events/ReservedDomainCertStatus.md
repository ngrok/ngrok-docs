
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| renews_at | string | | timestamp when the next renewal will be requested, RFC 3339 format |
| provisioning_job.error_code | string | | if present, an error code indicating why provisioning is failing. It may be either a temporary condition (INTERNAL_ERROR), or a permanent one the user must correct (DNS_ERROR). |
| provisioning_job.msg | string | | a message describing the current status or error |
| provisioning_job.started_at | string | | timestamp when the provisioning job started, RFC 3339 format |
| provisioning_job.retries_at | string | | timestamp when the provisioning job will be retried |