<!-- Code generated for API Clients. DO NOT EDIT. -->

| &nbsp; | &nbsp; | &nbsp;                                                                                                              |
| ------ | ------ | ------------------------------------------------------------------------------------------------------------------- |
| type   | string | the type of the JWT, which acts as a hint to ngrok about how to parse. Must be one of "jwt", "at+jwt", or "it+jwt". |
| method | string | the type of location to expect the JWT. Must be one of "header" or "body".                                          |
| name   | string | the name of the header or body field where the JWT is expected.                                                     |
| prefix | string | any prefix to strip from the JWT before parsing.                                                                    |
