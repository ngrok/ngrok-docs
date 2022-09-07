
|&nbsp;|&nbsp;|&nbsp;|&nbsp;|
|---|---|---|---|
| event_subscriptions.id | string | | Unique identifier for this Event Subscription. |
| event_subscriptions.uri | string | | URI of the Event Subscription API resource. |
| event_subscriptions.created_at | string | | When the Event Subscription was created (RFC 3339 format). |
| event_subscriptions.metadata | string | | Arbitrary customer supplied information intended to be machine readable. Optional, max 4096 chars. |
| event_subscriptions.description | string | | Arbitrary customer supplied information intended to be human readable. Optional, max 255 chars. |
| event_subscriptions.sources.type | string | | Type of event for which an event subscription will trigger |
| event_subscriptions.sources.uri | string | | URI of the Event Source API resource. |
| event_subscriptions.destinations.id | string | | a resource identifier |
| event_subscriptions.destinations.uri | string | | a uri for locating a resource |
| uri | string | | URI of the Event Subscriptions list API resource. |
| next_page_uri | string | | URI of next page, or null if there is no next page. |