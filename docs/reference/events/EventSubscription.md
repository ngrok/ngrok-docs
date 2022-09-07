
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| id | string | | Unique identifier for this Event Subscription. |
| uri | string | | URI of the Event Subscription API resource. |
| created_at | string | | When the Event Subscription was created (RFC 3339 format). |
| metadata | string | | Arbitrary customer supplied information intended to be machine readable. Optional, max 4096 chars. |
| description | string | | Arbitrary customer supplied information intended to be human readable. Optional, max 255 chars. |
| sources.type | string | | Type of event for which an event subscription will trigger |
| sources.uri | string | | URI of the Event Source API resource. |
| destinations.id | string | | a resource identifier |
| destinations.uri | string | | a uri for locating a resource |