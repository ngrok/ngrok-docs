### Additional Information

This error occurs when there is no active tunnel using the hostname you are trying to reach. There can be multiple reasons why a tunnel that you expect to be running is showing a 3200 error.

If you are the ngrok Administrator for this account, please verify that the ngrok Agent is running and that the subdomain/hostname is correct.

If you are not the ngrok Administrator and are a visitor to the ngrok URL, you may need to contact the endpoint owner through other means.
ngrok is unable to assist with end user content as all content is neither hosted or maintained by ngrok. ngrok is unable to provide user details per the ngrok privacy policy.

### The most common causes of this error are:

- **Agent Not Running** The ngrok Agent is no longer running, or you forgot to start the Agent. Verify that the Agent is running and showing the expected "Forwarding" address.
- **Session Timed Out or Stopped** The Agent session has timed out or stopped. Restart the ngrok Agent to restart the Agent and tunnel sessions.
- **Endpoint Domain or Hostname Change** The endpoint domain or hostname has changed. If you are on the Free plan or have not set the `--domain` flag to set the domain on the tunnel, please be aware that the forwarding address will change each time the Agent and session are restarted. If you previously obtained a forwarding URL from an agent session but have since closed that session or closed the client window, the URL will change when a new Agent session starts.
- **Typo in Endpoint Address** You have made a typo in the endpoint address you have entered in the browser. Verify that the tunnel hostname is correct. Incorrectly entering the address (a typo) in a browser address bar can also result in this error.
- **Network Issues** A network issue exists between the device the Agent is running on and ngrok. Your ngrok agent might have trouble reaching the ngrok service. Try running the [`ngrok diagnose`](/docs/agent/cli/#ngrok-diagnose) command to check for connectivity issues.
- **Incorrect Scheme** You are attempting to run `--url http://...` on your agent using a domain that only supports https. All of the `.app` and `.dev` domains are HSTS or "HTTP Strict Transport Security" domains. Paid plan accounts are able to start http scheme tunnels on the `ngrok.io` domain, which is not HSTS enforced.

If you are the Administrator for this ngrok account, and none of these steps work for you or you have additional questions, drop us a note at [support@ngrok.com](mailto:support@ngrok.com?subject=Help%20with%20ngrok%203200%20error).
