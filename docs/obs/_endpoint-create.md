<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp;         | &nbsp;             | &nbsp;                                                                                                                                                    |
| -------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url            | string             | the url of the endpoint                                                                                                                                   |
| type           | string             | whether the endpoint is `ephemeral` (served directly by an agent-initiated tunnel) or `edge` (served by an edge) or `cloud (represents a cloud endpoint)` |
| traffic_policy | string             | The traffic policy attached to this endpoint                                                                                                              |
| description    | string             | user-supplied description of the associated tunnel                                                                                                        |
| metadata       | string             | user-supplied metadata of the associated tunnel or edge object                                                                                            |
| bindings       | List&lt;string&gt; | the bindings associated with this endpoint                                                                                                                |
