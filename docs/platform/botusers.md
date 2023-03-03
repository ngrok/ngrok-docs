---
sidebar_position: 2
---

# Bot users
--------------

## What is a Bot User?

A Bot User is a service account that owns a set of credentials - authtokens, API keys, and SSH keys - independently of a person. You can see and manage your bot users in the [ngrok Dashboard](https://dashboard.ngrok.com/users/bots). 

### A Bot User: {#bot-user}

* Does not count as a standard user against your ngrok seat count
* May be attached to services that consume ngrok platform resources and can trigger overages. These areas include metrics like bandwidth, total sessions and endpoints, auth tokens, API tokens, and more.
* Has limited functionality
  * Cannot log into the ngrok Dashboard
  * Cannot be assigned or shared among multiple accounts
* Has some great benefits
  * Credentials that are unique to a specific service or function instead of being connected to a person.  A standard user may leave the account or want to rotate their credentials, and these actions should not impact production services running in ngrok. 
  * Events are attributed to the Bot User and can help you better understand what a specific production service in ngrok is doing, even when there are multiple production services in the same account.  
  * Can be deactivated to temporarily suspend all credentials associated with it
  * Can be deleted to immediately revoke and delete all credentials associated with it

### When should I use a Bot User? {#bot-user-use-cases}

A Bot User is the best suited to own the credentials of shipped products, devices, and integrations in production. The ideal flow is a credential you can associate with a specific task, keep active, and can rotate on a predictable schedule because it is unique to that integration, service, or function. 

### When should I not use a Bot User? {#bot-user-vs-user}

A Bot User is very useful, but it is not a good subsitute for a standard ngrok User. When a developer is building with ngrok they may need to rotate credentials after adding them to a build environment or accidentally committing them to a repository. The developer needs to be able to use the ngrok dashboard to see endpoint status, make configuration changes, and manage their own credentials, which a Bot User cannot do.

### What happens when I delete a Bot User? {#bot-user-delete}

When you delete a Bot User, all credentials owned the user are immediately revoked and deleted. You cannot restore deleted credentials and if this happens you should create new credentials under a new or existing bot user.

### Can I move my former employees credentials (API keys, authtokens, SSH keys) to a Bot User? {#bot-user-existing-credentials}

Credentials are assigned an owner when they are created and the owner cannot be changed. Access the [ngrok Dashboard](https://dashboard.ngrok.com/users/bots) to create a new bot user. 

### How come I didn't know ngrok had Bot Users? {#bot-user-launch}

We are continuously improving the ngrok platform with new features! We launched Bot Users in early 2023 and are excited to see our customers adopt this functionality. 