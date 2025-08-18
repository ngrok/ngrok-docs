---
title: User Management
---

# User Management

## Role Based Access Control (RBAC) {#rbac}

The ngrok dashboard allows many users to be invited to the same account. Each user in the account will have the same account type and be able to start tunnels under that account. The dashboard includes role based access control (RBAC) as a way to limit what users have access to in the account. You can manage these roles and add more users to your account in the [team members page](https://dashboard.ngrok.com/users/team-members) of the dashboard. This is only available for paid plans.

## Single Sign-On (SSO) {#dashboard-sso}

If you are an Enterprise customer, you have the option of enabling Single Sign-On (SSO) for your users logging into the ngrok Dashboard. Account admins can find the configuration options under the ["Settings > Account"](https://dashboard.ngrok.com/settings) in the left navigation once they log into the dashboard.

ngrok supports most [SAML v2 compliant identity providers](https://en.wikipedia.org/wiki/SAML-based_products_and_services), including [Okta](https://help.okta.com/oie/en-us/Content/Topics/Apps/apps-about-saml.htm) and [Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/architecture/auth-saml). To get started with the configuration, simply click on "+ New Identity Provider" and follow the instructions in the dashboard. ngrok supports multiple identity providers as well. If using multiple identity providers, the user will be prompted to choose one when logging in with SSO from the ngrok login page.

After configuring the correct information with your identity provider, you have the option to enable or disable logging in directly from your provider. This is helpful if your users want to jump directly to their ngrok account via a centralized location once they have logged into their identity provider.

You also have the option to choose how new users are added to the account. If you'd like new users to automatically be provisioned in the account when they log in, you can enable Just in Time (JiT) provisioning. This allows users to be added to your account when using the link from the identity provider. If you'd rather only allow invited users to join, you can select "Invite Only" which will require new users to be invited through the teams page before being added to the account.

ngrok supports two enforcement options once you have configured your identity provider. When testing and verifying the integration is working, it is helpful to enable"Mixed Mode", which will still allow you and the users of your account to log into the account using your previous credentials. Once you are satisfied that everything is working correctly, you can enable "SSO Enforced" mode which will require all users in the account to authenticate through one of the configured identity providers.

## Service Users {#service-users}

### What is a service user?

A service user is a service account that owns a set of credentials - authtokens, API keys, and SSH keys - independently of a person. You can see and manage your service users in the [ngrok Dashboard](https://dashboard.ngrok.com/users/bots).

Service users are similar to [Users](/iam/users/) but they are intended for automated
systems that programmatically interact with your ngrok accounts either by
starting ngrok Agents or making requests to the API.

Other platforms you may interact with sometimes call this concept a _Service
Account_.

Service Users differ from Users in a few important ways:

- Service Users may not log into the Dashboard.
- Service Users may not be a member of more than one Account.
- Service Users do not count against any seat counts or limits.

Service Users facts and limitations:

- Service Users may be attached to services that consume ngrok platform resources and can trigger overages. These areas include metrics like bandwidth, total sessions and endpoints, authtokens, API tokens, and more.
- Service users have limited functionality:
  - Service users cannot log into the ngrok Dashboard
  - Service users cannot be assigned or shared among multiple accounts
- Benefits of service users:
  - Credentials that are unique to a specific service or function can be connected to a service user instead of being connected to a person. A standard user may leave the account or want to rotate their credentials, and these actions should not impact production services running in ngrok.
  - Events are attributed to a service user and can help you better understand what a specific production service in ngrok is doing, even when there are multiple production services in the same account.
  - Service users can be deactivated to temporarily suspend all credentials associated with it—making ngrok more secure.
  - Service users can be deleted to immediately revoke and delete all credentials associated with it—making ngrok more secure.

### How do I create a service user? {#service-user-creation}

You can create a service user via the dashboard or programmatically through the ngrok API.

In the [ngrok Dashboard](https://dashboard.ngrok.com/users/bots), navigate to the "Users" section of the left hand navigation, and then "service users" to create a new service user.

Using the API, you can POST to the [`/bot_users` endpoint](/api/resources/bot-users/).

### When should I use a service user? {#service-user-use-cases}

A service user is the best suited to own the credentials of shipped products, devices, and integrations in production. The ideal flow is a credential you can associate with a specific task, keep active, and can rotate on a predictable schedule because it is unique to that integration, service, or function.

Service users are available on all ngrok free and paid plans.

### When should I not use a service user? {#service-user-vs-user}

A service user is very useful, but it is not a good substitute for a standard ngrok User. When a developer is building with ngrok they may need to rotate credentials after adding them to a build environment or accidentally committing them to a repository. The developer needs to be able to use the ngrok dashboard to see endpoint status, make configuration changes, and manage their own credentials, which a service user cannot do.

### What happens when I delete a service user? {#service-user-delete}

When you delete a service user, all credentials owned the user are immediately revoked and deleted. You cannot restore deleted credentials and if this happens you should create new credentials under a new or existing service user.

### What does it mean for a service user to be inactive? {#service-user-inactive}

When a service user is marked as inactive, they remain in the account, but their credentials can no longer be used. This is a good way to test what might break if the service user is completely removed.

### Can I move my former employees credentials (API keys, authtokens, SSH keys) to a service user? {#service-user-existing-credentials}

Credentials are assigned an owner when they are created and the owner cannot be changed. Access the [ngrok Dashboard](https://dashboard.ngrok.com/users/bots) to create a new service user.
