# Response Headers

---

The Response Headers module allows you to add and remove headers from HTTP responses before they are returned to the client. This is especially useful for enforcing the use of security headers on all responses returned by your application.

Changes made to response headers will not be visible to other modules; they will only be seen by the client.

Header addition and removal functions similarly for request and response headers. See [HTTP Headers](/docs/cloud-edge/http-header-templates) for more details.

Variables can be interpolated into a header value using JSONPath expressions surrounded by `${}` syntax. See [Header Templates](/docs/cloud-edge/http-header-templates) for more details.
