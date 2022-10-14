import HTTPResponseBackendsCreateRequest from './examples/_http_response_backends_create_request.md';
import HTTPResponseBackendsCreateResponse from './examples/_http_response_backends_create_response.md';
import HTTPResponseBackendsDeleteRequest from './examples/_http_response_backends_delete_request.md';
import HTTPResponseBackendsGetRequest from './examples/_http_response_backends_get_request.md';
import HTTPResponseBackendsGetResponse from './examples/_http_response_backends_get_response.md';
import HTTPResponseBackendsListRequest from './examples/_http_response_backends_list_request.md';
import HTTPResponseBackendsListResponse from './examples/_http_response_backends_list_response.md';
import HTTPResponseBackendsUpdateRequest from './examples/_http_response_backends_update_request.md';
import HTTPResponseBackendsUpdateResponse from './examples/_http_response_backends_update_response.md';

# HTTP Response Backends
------------------


## Create HTTP Response Backend

### Request

POST /backends/http_response

<HTTPResponseBackendsCreateRequest />

#### Parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `body` | string | body to return as fixed content |
| `headers` | Map&lt;string, string&gt; | headers to return |
| `status_code` | int32 | status code to return |


### Response

Returns a 201 response  on success

<HTTPResponseBackendsCreateResponse />

#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string |  |
| `uri` | string | URI of the HTTPResponseBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `body` | string | body to return as fixed content |
| `headers` | Map&lt;string, string&gt; | headers to return |
| `status_code` | int32 | status code to return |


## Delete HTTP Response Backend

### Request

DELETE /backends/http_response/{id}

<HTTPResponseBackendsDeleteRequest />

### Response

Returns a 204 response with no body on success


## Get HTTP Response Backend

### Request

GET /backends/http_response/{id}

<HTTPResponseBackendsGetRequest />

### Response

Returns a 200 response  on success

<HTTPResponseBackendsGetResponse />

#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string |  |
| `uri` | string | URI of the HTTPResponseBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `body` | string | body to return as fixed content |
| `headers` | Map&lt;string, string&gt; | headers to return |
| `status_code` | int32 | status code to return |


## List HTTP Response Backends

### Request

GET /backends/http_response

<HTTPResponseBackendsListRequest />

### Response

Returns a 200 response  on success

<HTTPResponseBackendsListResponse />

#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `backends` | [HTTPResponseBackend](#api-http-response-backends-list-fields-http-response-backend) |  |
| `uri` | string |  |
| `next_page_uri` | string |  |

#### HTTPResponseBackend fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string |  |
| `uri` | string | URI of the HTTPResponseBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `body` | string | body to return as fixed content |
| `headers` | Map&lt;string, string&gt; | headers to return |
| `status_code` | int32 | status code to return |


## Update HTTP Response Backend

### Request

PATCH /backends/http_response/{id}

<HTTPResponseBackendsUpdateRequest />

#### Parameters

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string |  |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `body` | string | body to return as fixed content |
| `headers` | Map&lt;string, string&gt; | headers to return |
| `status_code` | int32 | status code to return |


### Response

Returns a 200 response  on success

<HTTPResponseBackendsUpdateResponse />

#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string |  |
| `uri` | string | URI of the HTTPResponseBackend API resource |
| `created_at` | string | timestamp when the backend was created, RFC 3339 format |
| `description` | string | human-readable description of this backend. Optional |
| `metadata` | string | arbitrary user-defined machine-readable data of this backend. Optional |
| `body` | string | body to return as fixed content |
| `headers` | Map&lt;string, string&gt; | headers to return |
| `status_code` | int32 | status code to return |
