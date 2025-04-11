<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| description | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| metadata | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| hostports | List&lt;string&gt; | hostports served by this edge |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| backend_id | string | backend to be used to back this endpoint |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| ip_policy_ids | List&lt;string&gt; | list of all IP policies that will be used to check if a source IP is allowed access to the endpoint |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| value | string | the traffic policy that should be applied to the traffic on your endpoint. |