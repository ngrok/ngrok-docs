<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp;  | &nbsp;                    | &nbsp;                                                                                                       |
| ------- | ------------------------- | ------------------------------------------------------------------------------------------------------------ |
| id      | string                    |                                                                                                              |
| enabled | boolean                   | `true` if the module will be applied to traffic, `false` to disable. default `true` if unspecified           |
| add     | Map&lt;string, string&gt; | a map of header key to header value that will be injected into the HTTP Response returned to the HTTP client |
| remove  | List&lt;string&gt;        | a list of header names that will be removed from the HTTP Response returned to the HTTP client               |
