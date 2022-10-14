import EdgeRouteCompressionModuleReplaceRequest from './examples/_edge_route_compression_module_replace_request.md';
import EdgeRouteCompressionModuleReplaceResponse from './examples/_edge_route_compression_module_replace_response.md';
import EdgeRouteCompressionModuleGetRequest from './examples/_edge_route_compression_module_get_request.md';
import EdgeRouteCompressionModuleGetResponse from './examples/_edge_route_compression_module_get_response.md';
import EdgeRouteCompressionModuleDeleteRequest from './examples/_edge_route_compression_module_delete_request.md';

# HTTPS Edge Route Compression Module
------------------

## Replace HTTPS Edge Route Compression Module


### Request

PUT /edges/https/{edge_id}/routes/{id}/compression

<EdgeRouteCompressionModuleReplaceRequest />

#### Parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |


### Response

Returns a 200 response  on success

<EdgeRouteCompressionModuleReplaceResponse />

#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |


## Get HTTPS Edge Route Compression Module


### Request

GET /edges/https/{edge_id}/routes/{id}/compression

<EdgeRouteCompressionModuleGetRequest />

### Response

Returns a 200 response  on success

<EdgeRouteCompressionModuleGetResponse />

#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |


## Delete HTTPS Edge Route Compression Module


### Request

DELETE /edges/https/{edge_id}/routes/{id}/compression

<EdgeRouteCompressionModuleDeleteRequest />

### Response

Returns a 204 response with no body on success
