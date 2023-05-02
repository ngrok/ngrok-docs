# Event Filtering
---------------

Some events, such as HTTP Request Complete and TCP Connection Closed, are high cardinality events. As such, these events can quickly hit the limits of the receiving destination. To reduce the number of events returned from these sources, you can add filtering logic to only allow specific events through to your destination.

The filtering syntax follows [Google's Common Expression Language (CEL) Syntax](https://github.com/google/cel-spec/blob/master/doc/langdef.md#standard). All expressions start with `ev.` which corresponds to the `object` field of the event. From there, you can use standard [JSONPath](https://goessner.net/articles/JsonPath/) syntax to find the particular field you are interested in. See the examples below for ideas.

The only events that can be filtered today are [`http_request_complete.v0`](/events#http_request_completev0) and [`tcp_connection_closed.v0`](/events#tcp_connection_closedv0). Not all selectable fields are usable in filters. A field marked "filterable" indicates that it is usable in the filter for an event source.

### Filter Examples

###### Log requests to an endpoint that didn't use TLS:

    ev.conn.server_name.matches(".*-your-org\\.ngrok\\.dev") &&
    ev.conn.server_port == 80

###### Only allow events from the ngrok-docs-examples.ngrok.dev hostname

    ev.conn.server_name.matches("ngrok-docs-examples\\.ngrok\\.dev")

###### Only allow events that aren't from this client IP and attempting to access ngrok-docs-examples.ngrok.dev

    ev.conn.client_ip != "2601:0:8200:0:4cd7:fd52:0:7823" && 
    ev.conn.server_name == "ngrok-docs-examples.ngrok.dev"