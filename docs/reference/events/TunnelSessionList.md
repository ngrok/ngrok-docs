
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| tunnel_sessions.agent_version | string | | version of the ngrok agent that started this ngrok tunnel session |
| tunnel_sessions.credential.id | string | | a resource identifier |
| tunnel_sessions.credential.uri | string | | a uri for locating a resource |
| tunnel_sessions.id | string | | unique tunnel session resource identifier |
| tunnel_sessions.ip | string | | source ip address of the tunnel session |
| tunnel_sessions.metadata | string | | arbitrary user-defined data specified in the metadata property in the ngrok configuration file. See the metadata configuration option |
| tunnel_sessions.os | string | | operating system of the host the ngrok agent is running on |
| tunnel_sessions.region | string | | the ngrok region identifier in which this tunnel session was started |
| tunnel_sessions.started_at | string | | time when the tunnel session first connected to the ngrok servers |
| tunnel_sessions.transport | string | | the transport protocol used to start the tunnel session. Either `ngrok/v2` or `ssh` |
| tunnel_sessions.uri | string | | URI to the API resource of the tunnel session |
| uri | string | | URI to the API resource of the tunnel session list |
| next_page_uri | string | | URI of the next page, or null if there is no next page |