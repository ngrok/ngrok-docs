---
sidebar_position: 1
---

# ngrok Dashboard
--------------

## Introduction

The [ngrok Dashboard](https://dashboard.ngrok.com) allows you to quickly make changes to your ngrok account from any web browser. You can use it to view your active ngrok agent sessions, restart or disconnect ngrok agents remotely, customize your ngrok Cloud Edges, reserve Domains and TCP Addresses, generate authtoken credentials, and much more.

The ngrok dashboard allows many users to be invited to the same account. Each user in the account will have the same account type and be able to start tunnels under that account. The dashboard includes role based access control (RBAC) as a way to limit what users have access to in the account. You can manage these roles and add more users to your account in the [team members page](https://dashboard.ngrok.com/team/members) of the dashboard. This is only available for paid plans.

The ngrok dashboard is also where you manage your [account plans and billing credentials](https://dashboard.ngrok.com/billing). You may add additional users to be notified for any billing emails in the account. These emails do not count against your total user count.

As an additional security measure, you may restrict access to the ngrok dashboard by IP address range as well from the [IP Restrictions](https://dashboard.ngrok.com/security/ip-restrictions) page. If you accidentally lock yourself out of the dashboard, please contact [support@ngrok.com](mailto:support@ngrok.com?subject=Locked%20Out%20of%20Dashboard%20due%20to%20IP%20Restriction).

## Enabling Dashboard Single Sign-On (SSO) {#dashboard-sso}

If you are an Enterprise customer, you have the option of enabling Single Sign-On (SSO) for your users logging into the ngrok Dashboard. Account admins can find the configuration options under the ["Settings > Account"](https://dashboard.ngrok.com/settings) in the left navigation once they log into the dashboard.

ngrok supports most [SAML v2 compliant identity providers](https://en.wikipedia.org/wiki/SAML-based_products_and_services), including [Okta](https://help.okta.com/oie/en-us/Content/Topics/Apps/apps-about-saml.htm) and [Microsoft AzureAD](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/auth-saml). To get started with the configuration, simply click on "+ New Identity Provider" and follow the instructions in the dashboard. ngrok supports multiple identity providers as well. If using multiple identity providers, the user will be prompted to choose one when logging in with SSO from the ngrok login page.

After configuring the correct information with your identity provider, you have the option to enable or disable logging in directly from your provider. This is helpful if your users want to jump directly to their ngrok account via a centralized location once they have logged into their identity provider.

You also have the option to choose how new users are added to the account. If you'd like new users to automatically be provisioned in the account when they log in, you can enable Just in Time (JiT) provisioning. This allows users to be added to your account when using the link from the identity provider. If you'd rather only allow invited users to join, you can select "Invite Only" which will require new users to be invited through the teams page before being added to the account.

ngrok supports two enforcement options once you have configured your identity provider. When testing and verifying the integration is working, it is helpful to enable"Mixed Mode", which will still allow you and the users of your account to log into the account using your previous credentials. Once you are satisfied that everything is working correctly, you can enable "SSO Enforced" mode which will require all users in the account to authenticate through one of the configured identity providers.