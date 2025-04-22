<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| id | string | a resource identifier |
| uri | string | a uri for locating a resource |
| id | string | a resource identifier |
| uri | string | a uri for locating a resource |
| agent_ip | string | the ip address from which the agent is connecting |
| ingress_server_ip | string | the ip address of the ingress server to which the agent is connecting |
| region | string | the region of the tunnel server |
| ingress_hostname | string | the hostname of the tunnel server |
| user_agent | string | the user agent provided to the tunnel server by the agent |
| metadata | string | the session metadata provided by the agent on connection |
| os | string | the operating system of the machine on which the agent is running |
| arch | string | the CPU architecture of the machine on which the agent is running |
| transport | string | the transport protocol used internally by the agent "muxado" for agents and agent libraries, "ssh" for reverse SSH tunnels |
| started_at | string | the time at which the session started |
| expires_at | string | the time at which the session expires |
| stopped_at | string | the time at which the session stopped |
| upcoming_minimum_version | string | the upcoming minimum supported agent version |
| upcoming_enforcement_date | string | the date by which the current agent must be upgraded to the upcoming minimum version |
| message | string | additional information about the agent deprecation |
| error | string | on a failed session start, an explanation of the failure on a successful session start, the empty string on a session stop, the reason for the session stop |