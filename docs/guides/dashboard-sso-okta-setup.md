---
id: dashboard-sso-okta-setup
title: Configuring Okta Single Sign-On (SSO)
hide_title: false
hide_table_of_contents: false
sidebar_label: Configuring Okta Single Sign-On (SSO)
pagination_label: Configuring Okta Single Sign-On (SSO)
keywords:
  - docs
  - docusaurus
image: https://i.imgur.com/mErPwqL.png
slug: /dashboard-sso-okta-setup
---

# Configuring Okta Single Sign-On (SSO)
-------------------------------------

This guide will walk you through configuring the ngrok dashboard to use Okta as an identity provider and enable single sign-on for your ngrok account. This should not be confused with [configuring an ngrok edge to allow your application users to log in using Okta](/integrations/okta/sso-oidc). 

The requirements for completing this guide are:
- Admin access to create new applications in Okta
- Admin access to edit your ngrok account settings
- An [ngrok Enterprise](https://ngrok.com/pricing) account

## Create a new SAML App Integration in Okta

1. From the "Applications" menu, click the blue "Create App Integration" button.
![](/img/howto/dash-sso/okta-create-app.png)
1. Select "SAML 2.0" and click "Next"
![](/img/howto/dash-sso/okta-create-app-1.png)
1. Give your app a name, and click "Next"
![](/img/howto/dash-sso/okta-name-app.png)
1. Enter in temporary values for "Single sign on URL" and "Audience URI" and select "EmailAddress" for "Name ID format" and then click "Next". ngrok requires the username to be in email format.
![](/img/howto/dash-sso/okta-nameid-format.png)
1. Select "I’m an Okta customer adding an internal app" and click "Finish".

## Download your SAML App metadata XML

1. Navigate to the "Sign On" Tab on the new app and click on "Actions" under the Active SHA-2 certificate
1. Click "View IdP metadata". 
![](/img/howto/dash-sso/okta-view-cert.png)   
1. In that new window, Select "Save As" from the File menu to save your metadata.xml file for uploading into ngrok in a later step.  
![](/img/howto/dash-sso/okta-save-as-xml.png)

## Configure Single Sign-On (SSO) for your ngrok account

1. Log into your ngrok dashboard and navigate to the ["Settings > Account"](https://dashboard.ngrok.com/settings) section in the left navigation menu.
![](/img/howto/dash-sso/okta-ngrok-account-settings.png)
1. Select "+ New Identity Provider" button to add a new identity provider.
1. Add a helpful description, and then upload the metadata.xml file from Okta into the ngrok dashboard.
![](/img/howto/dash-sso/okta-ngrok-config-options.png)
1. In the Options section, select whether you'd like to allow users to log into the dashboard directly from their Okta dashboard
1. Determine if you'd like to enable Just in Time (JiT) provisioning or require invites in order to be added to the account. With JiT provisioning enabled, users that log into ngrok directly from their Okta dashboard will automatically be prompted to join the new account.
1. Click "Save". Clicking Save will create the integration and generate the required URLs for your Okta Application.
![](/img/howto/dash-sso/okta-ngrok-required-urls.png)

## Add the ngrok generated URLs to your Okta SAML application

1. Back in your Okta account, on the "General" tab of your Okta app, click on "Edit" under "SAML Settings"
![](/img/howto/dash-sso/okta-edit-app.png)
1. Ensure the values are correct, and click "Next"
1. Replace the values ngrok provided you. The ACS goes in "Single sign on URL" field and the EntityID in the "Audience URI (SP Entity ID)" field. Then click "Next".
![](/img/howto/dash-sso/okta-temp-urls.png)
1. Click "Finish"

Congratulations, you should now be configured property to log into your ngrok account using Okta!

By default, your ngrok account will still allow users to log in with their existing credentials as well as through Okta ("Mixed Mode"). Once you verify that everything is working properly with your integration, you can enable "SSO Enforced" in the ngrok Dashboard which will require all new users to log in through Okta for their ngrok account.



