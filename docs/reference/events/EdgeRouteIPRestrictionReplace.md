
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| edge_id | string | |  |
| id | string | |  |
| module.enabled | boolean | | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| module.ip_policy_ids | List&lt;string&gt; | | list of all IP policies that will be used to check if a source IP is allowed access to the endpoint |