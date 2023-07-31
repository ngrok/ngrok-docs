<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| description | string | human-readable description of this IP restriction. optional, max 255 bytes. |
| metadata | string | arbitrary user-defined machine-readable data of this IP restriction. optional, max 4096 bytes. |
| enforced | boolean | true if the IP restriction will be enforced. if false, only warnings will be issued |
| type | string | the type of IP restriction. this defines what traffic will be restricted with the attached policies. four values are currently supported: `dashboard`, `api`, `agent`, and `endpoints` |
| ip_policy_ids | List&lt;string&gt; | the set of IP policy identifiers that are used to enforce the restriction |