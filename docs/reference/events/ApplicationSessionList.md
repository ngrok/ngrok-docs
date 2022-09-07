
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| application_sessions.id | string | | unique application session resource identifier |
| application_sessions.uri | string | | URI of the application session API resource |
| application_sessions.public_url | string | | URL of the hostport served by this endpoint |
| application_sessions.browser_session.user_agent.raw | string | | raw User-Agent request header |
| application_sessions.browser_session.user_agent.browser_name | string | | browser name (e.g. Chrome) |
| application_sessions.browser_session.user_agent.browser_version | string | | browser version (e.g. 102) |
| application_sessions.browser_session.user_agent.device_type | string | | type of device (e.g. Desktop) |
| application_sessions.browser_session.user_agent.os_name | string | | operating system name (e.g. MacOS) |
| application_sessions.browser_session.user_agent.os_version | string | | operating system version (e.g. 10.15.7) |
| application_sessions.browser_session.ip_address | string | | IP address |
| application_sessions.browser_session.location.country_code | string | | ISO country code |
| application_sessions.browser_session.location.latitude | float64 | | geographical latitude |
| application_sessions.browser_session.location.longitude | float64 | | geographical longitude |
| application_sessions.browser_session.location.lat_long_radius_km | uint64 | | accuracy radius of the geographical coordinates |
| application_sessions.application_user.id | string | | a resource identifier |
| application_sessions.application_user.uri | string | | a uri for locating a resource |
| application_sessions.created_at | string | | timestamp when the user was created in RFC 3339 format |
| application_sessions.last_active | string | | timestamp when the user was last active in RFC 3339 format |
| application_sessions.expires_at | string | | timestamp when session expires in RFC 3339 format |
| application_sessions.endpoint.id | string | | a resource identifier |
| application_sessions.endpoint.uri | string | | a uri for locating a resource |
| application_sessions.edge.id | string | | a resource identifier |
| application_sessions.edge.uri | string | | a uri for locating a resource |
| application_sessions.route.id | string | | a resource identifier |
| application_sessions.route.uri | string | | a uri for locating a resource |
| uri | string | | URI of the application session list API resource |
| next_page_uri | string | | URI of the next page, or null if there is no next page |