import TLSEdgeIPRestrictionModuleReplaceRequest from './examples/_tls_edge_ip_restriction_module_replace_request.md';
import TLSEdgeIPRestrictionModuleReplaceResponse from './examples/_tls_edge_ip_restriction_module_replace_response.md';
import TLSEdgeIPRestrictionModuleGetRequest from './examples/_tls_edge_ip_restriction_module_get_request.md';
import TLSEdgeIPRestrictionModuleGetResponse from './examples/_tls_edge_ip_restriction_module_get_response.md';
import TLSEdgeIPRestrictionModuleDeleteRequest from './examples/_tls_edge_ip_restriction_module_delete_request.md';

# TLS Edge IP Restriction Module
------------



## Replace TLS Edge IP Restriction Module


### Request

PUT /edges/tls/{id}/ip_restriction

<TLSEdgeIPRestrictionModuleReplaceRequest />


#### Parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policy_ids` | List&lt;string&gt; | list of all IP policies that will be used to check if a source IP is allowed access to the endpoint |


### Response

Returns a 200 response  on success

<TLSEdgeIPRestrictionModuleReplaceResponse />


#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-tls-edge-ip-restriction-module-replace-fields-ref) |  |

#### Ref fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |


## Get TLS Edge IP Restriction Module


### Request

GET /edges/tls/{id}/ip_restriction

<TLSEdgeIPRestrictionModuleGetRequest />


### Response

Returns a 200 response  on success

<TLSEdgeIPRestrictionModuleGetResponse />


#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `ip_policies` | [Ref](#api-tls-edge-ip-restriction-module-get-fields-ref) |  |

#### Ref fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |


## Delete TLS Edge IP Restriction Module


### Request

DELETE /edges/tls/{id}/ip_restriction

<TLSEdgeIPRestrictionModuleDeleteRequest />


### Response

Returns a 204 response with no body on success
