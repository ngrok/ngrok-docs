
# ngrok Platform
--------------

## ngrok Dashboard {#ngrok-dashboard}

The [ngrok Dashboard](https://dashboard.ngrok.com) allows you to quickly make changes to your ngrok account from any web browser. You can use it to view your active ngrok agent sessions, restart or disconnect ngrok agents remotely, customize your ngrok Cloud Edges, reserve Domains and TCP Addresses, generate authtoken credentials, and much more.

The ngrok dashboard allows many users to be invited to the same account. Each user in the account will have the same account type and be able to start tunnels under that account. The dashboard includes role based access control (RBAC) as a way to limit what users have access to in the account. You can manage these roles and add more users to your account in the [team members page](https://dashboard.ngrok.com/team/members) of the dashboard. This is only available for paid plans.

The ngrok dashboard is also where you manage your [account plans and billing credentials](https://dashboard.ngrok.com/billing). You may add additional users to be notified for any billing emails in the account. These emails do not count against your total user count.

As an additional security measure, you may restrict access to the ngrok dashboard by IP address range as well from the [IP Restrictions](https://dashboard.ngrok.com/security/ip-restrictions) page. If you accidentally lock yourself out of the dashboard, please contact [support@ngrok.com](mailto:support@ngrok.com?subject=Locked%20Out%20of%20Dashboard%20due%20to%20IP%20Restriction).

## ngrok API {#ngrok-rest-api}

The ngrok API is the way to programmatically perform almost any action in the ngrok platform and access all of ngrok's resources. To access the ngrok API, you will need to generate an [API key from the ngrok Dashboard](https://dashboard.ngrok.com/api).

The full reference documentation is available in our [ngrok API Documentation page](/docs/api).

An easy way to explore the ngrok API is by using the ngrok agent, which has a [build in command line tool for accessing the API](/docs/ngrok-agent/ngrok#command-ngrok-api).

## IP Policies and Restrictions {#ip-policies-restrictions}

Allowing or restricting access to a particular service by IP address is a great way to keep your service secure and protected from outside threats. ngrok includes a complete system for adding IP protection to all parts of the ngrok Platform including dashboard access, endpoint access, agent access or API access.

IP Restrictions can be applied to any part of the ngrok platform, and they are made up of one or more reusable IP Policies, each containing one or more IP Rules that define the actual IP addresses that are allowed or denied from accessing the service.

All IP protections can be managed through the [IP Restrictions section of the ngrok Dashboard](https://dashboard.ngrok.com/security/ip-restrictions) as well as programmatically through the ngrok API.

### IP Rules {#ip-policies-restrictions-rules}

Every IP policy consists of zero or more IP policy rules. Each rule specifies an IP address or IP address range in CIDR notation that can be allowed or denied access to the resource. Both IPv4 and IPv6 address notations are supported. An IP policy with no rules is valid and will match no IPs.

## Event Subscriptions {#event-subscriptions}

Each action that happens in ngrok is published as an event, and Event Subscriptions allow you to subscribe to events that you are interested in and write those events to one or more destinations.

A subscription is made up of event sources, some of which can be filtered, and event destinations. Each subscription can send the events to one or more destinations, such as Amazon CloudWatch Logs, Amazon Kinesis (as a data stream) or Amazon Kinesis Firehose (as a delivery stream).

Event subscriptions can be configured through the [ngrok Dashboard](https://dashboard.ngrok.com/events/subscriptions) or the [ngrok API](/docs/api#api-event-subscriptions-create).

### Event Sources {#event-sources}

Event Sources represent events from your ngrok account. See the [ngrok Event Sources reference](/docs/events) for a full list of sources and fields.

Many objects within ngrok have corresponding events that are generated when an instance of the object is created, updated and deleted. All Event Types have a version, represented in the Event Type string following the period. The initial version for all Event Types is `v0`.

Some event types support filters and selectable fields. Not all selectable fields are usable in filters. A full list of event types and their fields follows. A field marked "filterable" indicates that it is usable in the filter for an event source.

### Filtering Events {#event-filtering}

Some events, such as HTTP Request Complete and TCP Connection Closed, are high cardinality events. As such, these events can quickly hit the limits of the receiving destination. To reduce the number of events returned from these sources, you can add filtering logic to only allow specific events through to your destination.

See our [event filtering reference](/docs/events/filtering) for filtering examples.

### Event Destinations {#event-destinations}

An Event Destination specifies a service and configuration that allows ngrok to publish events to it. You can send a set of Events to one or more Destinations. Destinations can be shared across multiple subscriptions. You can configure destinations to send events to the following services:

* AWS CloudWatch Logs
* AWS Firehose
* AWS S3 (via Firehose)
* AWS Kinesis

As noted above, you can configure AWS Kinesis Firehose to [deliver events into an S3 bucket](https://docs.aws.amazon.com/firehose/latest/dev/create-destination.html#create-destination-s3).

Each destination requires a different setup. We have a helper script to automate setup but you can also configure these integrations via the AWS Console or a tool like Terraform. Once you've configured your destination, you can test it by sending a test event from the dashboard to make sure it is configured correctly.

## Global Infrastructure {#pops}

ngrok runs globally distributed tunnel servers around the world to enable fast, low latency traffic to your applications.

### Locations {#pops-locs}

ngrok runs servers in data centers around the world. The location of the data center within a given region may change without notice (e.g. the European servers may move from Frankfurt to London).

| Region Code | Location |
| --- | --- |
| ap  | Asia/Pacific (Singapore) |
| au  | Australia (Sydney) |
| eu  | Europe (Frankfurt) |
| in  | India (Mumbai) |
| jp  | Japan (Tokyo) |
| sa  | South America (São Paulo) |
| us  | United States (Ohio) |

### Usage {#pops-usage}

If you do not explicitly pick a region when starting the ngrok agent, the agent will attempt to pick the region with the least latency, which is usually the one geographically closest to your machine.

To explicitly choose the region, add the `--region` flag or set the `region` property in your configuration file. For example, to start a tunnel in the European region:

    ngrok http --region eu 8080

Reserved domains and TCP addresses are allocated for a specific region (the US region by default). When you reserve a domain or TCP address, you must select a target region. You may not bind a domain or TCP address reserved in another region other than the one it was allocated for. Attempting to do so will yield an error and prevent your tunnel session from initializing.

### Limitations {#pops-limits}

An ngrok agent may only be connected a single region, meaning you cannot host tunnels in multiple regions simultaneously with the same agent. You can run multiple ngrok agents if you need to do this.

A domain cannot be reserved for multiple regions at the same time. It is not possible to geo-balance DNS to the same tunnel name in multiple regions. Use region-specific subdomains or TLDs if you need to do this (

An ngrok Edge can only contain endpoints in the same region.