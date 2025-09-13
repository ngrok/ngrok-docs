<!-- Code generated for API Clients. DO NOT EDIT. -->

#### Example Response

```json
{
  "enabled": true,
  "value": "{\n\t\"on_tcp_connect\": [\n\t\t{\n\t\t\t\"name\": \"Block requests from certain countries\",\n\t\t\t\"expressions\":[\"conn.geo.country_code in ['BR', 'CN', 'CU', 'IR', 'NG', 'RO', 'RU', 'SD', 'SY', 'UA']\"],\n\t\t\t\"actions\":[\n\t\t\t\t{\n\t\t\t\t\t\"type\":\"log\",\n\t\t\t\t\t\"config\":{\n\t\t\t\t\t\t\"metadata\":{\n\t\t\t\t\t\t\t\"blockedCountry\":\"${conn.geo.country_code}\",\n\t\t\t\t\t\t\t\"edgeId\": \"edgtls_32dl4GzDHyU7Mbzl44UBGfbgTez\"\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t\"type\":\"deny\"\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}"
}
```
