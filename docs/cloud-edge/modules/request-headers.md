# Request Headers
----------------

The Request Headers module allows you to add and remove headers from HTTP requests before they are sent to your upstream server.

Changes made to request headers will not be visible to other modules; they will only be seen by your upstream server.

Header addition and removal functions similarly for request and response headers. See [HTTP Headers](/docs/cloud-edge/http-header-templates) for more details.

Variables can be interpolated into a header value using JSONPath expressions surrounded by `${}` syntax. See [Header Templates](/docs/cloud-edge/http-header-templates) for more details.
