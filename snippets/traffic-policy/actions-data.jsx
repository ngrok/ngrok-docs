// Generated from gateway/traffic-policy/actions.json by custom/scripts/traffic-policy-actions.js. Do not edit.

export const actions = [
  {
    "type": "add-headers",
    "name": "Add Headers",
    "description": "Add headers to your incoming requests or outgoing responses.",
    "phases": [
      "on_http_request",
      "on_http_response"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/add-headers"
  },
  {
    "type": "basic-auth",
    "name": "Basic Auth",
    "description": "Enforce HTTP Basic Auth for your HTTP endpoints.",
    "phases": [
      "on_http_request"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/basic-auth"
  },
  {
    "type": "circuit-breaker",
    "name": "Circuit Breaker",
    "description": "Maintain system reliability by rejecting requests when error rates exceed defined thresholds.",
    "phases": [
      "on_http_request"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/circuit-breaker"
  },
  {
    "type": "close-connection",
    "name": "Close Connection",
    "description": "Close a client's connection to ngrok before it is further processed or tunneled to any of your upstream services.",
    "phases": [
      "on_tcp_connect",
      "on_http_request"
    ],
    "terminating": true,
    "path": "/gateway/traffic-policy/actions/close-connection"
  },
  {
    "type": "compress-response",
    "name": "Compress Response",
    "description": "Compress HTTP response bodies from your upstream server.",
    "phases": [
      "on_http_response"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/compress-response"
  },
  {
    "type": "custom-response",
    "name": "Custom Response",
    "description": "Send a custom HTTP response directly back to the client.",
    "phases": [
      "on_http_request",
      "on_http_response"
    ],
    "terminating": true,
    "path": "/gateway/traffic-policy/actions/custom-response"
  },
  {
    "type": "deny",
    "name": "Deny",
    "description": "Deny incoming traffic to your endpoint at the HTTP layer.",
    "phases": [
      "on_tcp_connect",
      "on_http_request"
    ],
    "terminating": true,
    "path": "/gateway/traffic-policy/actions/deny"
  },
  {
    "type": "forward-internal",
    "name": "Forward Internal",
    "description": "Forward traffic to an internal endpoint within the same ngrok account.",
    "phases": [
      "on_tcp_connect",
      "on_http_request"
    ],
    "terminating": true,
    "path": "/gateway/traffic-policy/actions/forward-internal"
  },
  {
    "type": "http-request",
    "name": "HTTP Request",
    "description": "Send an HTTP request to a third-party API and return the response.",
    "phases": [
      "on_http_request",
      "on_http_response"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/http-request"
  },
  {
    "type": "jwt-validation",
    "name": "JWT Validation",
    "description": "Validate JSON Web Tokens (JWTs) on your incoming requests.",
    "phases": [
      "on_http_request"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/jwt-validation"
  },
  {
    "type": "log",
    "name": "Log",
    "description": "Add log metadata to events for logging and monitoring.",
    "phases": [
      "on_tcp_connect",
      "on_http_request",
      "on_http_response"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/log"
  },
  {
    "type": "oauth",
    "name": "OAuth",
    "description": "Add OAuth login for your HTTP endpoints.",
    "phases": [
      "on_http_request"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/oauth"
  },
  {
    "type": "openid-connect",
    "name": "OpenID Connect (OIDC)",
    "description": "Add OpenID Connect login for your HTTP endpoints.",
    "phases": [
      "on_http_request"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/openid-connect"
  },
  {
    "type": "owasp-crs-request",
    "name": "OWASP CRS Request",
    "description": "Add OWASP CoreRuleSet to incoming HTTP requests to your endpoints.",
    "phases": [
      "on_http_request"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/owasp-crs-request"
  },
  {
    "type": "owasp-crs-response",
    "name": "OWASP CRS Response",
    "description": "Add OWASP CoreRuleSet to outgoing HTTP responses from your endpoints.",
    "phases": [
      "on_http_response"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/owasp-crs-response"
  },
  {
    "type": "rate-limit",
    "name": "Rate Limit",
    "description": "Rate limit incoming traffic to your endpoint before it hits your upstream servers.",
    "phases": [
      "on_http_request"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/rate-limit"
  },
  {
    "type": "redirect",
    "name": "Redirect",
    "description": "Redirect users through URL transformations using regular expressions.",
    "phases": [
      "on_http_request"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/redirect"
  },
  {
    "type": "remove-headers",
    "name": "Remove Headers",
    "description": "Remove headers from incoming requests or outgoing responses.",
    "phases": [
      "on_http_request",
      "on_http_response"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/remove-headers"
  },
  {
    "type": "request-body-find-replace",
    "name": "Request Body Find & Replace",
    "description": "Find and replace text patterns in HTTP request bodies using regular expressions.",
    "phases": [
      "on_http_request"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/request-body-find-replace"
  },
  {
    "type": "response-body-find-replace",
    "name": "Response Body Find & Replace",
    "description": "Find and replace text patterns in HTTP response bodies using regular expressions.",
    "phases": [
      "on_http_response"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/response-body-find-replace"
  },
  {
    "type": "restrict-ips",
    "name": "Restrict IPs",
    "description": "Allow or deny incoming traffic based on the client IP.",
    "phases": [
      "on_tcp_connect",
      "on_http_request",
      "on_http_response"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/restrict-ips"
  },
  {
    "type": "set-vars",
    "name": "Set Vars",
    "description": "Set custom variables for use in your Traffic Policy.",
    "phases": [
      "on_tcp_connect",
      "on_http_request",
      "on_http_response"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/set-vars"
  },
  {
    "type": "sse-find-replace",
    "name": "SSE Find & Replace",
    "description": "Find and replace text patterns in Server-Sent Events (SSE) streams.",
    "phases": [
      "on_event_stream_message"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/sse-find-replace"
  },
  {
    "type": "terminate-tls",
    "name": "Terminate TLS",
    "description": "Control the behavior of TLS termination on your endpoints.",
    "phases": [
      "on_tcp_connect"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/terminate-tls"
  },
  {
    "type": "url-rewrite",
    "name": "URL Rewrite",
    "description": "Rewrite request URLs transparently using regular expressions.",
    "phases": [
      "on_http_request"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/url-rewrite"
  },
  {
    "type": "verify-webhook",
    "name": "Verify Webhook",
    "description": "Validate incoming signatures against a known secret to ensure authenticity.",
    "phases": [
      "on_http_request"
    ],
    "terminating": false,
    "path": "/gateway/traffic-policy/actions/verify-webhook"
  }
];
