---
sidebar_position: 4
description: If an HTTP request includes an `Accept-Encoding` header, HTTP responses will be automatically compressed and a `Content-Encoding` response header will be added. If the response was already compressed by the upstream server, ngrok takes no action. `gzip` and `deflate` encodings are supported.
---


# Compression
----------------

If an HTTP request includes an `Accept-Encoding` header, HTTP responses will be automatically compressed and a `Content-Encoding` response header will be added. If the response was already compressed by the upstream server, ngrok takes no action. `gzip` and `deflate` encodings are supported.
