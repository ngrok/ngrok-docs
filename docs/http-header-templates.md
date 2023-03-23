# HTTP Header Templates
---------------

When using any of our features that manipulate HTTP header values, variables can be interpolated into a header value using [JSONPath](https://goessner.net/articles/JsonPath/) expressions surrounded by `${}` syntax. For example, using `${.ngrok.request_id}` as a header value will cause it to be filled in with the ngrok-generated Request ID.

Depending on the modules you leverage in your secure tunnel or cloud edge, you will have access to different objects that you can use for templating. For example, the variable `${.basic_auth.username}` is only available if you are using basic auth on your tunnel or endpoint.

## Examples

##### Add the basic auth username to the username header

    ngrok http --request-header-add 'username:${.basic_auth.username}' 3000

##### Add the two letter country code to the geo-country header

    ngrok http --request-header-add 'geo-country:${.ngrok.geo.country_code}' 3000

## Template Variables

### Backend Template Variables {#backend}

|     |     |
| --- | --- |
| `${.backend.connection_reused}` | True if ngrok reused a TCP connection to transmit the HTTP request to the upstream service. |
| `${.backend.dial_duration}` | The time to establish a connection from ngrok to the agent. |
| `${.backend.id}` | This is the ngrok ID of the backend that serviced this request. This is empty for secure tunnels since there is no backend. |

### Basic Auth Template Variables {#basic-auth}

Note: These values are only available when using the Basic Auth module.

|     |     |
| --- | --- |
| `${.basic_auth.decision}` | This is the decision based on the credentials provided. |
| `${.basic_auth.username}` | This is the username of the credentials that were provided. |

### Circuit Breaker Template Variables {#circuit-breaker}

Note: These values are only available when using the Circuit Breaker module.

|     |     |
| --- | --- |
| `${.circuit_breaker.decision}` | Whether the HTTP request was sent to the upstream service. 'allow' if the breaker was closed, 'block' if the breaker was open, 'allow\_while\_open' if the request was allowed while the breaker is open. |

### Compression Template Variables {#compression}

Note: These values are only available when using the Compression module.

|     |     |
| --- | --- |
| `${.compression.algorithm}` | The compression algorithm used to encode responses from the endpoint. Either 'gzip', 'deflate', or 'none'. |
| `${.compression.bytes_saved}` | The difference between the size of the raw response and the size of the response as compressed by ngrok. |

### Connection Template Variables {#conn}

|     |     |
| --- | --- |
| `${.conn.bytes_in}` | The number of bytes arriving at an endpoint from the frontend. |
| `${.conn.bytes_out}` | The number of bytes leaving an endpoint to the frontend. |
| `${.conn.client_ip}` | The source IP of the TCP connection to the ngrok edge. |
| `${.conn.duration}` | The total duration (in seconds) of the TCP connection between the ngrok endpoint and the agent. |
| `${.conn.end_ts}` | The timestamp when the TCP connection to the ngrok edge is closed. |
| `${.conn.id}` | The ngrok ID for this TCP connection. |
| `${.conn.server_ip}` | The IP address of the server that received the request. |
| `${.conn.server_name}` | The hostname associated with this connection. |
| `${.conn.server_port}` | The port that the connection for this request came in on. |
| `${.conn.start_ts}` | The timestamp when the TCP connection to the ngrok edge is established. |

### Geo IP Template Variables {#ngrok-geo}

This data is provided by [MaxMind GeoIP](https://www.maxmind.com/en/home).

|     |     |
| --- | --- |
| `${.ngrok.geo.country_code}` | This is the two-letter ISO country code based on the client IP. |
| `${.ngrok.geo.lat_long_radius_km}` | This is the radius in kilometers around the latitude and longitude where the client IP is likely to originate. |
| `${.ngrok.geo.latitude}` | This is the approximate latitude based on the client IP. |
| `${.ngrok.geo.longitude}` | This is the approximate longitude based on the client IP. |

### HTTP Template Variables {#http}

|     |     |
| --- | --- |
| `${.http.request_id}` | The unique ngrok-assigned ID of this request. |
| `${.http.request.method}` | The request method, normalized to uppercase. |
| `${.http.request.url.host}` | The host component of the request URL. |
| `${.http.request.url.path}` | The path component of the request URL |
| `${.http.request.url.query}` | The query string component of the request URL |
| `${.http.request.url.raw}` | The full URL of the request including scheme, host, path, and query string. |
| `${.http.request.url.scheme}` | The scheme component of the request URL. |
| `${.http.request.user_agent}` | The value of the User-Agent header in the request received by ngrok edge. |
| `${.http.request.version}` | The HTTP version used in the request. |
| `${.http.response.status_code}` | The status code of the response returned by the ngrok edge. |

### IP Policy Template Variables {#ip-policy}

Note: These values are only available when using the IP Policy module.

|     |     |
| --- | --- |
| `${.ip_policy.decision}` | 'allow' if IP Policy module permitted the request to the upstream service, 'block' otherwise. |
| `${.ip_policy.matching_rule}` | The rule that triggered an IP Policy match on the endpoint. |

### ngrok Template Variables {#ngrok-variables}

|     |     |
| --- | --- |
| `${.ngrok.client_ip}` | This is the original client IP of the request. |
| `${.ngrok.request_id}` | This is the unique request Id generated by ngrok |
| `${.ngrok.saml.subject}` | The SAML subject of the the authenticated user. |

### OAuth2 Template Variables {#oauth}

Note: These values are only available when using the OAuth module.

|     |     |
| --- | --- |
| `${.oauth.app_client_id}` | The is the ID of the OAuth2 application used to handle this request. |
| `${.oauth.decision}` | 'allow' if the OAuth module permitted the request to the upstream service, 'block' otherwise. |
| `${.oauth.user.email}` | This is the email address of the user that was authenticated. |
| `${.oauth.user.id}` | The authenticated user's ID returned by the OAuth provider. |
| `${.oauth.user.name}` | The authenticated user's name returned by the OAuth provider. |

### TLS Template Variables {#tls}

Note: These values are only available when using the Mutual TLS module.

|     |     |
| --- | --- |
| `${.tls.cipher_suite}` | The cipher suite selected during the TLS handshake. |
| `${.tls.client_cert.serial_number}` | The serial number of the client's leaf TLS certificate in the Mutual TLS handshake. |
| `${.tls.client_cert.subject.cn}` | The subject common name of the client's leaf TLS certificate in the Mutual TLS handshake. |
| `${.tls.client_cert.subject}` | The subject of the client's leaf TLS certificate in the Mutual TLS handshake |
| `${.tls.version}` | The version of the TLS protocol used between the client and the ngrok edge. |

### Webhook Verification Template Variables {#webhook-verification}

Note: These values are only available when using the Webhook Verification module.

|     |     |
| --- | --- |
| `${.webhook_validation.decision}` | 'allow' if the Webhook Verification module permitted the request to the upstream service, 'block' otherwise. |