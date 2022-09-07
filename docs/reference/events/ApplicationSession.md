
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| id | string | | unique application session resource identifier |
| uri | string | | URI of the application session API resource |
| public_url | string | | URL of the hostport served by this endpoint |
| browser_session.user_agent.raw | string | | raw User-Agent request header |
| browser_session.user_agent.browser_name | string | | browser name (e.g. Chrome) |
| browser_session.user_agent.browser_version | string | | browser version (e.g. 102) |
| browser_session.user_agent.device_type | string | | type of device (e.g. Desktop) |
| browser_session.user_agent.os_name | string | | operating system name (e.g. MacOS) |
| browser_session.user_agent.os_version | string | | operating system version (e.g. 10.15.7) |
| browser_session.ip_address | string | | IP address |
| browser_session.location.country_code | string | | ISO country code |
| browser_session.location.latitude | float64 | | geographical latitude |
| browser_session.location.longitude | float64 | | geographical longitude |
| browser_session.location.lat_long_radius_km | uint64 | | accuracy radius of the geographical coordinates |
| application_user.id | string | | a resource identifier |
| application_user.uri | string | | a uri for locating a resource |
| created_at | string | | timestamp when the user was created in RFC 3339 format |
| last_active | string | | timestamp when the user was last active in RFC 3339 format |
| expires_at | string | | timestamp when session expires in RFC 3339 format |
| endpoint.id | string | | a resource identifier |
| endpoint.uri | string | | a uri for locating a resource |
| edge.id | string | | a resource identifier |
| edge.uri | string | | a uri for locating a resource |
| route.id | string | | a resource identifier |
| route.uri | string | | a uri for locating a resource |