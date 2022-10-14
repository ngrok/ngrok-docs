import EdgesTLSCreateRequest from './examples/_edges_tls_create_request.md';
import EdgesTLSCreateResponse from './examples/_edges_tls_create_response.md';
import EdgesTLSGetRequest from './examples/_edges_tls_get_request.md';
import EdgesTLSGetResponse from './examples/_edges_tls_get_response.md';
import EdgesTLSListRequest from './examples/_edges_tls_list_request.md';
import EdgesTLSListResponse from './examples/_edges_tls_list_response.md';
import EdgesTLSUpdateRequest from './examples/_edges_tls_update_request.md';
import EdgesTLSUpdateResponse from './examples/_edges_tls_update_response.md';
import EdgesTLSDeleteRequest from './examples/_edges_tls_delete_request.md';

# TLS Edges
------------



## Create TLS Edge
Create a TLS Edge

### Request

POST /edges/tls

<EdgesTLSCreateRequest />


#### Parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackendMutate](#api-edges-tls-create-parameters-endpoint-backend-mutate) | edge modules |
| `ip_restriction` | [EndpointIPPolicyMutate](#api-edges-tls-create-parameters-endpoint-ip-policy-mutate) |  |
| `mutual_tls` | [EndpointMutualTLSMutate](#api-edges-tls-create-parameters-endpoint-mutual-tls-mutate) |  |
| `tls_termination` | [EndpointTLSTermination](#api-edges-tls-create-parameters-endpoint-tls-termination) |  |

#### EndpointBackendMutate parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend_id` | string | backend to be used to back this endpoint |

#### EndpointIPPolicyMutate parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policy_ids` | List&lt;string&gt; | list of all IP policies that will be used to check if a source IP is allowed access to the endpoint |

#### EndpointMutualTLSMutate parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authority_ids` | List&lt;string&gt; | list of certificate authorities that will be used to validate the TLS client certificate presented by the initiator of the TLS connection |

#### EndpointTLSTermination parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |


### Response

Returns a 201 response  on success

<EdgesTLSCreateResponse />


#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge configuration was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackend](#api-edges-tls-create-fields-endpoint-backend) | edge modules |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-tls-create-fields-endpoint-ip-policy) |  |
| `mutual_tls` | [EndpointMutualTLS](#api-edges-tls-create-fields-endpoint-mutual-tls) |  |
| `tls_termination` | [EndpointTLSTermination](#api-edges-tls-create-fields-endpoint-tls-termination) |  |

#### EndpointBackend fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-tls-create-fields-ref) | backend to be used to back this endpoint |

#### Ref fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

#### EndpointIPPolicy fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-tls-create-fields-ref) |  |

#### EndpointMutualTLS fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authorities` | [Ref](#api-edges-tls-create-fields-ref) | PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together. |

#### EndpointTLSTermination fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |


## Get TLS Edge
Get a TLS Edge by ID

### Request

GET /edges/tls/{id}

<EdgesTLSGetRequest />


### Response

Returns a 200 response  on success

<EdgesTLSGetResponse />


#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge configuration was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackend](#api-edges-tls-get-fields-endpoint-backend) | edge modules |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-tls-get-fields-endpoint-ip-policy) |  |
| `mutual_tls` | [EndpointMutualTLS](#api-edges-tls-get-fields-endpoint-mutual-tls) |  |
| `tls_termination` | [EndpointTLSTermination](#api-edges-tls-get-fields-endpoint-tls-termination) |  |

#### EndpointBackend fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-tls-get-fields-ref) | backend to be used to back this endpoint |

#### Ref fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

#### EndpointIPPolicy fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-tls-get-fields-ref) |  |

#### EndpointMutualTLS fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authorities` | [Ref](#api-edges-tls-get-fields-ref) | PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together. |

#### EndpointTLSTermination fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |


## List TLS Edges
Returns a list of all TLS Edges on this account

### Request

GET /edges/tls

<EdgesTLSListRequest />


### Response

Returns a 200 response  on success

<EdgesTLSListResponse />


#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `tls_edges` | [TLSEdge](#api-edges-tls-list-fields-tls-edge) | the list of all TLS Edges on this account |
| `uri` | string | URI of the TLS Edge list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

#### TLSEdge fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge configuration was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackend](#api-edges-tls-list-fields-endpoint-backend) | edge modules |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-tls-list-fields-endpoint-ip-policy) |  |
| `mutual_tls` | [EndpointMutualTLS](#api-edges-tls-list-fields-endpoint-mutual-tls) |  |
| `tls_termination` | [EndpointTLSTermination](#api-edges-tls-list-fields-endpoint-tls-termination) |  |

#### EndpointBackend fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-tls-list-fields-ref) | backend to be used to back this endpoint |

#### Ref fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

#### EndpointIPPolicy fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-tls-list-fields-ref) |  |

#### EndpointMutualTLS fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authorities` | [Ref](#api-edges-tls-list-fields-ref) | PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together. |

#### EndpointTLSTermination fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |


## Update TLS Edge
Updates a TLS Edge by ID. If a module is not specified in the update, it will not be modified. However, each module configuration that is specified will completely replace the existing value. There is no way to delete an existing module via this API, instead use the delete module API.

### Request

PATCH /edges/tls/{id}

<EdgesTLSUpdateRequest />


#### Parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackendMutate](#api-edges-tls-update-parameters-endpoint-backend-mutate) | edge modules |
| `ip_restriction` | [EndpointIPPolicyMutate](#api-edges-tls-update-parameters-endpoint-ip-policy-mutate) |  |
| `mutual_tls` | [EndpointMutualTLSMutate](#api-edges-tls-update-parameters-endpoint-mutual-tls-mutate) |  |
| `tls_termination` | [EndpointTLSTermination](#api-edges-tls-update-parameters-endpoint-tls-termination) |  |

#### EndpointBackendMutate parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend_id` | string | backend to be used to back this endpoint |

#### EndpointIPPolicyMutate parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policy_ids` | List&lt;string&gt; | list of all IP policies that will be used to check if a source IP is allowed access to the endpoint |

#### EndpointMutualTLSMutate parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authority_ids` | List&lt;string&gt; | list of certificate authorities that will be used to validate the TLS client certificate presented by the initiator of the TLS connection |

#### EndpointTLSTermination parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |


### Response

Returns a 200 response  on success

<EdgesTLSUpdateResponse />


#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge configuration was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackend](#api-edges-tls-update-fields-endpoint-backend) | edge modules |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-tls-update-fields-endpoint-ip-policy) |  |
| `mutual_tls` | [EndpointMutualTLS](#api-edges-tls-update-fields-endpoint-mutual-tls) |  |
| `tls_termination` | [EndpointTLSTermination](#api-edges-tls-update-fields-endpoint-tls-termination) |  |

#### EndpointBackend fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-tls-update-fields-ref) | backend to be used to back this endpoint |

#### Ref fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

#### EndpointIPPolicy fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-tls-update-fields-ref) |  |

#### EndpointMutualTLS fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `certificate_authorities` | [Ref](#api-edges-tls-update-fields-ref) | PEM-encoded CA certificates that will be used to validate. Multiple CAs may be provided by concatenating them together. |

#### EndpointTLSTermination fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `terminate_at` | string | `edge` if the ngrok edge should terminate TLS traffic, `upstream` if TLS traffic should be passed through to the upstream ngrok agent / application server for termination. if `upstream` is chosen, most other modules will be disallowed because they rely on the ngrok edge being able to access the underlying traffic. |
| `min_version` | string | The minimum TLS version used for termination and advertised to the client during the TLS handshake. if unspecified, ngrok will choose an industry-safe default. This value must be null if `terminate_at` is set to `upstream`. |


## Delete TLS Edge
Delete a TLS Edge by ID

### Request

DELETE /edges/tls/{id}

<EdgesTLSDeleteRequest />


### Response

Returns a 204 response with no body on success
