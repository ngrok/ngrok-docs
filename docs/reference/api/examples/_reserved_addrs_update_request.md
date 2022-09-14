
###### Example Request
```curl \
-XPATCH \
-H "Authorization: Bearer {API_KEY}" \
-H "Content-Type: application/json" \
-H "Ngrok-Version: 2" \
-d '{"metadata":"{\"proto\": \"ssh\"}","endpoint_configuration_id":"ec_2EloOl7Nbyfrj7TfTYkg65NUkgi"}' \
https://api.ngrok.com/reserved_addrs/ra_2EloC1bBv3yJj8atmJ0nExsrlK1
