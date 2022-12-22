---
title: gRPC
---

# Using ngrok with gRPC
------------

gRPC (short for "Google Remote Procedure Calls") is a remote procedure call (RPC) system that uses HTTP/2 as the transport protocol and Protocol Buffers as the encoding format. It is designed to be simple, efficient, and highly scalable, and is used by many large organizations, including Google, to power their microservices and APIs.

To use gRPC with ngrok, you will need to set up a gRPC server and client in your application. Then, you can use ngrok to expose the gRPC server to the internet, allowing the client to communicate with the server remotely.

As noted by this [Stack Overflow user](https://stackoverflow.com/a/59555606/7282727), when forwarding to gRPC services, use `proto: tcp`.
