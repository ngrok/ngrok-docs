---
sidebar_position: 6
description: When you create an edge, you will automatically be assigned a reserved domain or TCP address depending on the type of edge you create. You can customize this endpoint by adding your own reserved or custom branded domain. An edge can have many endpoints, and each will use the same configuration.
---

# Observability
----------------

ngrok includes an Events system for gaining observability into what is happening in your account. Event Subscriptions allow you to send any event that happens in the ngrok platform to an external destination so that you can keep track of what happens in the system or trigger additional custom actions. You can subscribe to some or all of the events in the platform, and you can choose the specific fields you are interested in some high cardinality events.

For more information on the types of events available, please see our [ngrok Event Sources reference](/docs/events).

If you are interested in configuring these event subscriptions programmatically, please see our [Event Subscription API](/docs/api#api-event-subscriptions-create).