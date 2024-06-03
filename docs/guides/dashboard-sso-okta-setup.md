# Configuring Okta Single Sign-On (SSO)

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
1. Select "This is an internal app that we have created" and click "Finish".

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
1. Click "Save". Clicking Save will create the integration and generate the required URLs for your Okta Application.
   ![](/img/howto/dash-sso/okta-ngrok-required-urls.png)

## Add the ngrok generated URLs to your Okta SAML application

1. Back in your Okta account, on the "General" tab of your Okta app, click on "Edit" under "SAML Settings"
   ![](/img/howto/dash-sso/okta-edit-app.png)
1. Click 'Next' on the 'General Settings' tab to get to the 'Configure SAML' tab.
1. Replace the values ngrok provided you. Put the ngrok 'ACS URL' value into Okta's "Single sign on URL" field. Put the ngrok 'SP Entity ID' value into Okta's "Audience URI (SP Entity ID)" field.
   ![](/img/howto/dash-sso/okta-temp-urls.png)
1. Click "Next". Click "Finish".

Congratulations, you should now be configured property to log into your ngrok account using Okta!

By default, your ngrok account will still allow users to log in with their existing credentials as well as through Okta ("Mixed Mode"). Once you verify that everything is working properly with your integration, you can enable "SSO Enforced" in the ngrok Dashboard which will require all new users to log in through Okta for their ngrok account.
