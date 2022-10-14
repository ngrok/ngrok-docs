import EdgeRouteSAMLModuleReplaceRequest from './examples/_edge_route_saml_module_replace_request.md';
import EdgeRouteSAMLModuleReplaceResponse from './examples/_edge_route_saml_module_replace_response.md';
import EdgeRouteSAMLModuleGetRequest from './examples/_edge_route_saml_module_get_request.md';
import EdgeRouteSAMLModuleGetResponse from './examples/_edge_route_saml_module_get_response.md';
import EdgeRouteSAMLModuleDeleteRequest from './examples/_edge_route_saml_module_delete_request.md';

# HTTPS Edge Route SAML Module
------------------


## Replace HTTPS Edge Route SAML Module

### Request

PUT /edges/https/{edge_id}/routes/{id}/saml

<EdgeRouteSAMLModuleReplaceRequest />

#### Parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `idp_metadata` | string | The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. |
| `force_authn` | boolean | If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. |
| `allow_idp_initiated` | boolean | If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. |
| `authorized_groups` | List&lt;string&gt; | If present, only users who are a member of one of the listed groups may access the target endpoint. |
| `nameid_format` | string | Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. |

### Response

Returns a 200 response  on success

<EdgeRouteSAMLModuleReplaceResponse />

#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `idp_metadata` | string | The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. |
| `force_authn` | boolean | If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. |
| `allow_idp_initiated` | boolean | If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. |
| `authorized_groups` | List&lt;string&gt; | If present, only users who are a member of one of the listed groups may access the target endpoint. |
| `entity_id` | string | The SP Entity's unique ID. This always takes the form of a URL. In ngrok's implementation, this URL is the same as the metadata URL. This will need to be specified to the IdP as configuration. |
| `assertion_consumer_service_url` | string | The public URL of the SP's Assertion Consumer Service. This is where the IdP will redirect to during an authentication flow. This will need to be specified to the IdP as configuration. |
| `single_logout_url` | string | The public URL of the SP's Single Logout Service. This is where the IdP will redirect to during a single logout flow. This will optionally need to be specified to the IdP as configuration. |
| `request_signing_certificate_pem` | string | PEM-encoded x.509 certificate of the key pair that is used to sign all SAML requests that the ngrok SP makes to the IdP. Many IdPs do not support request signing verification, but we highly recommend specifying this in the IdP's configuration if it is supported. |
| `metadata_url` | string | A public URL where the SP's metadata is hosted. If an IdP supports dynamic configuration, this is the URL it can use to retrieve the SP metadata. |
| `nameid_format` | string | Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. |


## Get HTTPS Edge Route SAML Module

### Request

GET /edges/https/{edge_id}/routes/{id}/saml

<EdgeRouteSAMLModuleGetRequest />

### Response

Returns a 200 response  on success

<EdgeRouteSAMLModuleGetResponse />

#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `enabled` | boolean | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified |
| `options_passthrough` | boolean | Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS. |
| `cookie_prefix` | string | the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.' |
| `inactivity_timeout` | uint32 | Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate. |
| `maximum_duration` | uint32 | Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate. |
| `idp_metadata` | string | The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL. |
| `force_authn` | boolean | If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP. |
| `allow_idp_initiated` | boolean | If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the `RelayState` parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed. |
| `authorized_groups` | List&lt;string&gt; | If present, only users who are a member of one of the listed groups may access the target endpoint. |
| `entity_id` | string | The SP Entity's unique ID. This always takes the form of a URL. In ngrok's implementation, this URL is the same as the metadata URL. This will need to be specified to the IdP as configuration. |
| `assertion_consumer_service_url` | string | The public URL of the SP's Assertion Consumer Service. This is where the IdP will redirect to during an authentication flow. This will need to be specified to the IdP as configuration. |
| `single_logout_url` | string | The public URL of the SP's Single Logout Service. This is where the IdP will redirect to during a single logout flow. This will optionally need to be specified to the IdP as configuration. |
| `request_signing_certificate_pem` | string | PEM-encoded x.509 certificate of the key pair that is used to sign all SAML requests that the ngrok SP makes to the IdP. Many IdPs do not support request signing verification, but we highly recommend specifying this in the IdP's configuration if it is supported. |
| `metadata_url` | string | A public URL where the SP's metadata is hosted. If an IdP supports dynamic configuration, this is the URL it can use to retrieve the SP metadata. |
| `nameid_format` | string | Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` will be used. A subset of the allowed values enumerated by the SAML specification are supported. |


## Delete HTTPS Edge Route SAML Module

### Request

DELETE /edges/https/{edge_id}/routes/{id}/saml

<EdgeRouteSAMLModuleDeleteRequest />

### Response

Returns a 204 response with no body on success
