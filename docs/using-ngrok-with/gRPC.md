---
title: gRPC
---

# Using ngrok with gRPC

Since gRPC uses HTTP/2, you may need to specify the `app-protocol` when forwarding a gRPC endpoint:

`ngrok http --app-protocol=http2 80`

This works with other ngrok features like custom domains and ports.

This [Stack Overflow user](https://stackoverflow.com/a/59555606/7282727) also reports that forwarding to gRPC services works using `proto: tcp`.
