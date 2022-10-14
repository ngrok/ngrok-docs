import TCPEdgeBackendModuleReplaceRequest from './examples/_tcp_edge_backend_module_replace_request.md';
import TCPEdgeBackendModuleReplaceResponse from './examples/_tcp_edge_backend_module_replace_response.md';
import TCPEdgeBackendModuleGetRequest from './examples/_tcp_edge_backend_module_get_request.md';
import TCPEdgeBackendModuleGetResponse from './examples/_tcp_edge_backend_module_get_response.md';
import TCPEdgeBackendModuleDeleteRequest from './examples/_tcp_edge_backend_module_delete_request.md';

# TCP Edge Backend Module
------------



## Replace TCP Edge Backend Module


### Request

PUT /edges/tcp/{id}/backend

<TCPEdgeBackendModuleReplaceRequest />


#### Parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend_id` | string | backend to be used to back this endpoint |


### Response

Returns a 200 response  on success

<TCPEdgeBackendModuleReplaceResponse />


#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-tcp-edge-backend-module-replace-fields-ref) | backend to be used to back this endpoint |

#### Ref fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |


## Get TCP Edge Backend Module


### Request

GET /edges/tcp/{id}/backend

<TCPEdgeBackendModuleGetRequest />


### Response

Returns a 200 response  on success

<TCPEdgeBackendModuleGetResponse />


#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `backend` | [Ref](#api-tcp-edge-backend-module-get-fields-ref) | backend to be used to back this endpoint |

#### Ref fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |


## Delete TCP Edge Backend Module


### Request

DELETE /edges/tcp/{id}/backend

<TCPEdgeBackendModuleDeleteRequest />


### Response

Returns a 204 response with no body on success
