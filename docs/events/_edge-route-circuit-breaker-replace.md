<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp; |
|---|---|---|
| edge_id | string |  |
| id | string |  |
| enabled | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| tripped_duration | uint32 | Integer number of seconds after which the circuit is tripped to wait before re-evaluating upstream health |
| rolling_window | uint32 | Integer number of seconds in the statistical rolling window that metrics are retained for. |
| num_buckets | uint32 | Integer number of buckets into which metrics are retained. Max 128. |
| volume_threshold | uint32 | Integer number of requests in a rolling window that will trip the circuit. Helpful if traffic volume is low. |
| error_threshold_percentage | float64 | Error threshold percentage should be between 0 - 1.0, not 0-100.0 |