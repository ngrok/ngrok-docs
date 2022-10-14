import EdgesTCPCreateRequest from './examples/_edges_tcp_create_request.md';
import EdgesTCPCreateResponse from './examples/_edges_tcp_create_response.md';
import EdgesTCPGetRequest from './examples/_edges_tcp_get_request.md';
import EdgesTCPGetResponse from './examples/_edges_tcp_get_response.md';
import EdgesTCPListRequest from './examples/_edges_tcp_list_request.md';
import EdgesTCPListResponse from './examples/_edges_tcp_list_response.md';
import EdgesTCPUpdateRequest from './examples/_edges_tcp_update_request.md';
import EdgesTCPUpdateResponse from './examples/_edges_tcp_update_response.md';
import EdgesTCPDeleteRequest from './examples/_edges_tcp_delete_request.md';

# TCP Edges
------------



## Create TCP Edge
Create a TCP Edge

### Request

POST /edges/tcp

<EdgesTCPCreateRequest />


#### Parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackendMutate](#api-edges-tcp-create-parameters-endpoint-backend-mutate) | edge modules |
| `ip_restriction` | [EndpointIPPolicyMutate](#api-edges-tcp-create-parameters-endpoint-ip-policy-mutate) |  |

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


### Response

Returns a 201 response  on success

<EdgesTCPCreateResponse />


#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackend](#api-edges-tcp-create-fields-endpoint-backend) | edge modules |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-tcp-create-fields-endpoint-ip-policy) |  |

#### EndpointBackend fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-tcp-create-fields-ref) | backend to be used to back this endpoint |

#### Ref fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

#### EndpointIPPolicy fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-tcp-create-fields-ref) |  |


## Get TCP Edge
Get a TCP Edge by ID

### Request

GET /edges/tcp/{id}

<EdgesTCPGetRequest />


### Response

Returns a 200 response  on success

<EdgesTCPGetResponse />


#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackend](#api-edges-tcp-get-fields-endpoint-backend) | edge modules |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-tcp-get-fields-endpoint-ip-policy) |  |

#### EndpointBackend fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-tcp-get-fields-ref) | backend to be used to back this endpoint |

#### Ref fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

#### EndpointIPPolicy fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-tcp-get-fields-ref) |  |


## List TCP Edges
Returns a list of all TCP Edges on this account

### Request

GET /edges/tcp

<EdgesTCPListRequest />


### Response

Returns a 200 response  on success

<EdgesTCPListResponse />


#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `tcp_edges` | [TCPEdge](#api-edges-tcp-list-fields-tcp-edge) | the list of all TCP Edges on this account |
| `uri` | string | URI of the TCP Edge list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

#### TCPEdge fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackend](#api-edges-tcp-list-fields-endpoint-backend) | edge modules |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-tcp-list-fields-endpoint-ip-policy) |  |

#### EndpointBackend fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-tcp-list-fields-ref) | backend to be used to back this endpoint |

#### Ref fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

#### EndpointIPPolicy fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-tcp-list-fields-ref) |  |


## Update TCP Edge
Updates a TCP Edge by ID. If a module is not specified in the update, it will not be modified. However, each module configuration that is specified will completely replace the existing value. There is no way to delete an existing module via this API, instead use the delete module API.

### Request

PATCH /edges/tcp/{id}

<EdgesTCPUpdateRequest />


#### Parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackendMutate](#api-edges-tcp-update-parameters-endpoint-backend-mutate) | edge modules |
| `ip_restriction` | [EndpointIPPolicyMutate](#api-edges-tcp-update-parameters-endpoint-ip-policy-mutate) |  |

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


### Response

Returns a 200 response  on success

<EdgesTCPUpdateResponse />


#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | unique identifier of this edge |
| `description` | string | human-readable description of what this edge will be used for; optional, max 255 bytes. |
| `metadata` | string | arbitrary user-defined machine-readable data of this edge. Optional, max 4096 bytes. |
| `created_at` | string | timestamp when the edge was created, RFC 3339 format |
| `uri` | string | URI of the edge API resource |
| `hostports` | List&lt;string&gt; | hostports served by this edge |
| `backend` | [EndpointBackend](#api-edges-tcp-update-fields-endpoint-backend) | edge modules |
| `ip_restriction` | [EndpointIPPolicy](#api-edges-tcp-update-fields-endpoint-ip-policy) |  |

#### EndpointBackend fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-edges-tcp-update-fields-ref) | backend to be used to back this endpoint |

#### Ref fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |

#### EndpointIPPolicy fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-edges-tcp-update-fields-ref) |  |


## Delete TCP Edge
Delete a TCP Edge by ID

### Request

DELETE /edges/tcp/{id}

<EdgesTCPDeleteRequest />


### Response

Returns a 204 response with no body on success
