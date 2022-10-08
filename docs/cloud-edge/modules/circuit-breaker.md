# Circuit Breaker
----------------

Circuit breakers are used to protect upstream servers by rejecting traffic to them when they become overwhelmed, allowing them time to recover back into a steady operational state. When the upstream server starts to fail requests at too high of a rate, the circuit is "opened".

The circuit breaker is an implementation of [Netflix's Hystrix circuit breaker specification](https://github.com/Netflix/Hystrix/wiki/How-it-Works).

If the upstream server responds with more than the threshold percentage of requests with 5XX status codes, the circuit breaker preemptively reject all subsequent requests at the ngrok edge with a 503 until the upstream server's error rate drops below the threshold percentage.
